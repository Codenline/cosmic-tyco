import "./LoginPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";
import { Link } from 'react-router-dom';

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita o comportamento padrão do formulário
    try {
      const response = await fetch("http://localhost:5195/api/v1/cliente/entrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senha }),
      });

      if (response.status === 200) {
        navigate("/"); // Redireciona para a rota inicial
      } else {
        alert("Senha incorreta."); // Exibe mensagem de erro
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Ocorreu um erro. Tente novamente mais tarde.");
    }
  };

  const collection_images = [
    "collections_banners/Arte Sublime.png",
    "collections_banners/aqueles que sabem de tudo.png",
    "collections_banners/Gear World.png",
  ];

  return (
    <body className="login-body">
      <div className="login-container">
        <Carousel images={collection_images} />
        <div className="login-form">
          <div className="login-form-logo">
            <img src="/cosmic_tyko.webp" alt="Logo" />
          </div>
          <h2>Faça login na sua conta:</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Usuário ou e-mail:"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Senha:"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <button type="submit">Entrar</button>
          </form>
          <div className="login-links">
            <p>Esqueceu sua senha?</p>
            <Link to={`/Register`}>
              <p>Não possui uma conta?</p>
            </Link>
          </div>
        </div>
      </div>
    </body>
  );
}
