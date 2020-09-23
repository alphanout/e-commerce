import * as express from 'express';
import bodyParser from "body-parser";
// import cors from "cors";
import routes from './app/routes';
import authenticateJWT from './app/middleware/authJwt';
import verifySignup from './app/middleware/verifySignup';
import * as cont from "./app/controllers/customer.controller";

class Server {

    constructor() {
        this.server = express();
        // this.corsOptions = {
        //   origin: "http://localhost:8080"
        // };
        // server.use(cors(this.corsOptions));
        server.use(bodyParser.urlencoded({
            extended: true
        }));
        server.use(bodyParser.json());
        this.port = process.env.PORT || 8080;
        this.middlewares();
        this.routes();
        server.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}.`);
        });
    }

    middlewares() {
        this.server.use(express.json());
    }

    routes() {
        this.server.get("/", (req, res) => {
            res.status(200).send("Oh Hi There!");
        });

        this.server.post("/login", (req, res) => {
            // cont.login(req, res);
        });

        this.server.post("/signup", verifySignup, (req, res) => {
            cont.addCustomer(req, res);
        });
        this.server.use("/api", authenticateJWT, routes);
        //this.server.use(routes);
    }
}

export default new Server().server;