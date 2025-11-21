import { useState, useRef } from 'react'
import styles from './styles.module.css'

useState
useRef
function ToggleText() {
  const [isVisib, setIsVisib] = useState(false)
  const [duration, setDuration] = useState(3)
  const textRef = useRef(null)

  const inputValue = (e) => {
    setDuration(e.target.value)
  }

  const visibilityChange = () => {
    if (!isVisib) {
      setIsVisib(true)
      textRef.current.style.maxHeight = '200px'
      textRef.current.style.opacity = '1'
      textRef.current.style.transition = `all ${duration}s`
    } else {
      setIsVisib(false)
      textRef.current.style.maxHeight = '0px'
      textRef.current.style.opacity = '0'
      textRef.current.style.transition = `all ${duration}s`
    }
  }

  return (
    <div>
      <div>
        <input type="text" onChange={inputValue} />
        <p ref={textRef} className={styles.textBlock}>
          The useRef Hook allows you to persist values between renders. It can
          be used to store a mutable value that does not cause a re-render when
          updated. It can be used to access a DOM element directly.
        </p>
        <button onClick={visibilityChange}>Toggle</button>
      </div>
    </div>
  )
}
export default ToggleText
