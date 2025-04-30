"use client";
import { Button, Descriptions, Card } from "antd";
import { useTranslations } from "next-intl";
import { useParams, useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export default function DetailCandidat() {
  const { id } = useParams();
  const route = useRouter();
  const t = useTranslations("Recruteur");

  const Candidats = useSelector((state) => state.Candidats.liste);

  const candidat = Candidats.find((elm) => elm.key === parseInt(id));
  if (!candidat) {
    return (
      <>
        <h1>{t("candidatIntrou")}</h1>
        <Button onClick={() => route.push("/recruteur")}>{t("retour")}</Button>
      </>
    );
  }

  return (
    <>
      <Card title={t("detail")} variant="">
        <p>
          <strong>Nom :</strong> {candidat.nom}
        </p>
        <p>
          <strong>Prenom :</strong> {candidat.prenom}
        </p>
        <p>
          <strong>Email :</strong> {candidat.email}
        </p>
        <p>
          <strong>Téléphone :</strong> {candidat.telephone}
        </p>
        <p>
          <strong>Description :</strong> {candidat.description}
        </p>
        <Button
          type="primary"
          onClick={() => route.push("/recruteur")}
          style={{ marginTop: 16 }}
        >
          {t("retour")}
        </Button>
      </Card>
    </>
  );
}
