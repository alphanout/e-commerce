import express from 'express';
import bodyParser from "body-parser";
// import cors from "cors";
import routes from './app/routes/routes.js';
import authenticateJWT from './app/middleware/authJwt.js';
import verifySignup from './app/middleware/verifySignup.js';
import cont from "./app/controllers/customer.controller.js";

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

        this.server.post("/signin", (req, res) => {
            cont.login(req, res);
        });

        this.server.post("/signup", verifySignup, (req, res) => {
            cont.addCustomer(req, res);
        });
        this.server.use("/api", authenticateJWT, routes);
    }
}
export default new Server().server;