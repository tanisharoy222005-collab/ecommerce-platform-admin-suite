import { useState } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

export default function Login() {

  const router = useRouter();

  const [email,setEmail] =
    useState("");

  const [password,setPassword] =
    useState("");

  const [error,setError] =
    useState("");

  const handleLogin = () => {

    if(
      email ===
      "admin@commerceos.com" &&
      password ===
      "password123"
    ){

      localStorage.setItem(
        "token",
        "authenticated"
      );

      router.push("/admin");

      return;
    }

    setError(
      "Invalid credentials"
    );
  };

  return (

    <Layout>

      <div
        className="login-card"
      >

        <h1>
          Admin Login
        </h1>

        <p>
          Demo Credentials
        </p>

        <p>
          admin@commerceos.com
        </p>

        <p>
          password123
        </p>

        <input
          placeholder="Email"
          value={email}
          onChange={(e)=>
            setEmail(
              e.target.value
            )
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>
            setPassword(
              e.target.value
            )
          }
        />

        {error && (
          <span className="error">
            {error}
          </span>
        )}

        <button
          className="primary-btn"
          onClick={handleLogin}
        >
          Login
        </button>

      </div>

    </Layout>
  );
}
