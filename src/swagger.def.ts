import { swBoardRouter } from "./routes/boardRoutes"

const swagger = {
  openapi: '3.0.0',
  info: {
    title: 'Kanban API',
    version: '1.0.0',
    description: ''
  },
  servers: [
    {
      url: 'http://localhost:3000/api',
      description: 'Development server'
    }
  ],
  paths: {
    ...swBoardRouter
  }
}
export default swagger