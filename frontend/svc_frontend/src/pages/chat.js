import React, { useState, useEffect, useRef } from 'react';
import Cabecera from '@/components/cabecera';
import Pie from '../components/pie';
import Head from 'next/head';
import Cookies from 'js-cookie';
import Link from 'next/link';
import io from 'socket.io-client';

const Chat = () => {
    const [mensaje, setMensaje] = useState('');
    const [mensajes, setMensajes] = useState([]);
    const username = Cookies.get('username');
    const mensajesRef = useRef(null);
    const messagesEndRef = useRef(null);
    async function actualizarTablaMensajes() {
        try {
            const response = await fetch('/api/obtenermensajes', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            const respuesta = await response.json();
            if (response.ok) {
                setMensajes(respuesta);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    useEffect(() => {
        actualizarTablaMensajes();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            actualizarTablaMensajes();
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [mensajes]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    async function insertarMensaje(mensaje) {
        try {
            const response = await fetch('/api/insertarmensaje', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(mensaje)
            });
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const handleEnviarMensaje = async () => {
        if (mensaje.trim() !== '') {
            const nuevoMensaje = {
                contenido: mensaje,
                nombre_usu: username,
                hora: obtenerHoraActual()
            };
            await insertarMensaje(nuevoMensaje);
            setMensaje('');
            actualizarTablaMensajes();
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
        const segundos = fecha.getSeconds().toString().padStart(2, '0');
        return `${hora}:${minutos}:${segundos}`;
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
                                msg.nombre_usu === username ? (
                                    <div className="message sent" key={index}>
                                        <p>{msg.mensaje}</p>
                                        <Link href={`/detallecontacto?n=${username}`}>
                                            <small className="text-muted">Tú</small>
                                        </Link>
                                        <small className="text-muted"> - {msg.hora}</small>
                                    </div>
                                ) : (
                                    <div className="message received" key={index}>
                                        <p>{msg.mensaje}</p>
                                        <Link href={`/detallecontacto?n=${msg.nombre_usu}`}>
                                            <small className="text-muted">{msg.nombre_usu}</small>
                                        </Link>
                                        <small className="text-muted"> - {msg.hora}</small>
                                    </div>
                                )
                            ))}
                            <div ref={messagesEndRef} />
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
