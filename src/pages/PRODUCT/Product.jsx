// @ts-nocheck
import React, { useContext } from 'react'
import { ProductContext } from '../../services/ProductContext'
import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import BreadCramb from '../../components/BREADCRAMB/BreadCramb';
import ProductDisplay from '../../components/PRODUCTDISPLAY/ProductDisplay';
import RelatedProducts from '../../components/RELATEDPRODUCTS/RelatedProducts'
const Product = () => {

  const { allProducts } = useContext(ProductContext);
  
 
  const { productId } = useParams();
  // console.log(productId)

   const product = allProducts.find((product) => {
     return product.id === Number(productId);
   });

  // console.log(product)


  return (
    <div className='product-page'>
      <Container className='py-5'>

        <BreadCramb product={product} />
        <ProductDisplay product={product} />
        <RelatedProducts/>



      </Container>
     
    </div>
  )
}

export default Product
