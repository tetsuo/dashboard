import { useRef, useEffect, useState } from 'react'

export function useResizeObserver(throttleTime = 250) {
  const ref = useRef(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  const timeout = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) {
      return
    }

    const updateSize = ({ width, height }) => {
      setDimensions({ width, height })
    }

    const update = entry => {
      if (timeout.current) {
        return
      }

      const { width, height } = entry.contentRect

      timeout.current = setTimeout(() => {
        updateSize({ width, height })
        timeout.current = null
      }, throttleTime)
    }

    const rect = element.getBoundingClientRect()
    updateSize({ width: rect.width, height: rect.height })

    const observer = new ResizeObserver(([entry]) => {
      update(entry)
    })

    observer.observe(element)

    return () => {
      observer.disconnect()
      if (timeout.current) {
        clearTimeout(timeout.current)
        timeout.current = null
      }
    }
  }, [throttleTime])

  return [ref, dimensions]
}
