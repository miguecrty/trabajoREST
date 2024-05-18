export default async function handler(req, res) {
    const response = await fetch('http://localhost:3000/borrarcuenta', { 
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(req.body)
    });
    if (response.ok) {
        const respuesta = await response.text();
        res.status(200).json(respuesta);
    }
    else{
        res.status(500).json({ message: "Cuenta no borrada!" });
    }   
}