import Link from "next/link";
import styles from "@/app/styles/404.module.scss";
import Image from "next/image";
import err from "@/assets/imgs/socials/404.png";
export default function NotFound() {
  return (
    <div className={styles.container}>
      <Image src={err} alt="404err" />
      <h1>Sorry!! Page Not Found</h1>
      <Link href="/">Return Home</Link>
    </div>
  );
}
