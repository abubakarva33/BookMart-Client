import TextArea from "antd/es/input/TextArea";
import "./Comment.css";
import { Button, Form } from "antd";
import { Col, Row } from "react-bootstrap";
import { BiUserCircle } from "react-icons/bi";
import { useGetCommentsQuery, usePostACommentMutation } from "../../../redux/api";
import { useSelector } from "react-redux";

const Comment = ({ id }) => {
  const { user } = useSelector((state) => state.user);
  const { data, isLoading } = useGetCommentsQuery(id);
  const [form] = Form.useForm();
  const [postAComment] = usePostACommentMutation();
  const onFinish = ({ about }) => {
    postAComment({ about, user, bookId: id });
    form.resetFields();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Form
        name="basic"
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="my-4 mx-2"
      >
        <h5 className="mb-3"> Whats your opinion ? Leave a comment here. </h5>
        <Row className="d-flex  align-items-center">
          <Col md={9}>
            <Form.Item
              name="about"
              rules={[
                {
                  required: true,
                  message: "Please leave your comment here !",
                },
              ]}
            >
              <TextArea
                placeholder="Leave your comment here..."
                autoSize={{ minRows: 2, maxRows: 6 }}
              />
            </Form.Item>
          </Col>
          <Col md={3}>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-100 fs-5 p-4 d-flex  align-items-center justify-content-center"
              >
                <span>Comment</span>
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <h5 className="ms-2">Latest Reviews</h5>
      {!isLoading &&
        data.map((review) => (
          <div key={review.id} className="d-flex align-items-center border rounded mb-3 mx-2">
            <p className="fs-1 me-2 ps-2">
              <abbr title={user?.username ? `${user.username}` : "Unknown User"}>
                {" "}
                <BiUserCircle />{" "}
              </abbr>
            </p>
            <p>{review.about}</p>
          </div>
        ))}
    </div>
  );
};

export default Comment;
