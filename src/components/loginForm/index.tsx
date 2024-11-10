import React, { useState } from 'react';
import { Button, Form, Input, Radio } from 'antd';

type LayoutType = Parameters<typeof Form>[0]['layout'];

const LoginForm: React.FC = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>('vertical');


  return (
    <Form
      layout={formLayout}
      form={form}
      initialValues={{ layout: formLayout }}
      style={{ maxWidth: formLayout === 'inline' ? 'none' : 600 }}
    >
      <Form.Item label="Tên đăng nhập *">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Mật khẩu *">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item>
        <Button type="primary">Submit</Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;