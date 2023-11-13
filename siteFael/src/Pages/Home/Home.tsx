import Header from "../../Component/Header/Header";
import style from './Home.module.css';

function Home() {
    return (
        <body className={style.body}>
            <Header />
            <div className={style.textoContainer}>
                <h1>Consultoria</h1>
                <h3>Acompanhamento com personal trainer online.</h3>
                <button className={style.button}>Entrar em contato</button>
            </div>
        </body>
    );
}

export default Home;