import { useState } from 'react'
import './App.css'
import Blog from './Component/Blog/Blog'
import Blogs from './Component/Blogs/Blogs'


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
