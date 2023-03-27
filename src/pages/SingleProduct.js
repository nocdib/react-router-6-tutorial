import {Link, useParams} from 'react-router-dom'
import products from '../data'

const SingleProduct = () => {
  const {productId} = useParams()
  const {image, name} = products.find((product) => product.id === productId)
  return (
    <section className='section product'>
      <h2>Single Product: {name}</h2>
      <img src={image} alt={name}/>
      <h5>{name}</h5>
      <Link to='/products'>Back To Products</Link>
    </section>
  );
};

export default SingleProduct;
