const express = require('express')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.get('/users', async (req, res) => {
    const users = await prisma.users.findMany()
    res.json(users)
  })

  app.get(`/user/:id`, async (req, res) => {
    const { id } = req.params
    console.log(`id - ${id}`)
    const user = await prisma.users.findUnique({
      where: { id: String(id) },
    })
    res.json(user)
  })

app.post(`/createUser`, async (req, res) => {
    const { name, email, role } = req.body
    const result = await prisma.users.create({
        data: {
        name,
        email,
        role
        },
    })
    res.json(result)
})

app.put('/update/:id', async (req, res) => {
    const { id } = req.params
    const { name, email, role } = req.body
    try {  
      const updatedUser = await prisma.users.update({
        where: { id: String(id) || undefined },
        data: { name:name,
        email:email,
    role:role },
      })
      res.json(updatedUser)
    } catch (error) {
      res.json({ error: `Post with ID ${id} does not exist in the database` })
    }
  })
  
app.delete(`/user/:id`, async (req, res) => {
const { id } = req.params
const post = await prisma.users.delete({
    where: {
    id: String(id),
    },
})
res.json(post)
})

const server = app.listen(3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/js/rest-express#3-using-the-rest-api`),
)
