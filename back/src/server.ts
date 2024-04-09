import fastify from "fastify";
import { memoriesRoutes } from "./routes/memories";

const app = fastify();

app.register(memoriesRoutes);

const port = 3333;

app.listen({ port }).then(() => {
  console.log(`Server Rodando na porta ${port}`);
});
