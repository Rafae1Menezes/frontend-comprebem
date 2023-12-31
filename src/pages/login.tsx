import classNames from "classnames";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { Logo } from "../components/logo";
import styles from "../styles/login.module.scss";

export default function Login() {
  const { data: session } = useSession();
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const emailField = e.target["email"] as HTMLInputElement;
    const passwordField = e.target["password"] as HTMLInputElement;

    const result = await signIn("credentials", {
      redirect: false,
      email: emailField.value.trim(),
      password: passwordField.value,
    });

    if (!result?.error) {
      setError(false);
      router.push("/");
    } else {
      emailField.focus();
      setError(true);
      return;
    }
  };

  const removeError = () => {
    setError(false);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.wellcome}>Seja Bem-vindo</h2>
      <div className={styles.logo}>
        <Logo width={213} />
      </div>

      <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.form_title}>Login</div>
        <input
          type="text"
          name="email"
          placeholder="E-mail"
          onChange={removeError}
          className={classNames({ [styles.error]: error })}
        />
        {error && (
          <div className={styles.errorMsg}>E-mail e senha não conferem</div>
        )}
        <input
          onChange={removeError}
          type="password"
          name="password"
          placeholder="Senha"
          className={styles.form_password}
        />
        <div className={styles.form_text}>
          Esqueceu a senha? <a href="#">Clique aqui.</a>
        </div>
        <div className={styles.form_text}>
          Ainda não tem uma conta? <a href="#">Criar conta.</a>
        </div>
        <button type="submit" className={styles.button}>
          Entrar
        </button>
      </form>
    </div>
  );
}
