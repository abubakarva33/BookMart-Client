import "./AddBook.css";
import { Button, Form, Input, Select } from "antd";
import { DatePicker } from "antd";
import { usePostABookMutation } from "../../../redux/api";
const { Option } = Select;
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const AddBook = () => {
  const { user } = useSelector((state) => state.user);
  const [createBook] = usePostABookMutation();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const { image, registered, ...items } = values;
    const picture = `/images/${image}.webp`;
    const data = {
      ...items,
      picture,
      registered: registered.format("DD-MM-YYYY"),
      user,
    };
    createBook(data);
    form.resetFields();
    Swal.fire({
      icon: 'success',
      title: 'Your book has been added successfully',
      showConfirmButton: false,
      timer: 1500
    })
  };
  return (
    <div className="w-50 mx-auto">
      <Form
        name="complex-form"
        form={form}
        onFinish={onFinish}
        layout="vertical"
        className=" my-4 border rounded p-4"
      >
        <h3 className="bookCenter"> Add a new book now! </h3>
        <Form.Item
          label="Book Title"
          name="title"
          rules={[
            {
              required: true,
              message: "Book Title is required",
            },
          ]}
        >
          <Input placeholder="Please input book title" />
        </Form.Item>
        <Form.Item
          label="Author Name"
          name="authorName"
          rules={[
            {
              required: true,
              message: "Author name is required",
            },
          ]}
        >
          <Input placeholder="Please input author name" />
        </Form.Item>
        <Form.Item
          label="Select Genra"
          name="genra"
          rules={[
            {
              required: true,
              message: "Genra is required",
            },
          ]}
        >
          <Select placeholder="Select genra">
            <Option value="Thriller">Thriller</Option>
            <Option value="Science Fiction">Science Fiction</Option>
            <Option value="Religious">Religious</Option>
            <Option value="Horor">Horor</Option>
            <Option value="Romantic">Romantic</Option>
            <Option value="others">Others</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Select Cover Page"
          name="image"
          rules={[
            {
              required: true,
              message: "Cover page is required",
            },
          ]}
        >
          <Select placeholder="Select cover page">
            <Option value="book1">Cover 01</Option>
            <Option value="book2">Cover 02</Option>
            <Option value="book3">Cover 03</Option>
            <Option value="book4">Cover 04</Option>
            <Option value="book5">Cover 05</Option>
            <Option value="book6">Cover 06</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="registered"
          label="DatePicker"
          rules={[
            {
              type: "object",
              required: true,
              message: "Please select time!",
            },
          ]}
        >
          <DatePicker className="w-100" />
        </Form.Item>

        <div className="bookCenter ">
          <Button type="primary" htmlType="submit" className="w-50 h-auto">
            <span className="fs-5">Add Book </span>
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddBook;
