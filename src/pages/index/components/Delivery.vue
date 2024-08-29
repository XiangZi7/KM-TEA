<script setup>
const state = reactive({
  list: [],
  selectedType: 'PickUp',
})
const { list, selectedType } = toRefs(state)
</script>
<template>
  <view class="rounded-xl bg-white bg-card w-full relative">
    <view class="py-8 px-6">
      <view
        class="flex items-center justify-center bg-white rounded-full p-1 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-gray-400/10"
      >
        <view
          class="px-4 text-sm h-[80rpx] rounded-full flex items-center whitespace-nowrap border-none gap-1"
          :class="`${selectedType == 'Delivery' ? 'text-[var(--sar-white)] bg-[var(--sar-primary)]' : 'text-[var(--sar-primary)] bg-white'}`"
          @tap="selectedType = 'Delivery'"
        >
          <span class="icon-[ri--takeaway-line] text-lg" /> Delivery
        </view>
        <view
          class="px-4 text-sm h-[80rpx] rounded-full flex items-center whitespace-nowrap border-none gap-1"
          :class="`${selectedType == 'PickUp' ? 'text-[var(--sar-white)] bg-[var(--sar-primary)]' : 'text-[var(--sar-primary)] bg-white'}`"
          @tap="selectedType = 'PickUp'"
        >
          <span class="icon-[icon-park-outline--local] text-lg" /> Pick Up
        </view>
      </view>
      <view
        v-if="selectedType"
        class="p-4 mb-6 flex justify-between items-center"
      >
        <view class="flex items-center gap-2 w-full justify-between">
          <view class="flex items-center gap-2">
            <span
              :class="
                selectedType == 'Delivery'
                  ? 'icon-[ri--takeaway-line]'
                  : 'icon-[icon-park-outline--local]'
              "
              class="text-2xl"
            />
            <view class="flex flex-col">
              <text class="text-sm text-gray-500">
                {{
                  selectedType == 'Delivery'
                    ? 'Delivery to your address'
                    : 'Pick up your order at'
                }}
              </text>
              <text class="font-medium">
                {{ selectedType == 'Delivery' ? 'Your Address' : 'Marapanas' }}
              </text>
            </view>
          </view>

          <view>
            <sar-button round>
              <span class="icon-[bx--edit]" />
            </sar-button>
          </view>
        </view>
      </view>
      <sar-button theme="danger"> Order Now </sar-button>
    </view>
  </view>
</template>
