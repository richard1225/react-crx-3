import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import Popup from '@/popup'

const antdConfig = {
  locale: zhCN
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ConfigProvider {...antdConfig}>
      <Popup />
    </ConfigProvider>
  </React.StrictMode>
)
