import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie'; // Importa la biblioteca para manejar cookies
import Pie from '../components/pie';
import Head from 'next/head';
import Cabecera from '@/components/cabecera';

const Home = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [exito,setExito] = useState('');

    const fetchData = async (userData) => {
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });
            const respuestaJSON = await response.json();
            if (response.ok) {
                // Si las credenciales son correctas, muestra un mensaje y luego redirige a la página de menú
                setIsLoading(true);
                setExito('Credenciales correctas, redirigiendo a menú...');
                setTimeout(() => {
                    Cookies.set('isLoggedIn', 'true');
                    Cookies.set('username', userData.username);                    
                    router.push('/menu');
                }, 1500);
            } else {
                const responseData = await response.json();
                setError(responseData.error);
            }
        } catch (error) {
            console.error(error);
        }
    };
    

    useEffect(() => {
        const isLoggedIn = Cookies.get('isLoggedIn');

        // Simular una carga durante 2 segundos
        const timer = setTimeout(() => {
            if (isLoggedIn === 'true') {
                // Si el usuario está logueado, redirecciona a la página de menú
                router.push('/menu');
            } else {
                // Si el usuario no está logueado, se ha completado la carga
                setIsLoading(false);
                router.push('/');
            }
        }, 300);

        return () => clearTimeout(timer); // Limpia el temporizador al desmontar el componente
    }, []);

    const handleLogin = () => {
        const userData = {
            username: username,
            password: password
        };
        
        fetchData(userData);
 
    };
    const handleRegistro = () => {
 
        // Si el usuario no está logueado, se ha completado la carga
        setIsLoading(false);
        router.push('/registro');
 
    };

    if (isLoading) {
        // Si isLoading es true, la página está cargando
        return (
            <>
            <Head>
                <title>Cargando...</title>
                <link rel="icon" href="/images/chat.png" />
                <link rel="stylesheet" href="./styles/detallecontacto.css" />
            </Head>
            <Cabecera mostrarBotonHome={false} mostrarCerrarSesion={true}/>
            <div className="cargando">
                    <img src="/images/cargando.gif" alt="Cargando" />
            </div>
            <Pie />
            </>
        );
    }

    return (
    <div>
        <Head>
            <title>Login</title>
            <link rel="icon" href="./images/chat.png" />
        </Head>
        <div className="container">
            <div className="login-form">
                <h1>Iniciar Sesión</h1>
                <input type="text" placeholder="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleLogin}>Iniciar Sesión</button>
                <button onClick={handleRegistro}>Registrarse</button>
                {error && <div className="error-message">{error}</div>}
                {exito && <div className="exito-message">{exito}</div>}
            </div>
            <Pie />
        </div>
        </div>
    );
};

export default Home;
