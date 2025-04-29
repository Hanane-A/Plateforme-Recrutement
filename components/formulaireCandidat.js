"use client";

import { Form, Input, Button } from "antd";

export default function FormulaireCandidat() {
  const onFinish = (valeur) => {
    console.log("Données candidat: ", valeur);
  };

  return (
    <Form name="formulaireCandidat" layout="vertical" onFinish={onFinish}>
      <Form.Item
        label="Nom"
        name="nom"
        rules={[{ required: true, message: "Veuillez entrez votre nom" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="prenom"
        name="prenom"
        rules={[{ required: true, message: "Veuillez entrez votre prenom" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            type: "email",
            required: true,
            message: "Veuillez entrer un email valide",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Téléphone" name="telephone">
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Envoyer
        </Button>
      </Form.Item>
    </Form>
  );
}
