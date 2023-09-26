import Header from "./component/header/Header"
import Hero from  "./component/hero/Hero"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/home/Home'
import Layout from "./component/layout/Layout";
import NoPage from './component/nopage/NoPage'

function App() {
  return (
    <>
      <div>
          <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Layout />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
