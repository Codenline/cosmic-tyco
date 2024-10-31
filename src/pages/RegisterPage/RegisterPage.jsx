import "./RegisterPage.css"
import { Link } from 'react-router-dom'
import Carousel from '../../components/Carousel/Carousel'



export default function RegisterPage() {

  const collection_images = [
    'collections_banners/aqueles que sabem de tudo.png',
    'collections_banners/Arte Sublime.png',
    'collections_banners/Gear World.png'
  ];

  return (
    <body className="register-body">
      <div className="register-container">
        <Carousel images={collection_images} />
        <div className="register-form">
          <div className="register-form-logo">
            <img src="/cosmic_tyko.webp" alt="Logo" />
          </div>
          <h2>Crie uma conta:</h2>
          <form>
            <input type="text" placeholder="E-mail:" />
            <input type="text" placeholder="Nome de usuário:" />
            <input type="password" placeholder="Crie uma senha:" />
            <input type="password" placeholder="Digite novamente a senha:" />
            <Link to={`/`}>
              <button type="submit">Entrar</button>
            </Link>
          </form>
          <div className="register-links">
            <Link to={`/Login`}>
              <p>Já possui uma conta?</p>
            </Link>
          </div>
        </div>
      </div>
    </body>
  )
}