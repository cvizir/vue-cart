import request from '@/api/index'
import { toFormData } from '@/api/formData'

export function createProject(data) {
  return request({
    url: '/project_save.php',
    method: 'post',
    // 呼叫轉換工具，將複雜物件轉為 FormData
    data: toFormData(data),
    // 重要：上傳大量資料時建議延長 timeout
    timeout: 60000,
  })
}
