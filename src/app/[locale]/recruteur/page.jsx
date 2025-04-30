import { useTranslations } from "next-intl";
import ListeCandidat from "../../../../components/listeCandidat";

export default function PageListeCandidat() {
  const t = useTranslations("Recruteur");
  return (
    <>
      <h2>{t("titreListe")}</h2>
      <ListeCandidat />
    </>
  );
}
