import { useTranslations } from "next-intl";
import FormulaireCandidat from "../../../../components/formulaireCandidat";

export default function Candidat() {
  const t = useTranslations("Formulaire");
  return (
    <>
      <h1>{t("titreForm")}</h1>
      <FormulaireCandidat />
    </>
  );
}
