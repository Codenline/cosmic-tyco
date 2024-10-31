import "./LoginPage.css"
import { Link } from 'react-router-dom'
import Carousel from '../../components/Carousel/Carousel'



export default function LoginPage() {

  const collection_images = [
    'collections_banners/aqueles que sabem de tudo.png',
    'collections_banners/Arte Sublime.png',
    'collections_banners/Gear World.png'
  ];

  return (
    <body className="login-body">
      <div className="login-container">
        <Carousel images={collection_images}/>
        <div className="login-form">
          <div className="login-form-logo">
            <img src="/cosmic_tyko.webp" alt="Logo" />
          </div>
          <h2>Faça login na sua conta:</h2>
          <form>
            <input type="text" placeholder="Usuário ou e-mail:" />
            <input type="password" placeholder="Senha:" />
            <Link to={`/`}>
              <button type="submit">Entrar</button>
            </Link>
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
  )
}