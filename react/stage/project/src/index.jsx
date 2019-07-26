import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = ({ regions }) => {

  const [selected, setSelected] = useState(regions)

  const handleClick = () => {
    setSelected(prevState => {
      prevState.push(1)

      return [...prevState]
    })
  }

  return (
    <div>
      {selected}
      <button onClick={handleClick}>设置</button>
    </div>
  )
}

App.defaultProps = {
  regions: []
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
