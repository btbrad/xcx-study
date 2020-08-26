const Koa = require('koa')
const Router = require('koa-router')
const newList = require('./news-list.json')

const PORT = 9527
const app = new Koa()
const router = new Router()

router.get('/', async (ctx) => {
  ctx.body = 'Hello World !'
})

router.get('/list', async (ctx) => {
  const { page } = ctx.query
  let currentPage = page || 1
  let data = JSON.parse(JSON.stringify(newList)).filter(
    (item, index) => index >= 10 * (currentPage - 1) && index < 10 * currentPage
  )
  ctx.body = data
})

app.use(router.routes())

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
