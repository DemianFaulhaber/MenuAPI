import {app} from "./app/app.js";
import { config } from "./config.js";

const port = config.PORT

app.listen(port, () =>{
    console.log(`Server running on ${port}`)
})