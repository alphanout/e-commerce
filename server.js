import express from 'express';
import bodyParser from "body-parser";
// import cors from "cors";
import customersRoutes from './app/routes/customers.routes.js';
import customerRoutes from './app/routes/customer.routes.js';

class Server {

    constructor() {
        this.server = express();
        // this.corsOptions = {
        //   origin: "http://localhost:8080"
        // };
        // server.use(cors(this.corsOptions));
        this.server.use(bodyParser.urlencoded({
            extended: true
        }));
        this.server.use(bodyParser.json());
        this.port = process.env.PORT || 8080;
        this.middlewares();
        this.routes();
        this.server.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}.`);
        });
    }

    middlewares() {
        this.server.use(express.json());
    }
    routes() {
        this.server.get("/", (_req, res) => {
            res.status(200).send("Oh Hi There!");
        });
        this.server.use("/customers", customersRoutes);
        this.server.use("/customer", customerRoutes);
    }
}
export default new Server().server;