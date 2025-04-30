"use client";
import { Table } from "antd";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function ListeCandidat() {
  const route = useRouter();

  const donnees = useSelector((state) => state.Candidats.liste);
  const t = useTranslations("Recruteur");

  //les colonnes du composant Table
  const Colonnes = [
    {
      title: t("nom"),
      dataIndex: "nom",
      key: "nom",
    },
    {
      title: t("prenom"),
      dataIndex: "prenom",
      key: "prenom",
    },
    { title: "Email", dataIndex: "email", key: "email" },
    {
      title: t("telephone"),
      dataIndex: "telephone",
      key: "telephone",
    },
    {
      title: t("action"),
      key: "Action",
      render: (_, record) => (
        <a onClick={() => route.push(`/recruteur/${record.key}`)}>Detail</a>
      ),
    },
  ];

  return (
    <Table
      dataSource={donnees}
      columns={Colonnes}
      pagination={false}
      scroll={{ x: "max-content" }} // active le scroll horizontal si nécessaire
    />
  );
}
