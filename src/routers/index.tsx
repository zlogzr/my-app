import { Component } from 'react'
import { HashRouter as Router, Redirect, Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import 'antd/dist/antd.css'
import './style.css'

import HomePage from '../pages/home'
import LoginPage from '../pages/login'

const allRouters = [
  {
    path: '/home',
    exact: false,
    component: HomePage,
    title: '',
  },
  {
    path: '/login',
    exact: false,
    component: LoginPage,
    title: '',
  },
]

class AppRouter extends Component {
  render() {
    return (
      <ConfigProvider locale={zhCN}>
        <Router>
          <Switch>
            <Redirect exact from='/' to='/home' />
            {renderRoutes(allRouters.map((item) => ({ ...item, key: item.path })))}
          </Switch>
        </Router>
      </ConfigProvider>
    )
  }
}

export default AppRouter
