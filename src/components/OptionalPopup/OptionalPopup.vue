<script setup>
const visible1 = defineModel()
</script>
<template>
  <sar-popout title="标题" v-model:visible="visible1">
    <div class="grid gap-4 py-4">
      <div class="flex items-center gap-4">
        <img
          src="https://generated.vusercontent.net/placeholder.svg"
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
    </div>
  </sar-popout>
</template>
