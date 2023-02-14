import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { CreatePost } from './pages/CreatePost'
import { Posts } from './pages/Posts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/sign-in' element={<Login/>}/>
          <Route path='/create-post' element={<CreatePost/>} />
          <Route path='/posts' element={<Posts/>}/>
        </Routes>

      </Router>
    </div>
  )
}

export default App
