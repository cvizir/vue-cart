<template>
  <div>
    <ul>
      <li v-for="item in dataList" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import request from '@/api/index'
import axios from 'axios'

const dataList = ref([])

const fetchData = async () => {
  try {
    // 使用封裝好的實例發送請求
    const res = await request({
      url: '/index.php',
      method: 'get',
    })
    dataList.value = res
  } catch (err) {
    console.error('獲取資料失敗', err)
  }
}
const statusMessage = ref('')
const received_data = ref({})

const submitData = async () => {
  try {
    const response = await axios.post('http://www.winnie.com.tw/api/member_login.php', {
      account: 'cvizir',
      password: '12345',
    })

    // 假設後端回傳 { "status": "success", "message": "資料已接收" }
    received_data.value = response.data.received_data
    statusMessage.value = response.data.message
    console.log(received_data.value)
  } catch (error) {
    console.error('發送失敗:', error)
    statusMessage.value = '連線錯誤'
  }
}

onMounted(() => {
  fetchData()
  submitData()
})
</script>
