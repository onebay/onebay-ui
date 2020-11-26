import { ref, onMounted, Ref, onUnmounted } from 'vue'

const useScrollTop = () => {
  const scrollTop = ref(document.documentElement.scrollTop || document.body.scrollTop)
  const handleScroll = () => {
    scrollTop.value = document.documentElement.scrollTop || document.body.scrollTop
  }
  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
  return scrollTop
}
export default useScrollTop
