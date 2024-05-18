import Cabecera from '@/components/cabecera';
import Pie from '../components/pie';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';

const ListaContactos = () => {

    const [contactos, setContactos] = useState([]);

    useEffect(() => {
        const fetchContactos = async () => {
            try {
                const response = await fetch('/api/obtenercontactos');
                if (!response.ok) {
                    throw new Error('Error al obtener contactos');
                }
                const data = await response.json();
                setContactos(data);
            } catch (error) {
                console.error('Error:', error);
                // Manejar el error según tus necesidades
            }
        };

        // Realizar el fetch inicial
        fetchContactos();

        // Establecer un intervalo para realizar el fetch cada 2 segundos
        const intervalId = setInterval(fetchContactos, 2000);

        // Limpiar el intervalo cuando el componente se desmonte
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <Head>
                <title>Lista de Contactos</title>
                <link rel="icon" href="./images/chat.png" />
                <link rel="stylesheet" href="./styles/listarcontactos.css" />
            </Head>
            <Cabecera mostrarBotonHome={true} mostrarCerrarSesion={true}/>
            <>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />

                <h1 className="text-center my-5 display-4 font-weight-bold text-uppercase text-secondary">Lista de Contactos</h1>

                {/* Contenedor principal para tarjetas de los clientes*/}
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            {/* Listamos los clientes y añadimos estilos para que sea mas visual todo, haremos uso de bootstrap */}
                            <div className="list-group">
                                {/* Iterar sobre cada contacto y renderizar una tarjeta */}
                                {contactos.map(contacto => (
                                    <div key={contacto.id} className="card border-0 shadow-lg mb-4">
                                        <div className="card-body">
                                            <h5 className="card-title mb-0">{contacto.nombre} {contacto.apellido}</h5>
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                            <img src={contacto.imagen} alt="Avatar" className="mr-2 rounded-circle" style={{ width: "100px", height: "100px" }} />
                                                <>
                                                    { contacto.estado != null ? (
                                                        <p className="badge badge-pill badge-light text-dark">{contacto.estado}</p>
                                                    ) : (
                                                        <p className="badge badge-pill badge-light text-danger" style={{fontSize:'12px'}}>Sin estado </p>
                                                    )}
                                                    <p className="text-info">Estado</p>
                                                </>
                                            </div>
                                            <a className="btn btn-outline-primary" href={`/detallecontacto?id=${contacto.id}`}>Ver Detalles</a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </>
            <Pie />
        </div>
    );
};

export default ListaContactos;
