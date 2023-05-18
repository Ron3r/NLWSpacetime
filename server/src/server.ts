import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'

const app = fastify()

app.register(cors, {
  origin: true, //todas as URLs de front-end poderão acessar o back-end
})
app.register(memoriesRoutes)

// HTTP Method: GET(listar), POST(criar), PUT(atualizar), PATCH(Atualizarinfo específica dentro de um recurso), DELETE(Deletar)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀 HTTP server running on http://localhost:3333')
  })
