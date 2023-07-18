import React from 'react'

function Template({title, description}) {
  return (
    <div>
        <h2>Title: {title}</h2>
        <h2>Description: {description}</h2>
    </div>
  )
}

export default Template