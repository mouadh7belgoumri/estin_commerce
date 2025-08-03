import express from "express";
import type { Request, Response } from "express"; 
import { configDotenv } from "dotenv";
import type { Http2ServerRequest, Http2ServerResponse } from "http2";
import { PrismaClient } from "./generated/prisma/index.js";

configDotenv()
const app = express();



app.get('/',async (req:Request, res:Response)=> {})

app.listen(8000,  ()=>console.log("server running on http://localhost:8000/"))
