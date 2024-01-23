import axios from 'axios';
import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.post('/buscarCompuesto', async (req, res) => {
  try {
    const { nombreCompuesto } = req.body;

    // Realizar la solicitud a la API de PubChem
    const response = await axios.get(`https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${nombreCompuesto}/JSON`);

    // Extraer propiedades físicas del compuesto desde la respuesta
    const properties = response.data.PC_Compounds[0].props.filter(prop => prop.urn.label === 'Molecular Formula' || prop.urn.label === 'Molecular Weight');

    // Formatear la respuesta
    const formattedResponse = properties.map(prop => ({
      name: prop.urn.label,
      value: prop.value.sval,
    }));

    res.json({ success: true, properties: formattedResponse });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error en la búsqueda del compuesto.' });
  }
});

app.listen(port, () => {
  console.log(`El servidor está escuchando en el puerto ${port}`);
});
