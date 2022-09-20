import React, { useEffect, useContext } from 'react'
import ReactDOM from 'react-dom'
import { ConfigProvider } from '@ones-design/core'
import { useTeamInfo } from '@ones-op/store'
import { OPDispatch } from '@ones-op/event'
import './index.css'
function Test() {
  const test = () => {
    new Promise((reslove,) => {
        setTimeout(() => {
          reslove('芝麻')
        }, 3000);
      }).then((res) => {
        alert(res)
      })
  }
  useEffect(() => {
    test()
  }, [])
  
  return <>111</>
}
ReactDOM.render(<ConfigProvider>
    <Test/>
  </ConfigProvider>, document.getElementById('ones-mf-root'))
