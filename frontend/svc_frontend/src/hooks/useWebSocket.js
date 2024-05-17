// hooks/useWebSocket.js
import { useEffect, useState } from 'react';

const useWebSocket = (url) => {
    const [ws, setWs] = useState(null);
    const [wsMessages, setWsMessages] = useState([]);

    useEffect(() => {
        const socket = new WebSocket(url);

        socket.onopen = () => {
            console.log('WebSocket connected');
        };

        socket.onmessage = (event) => {
            const message = JSON.parse(event.data);
            setWsMessages((prevMessages) => [...prevMessages, message]);
        };

        socket.onclose = () => {
            console.log('WebSocket disconnected');
        };

        setWs(socket);

        return () => {
            socket.close();
        };
    }, [url]);

    const sendWsMessage = (message) => {
        if (ws && ws.readyState === WebSocket.OPEN) {
            ws.send(JSON.stringify(message));
        }
    };

    return { wsMessages, sendWsMessage };
};

export default useWebSocket;
