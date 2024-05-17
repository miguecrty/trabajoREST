import { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import Pie from '../components/pie';
import { server } from './_app';
import Head from 'next/head';
import Cabecera from '@/components/cabecera';

const Registro = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [r_password, setRPassword] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const videoRef = useRef(null);
    const canvasRef = useRef(null);

    const registrarUsuario = async (userData) => {
        try {
            const response = await fetch('/api/registrar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });
    
            if (response.status === 200) {
                alert("Usuario: "+ username+" creado correctamente.");
                setIsLoading(true);
                setTimeout(() => {
                    router.push('/');
                }, 1000);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleRegistrar = async() => {
        if(password.length > 4 && username.length > 4) {
            if(password === r_password) {
                    const userData = {
                        username: username,
                        password: password,
                        nombre: nombre,
                        apellido: apellido,
                        telefono: telefono,
                        email: email
                    };
                    registrarUsuario(userData);
                 
            } else {
                setError("Error de contraseña");
            }
        } else {
            setError("Usuario y/o clave tienen que ser mayor que 4 caracteres");
        }
    };

    const constraints = {
        width: 700,
        height: 550,
        facingMode: "user",
        aspectRatio: 9 / 16,
      };
      const camRef = useRef();
      const [loading, setLoading] = useState(false);

    if (isLoading) {
        return (
            <div className="cargando">
                <img src="/images/cargando.gif" alt="Cargando" />
            </div>
        );
    }

    return (
        <div>
            <Head>
                <title>Registro</title>
                <link rel="icon" href="./images/chat.png" />
            </Head>
            <Cabecera mostrarBotonHome={true} mostrarCerrarSesion={false} />
            <div className="container">
                <div className="login-form">
                    <h1>Registro de usuario</h1>
                    <div className="user-fields">
                        <input type="text" placeholder="Nombre de Usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="name-fields">
                        <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                        <input type="text" placeholder="Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                    </div>
                    <div className="contact-fields">
                        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="text" placeholder="Telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                    </div>
                    <div className="password-fields">
                        <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <input type="password" placeholder="Repetir Contraseña" value={r_password} onChange={(e) => setRPassword(e.target.value)} />
                    </div>
                    <button onClick={handleRegistrar}>Registrar</button>
                    {error && <div className="error-message">{error}</div>}
                </div>
                <Pie />
            </div>
        </div>
    );
};

export default Registro;
