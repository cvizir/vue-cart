<template>
  <form @submit.prevent="submitForm">
    <input v-model="form.title" type="text" placeholder="標題" />
    <textarea v-model="form.description"></textarea>

    <input type="file" multiple @change="handleFileChange" />

    <button type="submit">提交專案</button>
  </form>
</template>

<script setup>
import { reactive } from 'vue'
import { createProject } from '@/api/project'

const form = reactive({
  title: '新專案名稱',
  tags: ['Vue3', 'PHP', 'Axios'], // 多個文字資料
  description: '這是專案描述...',
  images: [], // 這裡將存放多個 File 物件
})

const handleFileChange = (event) => {
  // 將選取的多個檔案存入陣列
  console.log(event.target.files)
  form.images = Array.from(event.target.files)
}

const submitForm = async () => {
  try {
    // 直接傳送整個 reactive 物件，API 層會自動處理轉碼
    const res = await createProject(form)
    alert('儲存成功！')
  } catch (err) {
    console.error('儲存失敗', err)
  }
}
</script>
