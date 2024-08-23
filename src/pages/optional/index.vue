<script setup>
const state = reactive({
  list: [
    {
      url: 'https://c-ssl.duitang.com/uploads/blog/202207/22/20220722071856_e4438.jpg',
    },
    {
      url: 'https://c-ssl.duitang.com/uploads/blog/202207/22/20220722071856_46fb3.jpg',
    },
    {
      url: 'https://c-ssl.duitang.com/uploads/blog/202207/22/20220722071856_a6a21.jpg',
    },
    {
      url: 'https://c-ssl.duitang.com/uploads/blog/202207/22/20220722071856_5d3a3.jpg',
    },
  ],
  current: 0,
  type: 'dot',
  model: {
    num: 1,
  },
  search: {
    searchBarTop: 0,
    searchBarHeight: 0,
  },
})
const { list, current, type, model, search } = toRefs(state)
onLoad(() => {
  let menuButtonInfo = uni.getMenuButtonBoundingClientRect()
  state.search.searchBarTop = menuButtonInfo.top
  state.search.searchBarHeight = menuButtonInfo.height
})
const CancelNC = () => {
  uni.switchTab({
    url: '/pages/menu/index',
  })
}
</script>
<template>
  <view class="h-full bg-white">
    <view class="relative z-0 h-56">
      <swiper
        class="h-full"
        :current="current"
        @change="current = $event.detail.current"
        autoplay
        :interval="3000"
      >
        <swiper-item v-for="item in list" :key="item.url" class="rounded-lg">
          <image class="aspect-square h-full w-full" :src="item.url" />
        </swiper-item>
      </swiper>
      <sar-swiper-dot
        :current="current"
        :type="type"
        :list="list"
        field="title"
      />
      <view
        class="absolute left-5 top-0 z-0"
        :style="{ paddingTop: search.searchBarTop + 'px' }"
      >
        <view
          class="flex items-center p-1 rounded-full bg-white border border-gray-200/50"
          @tap="CancelNC"
        >
          <span class="icon-[eva--arrow-ios-back-fill] text-2xl"></span>
        </view>
      </view>
    </view>
    <div class="flex flex-col flex-1 gap-4 mt-[-20px] z-50 bg-white">
      <div class="flex items-center gap-4 p-4 z-50 bg-white rounded-t-xl">
        <img
          src="../../static/ruix/1.webp"
          alt="Latte"
          class="w-24 h-24 object-cover rounded"
          width="100"
          height="100"
          style="aspect-ratio: 100 / 100; object-fit: cover"
        />
        <div>
          <h3 class="font-semibold text-lg">拿铁咖啡</h3>
          <p class="text-sm text-muted-foreground">香浓浓郁,丝滑顺口</p>
          <p class="font-semibold mt-1">¥32.00</p>
        </div>
      </div>
      <div class="space-y-2 px-4">
        <div class="flex justify-between items-center mb-4">
          <span class="font-medium">数量</span>
          <div class="flex items-center gap-3">
            <view
              class="w-7 h-7 rounded-xl bg-[var(--sar-primary)] text-white flex items-center justify-center"
            >
              <span> - </span>
            </view>
            <span class="font-medium">2</span>
            <view
              class="w-7 h-7 rounded-xl bg-[var(--sar-primary)] text-white flex items-center justify-center"
            >
              <span> + </span>
            </view>
          </div>
        </div>
      </div>
      <div class="space-y-2 px-4">
        <label class="text-sm font-medium leading-none">尺寸</label>
        <sar-radio-group
          v-model="value"
          root-class="text-sm mt-2"
          direction="horizontal"
        >
          <sar-radio value="option1">小杯</sar-radio>
          <sar-radio value="option2">中杯</sar-radio>
          <sar-radio value="option2">大杯</sar-radio>
        </sar-radio-group>
      </div>
      <div class="space-y-2 px-4">
        <label class="text-sm font-medium leading-none">温度</label>
        <sar-radio-group
          v-model="value"
          root-class="text-sm mt-2"
          direction="horizontal"
        >
          <sar-radio value="option1">热</sar-radio>
          <sar-radio value="option2">冰</sar-radio>
        </sar-radio-group>
      </div>
      <div class="space-y-2 px-4">
        <label class="text-sm font-medium leading-none">糖分</label>
        <sar-radio-group
          v-model="value"
          root-class="text-sm mt-2"
          direction="horizontal"
        >
          <sar-radio value="option1">无糖</sar-radio>
          <sar-radio value="option2">少糖</sar-radio>
          <sar-radio value="option2">正常</sar-radio>
          <sar-radio value="option2">多糖</sar-radio>
        </sar-radio-group>
      </div>
      <div class="space-y-2 px-4">
        <label class="text-sm font-medium leading-none">全脂牛奶</label>
        <sar-radio-group
          v-model="value"
          root-class="text-sm mt-2"
          direction="horizontal"
        >
          <sar-radio value="option1">无糖</sar-radio>
          <sar-radio value="option2">少糖</sar-radio>
          <sar-radio value="option2">正常</sar-radio>
          <sar-radio value="option2">多糖</sar-radio>
        </sar-radio-group>
      </div>

      <view class="fixed bottom-0 left-0 w-full rounded-t-2xl bg-[#F0F3FC]">
        <view class="flex gap-2 p-6 justify-between">
          <div class="flex flex-col justify-between items-center">
            <span class="font-medium">Total</span>
            <span class="font-semibold text-teal-600">$15.8</span>
          </div>
          <view class="w-28">
            <sar-button root-class="!rounded-xl" theme="danger"
              >添加购物车</sar-button
            >
          </view>
        </view>
      </view>
    </div>
  </view>
</template>
