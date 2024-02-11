import React from 'react'
import {useParams} from 'react-router-dom'

function TestComponent() {
    const params=useParams();
    console.log(params);
  return (
    <div>
      {params.test_id}
    </div>
  )
}

export default TestComponent
