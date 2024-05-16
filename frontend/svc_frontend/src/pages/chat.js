import Cabecera from '@/components/cabecera';
import Pie from '../components/pie';
import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Chat = () => {

    return (
        <div>
        <Head>
            <title>Chat</title>
            <link rel="icon" href="./images/chat.png" />
        </Head>
            <Cabecera mostrarBotonHome={true} mostrarCerrarSesion={true}/>
            <>{/* CONTENIDO HTML */}</>
            <Pie />
        </div>
    );
};

export default Chat;