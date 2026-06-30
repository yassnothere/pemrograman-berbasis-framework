import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { signIn, signOut, useSession } from "next-auth/react";
import styles from "@/styles/navbar.module.scss"; 

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_brand} id="title"></div>
      <Script id="title-script" strategy="lazyOnload">
        {`document.getElementById('title').innerHTML = 'MyApp';`}
      </Script>

      <div className={styles.navMenu}>
        <Link href="/">Home</Link>
        <Link href="/produk">Produk</Link>
      </div>

      <div className={styles.profile}>
        {session ? (
          <>
            <span className={styles.username}>Halo, {(session?.user as any)?.fullname}</span>
            {session?.user?.image && (
              <Image
                src={session.user.image}
                alt={(session.user as any)?.fullname || "Avatar"}
                className={styles.avatar}
                width={42}
                height={42}
              />
            )}
            <button className={styles.btn} onClick={() => signOut()}>Sign Out</button>
          </>
        ) : (
          <button className={styles.btn} onClick={() => signIn()}>Sign In</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;