<template>
  <div class="child-box">
    <h4>孫子組件 (最內層)</h4>
    <p>
      我直接從爺爺那邊拿到的主題是：<strong>{{ theme }}</strong>
    </p>

    <!-- 點擊直接觸發爺爺那邊的方法 -->
    <button @click="toggleTheme">切換全域主題</button>
  </div>
</template>

<script setup>
import { inject } from 'vue'

// 💡 關鍵： inject( '當初爺爺設定的鑰匙', '預設值(選填)' )
// 如果找不到該鑰匙，就會使用第二個參數作為預設值，避免程式噴錯
const { theme, toggleTheme } = inject('globalTheme', {
  theme: 'light',
  toggleTheme: () => {},
})
</script>

<style scoped>
.child-box {
  padding: 15px;
  border: 1px solid #42b883;
  background: rgba(66, 184, 131, 0.1);
}
button {
  padding: 8px 12px;
  cursor: pointer;
}
</style>
