import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-light shadow-sm  mb-1 bg-body roundedsticky-top">
  <div className="container-fluid">
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    {/*Logo*/}
    <a className="navbar-brand" href="index.html">
      <h2>Style Gamers Shop</h2>
        
    </a>
    <div
      className="collapse navbar-collapse justify-content-end"
      id="navbarNavAltMarkup"
    >
      <div className="navbar-nav navi px-2">
        <a className="nav-link active" aria-current="page" href="index.html">
          Inicio
        </a>
        <a className="nav-link" href="index.html">
          Sobre Nosotros
        </a>
        <a className="nav-link" href="index.html">
          Carrito de Compras
        </a>
        <a className="nav-link" href="index.html">
          FAQs
        </a>
        <a className="nav-link" href="index.html">
          Contacto
        </a>
      </div>
    </div>
    <CartWidget />
  </div>
</nav>
    )
};
export default NavBar;
