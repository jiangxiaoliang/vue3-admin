import type { App } from 'vue'
import SvgIcon from './SvgIcon/index.vue'

const allGlobalComponent = { 'SvgIcon': SvgIcon }

// 对外暴露插件对象
export default {
    install(app: App) {
        // Object.keys(allGlobalComponent).forEach(key => {
        //     // @ts-ignore
        //     app.component(key, allGlobalComponent[key])
        // })
        Object.entries(allGlobalComponent).forEach(([key, value]) => {
            app.component(key, value)
        })
    }
}