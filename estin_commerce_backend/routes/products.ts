import express from "express";
import type { Request, Response } from "express";
import { PrismaClient, type products } from "../generated/prisma/index.js";

const prisma = new PrismaClient();
export const productsRouter = express.Router();
productsRouter.get("/", async (req: Request, res: Response) => {
    try {
        const allProducts = await prisma.products.findMany();
        res.send(allProducts);
    } catch (error) {
        console.error(error, "failed to display products");
    }
    finally {
        await prisma.$disconnect
    }
    
})
productsRouter.post("/", async (req: Request, res: Response) => {
    try {
        
        const productData = req.body;
        
        
        await prisma.products.create({ data:productData  });
        res.send({ message: "product added successfully" })
    } catch (error) {
        console.error(error, "failed to add product");
    }
    finally {
        await prisma.$disconnect
    }
    
})
productsRouter.delete('/:id', async(req: Request, res:Response)=>{
    try {
        await prisma.products.delete({where : {id : parseInt(req.params.id!)}})
        res.send({message :"product remover successfully"})
    } catch (error) {
        console.error(error, "couldn't delete product");
    }
})
 