import express from "express";
import type { Request, Response } from "express"; 
import { configDotenv } from "dotenv";
import type { Http2ServerRequest, Http2ServerResponse } from "http2";
import { PrismaClient } from "./generated/prisma/index.js";
import {productsRouter} from './routes/products.js'

// configDotenv()
const app = express();
app.use(express.json());
app.use('/api/products', productsRouter )

app.listen(8000,  ()=>console.log("server running on http://localhost:8000/"))
