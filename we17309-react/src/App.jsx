// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/Product'
import React, { useEffect, useState } from 'react'
import ProductDetailPage from './pages/ProductDetail'
import { addProduct, deleteProduct, getAllProduct, updateProduct } from './api/product'
import Dashboard from './pages/admin/Dashboard'
import ProductManagementPage from './pages/admin/ProductManagement'
import AddProductPage from './pages/admin/AddProduct'
import UpdateProductPage from './pages/admin/UpdateProduct'
import WebsiteLayout from './pages/layouts/WebsiteLayout'
import AdminLayout from './pages/layouts/adminlayout'


function App() {
  const [products, setProduct] = useState([])
  useEffect(() => {
    fetch('http://localhost:8080/api/products')
      .then((res) => res.json())
      .then((data) => setProduct(data));
    // getAllProduct().then(({ data }) => console.log(data))
  }, [])
  const onHandleRemove = (id) => {
    fetch('http://localhost:8080/api/products/' + id, {
      method: 'DELETE', 
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then(() => setProduct(products.filter(product => product.id !== id)))
    // deleteProduct(id).then(() => setProduct(products.filter(product => product.id !== id)))
  }
  const onHandleAdd = (product) => {
    addProduct(product)
  }
  const onHandleUpdate = (product) => {
    updateProduct(product).then(() => setProduct(products.map(item  => item.id == product.id ? product : item)));
   }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<WebsiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path='products' element={<ProductPage products={products} onRemove={onHandleRemove} />} />
        </Route>

        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          
          <Route path='products' >
            <Route index element={<ProductManagementPage products={products} />} />
            <Route path='add' element={<AddProductPage onAdd={onHandleAdd} />} />
          </Route>
          </Route>
        </Routes>


      {/* <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductPage products={products} onRemove={onHandleRemove} />} />
        <Route path='/products/:id' element={<ProductDetailPage />} />
        <Route path='/admin' element={<Dashboard />} />
        <Route path='/admin/products' element={<ProductManagementPage products={products} />} />
        <Route path='/admin/products/add' element={<AddProductPage onAdd={onHandleAdd} />} />
        <Route path='/admin/products/:id/update' element={<UpdateProductPage products={products} onUpdate={onHandleUpdate}/>} />
       
      </Routes> */}
       {/* useParams() */}
    </div >
  )
}

export default App
