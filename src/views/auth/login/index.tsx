import styles from "@/styles/login.module.scss";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

const TampilanLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { push, query } = useRouter();
  const [error, setError] = useState("");
  
  const callbackUrl: any = query.callbackUrl || "/";

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: event.target.email.value,
        password: event.target.password.value,
        callbackUrl,
      });

      if (!res?.error) {
        setIsLoading(false);
        push(callbackUrl);
      } else {
        setIsLoading(false);
        setError(res?.error || "Login failed");
      }
    } catch (error) {
      setIsLoading(false);
      setError("wrong email or password");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Login</h1>
        {error && <p className={styles.error} style={{ color: "red", textAlign: "center", marginBottom: "1rem" }}>{error}</p>}
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label>Email</label>
            <input name="email" type="email" required />
          </div>
          <div className={styles.inputGroup}>
            <label>Password</label>
            <input name="password" type="password" required />
          </div>
          <button type="submit" className={styles.button} disabled={isLoading}>
            {isLoading ? "Loading..." : "Sign In"}
          </button>

          <button
            type="button"
            onClick={() => signIn("google", { callbackUrl, redirect: false })}
            className={styles.login_form_item_button || styles.button}
          >
            Sign in with Google
          </button>

          <button
            type="button"
            className={styles.button}
            style={{ backgroundColor: '#24292e', marginTop: '1rem' }}
            disabled={isLoading}
            onClick={() => signIn("github", { callbackUrl, redirect: false })}
          >
            {isLoading ? "Loading..." : "Sign in with GitHub"}
          </button>
        </form>
        <div className={styles.footer}>
          <p>
            Belum punya akun? <Link href="/auth/register">Register di sini</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TampilanLogin;