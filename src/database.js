// Importar mongoose
import mongoose from 'mongoose'

// Permitir que solo los campos definidos en el Schema sean almacenadas
mongoose.set('strictQuery', true)
const connection = async()=>{
    try {
        const {connection} = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`Database is connected on ${connection.host} - ${connection.port}`)
    } catch (error) {
        console.log(error);
    }
}

export default  connection