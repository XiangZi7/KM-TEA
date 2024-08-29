<script setup>
import { data } from './data'
const state = reactive({
  currentIndex: uni.getStorageSync('currentIndex'),
  bottomHeight: 0,
})
const { currentIndex, bottomHeight } = toRefs(state)

const handleRouter = (item, index) => {
  if (index == state.currentIndex) return
  uni.switchTab({
    url: item.router,
  })
  uni.setStorageSync('currentIndex', index)
}

onLoad(() => {
  // 获取系统信息
  const systemInfo = uni.getSystemInfoSync()
  state.bottomHeight = systemInfo.screenHeight - systemInfo.safeArea.bottom
})
</script>
<template>
  <view class="h-20">
    <view
      class="fixed bottom-0 left-0 right-0 bg-white rounded-2xl shadow-lg h-20 z-50"
    >
      <div
        class="flex justify-between items-center px-6 py-2"
        :style="{ paddingBottom: bottomHeight + 'px' }"
      >
        <view
          v-for="(item, index) in data"
          :key="index"
          class="flex items-center p-2 gap-1 border-none rounded-2xl"
          :class="
            currentIndex == index
              ? 'bg-[#F0F3FC] text-[--sar-danger]'
              : 'text-[#E6EAF7]'
          "
          @tap="handleRouter(item, index)"
        >
          <view class="flex items-center relative">
            <span :class="`${item.icon} text-2xl `" />
            <span
              v-if="item.quantity && currentIndex !== index"
              class="absolute top-[-10px] w-2.5 h-2.5 right-[-8px] flex items-center justify-center text-white text-xs rounded-full bg-[var(--sar-danger)] p-1"
              >{{ item.quantity }}</span
            >
          </view>
          <span v-if="currentIndex == index" class="text-xs font-medium mt-1">{{
            item.title
          }}</span>
        </view>
      </div>
    </view>
  </view>
</template>
