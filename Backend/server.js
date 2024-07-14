import app from "./index.js";
import {config} from "dotenv";

const PORT=process.env.PORT || 5000;

config();
app.listen(PORT,async(err)=>{
    if(err){
        console.error("Error Starting the Server");
    }else{
        console.log(`App is running at http://localhost:${PORT}`);
    }
})

export default app;