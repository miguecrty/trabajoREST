import React, { useState, useEffect, useRef } from 'react';
import Cabecera from '@/components/cabecera';
import Pie from '../components/pie';
import Head from 'next/head';
import Cookies from 'js-cookie';

const Chat = () => {
    const [mensaje, setMensaje] = useState('');
    const [mensajes, setMensajes] = useState([]);
    const username = Cookies.get('username');
    const mensajesRef = useRef(null);

    useEffect(() => {
        // Cuando cambie la lista de mensajes, asegúrate de que la barra de desplazamiento esté siempre en la parte inferior
        if (mensajesRef.current) {
            mensajesRef.current.scrollTop = mensajesRef.current.scrollHeight;
        }
    }, [mensajes]);

    const handleEnviarMensaje = () => {
        if (mensaje.trim() !== '') {
            const nuevoMensaje = {
                contenido: mensaje,
                remitente: 'Tú',
                hora: obtenerHoraActual()
            };
            setMensajes([...mensajes, nuevoMensaje]);
            setMensaje('');
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleEnviarMensaje();
        }
    };

    const obtenerHoraActual = () => {
        const fecha = new Date();
        const hora = fecha.getHours().toString().padStart(2, '0');
        const minutos = fecha.getMinutes().toString().padStart(2, '0');
        return `${hora}:${minutos}`;
    };

    return (
        <div>
            <Head>
                <title>Chat</title>
                <link rel="icon" href="./images/chat.png" />
                <link rel="stylesheet" href="./styles/chat.css" />
            </Head>
            <Cabecera mostrarBotonHome={true} mostrarCerrarSesion={true} />
            <h1 className="text-center my-5 display-4 font-weight-bold text-uppercase text-secondary">Chat</h1>
            <div className="container mt-5">
                <div className="card chat-container" ref={mensajesRef}>
                    <div className="card-body">
                        <div className="messages">
                            {mensajes.map((msg, index) => (
                                <div className="message sent" key={index}>
                                    <p>{msg.contenido}</p>
                                    <small className="text-muted">{msg.remitente} - {msg.hora}</small>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="card-footer">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Escribe un mensaje..."
                            value={mensaje}
                            onChange={(e) => setMensaje(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                    </div>
                </div>
            </div>
            <Pie />
        </div>
    );
};

export default Chat;
