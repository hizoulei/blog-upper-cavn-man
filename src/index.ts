import app from './app/index'
import config from './config/config.default'

app.listen(config.APP_PORT, () => {
  console.log('Server is running on http://localhost:' + config.APP_PORT)
})
