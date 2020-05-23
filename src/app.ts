import express from 'express'
import cors from 'cors'

class App {
    public server: express.Application;

    constructor () {
      this.server = express()

      this.middlewares()
      this.routers()
    }

    private middlewares (): void {
      this.server.use(express.json())
      this.server.use(cors())
    }

    private routers (): void {
      this.server.get('/', (req, res) => {
        return res.send('hello word')
      })
    }
}

export default new App()
