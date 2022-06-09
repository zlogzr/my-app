import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './routers'
import { ConfigProvider as ConfigProviderAntd } from 'antd'
import zhCNAntd from 'antd/lib/locale/zh_CN'
import { ConfigProvider as ConfigProviderBellejs } from 'bellejs'
import ZhCNBellejs from 'bellejs/es/locale/zh_CN'
import './style.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ConfigProviderAntd locale={zhCNAntd}>
      <ConfigProviderBellejs locale={ZhCNBellejs}>
        <AppRouter />
      </ConfigProviderBellejs>
    </ConfigProviderAntd>
  </React.StrictMode>
)
