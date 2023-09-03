import "./Register.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useCreateUserMutation } from "../../../redux/api";
import { useState } from "react";
import ModalSuccess from "../../components/Modal/Modal";
import Swal from "sweetalert2";

const Register = () => {
  const [show, setShow] = useState(false);
  const [form] = Form.useForm();
  const [addUser] = useCreateUserMutation();
  const dispatch = useDispatch();
  const [isMatched, setIsMatched] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const onFinish = ({ password, confirmPassword, ...values }) => {
    setIsClicked(true)
    if (password !== confirmPassword) {
      setIsMatched(false)
      return
    }
    try {
      setIsMatched(true)
      dispatch(addUser({...values,password, role: 'customer'}))
    } catch (error) {
      console.log(error);
    }finally{
      form.resetFields();
      Swal.fire({
        icon: 'success',
        title: 'Sign up successful',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    }

  };
  return (
    <div>
      <Row className="userForm gx-0">
        <Col xs={12} md={8} className="login-left">
          <h1>WELCOME TO BOOK MART</h1>
          <p>Sign in to continue access</p>
        </Col>
        <Col xs={12} md={4}>
          <Form
            name="normal_login"
            className="login-form"
            form={form}
            layout="vertical"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <div className="d-flex align-items-center justify-content-center flex-column">
              <h3>Sign Up</h3>
            </div>
            <div>
              <h6>Full Name</h6>
              <Form.Item
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please input your Username!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  type="name"
                  placeholder="Full Name"
                />
              </Form.Item>
            </div>
            <div>
              <h6>Email</h6>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your Username!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  type="email"
                  placeholder="Email"
                />
              </Form.Item>
            </div>
            <div>
              <h6>contact No</h6>
              <Form.Item
                name="contactNo"
                rules={[
                  {
                    required: true,
                    message: "Please input your Username!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  type="name"
                  placeholder="Full Name"
                />
              </Form.Item>
            </div>
            <div>
              <h6>Address</h6>
              <Form.Item
                name="address"
                rules={[
                  {
                    required: true,
                    message: "Please input your address!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  type="name"
                  placeholder="Full Name"
                />
              </Form.Item>
            </div>
            <div>
              <h6>Profile Img</h6>
              <Form.Item
                name="profileImg"
                rules={[
                  {
                    required: true,
                    message: "Please input your Profile Image!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  type="name"
                  placeholder="Full Name"
                />
              </Form.Item>
            </div>

            <div>
              <h6>Password</h6>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
            </div>
            <div>
              <h6>Re-Password</h6>
              <Form.Item
                name="confirmPassword"
                rules={[
                  {
                    required: true,
                    message: "Please re-input your Password!",
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Confirm Password"
                />
              </Form.Item>
            </div>
            {isClicked && !isMatched ? <p className="text-danger">Passwords doesn't matched </p> : null}
            <div className="btnGroups">
              <Button type="primary" htmlType="submit" className="login-form-button mb-3 w-100">
                Register
              </Button>
              <div className="d-flex">
                <hr />
                <p className="loginWith">Or Login With</p>
                <hr />
              </div>
              <div className="d-flex w-100">
                <Button type="primary" className="login-form-button mb-3 me-3 w-100">
                  Google
                </Button>
                <Button type="primary" className="login-form-button mb-3 w-100">
                  Facebook
                </Button>
              </div>
              <p>
                Already have an account? <Link to="/login">Login now!</Link>
              </p>
            </div>
          </Form>
        </Col>

        <ModalSuccess show={show} setShow={setShow}></ModalSuccess>
      </Row>
    </div>
  );
};

export default Register;
