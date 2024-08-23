<script setup>
import Tabs from './components/tabs.vue'
import { mainData } from './data'
const state = reactive({
  search: {
    searchBarTop: 0,
    searchBarHeight: 0,
  },
  Screenheight: 0,
  selectedIndex: 0,
  TabsList: [
    { title: '经典菜单' },
    { title: '每周9.9' },
    { title: '下午茶9.9起' },
  ],
  currentId: 'milk-tea',
})
const { search, TabsList, selectedIndex, currentId, Screenheight } =
  toRefs(state)

onLoad(() => {
  let menuButtonInfo = uni.getMenuButtonBoundingClientRect()
  let stsyem = uni.getSystemInfoSync()
  // 屏幕宽度 +胶囊TOP+胶囊Height + 底部导航栏的高度
  state.Screenheight =
    stsyem.safeArea.height - (menuButtonInfo.top + menuButtonInfo.height + 50)
  state.search.searchBarTop = menuButtonInfo.top
  state.search.searchBarHeight = menuButtonInfo.height
})

const showOption = () => {
  uni.navigateTo({
    url: '/pages/optional/index',
  })
}

const scrollToCategory = (id) => {
  state.currentId = id
}
</script>
<template>
  <view class="w-full h-full box-border overflow-hidden">
    <view
      class="px-3 flex flex-col gap-2 bg-white rounded-br-lg rounded-bl-lg"
      :style="{ paddingTop: search.searchBarTop + 'px' }"
    >
      <!-- 头部 -->
      <view
        :style="{ height: search.searchBarHeight + 'px' }"
        class="flex items-center py-2 rounded-lg"
      >
        <view class="flex items-center bg-gray-200 rounded-full">
          <span
            class="text-xs bg-[var(--sar-primary)] text-white rounded-full px-2 py-1"
            >自提</span
          >
          <span class="text-xs text-gray-600 px-2 py-1">外送</span>
        </view>
        <view class="flex-1 mx-2">
          <sar-input
            root-class="!w-40 !rounded-xl h-7"
            placeholder="真奶好茶 轻负担"
          >
            <template #prepend>
              <sar-icon name="search" class="text-gray-500" />
            </template>
          </sar-input>
        </view>
      </view>

      <!-- 地址 -->
      <view class="flex items-center justify-between px-2">
        <view class="text-base font-semibold flex items-center gap-1">
          <span
            class="icon-[icon-park-outline--local] text-xl bg-[var(--sar-primary)]"
          />
          <text> 双城国际 </text>
        </view>
        <view class="text-xs text-gray-600">拼单</view>
      </view>

      <!-- tabs -->
      <Tabs v-model="selectedIndex" :tabs="TabsList" />
      <!-- tabs -->
    </view>

    <!-- main -->
    <view
      class="flex flex-1 overflow-x-hidden box-border"
      :style="{ height: `calc(${Screenheight}px` }"
    >
      <!-- 侧边导航栏 -->
      <nav class="w-1/4 overflow-x-hidden bg-white">
        <ul>
          <li
            v-for="(item, index) in mainData"
            :key="index"
            @click="scrollToCategory(item.id)"
            class="cursor-pointer text-sm p-2 transform duration-300 text-center"
            :class="{
              'border-[var(--sar-primary)] rounded-r-lg border-l-4 bg-gradient-to-r from-green-100/50 to-white':
                currentId == item.id,
            }"
          >
            {{ item.title }}
          </li>
        </ul>
      </nav>

      <!-- 内容区域 -->
      <scroll-view
        class="w-3/4 flex-1 h-full overflow-x-hidden rounded-lg bg-white"
        scroll-y
        :scroll-into-view="currentId"
        scroll-with-animation
      >
        <view class="py-2 h-full w-full">
          <div
            v-for="item in mainData"
            :key="item.id"
            :id="item.id"
            class="p-3"
          >
            <h2 class="text-sm font-bold mb-4">{{ item.title }}</h2>
            <ul class="list-disc">
              <li
                v-for="(child, index2) in item.children"
                :key="index2"
                class="mb-4"
              >
                <div class="flex items-center gap-2">
                  <div
                    class="w-16 h-16 bg-[#f3f3f3] rounded-full flex items-center justify-center overflow-hidden"
                  >
                    <image :src="child.imageUrl" class="w-full h-full" />
                  </div>
                  <view class="flex-1">
                    <h3 class="font-semibold text-sm">{{ child.title }}</h3>
                    <text class="text-sm text-[var(--sar-primary)]"
                      >￥{{ child.price.toFixed(2) }}</text
                    >
                    <view class="flex justify-between items-center">
                      <view class="flex flex-col">
                        <text class="text-xs text-gray-500">{{
                          child.lactoseFree
                        }}</text>
                      </view>
                      <view>
                        <span
                          class="icon-[ph--plus-circle-fill] text-[var(--sar-danger)] text-2xl"
                          @tap="showOption"
                        ></span>
                      </view>
                    </view>
                  </view>
                </div>
              </li>
            </ul>
          </div>
        </view>
      </scroll-view>
    </view>
    <NavigationBar />
  </view>
</template>
