<script setup lang="ts">
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
</script>
<template>
  <view class="transition-opacity duration-150 text-foreground">
    <view class="flex flex-col min-h-screen">
      <header
        class="sticky top-0 z-50 bg-white"
        :style="{ paddingTop: search.searchBarTop + 'px' }"
      >
        <view class="flex items-center justify-between px-4 py-2">
          <view class="flex items-center gap-2">
            <span
              class="relative flex shrink-0 overflow-hidden rounded-full w-10 h-10"
            >
              <img
                class="aspect-square h-full w-full"
                src="https://avatars.githubusercontent.com/u/67356803?v=4"
              />
            </span>
            <view>
              <text class="block font-semibold text-sm">早安, YXCR</text>
              <text class="text-xs text-muted-foreground">阳光明媚的一天</text>
            </view>
          </view>
        </view>
      </header>
      <main class="flex-1 overflow-auto">
        <view class="px-4 py-6 space-y-10">
          <view class="relative rounded-lg overflow-hidden">
            <swiper
              :current="current"
              @change="current = $event.detail.current"
              autoplay
              :interval="3000"
            >
              <swiper-item
                v-for="item in list"
                :key="item.url"
                class="rounded-lg"
              >
                <image class="aspect-square h-full w-full" :src="item.url" />
              </swiper-item>
            </swiper>
            <sar-swiper-dot
              :current="current"
              :type="type"
              :list="list"
              field="title"
            />
          </view>
          <!-- Delivery -->
          <div class="rounded-xl bg-white bg-card w-full relative">
            <div class="py-8 px-6">
              <div
                class="flex items-center justify-center bg-white rounded-full p-1 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-gray-400/10"
              >
                <sar-button round type="text"> Delivery</sar-button>
                <sar-button round theme="primary"> Pick Up </sar-button>
              </div>
              <div class="p-4 mb-6 flex justify-between items-center">
                <div class="flex items-center gap-2 justify-between w-full">
                  <span class="icon-[icon-park-outline--local] text-2xl" />
                  <view class="flex flex-col">
                    <p class="text-sm text-gray-500">Pick up your order at</p>
                    <p class="font-medium">Marapanas</p>
                  </view>
                  <view>
                    <sar-button round>
                      <span class="icon-[bx--edit]" />
                    </sar-button>
                  </view>
                </div>
                <!-- 编辑图标 -->
              </div>
              <sar-button theme="danger"> Order Now </sar-button>
            </div>
          </div>
          <view class="grid grid-cols-4 gap-2">
            <view
              class="bg-white whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-colors px-4 py-2 flex flex-col items-center justify-center h-20 space-y-1"
            >
              <span class="icon-[ci--coffee] text-4xl text-[#FF456E]"></span>
              <span class="text-xs">点餐</span></view
            ><view
              class="bg-white whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-colors px-4 py-2 flex flex-col items-center justify-center h-20 space-y-1"
            >
              <span
                class="icon-[icon-park-outline--local] text-4xl text-[#6BDBBF]"
              ></span>
              <span class="text-xs">门店</span></view
            ><view
              class="bg-white whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-colors px-4 py-2 flex flex-col items-center justify-center h-20 space-y-1"
            >
              <span class="icon-[tabler--gift] text-4xl text-[#FAC9C0]"></span>
              <span class="text-xs">礼品卡</span></view
            ><view
              class="bg-white whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-colors px-4 py-2 flex flex-col items-center justify-center h-20 space-y-1"
            >
              <span
                class="icon-[mingcute--bank-card-line] text-4xl text-[#FF456E]"
              ></span
              ><span class="text-xs">优惠券</span>
            </view>
          </view>
        </view>
      </main>
    </view>
    <NavigationBar />
  </view>
</template>
