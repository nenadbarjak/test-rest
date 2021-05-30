import { useEffect, useState } from 'react'
import Product from './Product'

const ProductsList = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BASE_URL}/products`)
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.log(err))
    }, [])

    return (  
        <div className="wrapper px-3">
            <div className='d-flex flex-column'>
                <h3 className='align-self-center my-3'>List of products</h3>
                <div className='d-flex flex-wrap justify-content-center px-sm-2'>
                {
                    products.length > 0 &&
                    products.map(product => {
                        return (
                            <Product product={product} key={product._id} />
                        )
                    })
                }
                </div>
            </div>
        </div>
    );
}
 
export default ProductsList;