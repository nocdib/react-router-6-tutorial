import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import {About, Dashboard, Error, Home, Login, Products, SingleProduct, ProtectedRoute} from './pages'

function App() {
  const [user, setUser] = useState(null)
  return <>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<SharedLayout/>} >
          <Route index element={<Home/>} />
          <Route path='about' element={<About/>} />
          <Route path='products' element={<Products/>} />
          <Route path='products/:productId' element={<SingleProduct/>} />
          <Route path='login' element={<Login setUser={setUser}/>} />
          <Route path='dashboard' element={
            <ProtectedRoute user={user}>
                <Dashboard user={user}/>
            </ProtectedRoute>}
          />
          <Route path='*' element={<Error/>} />
      </Route>
    </Routes>
  </BrowserRouter>
  
  </>
  
}

export default App;
