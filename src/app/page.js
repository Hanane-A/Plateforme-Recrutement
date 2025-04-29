import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <h1>Bienvenu sur notre plateforme de recrutement</h1>
      <Link href="/candidat">Aller au formulaire de candidature</Link>
    </>
  );
}
