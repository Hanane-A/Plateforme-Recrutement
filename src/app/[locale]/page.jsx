"use client";

import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";
import { useTranslations } from "next-intl";
export default function Home() {
  const t = useTranslations("PageAccueil");
  return (
    <>
      <h1>{t("Bienvenu")}</h1>
      <Link href="/candidat" style={{ fontWeight: "bold", fontSize: "18px" }}>
        {t("AllerFormulaire")}
      </Link>
    </>
  );
}
