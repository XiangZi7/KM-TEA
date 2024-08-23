<template>
  <div class="relative">
    <div class="flex border-b border-gray-100/70">
      <div
        class="cursor-pointer py-2 px-2 text-sm text-gray-800 font-medium"
        v-for="(tab, index) in tabs"
        :key="index"
        :id="`tabs-${index}`"
        :class="[
          'transition-colors duration-300',
          index === selectedIndex ? 'font-bold text-blue-900' : 'text-gray-600',
        ]"
        @click="selectTab(index)"
        @mouseover="hoverIndex = index"
        @mouseleave="hoverIndex = null"
      >
        {{ tab.title }}
      </div>
      <div
        class="absolute bottom-0 h-0.5 bg-[var(--sar-primary)] transition-all duration-300"
        :style="{ left: borderLeft + 'px', width: borderWidth + 'px' }"
      />
    </div>
  </div>
</template>

<script setup>
const instance = getCurrentInstance()

const query = uni.createSelectorQuery().in(instance.proxy)
const props = defineProps({
  tabs: {
    type: Array,
    required: true,
  },
})
const selectedIndex = defineModel() // 当前选中的tab
const borderWidth = ref(0) // 当前选中tab的宽度
const borderLeft = ref(0) // 当前选中tab的左偏移量

const updateBorder = () => {
  query
    .select(`#tabs-${selectedIndex.value}`)
    .boundingClientRect((data) => {
      if (data) {
        borderWidth.value = data.width
        borderLeft.value = data.left - 12 // 获取左边距
      }
    })
    .exec()
}

const selectTab = (index) => {
  selectedIndex.value = index
  updateBorder()
}

onLoad(() => {
  updateBorder() // 在挂载后初始化选中标签的边框位置
})
</script>
