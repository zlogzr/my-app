import { Component, lazy, Suspense } from 'react'
import { HashRouter as Router, Redirect, Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { ConfigProvider, Spin } from 'bellejs'
import ZhCN from 'bellejs/es/locale/zh_CN'

// import ManagePage from 'Pages/manage'
// import LoginPage from 'Pages/login'

const ManagePage = lazy(() => import('Pages/manage'))
const LoginPage = lazy(() => import('Pages/login'))

const allRouters = [
  {
    path: '/manage',
    exact: true,
    component: ManagePage,
    title: 'manage',
  },
  {
    path: '/login',
    exact: true,
    component: LoginPage,
    title: 'login',
  },
]

class AppRouter extends Component {
  render() {
    return (
      <ConfigProvider locale={ZhCN}>
        <Suspense
          fallback={
            <div style={{ marginTop: '16px', textAlign: 'center' }}>
              <Spin />
            </div>
          }
        >
          <Router>
            <Switch>
              <Redirect exact from="/" to="/login" />
              {renderRoutes(allRouters.map(item => ({ ...item, key: item.path })))}
            </Switch>
          </Router>
        </Suspense>
      </ConfigProvider>
    )
  }
}

export default AppRouter
