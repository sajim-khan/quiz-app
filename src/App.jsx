import { useState } from 'react'
import './App.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Blogs from './Component/Blogs/Blogs'
import Blog from './Component/Blog/Blog'
import QuestionAndAns from './Component/Question & Ans/QuestionAndAns'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Blogs></Blogs>
    <Blog></Blog>
    <QuestionAndAns></QuestionAndAns>
    <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
