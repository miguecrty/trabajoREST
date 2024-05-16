import Cabecera from '@/components/cabecera';
import Pie from '../components/pie';
import React from 'react';
import Head from 'next/head';

const ListaContactos = () => {
    return (
        <div>
            <Head>
                <title>Lista de Contactos</title>
                <link rel="icon" href="./images/chat.png" />
            </Head>
            <Cabecera mostrarBotonHome={true} mostrarCerrarSesion={true}/>
            <>{/* CONTENIDO HTML */}</>
            <Pie />
        </div>
    );
};

export default ListaContactos;