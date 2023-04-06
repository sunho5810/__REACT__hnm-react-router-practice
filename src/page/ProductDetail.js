import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {

  let {id} = useParams();

  const [product, setProduct] = useState(null);

  const getProductDetail = async() => {
    let url = `https://my-json-server.typicode.com/sunho5810/__REACT__hnm-react-router-practice/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();

    console.log("detail data?", data);
    setProduct(data);
  }

  useEffect(() => {
    getProductDetail();
  }, [])

  return (
    <Container>
      <Row>
        <Col className='product-img'>
          <img src={product?.img}/>
        </Col>
        <Col>
          <h2>{product?.title}</h2>
          <p>￦{product?.price}</p>
          <p>{product?.choice}</p>

          <Form.Select aria-label="Default select example">
            <option value="" disabled selected>사이즈 선택</option>
            {
              product?.size.map((item)=>(
                <option value={item} key={item} item={item}>{item}</option>
              ))
            }
          </Form.Select>

          <div><Button variant='dark' className='itemAddBtn'>추가</Button></div>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail