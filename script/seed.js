'use strict'

const db = require('../server/db')
const {User, Cart, Sticker} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  const carts = await Promise.all([
    Cart.create({
      name: 'smiley face',
      description: 'stickers with a smiley face - 50pc',
      price: 3.95,
      quantity: 1,
      total: 3.95
    }),
    Cart.create({
      name: 'thank you',
      description: 'stickers with a thank you message - 50pc',
      price: 3.95,
      quantity: 1,
      total: 3.95
    })
  ])

  const stickers = await Promise.all([
    Sticker.create({
      name: 'Big Smile Sticker',
      description: 'Sticker with a HUGE smile!',
      imageUrl:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Hs54PWhYEDk9lf3AGcdLnwHaHa%26pid%3DApi&f=1',
      price: 3.95,
      quantity: 1
    }),
    Sticker.create({
      name: 'Everything is ok.',
      description: "Happy but inexperienced in expressing one's emotions",
      imageUrl:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.451JRHpDPT1Mn7eWEh-Y3QHaHa%26pid%3DApi&f=1',
      price: 3.95,
      quantity: 1
    }),
    Sticker.create({
      name: 'Confused but happy.',
      description: "I'm...happy?",
      imageUrl:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.1VYbo6xNHYnhMolGjLIbJQHaHa%26pid%3DApi&f=1',
      price: 3.95,
      quantity: 1
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${carts.length} carts`)
  console.log(`seeded ${stickers.length} stickers`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
