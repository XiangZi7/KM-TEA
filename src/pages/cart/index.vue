<script setup>
const state = reactive({
  list: [],
  search: {
    searchBarTop: 0,
    searchBarHeight: 0,
  },
})
const { list, search } = toRefs(state)

onLoad(() => {
  let menuButtonInfo = uni.getMenuButtonBoundingClientRect()
  state.search.searchBarTop = menuButtonInfo.top
  state.search.searchBarHeight = menuButtonInfo.height
})
</script>
<template>
  <div class="flex flex-col h-full">
    <header
      class="bg-[var(--sar-primary)] text-white p-4 text-center"
      :style="{ paddingTop: search.searchBarTop + 'px' }"
    >
      <h1 class="text-xl font-bold">购物车</h1>
    </header>
    <div
      dir="ltr"
      class="relative overflow-hidden flex-grow"
      style="
        position: relative;
        --radix-scroll-area-corner-width: 0px;
        --radix-scroll-area-corner-height: 0px;
      "
    >
      <div
        class="h-full w-full rounded-[inherit]"
        style="overflow: hidden scroll"
      >
        <div style="min-width: 100%; display: table">
          <div class="p-4 space-y-4">
            <div class="bg-white rounded-lg p-4 flex items-center space-x-4">
              <div
                class="w-16 h-16 bg-[#f3f3f3] rounded-full flex items-center justify-center overflow-hidden"
              >
                <image src="@/static/ruix/4.webp" class="w-full h-full" />
              </div>
              <div class="flex-grow">
                <h2 class="font-semibold">拿铁</h2>
                <p class="text-sm text-gray-500">中杯 / 热 / 标准</p>
                <div class="flex items-center mt-2">
                  <button
                    class="bg-white ml-0 mr-0 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors border h-6 w-6"
                  >
                    -
                  </button>
                  <span class="mx-2">1</span>
                  <button
                    class="bg-white ml-0 mr-0 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors border h-6 w-6"
                  >
                    +
                  </button>
                </div>
              </div>
              <div class="text-right">
                <p class="font-semibold">¥30</p>
                <view class="text-[var(--sar-primary)] text-sm">定制</view>
              </div>
            </div>
            <div class="bg-white rounded-lg p-4 flex items-center space-x-4">
              <div
                class="w-16 h-16 bg-[#f3f3f3] rounded-full flex items-center justify-center overflow-hidden"
              >
                <image src="@/static/ruix/4.webp" class="w-full h-full" />
              </div>
              <div class="flex-grow">
                <h2 class="font-semibold">燕麦拿铁</h2>
                <p class="text-sm text-gray-500">大杯 / 冰 / 少糖</p>
                <div class="flex items-center mt-2">
                  <button
                    class="bg-white ml-0 mr-0 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors border h-6 w-6"
                  >
                    -
                  </button>
                  <span class="mx-2">1</span>
                  <button
                    class="bg-white ml-0 mr-0 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors border h-6 w-6"
                  >
                    +
                  </button>
                </div>
              </div>
              <div class="text-right">
                <p class="font-semibold">¥36</p>
                <view class="text-[var(--sar-primary)] text-sm">定制</view>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white p-4 border-t border-gray-200">
      <div class="flex justify-between items-center mb-4 text-gray-600">
        <span>星礼卡/优惠券</span>
        <span class="icon-[material-symbols--chevron-forward] text-2xl"></span>
      </div>
      <div class="flex justify-between items-center">
        <span class="font-semibold">合计</span
        ><span class="font-bold text-xl">¥66</span>
      </div>
      <sar-button theme="primary"> 去结算 </sar-button>
    </div>
    <NavigationBar />
  </div>
</template>
