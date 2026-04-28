<template>
  <div>
    <ul>
      <li v-for="item in dataList" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import request from '../../api/index'

const dataList = ref([])

const fetchData = async () => {
  try {
    // 使用封裝好的實例發送請求
    const res = await request({
      url: '/index.php',
      method: 'get',
    })
    dataList.value = res
  } catch (error) {
    console.error('獲取資料失敗')
  }
}

onMounted(() => {
  fetchData()
})
</script>
