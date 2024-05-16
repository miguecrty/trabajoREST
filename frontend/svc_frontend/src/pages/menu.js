import Cabecera from '@/components/cabecera';
import Pie from '../components/pie';
import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
const Menu = () => {
    
    const router = useRouter();
    const handleItemClick = (url) => {
        router.push(url);
    };
    return (
        <div>
            <Head>
                <title>CHAT ETSI v1.0.0</title>
                <link rel="icon" href="./images/chat.png" />
            </Head>
            <Cabecera mostrarBotonHome={false} mostrarCerrarSesion={true}/>
            <div className="menu">
                <h1> CHAT ETSI v1.0.0 </h1>
                <ul className="menu-list">
                    <li className="menu-item-container" onClick={() => handleItemClick('/listacontactos')}>
                        <span className="menu-item">Lista de Contactos</span>
                        <img src="./images/lista.png" alt="Imagen 1" /> 
                    </li>
                    <li className="menu-item-container" onClick={() => handleItemClick('/chat')}>
                    <span className="menu-item">Chat</span> 
                        <img src="./images/chat.png" alt="Imagen 2" /> 
                    </li>
                </ul>
            </div>
            <Pie />
        </div>
    );
};

export default Menu;
