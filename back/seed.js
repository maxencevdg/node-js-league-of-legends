import { PrismaClient } from "@prisma/client"
import fs from "fs"

const prisma = new PrismaClient()

async function seed() {
    const data = fs.readFileSync('./data/champions.json', 'utf-8')
    const champions = JSON.parse(data)

    for (let champion of champions) {
        await prisma.champion.create({
            data: {
                name: champion.name,
                type: champion.type
            }
        })
    }
}

seed()
.catch((error) => {
    console.error(error)
    process.exit(1)
})
.finally(async () => {
    await prisma.$disconnect()
})