import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
const Header = () => {
    return (  
        <Navbar bg="dark" variant="dark">
            <div className="wrapper d-flex justify-content-between px-3">
                <Navbar.Brand as={Link} to="/">Test Rest Client</Navbar.Brand>           
                <Button as={Link} to='/add' variant="outline-info">Add new Product</Button>
            </div>
        </Navbar>
    );
}
 
export default Header;