import mongoose from 'mongoose';

const databaseConnection = async () => {
    try {
        await mongoose.connect("mongodb+srv://express:express@express.u9hlug1.mongodb.net/?retryWrites=true&w=majority", {
            useNewUrlParser: true
        })
        console.log("Database connected");
    } catch (e) {
        console.log(e.message);
    }
}

export default databaseConnection;
