import React, { Component, Suspense } from 'react'
import { HashRouter as Router, Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import './style.css'

const { lazy } = React

const Manage = lazy(() => import('../pages/manage'))
const Login = lazy(() => import('../pages/login'))

// 总路由
const allRouters = [
  {
    path: '/manage',
    exact: true,
    component: Manage,
    title: '管控台页面',
  },
  {
    path: '/login',
    exact: true,
    component: Login,
    title: '登录页面',
  },
]
// 兜底 登录页面
allRouters.push({
  path: '/',
  exact: false,
  component: Login,
  title: '重定向'
})

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <Suspense fallback={<div>正在加载中...</div>}>
          <Switch>
            {renderRoutes(allRouters)}
          </Switch>
        </Suspense >
      </Router>
    )
  }
}

export default AppRouter
