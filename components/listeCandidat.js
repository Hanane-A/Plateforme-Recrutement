"use client";
import { Table } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ListeCandidat() {
  const route = useRouter();

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

  const Colonnes = [
    {
      title: "Nom",
      dataIndex: "nom",
      key: "nom",
    },
    {
      title: "Prenom",
      dataIndex: "prenom",
      key: "prenom",
    },
    { title: "Email", dataIndex: "email", key: "email" },
    {
      title: "Telephone",
      dataIndex: "telephone",
      key: "telephone",
    },
    {
      title: " Action",
      key: "Action",
      render: (_, record) => (
        <a onClick={() => route.push(`/recruteur/${record.key}`)}>
          voir detail
        </a>
      ),
    },
  ];

  return <Table dataSource={Candidats} columns={Colonnes} pagination={false} />;
}
