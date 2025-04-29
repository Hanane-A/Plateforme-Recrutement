"use client";
import { Table } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function ListeCandidat() {
  const route = useRouter();

  const donnees = useSelector((state) => state.Candidats.liste);

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

  return <Table dataSource={donnees} columns={Colonnes} pagination={false} />;
}
