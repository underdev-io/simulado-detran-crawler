import fastify from "fastify";
import scrap from "./crawler";

const app = fastify ({logger: true});

async function run() {
    console.log(process.env.NODE_ENV);
    try {
        await app.listen(8000,"0.0.0.0");
        console.log(' 🧲 recipeBot is running ');
    }   catch(err){
        app.log.error(err);
        process.exit(1);
    }
}



app.get("/",async(req,res)=> {
 scrap();
});
    scrap();

run().catch((err) => console.log(err));













export default app;