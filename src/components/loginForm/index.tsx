import React, { useState } from 'react';
import { Button, Form, Input, message, Radio } from 'antd';
import Password from 'antd/es/input/Password';

type LayoutType = Parameters<typeof Form>[0]['layout'];
type LoginFormProps={
  sendStateToLogin:(state:boolean)=>void
}

const LoginForm = (props:LoginFormProps) => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>('vertical');

  const handleFinish=(values:any)=>{
    fetch('https://192.168.80.188:7251/api/Authenticate', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          email: values.username,
          password: values.password,
          role: '1',
      })
  })
      .then(response => {
          if (!response.ok) {
              // If the response status is not ok, throw an error
              throw new Error('Failed to authenticate');
          }
          return response.json(); // Only try to parse as JSON if the response is okay
      })
      .then(data => {
          if (data === 'Invalid credentials') {
              // Handle invalid credentials
              message.info('Tên đăng nhập hoặc mật khẩu không đúng');
          } else if (data.token) {
              // If a token is returned, store it and handle successful login
              console.log(data.token);
              localStorage.setItem('token', data.token);
              props.sendStateToLogin(true);
          } else {
              // If the response doesn't contain a token, handle unexpected response
              console.error('Unexpected response structure', data);
          }
      })
      .catch(error => {
          // Handle any error that occurs during fetch or JSON parsing
          console.error('Authentication failed:', error);
          message.error('Đã có lỗi xảy ra, vui lòng thử lại!');
      });
  
  }

  return (
    <Form
      layout={formLayout}
      form={form}
      initialValues={{ layout: formLayout }}
      onFinish={handleFinish}
      style={{ maxWidth: formLayout === 'inline' ? 'none' : 600 }}
    >
      <Form.Item name='username' label="Tên đăng nhập *">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item name='password' label="Mật khẩu *">
        <Input placeholder="input placeholder" type='password' />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType='submit'>Submit</Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;