import mongoose from "mongoose"

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://wwwsujalsharma629_db_user:sU10P0OB0KIDKWd5@cluster0.qj7pbmf.mongodb.net/?appName=Cluster0/RESUME')
    .then(( ) =>console.log('DB connected'))
}