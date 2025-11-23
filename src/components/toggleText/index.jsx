import { useState, useRef } from 'react'
import styles from './styles.module.css'

function ToggleText() {
  const [isVisib, setIsVisib] = useState(false)
  const [duration, setDuration] = useState(3)
  const textRef = useRef(null)
  const btnRef = useRef(null)
  const jumpCount = useRef(0)

  const inputValue = (e) => {
    setDuration(Number(e.target.value))
  }

  const visibilityChange = () => {
    jumpCount.current = 0
    if (!isVisib) {
      setIsVisib(true)
      textRef.current.style.maxHeight = '300px'
      textRef.current.style.opacity = '1'
      textRef.current.style.transition = `all ${duration}s`
    } else {
      setIsVisib(false)
      textRef.current.style.maxHeight = '300px'
      textRef.current.style.opacity = '0'
      textRef.current.style.transition = `all ${duration}s`
    }
  }

  const btnChange = () => {
    jumpCount.current += 1

    if (jumpCount.current === 1) {
      btnRef.current.style.left = '160px'
    } else if (jumpCount.current === 2) {
      btnRef.current.style.left = '-160px'
    } else if (jumpCount.current === 3) {
      btnRef.current.style.left = '0px'
    }
  }

  return (
    <div className={styles.container}>
      <h1>Select how many seconds the message will appear</h1>
      <input type="text" onChange={inputValue} />
      <p ref={textRef} className={styles.textBlock}>
        The useRef Hook allows you to persist values between renders. It can be
        used to store a mutable value that does not cause a re-render when
        updated. It can be used to access a DOM element directly.
      </p>
      <button ref={btnRef} onMouseMove={btnChange} onClick={visibilityChange}>
        Toggle
      </button>
    </div>
  )
}
export default ToggleText
