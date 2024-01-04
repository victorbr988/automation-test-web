import express from "express";
import "dotenv/config";
import cors from "cors";
import { modulesRoutes } from "./routes/modules.routes";

const app = express()

app.use(cors())
app.use(express.json())


app.get("/", (request, response) => {
  response.status(200).json({ message: "Hello world" })
})

app.use("/api", modulesRoutes)

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`)
})
