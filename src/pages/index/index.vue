<script setup lang="ts">
import { data } from './data'
import Delivery from './components/Delivery.vue'
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
const { list, current, type, search } = toRefs(state)

onLoad(() => {
  let menuButtonInfo = uni.getMenuButtonBoundingClientRect()
  state.search.searchBarTop = menuButtonInfo.top
  state.search.searchBarHeight = menuButtonInfo.height
})
</script>
<template>
  <view class="transition-opacity duration-150 text-foreground">
    <view class="flex flex-col h-full">
      <view
        class="sticky top-0 z-50 bg-white"
        :style="{ paddingTop: search.searchBarTop + 'px' }"
      >
        <view class="flex items-center justify-between px-4 py-2">
          <view class="flex items-center gap-2">
            <view
              class="relative flex shrink-0 overflow-hidden rounded-full w-10 h-10"
            >
              <img
                class="aspect-square h-full w-full"
                src="https://avatars.githubusercontent.com/u/67356803?v=4"
              />
            </view>
            <view>
              <text class="block font-semibold text-sm">早安, YXCR</text>
              <text class="text-xs text-muted-foreground">阳光明媚的一天</text>
            </view>
          </view>
        </view>
      </view>
      <view class="flex-1">
        <view class="px-4 py-6 flex flex-col gap-10">
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
            <sar-swiper-dot :current="current" :type="type" :list="list" />
          </view>
          <!-- Delivery -->
          <Delivery />
          <view class="grid grid-cols-4 gap-2">
            <view
              v-for="item in data"
              :key="item.title"
              class="bg-white whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-colors px-4 py-2 flex flex-col items-center justify-center h-20 space-y-1"
            >
              <span :class="`${item.icon} ${item.color} text-4xl`" />
              <span class="text-xs">{{ item.title }}</span>
            </view>
          </view>
        </view>
      </view>
    </view>
    <NavigationBar />
  </view>
</template>
