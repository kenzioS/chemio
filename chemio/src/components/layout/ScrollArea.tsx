import { useCallback, useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

interface ScrollAreaProps {
  children: ReactNode
  className?: string
  ariaLabel?: string
  as?: 'main' | 'div'
}

interface ThumbState {
  height: number
  top: number
  visible: boolean
}

const TRACK_INSET = 6

export function ScrollArea({
  children,
  className = '',
  ariaLabel,
  as: Tag = 'div',
}: ScrollAreaProps) {
  const viewRef = useRef<HTMLDivElement>(null)
  const [thumb, setThumb] = useState<ThumbState>({ height: 0, top: 0, visible: false })

  const updateThumb = useCallback(() => {
    const view = viewRef.current
    if (!view) return

    const { clientHeight, scrollHeight, scrollTop } = view
    if (scrollHeight <= clientHeight + 1) {
      setThumb((previous) =>
        previous.visible ? { height: 0, top: 0, visible: false } : previous
      )
      return
    }

    const trackHeight = Math.max(clientHeight - TRACK_INSET * 2, 1)
    const height = Math.max((clientHeight / scrollHeight) * trackHeight, 32)
    const maxTop = trackHeight - height
    const progress = scrollTop / (scrollHeight - clientHeight)

    setThumb({ height, top: progress * maxTop, visible: true })
  }, [])

  useEffect(() => {
    const view = viewRef.current
    if (!view) return

    updateThumb()

    const resizeObserver = new ResizeObserver(updateThumb)
    resizeObserver.observe(view)

    const mutationObserver = new MutationObserver(updateThumb)
    mutationObserver.observe(view, { childList: true, subtree: true })

    window.addEventListener('resize', updateThumb)

    return () => {
      resizeObserver.disconnect()
      mutationObserver.disconnect()
      window.removeEventListener('resize', updateThumb)
    }
  }, [updateThumb])

  return (
    <Tag className={`scroll-area ${className}`.trim()} aria-label={ariaLabel}>
      <div ref={viewRef} className="scroll-area-view" onScroll={updateThumb}>
        {children}
      </div>

      {thumb.visible && (
        <div className="scroll-area-track" aria-hidden="true">
          <div
            className="scroll-area-thumb"
            style={{ height: `${thumb.height}px`, top: `${thumb.top}px` }}
          />
        </div>
      )}
    </Tag>
  )
}
