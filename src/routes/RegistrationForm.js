import React, { useState } from 'react';
import { Button, Col, DatePicker, Form, Input, Row, Select, Space, Drawer } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { Option } = Select;

function RegistrationForm() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="Registration">
      <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
      Inscription | Connexion
      </Button>
      <Drawer
        title="Compte client"
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{ paddingBottom: 80 }}
        extra={
          <Space>
            <Button onClick={onClose}>Quitter</Button>
            <Button onClick={onClose} type="primary">
              Soumettre
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="firstName"
                label="Prénom"
                rules={[{ required: true, message: 'Veuillez entrer votre prénom' }]}
              >
                <Input placeholder="Entrez votre prénom" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="lastName"
                label="Nom"
                rules={[{ required: true, message: 'Veuillez entrer votre nom' }]}
              >
                <Input placeholder="Entrez votre nom" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="dateOfBirth"
                label="Date de naissance"
                rules={[{ required: true, message: 'Veuillez sélectionner votre date de naissance' }]}
              >
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="gender"
                label="Genre"
                rules={[{ required: true, message: 'Veuillez sélectionner votre genre' }]}
              >
                <Select placeholder="Sélectionnez votre genre">
                <Option value="female">Femme</Option>
                  <Option value="male">Homme</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  { required: true, message: 'Veuillez entrer votre email' },
                  { type: 'email', message: 'L\'adresse email n\'est pas valide' },
                ]}
              >
                <Input placeholder="Entrez votre email" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="phoneNumber"
                label="Numéro de téléphone"
                rules={[{ required: true, message: 'Veuillez entrer votre numéro de téléphone' }]}
              >
                <Input placeholder="Entrez votre numéro de téléphone" />
              </Form.Item>
            </Col>
          </Row>
                  <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="codePostal"
              label="Code Postal"
              rules={[{ required: true, message: 'Veuillez entrer votre code postal' }]}
            >
              <Input placeholder="Code Postal" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="ville"
              label="Ville"
              rules={[{ required: true, message: 'Veuillez entrer votre ville' }]}
            >
              <Input placeholder="Ville" />
            </Form.Item>
          </Col>
        </Row>
        </Form>
      </Drawer>
    </div>
  );
}

export default RegistrationForm;