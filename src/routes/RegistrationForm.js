import React, { useState } from 'react';
import { Button, Col, DatePicker, Form, Input, Row, Select, Space, Drawer, ConfigProvider, message, Tabs } from 'antd';
import frFR from 'antd/es/locale/fr_FR';
import axios from 'axios';
import moment from 'moment';
import 'moment/locale/fr';

moment.locale('fr');

const { Option } = Select;
const { TabPane } = Tabs;

function RegistrationForm({ isOpen, onClose }) {
  const [formInscription] = Form.useForm();
  const [formConnexion] = Form.useForm();
  const [codePostal, setCodePostal] = useState('');
  const [ville, setVille] = useState([]);
  const [selectedVille, setSelectedVille] = useState('');
  const [activeTab, setActiveTab] = useState('inscription');
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    phoneNumber: "",
    gender: "",
    codePostal: "",
    ville: "",
    password: ""
  });  

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



  const handleChange = (value, fieldName) => {
    setUser(prevUser => ({
      ...prevUser,
      [fieldName]: value,
    }));
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

  const handleSubmitInscription = () => {
    formInscription.validateFields()
      .then(values => {
        axios.post('http://localhost:3000/api/users/register', values)
            .then(response => {
            message.success('Inscription réussie !');
            formInscription.resetFields();
            onClose();
          })
          .catch(error => {
            message.error('Une erreur est survenue lors de l\'inscription.');
          });
      })
      .catch(info => {
        message.error('Veuillez remplir tous les champs requis pour l\'inscription.');
      });
  };  

  const handleSubmitConnexion = () => {
    formConnexion.validateFields().then(values => {
      message.success('Connexion réussie !');
      formConnexion.resetFields();
      onClose();
    }).catch(info => {
      message.error('Veuillez remplir tous les champs requis pour la connexion.');
    });
  };

  console.log(user)

  return (
    <ConfigProvider locale={frFR}>
      <Drawer
        title="Compte client"
        placement='left'
        width={720}
        open={isOpen}
        onClose={onClose}
        extra={
          <Space>
            <Button onClick={activeTab === 'inscription' ? handleSubmitInscription : handleSubmitConnexion} type="primary">
              Soumettre
            </Button>
          </Space>
        }
      >
        <Tabs defaultActiveKey="inscription" onChange={(key) => setActiveTab(key)}>
          <TabPane tab="Inscription" key="inscription">
            <Form layout="vertical" form={formInscription} hideRequiredMark>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item name="firstName" label="Prénom" rules={[{ required: true, message: 'Veuillez entrer votre prénom' }]}>
                    <Input placeholder="Entrez votre prénom" onChange={e => handleChange(e.target.value, 'firstName')} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="lastName" label="Nom" rules={[{ required: true, message: 'Veuillez entrer votre nom' }]}>
                    <Input placeholder="Entrez votre nom" onChange={e => handleChange(e.target.value, 'lastName')}  />
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
                    <Select placeholder="Sélectionnez votre genre" onChange={value => handleChange(value, 'gender')} >
                      <Option value="female">Femme</Option>
                      <Option value="male">Homme</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Veuillez entrer votre email' }, { type: 'email', message: 'L\'adresse email n\'est pas valide' }]}>
                    <Input placeholder="Entrez votre email" onChange={e => handleChange(e.target.value, 'email')} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="phoneNumber" label="Numéro de téléphone" rules={[{ required: true, message: 'Veuillez entrer votre numéro de téléphone' }]}>
                    <Input placeholder="Entrez votre numéro de téléphone" onChange={e => handleChange(e.target.value, 'phoneNumber')} />
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
                    <Input.Password placeholder="Entrez votre mot de passe" onChange={e => handleChange(e.target.value, 'password')}  />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </TabPane>
          <TabPane tab="Connexion" key="connexion">
            <Form layout="vertical" form={formConnexion} hideRequiredMark>
              <Form.Item
                name="loginEmail"
                label="Email"
                rules={[{ required: true, message: "Veuillez entrer votre email" }, { type: 'email', message: "L'email n'est pas valide" }]}
              >
                <Input placeholder="Entrez votre email" />
              </Form.Item>
              <Form.Item
                name="loginPassword"
                label="Mot de passe"
                rules={[{ required: true, message: "Veuillez entrer votre mot de passe" }]}
              >
                <Input.Password placeholder="Entrez votre mot de passe" />
              </Form.Item>
            </Form>
          </TabPane>
        </Tabs>
      </Drawer>
    </ConfigProvider>
  
  );
}

export default RegistrationForm;