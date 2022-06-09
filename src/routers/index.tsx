import { Component, lazy, Suspense } from 'react'
import { HashRouter as Router, Redirect, Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Spin } from 'bellejs'

// import ManagePage from 'Pages/manage'
// import LoginPage from 'Pages/login'

const ManagePage = lazy(() => import('Pages/manage'))
const LoginPage = lazy(() => import('Pages/login'))
const TestPage = lazy(() => import('Pages/test'))

const allRouters = [
  {
    path: '/manage',
    exact: true,
    component: ManagePage,
    title: 'manage'
  },
  {
    path: '/login',
    exact: true,
    component: LoginPage,
    title: 'login'
  },
  {
    path: '/test',
    exact: true,
    component: TestPage,
    title: 'test'
  }
]

class AppRouter extends Component {
  render() {
    return (
      <Suspense
        fallback={
          <div style={{ marginTop: '16px', textAlign: 'center' }}>
            <Spin />
          </div>
        }
      >
        <Router>
          <Switch>
            <Redirect exact from="/" to="/test" />
            {renderRoutes(allRouters.map(item => ({ ...item, key: item.path })))}
          </Switch>
        </Router>
      </Suspense>
    )
  }
}

export default AppRouter
