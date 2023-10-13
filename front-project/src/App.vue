<template>
  <div class="box">
    <el-button type="primary" size="large" :icon="Delete">删除</el-button>
    <el-pagination
      :page-sizes="[100, 200, 300, 400]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    />
    <svg>
      <use xlink:href="#icon-sky" fill="yellow"></use>
    </svg>
    <svg-icon name="sky" color="red" height="32px" width="32px"></svg-icon>
  </div>
</template>

<script setup lang="ts">
import { Delete } from '@element-plus/icons-vue'
</script>

<style scoped lang="scss">

</style>
