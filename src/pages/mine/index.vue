<script setup lang="ts">
const state = reactive({
  list: [],
})
const { list } = toRefs(state)

// 判断是否是微信小程序
const topStyle = computed(() => {
  let padding = 24
  // #ifdef MP-WEIXIN
  padding = uni.getMenuButtonBoundingClientRect().top
  // #endif
  // #ifndef MP-WEIXIN
  padding = 24
  // #endif
  return padding
})
</script>
<template>
  <div class="flex flex-col h-full">
    <header
      class="bg-[var(--sar-primary)] text-white p-4 flex justify-between items-center"
      :style="{ paddingTop: topStyle + 'px' }"
    >
      <h1 class="text-xl font-bold">我的</h1>
      <div class="flex space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-bell w-6 h-6"
        >
          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path></svg
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-settings w-6 h-6"
        >
          <path
            d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
          ></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
      </div>
    </header>
    <div class="p-4 bg-[var(--sar-primary)] text-white">
      <div class="flex items-center space-x-4">
        <div
          class="w-16 h-16 bg-white rounded-full flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-user w-8 h-8 text-[#00704A]"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div>
          <h2 class="font-bold text-lg">张三</h2>
          <p class="text-sm">会员号: 1234 5678 9012</p>
        </div>
      </div>
      <div class="mt-4 flex justify-between items-center">
        <div>
          <p class="text-sm">当前等级</p>
          <p class="font-bold">绿星会员</p>
        </div>
        <div class="text-right">
          <p class="text-sm">星星数量</p>
          <p class="font-bold">
            86
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-star w-4 h-4 inline"
            >
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
              ></polygon>
            </svg>
          </p>
        </div>
      </div>
      <div
        class="relative h-2 w-full overflow-hidden rounded-full bg-gray-200/50 mt-2"
      >
        <div
          class="h-full w-full flex-1 bg-primary transition-all"
          style="transform: translateX(-57%)"
        ></div>
      </div>
      <p class="text-xs mt-1">距离下一等级还需14颗星</p>
    </div>
    <div class="flex-grow p-4 space-y-4">
      <div class="bg-white rounded-lg p-4">
        <h3 class="font-bold mb-2">我的星巴克卡</h3>
        <div
          class="bg-[var(--sar-primary)] text-white rounded-lg p-4 flex justify-between items-center"
        >
          <div>
            <p class="font-bold">¥ 150.00</p>
            <p class="text-sm">卡内余额</p>
          </div>
          <span class="icon-[solar--card-2-broken] text-2xl" />
        </div>
        <view class="mt-2">
          <sar-button> 充值 </sar-button>
        </view>
      </div>
      <div class="bg-white rounded-lg p-4">
        <h3 class="font-bold mb-2">我的优惠</h3>
        <div class="space-y-2">
          <div class="flex justify-between items-center">
            <div class="flex items-center gap-1">
              <span
                class="icon-[mingcute--coupon-line] text-xl text-[var(--sar-primary)]"
              />
              <span>买一送一券</span>
            </div>
            <span
              class="icon-[material-symbols--chevron-forward] text-2xl"
            ></span>
          </div>
          <div class="flex justify-between items-center">
            <div class="flex items-center gap-1">
              <span
                class="icon-[tabler--gift] text-xl text-[var(--sar-primary)]"
              />
              <span>生日优惠券</span>
            </div>
            <span
              class="icon-[material-symbols--chevron-forward] text-2xl"
            ></span>
          </div>
        </div>
      </div>
      <div class="bg-white rounded-lg p-4">
        <h3 class="font-bold mb-2">常用功能</h3>
        <div class="grid grid-cols-4 gap-4 text-center">
          <div>
            <div
              class="w-12 h-12 bg-[#f3f3f3] rounded-full flex items-center justify-center mx-auto"
            >
              <span
                class="icon-[icon-park-outline--local] text-2xl text-[var(--sar-primary)]"
              />
            </div>
            <p class="text-xs mt-1">门店</p>
          </div>
          <div>
            <div
              class="w-12 h-12 bg-[#f3f3f3] rounded-full flex items-center justify-center mx-auto"
            >
              <span
                class="icon-[ph--star-bold] text-2xl text-[var(--sar-primary)]"
              ></span>
            </div>
            <p class="text-xs mt-1">星礼包</p>
          </div>
          <div>
            <div
              class="w-12 h-12 bg-[#f3f3f3] rounded-full flex items-center justify-center mx-auto"
            >
              <span
                class="icon-[tabler--gift] text-2xl text-[var(--sar-primary)]"
              />
            </div>
            <p class="text-xs mt-1">礼品卡</p>
          </div>
          <div>
            <div
              class="w-12 h-12 bg-[#f3f3f3] rounded-full flex items-center justify-center mx-auto"
            >
              <span
                class="icon-[solar--card-2-broken] text-2xl text-[var(--sar-primary)]"
              />
            </div>
            <p class="text-xs mt-1">账单</p>
          </div>
        </div>
      </div>
    </div>
    <NavigationBar />
  </div>
</template>
