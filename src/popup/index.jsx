import React, { useState } from 'react'
import './popup.less'
import { Button } from 'antd'
const Popup = () => {
  const [count, setCount] = useState(0)
  return (
    <div
      className="popup-wrapper"
      onClick={() => {
        console.log('ewewe')
      }}
    >
      {count}
      <Button
        type="primary"
        onClick={() => {
          console.log('hahaha')
          setCount(count + 1)
        }}
      >
        加一
      </Button>
    </div>
  )
}

export default Popup
