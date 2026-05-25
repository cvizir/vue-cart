import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// 慣例命名：useXxxxStore，第一個參數 'counter' 是這個 Store 的獨一無二 ID
export const useCounterStore = defineStore('counter', () => {
  // 1. State (狀態資料)
  const count = ref(0)
  const isLoading = ref(false)

  // 2. Getters (計算屬性)
  const doubleCount = computed(() => count.value * 2)

  // 3. Actions (方法/動作)
  function increment() {
    count.value++
  }

  function decrement() {
    if (count.value > 0) count.value--
  }

  // 模擬從後端 API 異步讀取資料
  async function fetchInitialCount() {
    isLoading.value = true
    try {
      // 模擬 API 延遲
      await new Promise((resolve) => setTimeout(resolve, 1000))
      count.value = 99 // 假設後端回傳 99
    } catch (error) {
      console.error('讀取失敗', error)
    } finally {
      isLoading.value = false
    }
  }

  // 記得要把組件需要用到的變數和方法 return 出去
  return {
    count,
    isLoading,
    doubleCount,
    increment,
    decrement,
    fetchInitialCount,
  }
})
