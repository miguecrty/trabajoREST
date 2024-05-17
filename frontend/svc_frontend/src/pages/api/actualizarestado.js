export default async function handler(req, res) {
    const valores = {
        username : req.body.username,
        estado: req.body.estado
    }
    const response = await fetch('http://localhost:3000/actualizarestado', { 
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
        res.status(500).json({ message: "Logeo erroneo!" });
    }   
}