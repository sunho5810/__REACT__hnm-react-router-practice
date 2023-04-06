import React from 'react'
import { Form, Button, Container } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'

const Login = ({setAuthenticate, authenticate}) => {

  const navigate = useNavigate();

  const loginUser = (event) => {
    event.preventDefault(); // form 사용 시 써주면 페이지가 refresh되는걸 막을 수 있음
    console.log("loginUser");
    setAuthenticate(true);
    navigate("/");
  }
  
  return (
    <Container>
      <Form onSubmit={(event)=>loginUser(event)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="danger" type="submit"> {/* 클릭 시 onSubmit 이벤트가 호출됨 */}
          로그인
        </Button>
      </Form>
    </Container>
  )
}

export default Login