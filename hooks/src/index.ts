import {PrismaClient} from "@prisma/client"
import express from "express";

const prisma = new PrismaClient();
const app = express();


app.post("/hooks/catch/:userId/:orbId", async (req, res) => {
    const {userId, orbId} = req.params;
    const body = req.body;

    await prisma.$transaction(async tsx =>{
        const run = await prisma.orbRun.create({
            data:{
                orbId,
                metadata: body,
            }
        })

        await prisma.orbRunOutbox.create({
            data:{
                orbRunId: run.id,
            }
        })
    })

    return res.status(200).json({
        success: true,
        message: "Webhook received"
    })

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});