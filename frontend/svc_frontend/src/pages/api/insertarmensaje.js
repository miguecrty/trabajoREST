export default async function handler(req, res) {
    const valores = {
        contenido: req.body.contenido,
        nombre_usu: req.body.nombre_usu,
        hora: req.body.hora
    };
    const response = await fetch('http://localhost:3000/insertarmensaje', { 
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(valores)
    });
    if (response.ok) {
        const respuesta = await response.text();
        console.log(respuesta);
        res.status(200).json(respuesta);
    }
    else{
        res.status(500).json({ message: "ERROR: Mensaje no insertado!" });
    }   
}