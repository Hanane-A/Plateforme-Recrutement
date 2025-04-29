"use client";
import { Button } from "antd";
import { useRouter } from "next/navigation";

export default function Confirmation() {
  const route = useRouter();
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Candidat ajouté avec succès 🎉</h1>
      <p>Merci d'avoir soumis vos informations.</p>
      <Button onClick={() => route.push("/candidat")}>
        Retour au Formulaire
      </Button>
    </div>
  );
}
