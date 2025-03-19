const mongoose=require('mongoose')
const colors=require('colors')

const connectDb=async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Server Runnig On ${mongoose.connection.host}`.bgCyan.white);
        
    }catch (error){
        console.log(`${error}`.bgRed);
        
    }
}

module.exports=connectDb