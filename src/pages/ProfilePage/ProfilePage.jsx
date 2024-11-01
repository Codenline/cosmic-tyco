import './ProfilePage.css'

export default function ProfilePage() {
  return (
    <div className='profile-body'>
      <div className='profile-sidebar'>
        <h2>Minhas informações</h2>
        <h2>Meus pedidos</h2>
        <h2>Meus cupons</h2>
        <h2>Favoritos</h2>
        <h2>Devolução</h2>
        <h2>Serviço ao cliente</h2>
      </div>
      <div class="profile-container">
        <div class="profile-form">
          <div class="profile-form-logo">
            <img class="pfp" src="./user.png" alt="user-pfp" />
          </div>
          <form>
            <input type="password" placeholder="Nome:" />
            <input type="password" placeholder="Sobrenome:" />
            <input type="text" placeholder="E-mail:" />
            <input type="text" placeholder="CPF:" />
            <input type="text" placeholder="Alterar senha:" />
          </form>
        </div>
      </div>
    </div>
  )
}