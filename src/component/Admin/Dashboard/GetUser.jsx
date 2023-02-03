import React, { useEffect, useState } from "react";
import { Button, Checkbox, DatePicker, Form, Input, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getAdminUserByIDAction,
  UpdateAdminUserAction,
} from "redux/actions/AdminUserAction";
import dayjs from "dayjs";
import { Avatar } from "antd";

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
function GetUser() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    forceUpdate({});
    dispatch(getAdminUserByIDAction(id));
  }, [dispatch, id]);

  const { getUserByID } = useSelector((state) => state.AdminUserReducers);

  const onFinish = async (values) => {
    const data = {
      id: id,
      name: values.name,
      email: values.email,
      phone: values.phone,
      birthday: dayjs(values.birthday).format("DD/MM/YYYY"),
      gender: values.gender,
      role: values.typeUser,
    };
  };

  const onChange = (date, dateString) => {};
  return (
    getUserByID?.id && (
      <div>
        <div className="container">
          <h1 className="text-center mr-40">UpDate User</h1>
          <div>
            <div className="w-1/4 mx-auto mb-4">
              <Avatar
                size={{
                  xs: 24,
                  sm: 32,
                  md: 40,
                  lg: 64,
                  xl: 80,
                  xxl: 100,
                }}
                src={getUserByID.avatar}
              />
            </div>
            <div>
              {" "}
              <Form
                {...formItemLayout}
                className="col-span-9"
                form={form}
                name="register"
                onFinish={onFinish}
                initialValues={{
                  prefix: "84",
                }}
                style={{
                  maxWidth: 600,
                }}
                scrollToFirstError
                disabled={true}
              >
                {/* Name */}
                <Form.Item
                  name="name"
                  label="Name"
                  initialValue={getUserByID.name}
                  // tooltip="What do you want others to call you?"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Name!",
                      whitespace: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                {/* email */}
                <Form.Item
                  initialValue={getUserByID.email}
                  name="email"
                  label="E-mail"
                  rules={[
                    {
                      type: "email",
                      message: "The input is not valid E-mail!",
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Date of birth"
                  name="birthday"
                  initialValue={dayjs(`${getUserByID.birthday}`, "DD/MM/YYYY")}
                >
                  <DatePicker onChange={onChange} format={"DD/MM/YYYY"} />
                </Form.Item>

                {/* phone Number */}
                <Form.Item
                  name="phone"
                  label="Phone Number"
                  rules={[
                    {
                      required: true,
                      message: "Please input your phone number!",
                    },
                  ]}
                  initialValue={getUserByID.phone}
                >
                  <Input
                    style={{
                      width: "100%",
                    }}
                  />
                </Form.Item>

                {/* loai nguoi dung */}
                <Form.Item
                  initialValue={getUserByID.role}
                  name="typeUser"
                  label="Type User"
                  rules={[
                    {
                      required: true,
                      message: "Please select type user!",
                    },
                  ]}
                >
                  <Select placeholder="select type user">
                    <Option value="ADMIN">Admin</Option>
                    <Option value="USER">User</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  name="gender"
                  label="Gender"
                  initialValue={getUserByID.gender}
                  rules={[
                    {
                      required: true,
                      message: "Please select gender!",
                    },
                  ]}
                >
                  <Select placeholder="select your gender">
                    <Option value={true}>Male</Option>
                    <Option value={false}>Female</Option>
                  </Select>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default GetUser;
