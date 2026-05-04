import request from '@/api/index'
import { toFormData } from '@/api/formData'

export function createProject(data) {
  return request({
    url: '/fileupload.php',
    method: 'post',
    // 呼叫轉換工具，將複雜物件轉為 FormData
    headers: {
      // Optional: Axios generally detects this and sets the boundary automatically
      'Content-Type': 'multipart/form-data',
    },
    data: toFormData(data),
    // 重要：上傳大量資料時建議延長 timeout
    timeout: 60000,
  })
}
