export default async function handler(req, res) {
    try {
        const id = req.query.id;
        let nombre_usu = req.query.n;
        let peticion = `http://backend:3000/obtenerdetalle?`;
        if (id != null)
            {
                peticion = `http://backend:3000/obtenerdetalle?id=${id}`;
            }
        if (nombre_usu != null)
            {
                peticion = `http://backend:3000/obtenerdetalle?nombre_usu=${nombre_usu}`;
               
            }
        const response = await fetch(peticion, {
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

