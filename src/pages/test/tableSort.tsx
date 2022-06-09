import { Table } from 'bellejs'
import './style.less'

const data: any = [
  {
    id: 1,
    name: 'zhangsan',
    age: 16,
    hobby: 'aaa'
  },
  {
    id: 2,
    name: 'lisi',
    age: 17,
    hobby: 'bbb'
  },
  {
    id: 3,
    name: 'wangwu',
    age: 18,
    hobby: 'ccc'
  }
]
const columns: any = [
  {
    title: '姓名',
    dataIndex: 'name',
    width: 100,
    ellipsis: true
  },
  {
    title: '年龄',
    dataIndex: 'age',
    width: 100,
    ellipsis: true,
    sorter: (a: { age: number }, b: { age: number }) => a.age > b.age
  },
  {
    title: '爱好',
    dataIndex: 'hobby',
    width: 100,
    ellipsis: true
  }
]
const Test = () => (
  <div className="test-page">
    <Table columns={columns} dataSource={data} />
  </div>
)

export default Test
