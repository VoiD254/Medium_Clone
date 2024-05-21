import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';
import { Blogs } from './pages/Blogs';
import { Blog } from './pages/Blog';
import { Publish } from './pages/Publish';

function App() {
  return(
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/signup' element={<SignUp/>} />
                <Route path='/signin' element={<SignIn/>} />
                <Route path='/blog/:id' element={<Blog/>} />
                <Route path='/blogs' element={<Blogs/>} />
                <Route path='/publish' element={<Publish/>} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
