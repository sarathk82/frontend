import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap';
import Rating from '../component/Rating';
import Message from '../component/Message';
import Loader from '../component/Loader';
import { useSelector, useDispatch } from 'react-redux';
import { listProductDetails } from '../actions/ProductActions';


function ProductScreen() {

    const [product, setProduct] = useState([]);
    const { id } = useParams();



    useEffect(() => {

        async function fetchProduct() {
            const { data } = await axios.get(`/api/products/${id}`);
            setProduct(data);
        }

        fetchProduct();
        const [product, setProduct] = useState([]);
        const { id } = useParams();

        useEffect(() => {

            async function fetchProduct() {
                const { data } = await axios.get(`/api/products/${id}`);
                setProduct(data);
            }

            fetchProduct();

        }, []);

        return (
            <div>
                <Link to='/' className='btn btn-light my-3 '> Go Back
                </Link>

                <Row>
                    <Col md={6}>
                        <Image src={product.image} alt={product.name} fluid />
                    </Col>

                    <Col md={3}>

                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h3>
                                    {product.name}
                                </h3>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Rating value={product.rating} text={`${product.numReviews} reviews`} color='#f8e825' />
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Price: ${product.price}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Description: {product.description}
                            </ListGroup.Item>
                        </ListGroup>

                    </Col>

                    <Col md={3}>
                        <Card>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>
                                            Price:
                                        </Col>
                                        <Col>
                                            <strong>${product.price}</strong>
                                        </Col>
                                    </Row>


                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>
                                            Status :
                                        </Col>
                                        <Col>
                                            {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                        </Col>
                                    </Row>
                                </ListGroup.Item>

                                <ListGroup.Item>

                                    <Button className='btn btn-block' disabled={product.countInStock === 0}>Add to Cart</Button>

                                </ListGroup.Item>

                            </ListGroup>
                        </Card>
                    </Col>
                </Row>


            </div>
        );
    }
export default ProductScreen;