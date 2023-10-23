import React from "react";
import styles from "./footer.module.scss";
import logo from "@/assets/imgs/logo/logo.png";
import Image from "next/image";
import facebook from "@/assets/imgs/socials/fb.png";
import instagram from "@/assets/imgs/socials/pngwing.com.png";
import github from "@/assets/imgs/socials/git.png";
import linkedin from "@/assets/imgs/socials/linkedin.png";
import Link from "next/link";
const Footer: React.FC = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image
            src={logo}
            alt="Sieubuong."
            width={50}
            height={50}
            style={{ borderRadius: "50%" }}
          />
          <h1 className={styles.logoText}>SieuBuong</h1>
        </div>
        <p className={styles.decs}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam eius
          ipsa dolor officiis perspiciatis, placeat odio molestias sapiente
          harum laudantium magnam veritatis minus assumenda sed soluta rerum
          laborum fuga consectetur.
        </p>
        <div className={styles.icons}>
          <Image src={facebook} alt="facebook" width={18} height={18} />
          <Image src={instagram} alt="instagram" width={18} height={18} />
          <Image src={github} alt="github" width={18} height={18} />
          <Image src={linkedin} alt="linkedin" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">HomePage</Link>
          <Link href="/">Categories</Link>
          <Link href="/">Contact</Link>
          <Link href="/">About</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Kitchen</Link>
          <Link href="/">Skin care</Link>
          <Link href="/">Electronics</Link>
          <Link href="/">Chairs</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Github</Link>
          <Link href="/">Linked</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
