import { computed } from 'vue'
import { PC_DEVIC_WIDTH } from '@/components/iindex'
import { useWindowSize } from '@vueuse/core'
const { width } = useWindowSize()
// 判断当前是否为移动设备，依据是屏幕宽度是否大于一个指定宽度（1280）
export const isMobileTerminal = computed(() => {
  return width.value < PC_DEVIC_WIDTH
})
