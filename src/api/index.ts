import axios from 'axios'

// 1. 建立實例
const service = axios.create({
  baseURL: 'https://www.winnie.com.tw', // API 的基礎地址
  timeout: 5000, // 請求超過 5 秒則判定失敗
  headers: { 'Content-Type': 'application/json' },
})

// 2. 請求攔截器 (Request Interceptor)
service.interceptors.request.use(
  (config) => {
    // 在送出請求前，可以在這裡加入 Token
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// 3. 回應攔截器 (Response Interceptor)
service.interceptors.response.use(
  (response) => {
    // 這裡可以根據後端自定義的狀態碼進行統一處理
    return response.data
  },
  (error) => {
    // 統一處理錯誤 (例如：401 跳轉登入、500 顯示伺服器錯誤)
    console.error('API Error:', error.response)
    return Promise.reject(error)
  },
)

export default service
