import { Button } from 'bellejs'
import './style.less'

const ManagePage = (props: any) => {
  const handleBack = () => {
    console.log('111')
    props.history.push('/login')
  }
  return (
    <>
      <div className="manage-page">
        <h2 className="content">this is manage-page</h2>
        <Button className="backBtn" onClick={handleBack}>
          返回
        </Button>
      </div>
      <div style={{ marginTop: '20px' }}>
        <Button>111</Button>
        <Button>111</Button>
        <Button>111</Button>
        <Button>111</Button>
        <Button>111</Button>
        <Button>111</Button>
        <Button>111</Button>
        <Button>111</Button>
        <Button>111</Button>
        <Button>111</Button>
      </div>
    </>
  )
}

export default ManagePage
