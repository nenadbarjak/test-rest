import { useState, useRef } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import { useHistory } from 'react-router-dom'

const AddProductForm = () => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')
    const [inStock, setInStock] = useState(false)
    const [image, setImage] = useState(null)
    const [error, setError] = useState(null)
    const fileInputRef = useRef(null)

    const history = useHistory()

    const clearFile = () => {
        fileInputRef.current.value = null
        setImage(null)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setError(null)

        if (!title) {
            return setError('Product must have a title')
        }

        const formData = new FormData()
        if (image) {
            formData.append('image', image)
        }

        formData.append('title', title)
        formData.append('price', price)
        formData.append('description', description)
        formData.append('inStock', inStock)

        fetch(`${process.env.REACT_APP_BASE_URL}/products`, {
            method: 'POST',
            body: formData
        })
            .then(res => {
                // if (!res.ok) {
                //     res.json().then(data => {
                //         throw new Error(data.error)
                //     })
                // } else {
                //     res.json()
                // }
                if (res.ok) {
                    return res.json()
                }
                return res.json().then(data => {
                    const error = data.error
                    
                    throw new Error(error)
                })
            })
            .then(data => {
                setTitle('')
                setPrice(0)
                setDescription('')
                setInStock(false)
                setImage(null)
                setError(null)

                history.push('/')
            })
            .catch(err => {
                setError(err.message)
            })

    }

    return (  
        <div className="wrapper p-3">
            <h2>Add new product</h2>
            { error &&
                <Alert variant='danger'>{error}</Alert>
            }
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formTitleInput" className="my-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter product title"
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)}    
                    />
                </Form.Group>
            
                <Form.Group controlId="formPriceInput" className="my-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control 
                        type="number" 
                        placeholder="Price" 
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formDescriptionInput" className="my-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control 
                        as='textarea' 
                        placeholder="Product's Description" 
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formInStockInput" className="my-3">
                    <Form.Check 
                        type="checkbox" 
                        label="In Stock"
                        checked={inStock} 
                        onChange={(e) => setInStock(e.target.checked)}
                    />
                </Form.Group>

                <Form.Group className="my-3">
                    <Form.File 
                        id="formImageInput" 
                        ref={fileInputRef}
                        label="Add product image" 
                        accept="image/*"
                        onChange={(e) => setImage(e.target.files[0])}
                    />
                    {image && <span className='btn btn-secondary' onClick={clearFile}>Clear</span>}
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}
 
export default AddProductForm;