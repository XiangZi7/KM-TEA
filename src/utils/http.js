const baseURL = import.meta.env.VITE_APP_BASE_API
// 添加拦截器
const httpInterceptor = {
  invoke(options) {
    if (!options.url.startsWith('http')) {
      options.url = baseURL + options.url
    }
    options.timeout = 6000
    options.header = { ...options.header, 'source-client': 'app' }
    const token = uni.getStorageSync('token')
    if (token) {
      options.header.Authorization = token
    }
  },
}

uni.addInterceptor('request', httpInterceptor)

// resolve 和 reject 不返回任何值，但通知 promise 更改状态
const handleResponse = (res, resolve, reject) => {
  if (isSuccessStatusCode(res.statusCode)) {
    resolve(res.data)
  } else if (res.statusCode === 401) {
    clearUserInfo()
    // uni.navigateTo({ url: '/pages/login/index' })
    reject(res)
  } else {
    showErrorToast(res.data)
    reject(res)
  }
}

const handleError = (err, reject) => {
  uni.showToast({
    icon: 'none',
    title: '网络可能开小差了~',
  })
  reject(err)
}

const isSuccessStatusCode = (statusCode) => {
  return statusCode >= 200 && statusCode < 300
}

const showErrorToast = (data) => {
  uni.showToast({
    icon: 'none',
    title: data.message || '请求错误',
  })
}

export const httpGet = (url, params) => {
  return new Promise((resolve, reject) => {
    uni.request({
      url,
      method: 'GET',
      params,
      success: (res) => {
        handleResponse(res, resolve, reject)
      },
      fail: (err) => {
        handleError(err, reject)
      },
    })
  })
}

export const httpPost = (url, data) => {
  return new Promise((resolve, reject) => {
    uni.request({
      url,
      method: 'POST',
      data,
      success: (res) => {
        handleResponse(res, resolve, reject)
      },
      fail: (err) => {
        handleError(err, reject)
      },
    })
  })
}
