import { Link } from "react-router-dom";
import style from './Header.module.css';

function Header() {
    return (
        <header className={style.header}>
            <div className={style.texto}>
                <h2 className={style.nome}>Rafel Silva Soares</h2>
                <h3 className={style.titulo}>Personal Trainer</h3>
            </div>
            <nav className={style.nav}>
                <div className={style.ul}>
                    <button className={style.buttonStyle}>
                        <Link to="/">Home</Link>
                    </button>
                    <button className={style.buttonStyle}>
                        <Link to="/SobreMim">Sobre Mim</Link>
                    </button>
                    <button className={style.buttonStyle}>
                        <Link to="/Servicos">Pacotes</Link>
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header;
