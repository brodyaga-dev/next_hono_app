import { Hono } from 'hono'
import prisma from "../../../libs/prisma"



export const userRouter = new Hono()
  .get('/', async (c) => {
    try {
      const users = await prisma.user.findMany({
        select: {
          id: true,
          name: true,
          email: true,
          password: true,
          dateOfBirth: true,
          gender: true,
          profilePhoto: true
        }
      })
      return c.json({ result: users }, 200)
    } catch (e) {
      return c.json({ error: e }, 404)
    }
  })
  .post('/', async (c) => {
    try {
      const { name, email, password, dateOfBirth, gender, profilePhoto } = await c.req.json()
      const user = await prisma.user.create({
        data: {
          name,
          email,
          password,
          dateOfBirth: new Date(dateOfBirth),
          gender,
          profilePhoto
        },
      })
      
      return c.json({ result: user }, 201)
    } catch (e) {
      return c.json({ error: e }, 400)
    }
  })
  .put('/:id', async (c) => {
    try {
      const id = c.req.param('id')
      const { name, email, password, dateOfBirth, gender, profilePhoto } = await c.req.json()
      const user = await prisma.user.update({
        where: { id: id },
        data: {
          name: name || undefined,
          email: email || undefined,
          password: password || undefined,
          dateOfBirth: new Date(dateOfBirth) || undefined,
          gender: gender || undefined,
          profilePhoto: profilePhoto || undefined,
        },
      })
      console.log(name, email, password, dateOfBirth, gender);
      return c.json({ result: 'user' }, 200)
    } catch (e) {
      return c.json({ error: e }, 400)
    }
  })
  .delete('/:id', async (c) => {
    try {
      const id = c.req.param('id')
      await prisma.user.delete({ where: { id: id } })
      return c.json({ result: 'User deleted' }, 200)
    } catch (e) {
      return c.json({ error: e }, 400)
    }
  })
   .get('/:id', async (c) => {
    try {
      const id = c.req.param('id')
      const user = await prisma.user.findUnique({ where: { id: id } })
      return c.json({ result: user }, 200)
    } catch (e) {
      return c.json({ error: e }, 400)
    }
  })
  // .get('/except/:id', async (c) => {
  //   try {
  //     const excludedId = c.req.param('id')
  //     const users = await prisma.user.findMany({
  //       where: {
  //         id: { not: excludedId },
  //       },
  //     })
  //     return c.json({ result: users }, 200)
  //   } catch (e) {
  //     return c.json({ error: e }, 400)
  //   }
  // })
  .get('/except/:ids', async (c) => {
    try {
      const excludedIds = c.req.param('ids').split(',')
      console.log(excludedIds);
      const users = await prisma.user.findMany({
        where: {
          id: {
            notIn: excludedIds.map((id) => (id))
          },
        },
        select: {
          id: true,
          name: true,
          email: true,
          password: true,
          dateOfBirth: true,
          gender: true,
          profilePhoto: true
        }
      })
      return c.json({ result: users }, 200)
    } catch (e) {
      return c.json({ error: e }, 400)
    }
  })
