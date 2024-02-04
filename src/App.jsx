import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='blog' element={<Blog />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
