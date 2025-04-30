"use client";

import { Form, Input, Button, Upload } from "antd";
import { ajouterCandidat } from "../redux/candidatsSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { UploadOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function FormulaireCandidat() {
  const dispatch = useDispatch();
  const route = useRouter();
  const [cvFile, setCvFile] = useState(null);

  const onFinish = (valeur) => {
    const newCandidat = { ...valeur };
    dispatch(ajouterCandidat(newCandidat));
    console.log("donnees: ", valeur);
    route.push("/candidat/confirmation"); // redirection a la page de confirmation
  };

  const t = useTranslations("Formulaire");

  return (
    <div
      className="form-container"
      style={{
        margin: "0 auto",
        width: "70%",
        maxWidth: 800,
      }}
    >
      <Form name="formulaireCandidat" layout="vertical" onFinish={onFinish}>
        <Form.Item
          label={t("nom")}
          name="nom"
          rules={[{ required: true, message: "Veuillez entrez votre nom" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={t("prenom")}
          name="prenom"
          rules={[{ required: true, message: "Veuillez entrez votre prenom" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={t("email")}
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

        <Form.Item
          label={t("telephone")}
          name="telephone"
          rules={[{ required: true, message: "Veuillez entrez votre prenom" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={t("description")}
          name="description"
          rules={[{ required: true, message: "Ajoutez une description brève" }]}
        >
          <Input.TextArea rows={3} placeholder="Parlez un peu de vous..." />
        </Form.Item>

        <Form.Item label="CV (PDF ou DOC)" name="cv">
          <Upload
            beforeUpload={(file) => {
              setCvFile(file); // enregistre le fichier sans l'uploader
              return false; // empêche le téléversement auto
            }}
            accept=".pdf,.doc,.docx"
            maxCount={1}
          >
            <Button icon={<UploadOutlined />}>{t("choisir")}</Button>
            {cvFile && <p>Fichier sélectionné : {cvFile.name}</p>}
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            {t("envoyer")}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
