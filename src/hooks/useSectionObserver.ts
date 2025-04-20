import { onMounted, onUnmounted, ref } from 'vue'

export function useSectionObserver(options = {}) {
  const element = ref<HTMLElement | null>(null)
  const isVisible = ref(false)

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          entry.target.classList.add('visible')
        }
      })
    },
    {
      threshold: 0.1,
      ...options,
    },
  )

  onMounted(() => {
    if (element.value) {
      observer.observe(element.value)
    }
  })

  onUnmounted(() => {
    if (element.value) {
      observer.unobserve(element.value)
    }
  })

  return {
    element,
    isVisible,
  }
}
