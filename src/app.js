import express from "express";
import path from "path";
import { engine } from "express-handlebars";
import indexRoutes from "./routes/index.routes";
import cors from "cors";
import morgan from "morgan";

const app = express();

const corsOptions = {
    origin:"*",
    credentials: true,
    optionSuccessStatus: 200,
}

app.set("views", path.join(__dirname + "/views"));

app.engine(".hbs", engine({
    extname:".hbs",
    layoutsDir: path.join(app.get("views"), "layouts"),
    defaultLayout:"main"
}));

app.set("view engine", "hbs");

//middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({extended:false}));
app.use(cors(corsOptions));
//routes
app.use(indexRoutes);
//static files
app.use(express.static(path.join(__dirname, "public")));

export default app;