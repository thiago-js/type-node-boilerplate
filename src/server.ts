import App from './app'

const { PORT } = process.env

App.server.listen(PORT, () => console.log(`Server rodando na porta ${PORT}`))
