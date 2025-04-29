"use client";
import { Button, Descriptions, Card } from "antd";
import { useParams, useRouter } from "next/navigation";

export default function DetailCandidat() {
  const { id } = useParams();
  const route = useRouter();

  //Simulation des candidats
  const Candidats = [
    {
      key: 1,
      nom: "ADELEKE",
      prenom: "hanane",
      email: "adeleke.hanan@gmail.com",
      telephone: "0758246730",
    },
    {
      key: 2,
      nom: "Tiktok",
      prenom: "reseau",
      email: "titok@gmail.com",
      telephone: "0454545474",
    },
  ];

  const candidat = Candidats.find((elm) => elm.key === parseInt(id));
  if (!candidat) {
    return (
      <>
        <h1>Candidat introuvable</h1>
        <Button onClick={() => route.push("/recruteur")}>
          Retour au liste
        </Button>
      </>
    );
  }

  return (
    <>
      <Card title="Détail du Candidat" bordered>
        <p>
          <strong>Nom :</strong> {candidat.nom}
        </p>
        <p>
          <strong>Email :</strong> {candidat.email}
        </p>
        <p>
          <strong>Téléphone :</strong> {candidat.telephone}
        </p>
        <Button
          type="primary"
          onClick={() => route.push("/recruteur")}
          style={{ marginTop: 16 }}
        >
          Retour à la liste
        </Button>
      </Card>
    </>
  );
}
