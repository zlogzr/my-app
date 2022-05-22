import { Button } from 'bellejs'
import './style.css'


const LoginPage = (props: any) => {
  const handleLogin = () => {
    props.history.push('/manage')
  }
  return (
    <div className='login-page'>
      <h2 className='content'>this is login-page</h2>
      <Button className='loginBtn' type='primary' onClick={handleLogin}>登录</Button>
    </div>
  )
}
export default LoginPage
