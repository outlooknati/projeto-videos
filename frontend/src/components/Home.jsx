import React from "react";
import Main from "../template/Main";

const Home = () => (
    <Main icon = "home" title = "inicio" subtitle = "Primeiro Projeto do capítulo de React.">
        <div className="display-4"> Bem Vindo! </div>
        <hr/>
        <P className="mb-0"> Sistema para exemplificar a construção de um projeto desenvolvido em React!</P>
    </Main>
);

export default Home;