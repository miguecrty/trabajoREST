import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Cabecera from '@/components/cabecera';
import Pie from '../components/pie';
import { useRouter } from 'next/router';

const DetalleContacto = () => {
    const router = useRouter();
    const [cliente, setCliente] = useState(null);

    useEffect(() => {
        async function fetchDetalleCliente(peticion) {
            try {
                const response = await fetch(peticion);
                if (!response.ok) {
                    throw new Error('Error al obtener detalle del cliente');
                }
                const data = await response.json();
                setCliente(data[0]); // Actualizamos para tomar el primer cliente de la respuesta
            } catch (error) {
                console.error('Error:', error);
                // Manejar el error según tus necesidades
            }
        }
        if (router.query.id) {
            let peticion = `/api/obtenerdetalle?id=${router.query.id}`;
            fetchDetalleCliente(peticion);
        }
        if (router.query.n)
        {
            let peticion = `/api/obtenerdetalle?n=${router.query.n}`;
            fetchDetalleCliente(peticion);
        }
    }, [router.query.id,router.query.n]);

    return (
        <div>
            <Head>
                <title>Detalle del Contacto</title>
                <link rel="icon" href="/images/chat.png" />
                <link rel="stylesheet" href="./styles/detallecontacto.css" />
            </Head>
            <Cabecera mostrarBotonHome={true} mostrarCerrarSesion={true}/>
            <div className="container my-5">
                {cliente ? (
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-primary text-white">
                            <h4 className="card-title">{cliente.nombre_usu}</h4>
                        </div>
                        <div className="card-body">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>ID:</strong> {cliente.id}</li>
                                <li className="list-group-item"><strong>Nombre:</strong> {cliente.nombre}</li>
                                <li className="list-group-item"><strong>Apellido:</strong> {cliente.apellido}</li>
                                <li className="list-group-item"><strong>Correo:</strong> {cliente.email}</li>
                                <li className="list-group-item"><strong>Teléfono:</strong> {cliente.telefono}</li>
                                <li className="list-group-item">
                                    <img src={cliente.imagen} alt="Avatar" style={{ width: '50%', height: '350px' }} />
                                </li>
                                <li className="list-group-item text-center">
                                    <a className="btn btn-outline-primary" href={`/listacontactos`}>Volver</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                ) : (
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-primary text-white">
                            <h4 className="card-title">Cargando...</h4>
                        </div>
                    </div>
                )}
            </div>
            <Pie />
        </div>
    );
};

export default DetalleContacto;
