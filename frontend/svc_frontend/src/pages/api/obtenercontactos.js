export default async function handler(req, res) {
    const response = await fetch('http://localhost:3000/obtenercontactos', { 
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });

    if (response.ok) {
        const respuesta = await response.json();
        res.status(200).json(respuesta);
    }
    else{
        res.status(500).json({ message: "Logeo erroneo!" });
    }   
}
