import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { ConfigProvider } from '@ones-design/core'
import './index.css'
import { useTaskInfo } from '@ones-op/store'
import { OPDispatch } from  '@ones-op/event'
function App() {
  const { uuid } = useTaskInfo()
  useEffect(() => {
    console.log('uuid', uuid)
    OPDispatch('event:ones:global:manual:module:destroy')
  }, [])
  return <></>
}
ReactDOM.render(<ConfigProvider><App/></ConfigProvider>, document.getElementById('ones-mf-root'))
