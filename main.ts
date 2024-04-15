import { Hono, Context } from "hono"
const app = new Hono()


app.get('/setupdb', () => {
  
})
app.get('/', (c: Context) => {
  return c.text('Hello Hono!')
})
Deno.serve(app.fetch)
