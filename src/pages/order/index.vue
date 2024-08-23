<script setup>
const state = reactive({
  list: [],
})
const { list } = toRefs(state)
</script>
<template>
  <div>订单</div>
</template>
<style lang="scss" scoped></style>
