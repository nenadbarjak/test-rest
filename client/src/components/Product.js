import Card from 'react-bootstrap/Card'

const Product = ({ product }) => {
    const imgSrc = product.image ? process.env.REACT_APP_BASE_URL + '/' + product.image : 'https://via.placeholder.com/286x180'
    const bgClassName = product.inStock ? 'bg-success text-white' : 'bg-danger text-white'
    const inStockText = product.inStock ? '' : 'Not'


    return (
        <div className="p-2">      
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imgSrc} style={{width: '286px', height: '180px'}}/>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>Price: {product.price}</Card.Text>
                    <Card.Text>{product.description}</Card.Text>
                    <span className={`${bgClassName} p-1`}>{inStockText} In Stock</span>
                </Card.Body>
            </Card>
        </div>
    );
}
 
export default Product;