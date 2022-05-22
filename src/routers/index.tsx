import { Component, lazy, Suspense } from 'react'
import { HashRouter as Router, Redirect, Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { ConfigProvider, Spin } from 'bellejs'
import ZhCN from 'bellejs/es/locale/zh_CN'

// import ManagePage from '../pages/manage'
// import LoginPage from '../pages/login'

const ManagePage = lazy(() => import('../pages/manage'))
const LoginPage = lazy(() => import('../pages/login'))

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
        <Suspense fallback={<Spin style={{ margin: '10px auto' }} />}>
          <Router>
            <Switch>
              <Redirect exact from='/' to='/login' />
              {renderRoutes(allRouters.map((item) => ({ ...item, key: item.path })))}
            </Switch>
          </Router>
        </Suspense>
      </ConfigProvider >
    )
  }
}

export default AppRouter
