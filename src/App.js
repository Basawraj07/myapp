import React, { Fragment } from 'react'
import Navbar from './Navbar/Navbar'
import Product from './product/Products'
import Product1 from './product/product-singleHandler'


const App=()=>{
  return <Fragment>
  <Navbar/>
  <hr/>
  <Product1/>

  </Fragment>
}
export default App