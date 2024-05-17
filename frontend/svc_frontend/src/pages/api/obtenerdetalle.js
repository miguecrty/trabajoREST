export default async function handler(req, res) {
    try {
        const id = req.query.id;
        const response = await fetch(`http://localhost:3000/obtenerdetalle?id=${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if (response.ok) {
            const data = await response.json();
            res.status(200).json(data);
        } else {
            throw new Error('Error al obtener detalle del cliente');
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: "Error en el servidor" });
    }
}

