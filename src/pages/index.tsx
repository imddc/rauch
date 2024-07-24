import React from 'react'

function IndexPage() {
  const [name] = React.useState(1)

  return (
    <div id="1" className="1">
      IndexPage
      {name}
    </div>
  )
}

export default IndexPage
