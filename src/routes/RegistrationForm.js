import React, { useState } from 'react';
import { Button, Col, DatePicker, Form, Input, Row, Select, Space, Drawer, ConfigProvider, message } from 'antd';
import frFR from 'antd/es/locale/fr_FR';
import axios from 'axios';
import moment from 'moment';
import 'moment/locale/fr';

moment.locale('fr');

const { Option } = Select;

function RegistrationForm({ isOpen, onClose }) {
  const [form] = Form.useForm();
  const [codePostal, setCodePostal] = useState('');
  const [ville, setVille] = useState([]);
  const [selectedVille, setSelectedVille] = useState('');

  const fetchVillesParCodePostal = async (code) => {
    try {
      const response = await axios.get(`https://geo.api.gouv.fr/communes?codePostal=${code}&fields=nom`);
      if (response.data && response.data.length > 0) {
        setVille(response.data.map(v => ({ nom: v.nom })));
      } else {
        setVille([]);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des villes", error);
      setVille([]);
    }
  };

  const handleCodePostalChange = (e) => {
    const code = e.target.value;
    setCodePostal(code);
    if (code.length === 5) {
      fetchVillesParCodePostal(code);
    }
  };

  const handleVilleSelect = (value) => {
    setSelectedVille(value);
  };

  const handleSubmit = () => {
    form.validateFields().then(values => {
      message.success('Inscription réussie !');
      form.resetFields();
      onClose();
    }).catch(info => {
      message.error('Veuillez remplir tous les champs.');
    });
  };

  return (
    <ConfigProvider locale={frFR}>
      <div className="Registration">
        <Drawer
          title="Inscription | Connexion"
          placement='left'
          width={720}
          visible={isOpen}
          onClose={onClose}
          extra={
            <Space>
              <Button onClick={handleSubmit} type="primary">Soumettre</Button>
            </Space>
          }
        >
          <Form layout="vertical" form={form} hideRequiredMark>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item name="firstName" label="Prénom" rules={[{ required: true, message: 'Veuillez entrer votre prénom' }]}>
                  <Input placeholder="Entrez votre prénom" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="lastName" label="Nom" rules={[{ required: true, message: 'Veuillez entrer votre nom' }]}>
                  <Input placeholder="Entrez votre nom" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item name="dateOfBirth" label="Date de naissance" rules={[{ required: true, message: 'Veuillez sélectionner votre date de naissance' }]}>
                  <DatePicker style={{ width: '100%' }} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="gender" label="Genre" rules={[{ required: true, message: 'Veuillez sélectionner votre genre' }]}>
                  <Select placeholder="Sélectionnez votre genre">
                    <Option value="female">Femme</Option>
                    <Option value="male">Homme</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Veuillez entrer votre email' }, { type: 'email', message: 'L\'adresse email n\'est pas valide' }]}>
                  <Input placeholder="Entrez votre email" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="phoneNumber" label="Numéro de téléphone" rules={[{ required: true, message: 'Veuillez entrer votre numéro de téléphone' }]}>
                  <Input placeholder="Entrez votre numéro de téléphone" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item name="codePostal" label="Code Postal" rules={[{ required: true, message: 'Veuillez entrer votre code postal' }]}>
                  <Input placeholder="Code Postal" value={codePostal} onChange={handleCodePostalChange} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="ville" label="Ville" rules={[{ required: true, message: 'Veuillez sélectionner votre ville' }]}>
                  <Select showSearch placeholder="Sélectionnez votre ville" value={selectedVille} onChange={handleVilleSelect} allowClear>
                    {ville.map(v => <Option key={v.nom} value={v.nom}>{v.nom}</Option>)}
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item name="password" label="Mot de passe" rules={[{ required: true, message: 'Veuillez entrer votre mot de passe' }, { min: 6, message: 'Le mot de passe doit contenir au moins 6 caractères' }]}>
                  <Input.Password placeholder="Entrez votre mot de passe" />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Drawer>
      </div>
    </ConfigProvider>
  );
}

export default RegistrationForm;