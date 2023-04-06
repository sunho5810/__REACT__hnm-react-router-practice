import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {

    const [productList, setProductList] = useState([]);
    const [query, setQuery] = useSearchParams("");

    const getProducts = async() => {
        let searchQuery = query.get('q') || "";
        console.log("searchQuery?", searchQuery);
        let url = `https://my-json-server.typicode.com/sunho5810/__REACT__hnm-react-router-practice/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();

        console.log("data?", data);
        setProductList(data);
    }

    useEffect(()=>{
        getProducts();
    }, [query])

  return (
    <div>
        <Container>
            <Row>
                {
                    productList.map((item)=>(
                        <Col lg={3} key={item.id}>
                            <ProductCard item={item}/>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    </div>
  )
}

export default ProductAll