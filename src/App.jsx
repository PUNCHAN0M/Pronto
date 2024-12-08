import './App.css'
import { Routes ,BrowserRouter, Route } from 'react-router-dom'
import Home from './Home.jsx'
import WebcamComponent from './WebcamComponent.jsx'
import MenuModel from './MenuModel.jsx'
function App() {

  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/camera" element={<WebcamComponent />}></Route>
        <Route path="/model" element={<MenuModel />}></Route>
      </Routes>
  </BrowserRouter>
  )}

export default App
