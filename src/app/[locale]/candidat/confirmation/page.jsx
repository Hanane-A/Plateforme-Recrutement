"use client";
import { Button } from "antd";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function Confirmation() {
  const route = useRouter();
  const t = useTranslations("Confirmation");
  return (
    <div style={{ padding: "2rem" }}>
      <h1>{t("confirmTitle")} 🎉</h1>
      <p>{t("confirmRemerci")}</p>
      <Button onClick={() => route.push("/candidat")}>{t("retourForm")}</Button>
    </div>
  );
}
