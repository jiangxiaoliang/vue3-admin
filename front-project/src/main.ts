import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import App from '@/App.vue'
// svg插件需要配置代码
import 'virtual:svg-icons-register'
import globalComponent from '@/components/index'

console.log(import.meta.env)

const app = createApp(App)

app.use(ElementPlus, {
    locale: zhCn
})
app.use(globalComponent)
app.mount('#app')
