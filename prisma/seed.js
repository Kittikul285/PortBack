const bcrypt = require('bcryptjs')
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const password = bcrypt.hashSync('1234')
const userData = [
    {username : 'andy', password : password, email : 'andy@gmail.com'},
    {username : 'jame', password : password, email : 'jame@gmail.com'},
    {username : 'boby', password : password, email : 'boby@gmail.com'},
]

const todoData = [
    {title:'Learn Html', duedate: new Date(),userId: 1},
    {title:'Learn CSS', duedate: new Date(),userId: 2},
    {title:'Learn nodejs', duedate: new Date(),userId: 3},
]

const run = async () =>{
    // await prisma.user.delete({})
    // await prisma.user.createMany({
    //     data: userData
    // })

    // await prisma.todo.deleteMany({})
    // await prisma.todo.createMany({
    //     data: todoData
    // })
    
    // await prisma.$executeRaw`Drop database todolist`
    // await prisma.$executeRaw`create database todolist`

    await prisma.user.createMany({
        data: userData
    })
    await prisma.todo.createMany({
        data: todoData
    })
}

run()