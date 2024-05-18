export default async function handler(req, res) {
        const response = await fetch('http://localhost:3000/registrar', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req.body)
        });

        if (response.ok) {
            res.status(200).json({ message: "logeo exitoso" });
        }
        else{
            res.status(500).json({ message: "Logeo erroneo!" });
        }   
  }
  
  