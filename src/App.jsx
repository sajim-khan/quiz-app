import { useState } from 'react'
import './App.css'

import Blogs from './Component/Blogs/Blogs'
import Blog from './Component/Blog/Blog'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Blogs></Blogs>
    <Blog></Blog>
    </div>
  )
}

export default App
