import { Hono } from 'hono'
import { handle } from 'hono/vercel'

import { userRouter } from './user.router'


const app = new Hono().basePath('/api')

app
  .route('/users', userRouter)

type AppType = typeof app

export const GET = handle(app)
export const POST = handle(app)
export const PUT = handle(app)
export const DELETE = handle(app)
