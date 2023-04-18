import axios from 'axios';
export const getCharById = async (req, res) =>{

    const {id} = req.params;

    try {
        const response = await axios(`https://rickandmortyapi.com/api/character/${id}`);
        
        const data = {
            id:id,
            name: response.data.name,
            gender: response.data.gender,
            species: response.data.species,
            origin: response.data.origin,
            status: response.data.status,
            image: response.data.image
        }
        if(response.data.error){
            res.status(404).send("Not Found")
        }
        res.status(200).json(data)
        
    } catch (error) {
        //console.log(error); luego ver como mandar un 404 aqui
        res.status(500).send(`error en el recibo de los datos: ${error.message}`)
    }

}