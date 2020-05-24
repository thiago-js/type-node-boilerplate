import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

class App {
  public server: express.Application;
  public database: mongoose.Mongoose;

  constructor () {
    this.server = express()

    this.middlewares()
    this.routers()
    this.connections()
  }

  private middlewares (): void {
    this.server.use(express.json())
    this.server.use(cors())
    dotenv.config()
  }

  private connections (): void {
    const { MONGO_HOST, MONGO_SSL, MONGO_DATABASE, MONGO_USER, MONGO_PASSWORD } = process.env

    mongoose.connect(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}/${MONGO_DATABASE}?${MONGO_SSL}`, { useNewUrlParser: true, useUnifiedTopology: true })

    mongoose.connection.on('error', () => console.log('connection error'))
    mongoose.connection.on('open', () => console.log('database connected'))
  }

  private routers (): void {
    this.server.get('/', (req, res) => {
      return res.send('hello word')
    })
  }
}

export default new App()
