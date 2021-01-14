'use strict'

const db = require('../server/db')

const {User, Cart, Product} = require('../server/db/models')

const stickerData = [
  {
    name: 'Koro Sensei',
    description: 'Test',
    imageUrl:
      'https://i.pinimg.com/originals/3c/48/bf/3c48bf9a8fb400eaa8cdc282f049afd1.jpg',
    msrp: 399,
    category: 'Stickers'
  },
  {
    name: 'Naruto',
    description: 'Test',
    imageUrl:
      'https://images.bonanzastatic.com/afu/images/027a/84a8/f5fb_8742721276/narutopeeking.jpg',
    msrp: 399,
    category: 'Stickers'
  },
  {
    name: 'Eri',
    description: 'Test',
    imageUrl:
      'https://i.pinimg.com/originals/a7/4d/35/a74d3514b9ffb13fdaeab1672584e20e.jpg',
    msrp: 399,
    category: 'Stickers'
  },
  {
    name: 'Meliodas',
    description: 'Test',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpeYogv2j_vTg81QBYfb7K862XnZxseyzeIQ&usqp=CAU',
    msrp: 399,
    category: 'Stickers'
  },
  {
    name: 'Todoroki Chibi',
    description: 'Test',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR0-C3nldcWgwDnE8YkIK4q42hn3snyMZhPA&usqp=CAU',
    msrp: 399,
    category: 'Stickers'
  },
  {
    name: 'Totoro',
    description: 'Test',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/1158/2192/products/My-Neighbor-Totoro-Studio-Ghibli-Decal_1200x1200.jpg?v=1455482567',
    msrp: 399,
    category: 'Stickers'
  },
  {
    name: 'Sasuke',
    description: 'Test',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCPSihiBorO4eT4BRSF9eR-gPk4kP5Ob2CZA&usqp=CAU',
    msrp: 399,
    category: 'Stickers'
  },
  {
    name: 'Goten',
    description: 'Test',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6wPSx0cFsTLmwDjmyogVkbz9htKi6IzJ55g&usqp=CAU',
    msrp: 399,
    category: 'Stickers'
  },
  {
    name: 'Gojo Satoru',
    description: 'Test',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeknf0UdI0V5DopEvUmA3Hgpo7XHR-N1u0_w&usqp=CAU',
    msrp: 399,
    category: 'Stickers'
  },
  {
    name: 'Natsu',
    description: 'Test',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/1158/2192/products/Natsu-Dragneel-Fairytail-Black-Anime-Decal-Sticker_480x480.jpg?v=1519248068',
    msrp: 399,
    category: 'Stickers'
  },
  {
    name: 'Kakashi',
    description: 'Test',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmAD0hax6HtFRQA9ZMfQbDYjI7ISgGisE62w&usqp=CAU',
    msrp: 399,
    category: 'Stickers'
  },
  {
    name: 'Rogue Ninja',
    description: 'Test',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0505/1354/3337/products/konoha_crosssed_comicsense_400x.jpg?v=1608211148',
    msrp: 399,
    category: 'Stickers'
  },
  {
    name: 'Dab',
    description: 'Test',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEyDBEcvYyGDObMQTpKudY5cPfArVV6WUNFQ&usqp=CAU',
    msrp: 399,
    category: 'Stickers'
  },
  {
    name: 'Ichigo Kurosaki',
    description: 'Test',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0bg62e2o99Ezej5hwUCjlpjIo4vX2dEgtXA&usqp=CAU',
    msrp: 399,
    category: 'Stickers'
  },
  {
    name: 'One Piece',
    description: 'Test',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBf2uWIVN-gI4QNDNWRQT-iTPgl0bI6olXiQ&usqp=CAU',
    msrp: 399,
    category: 'Stickers'
  },
  {
    name: 'Hisoka',
    description: 'Test',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCPFjS_Iw5S3Y1VojjqmIs8wsFq-dV2ocOCg&usqp=CAU',
    msrp: 399,
    category: 'Stickers'
  },
  {name: 'Plus Ultra', description: 'Test', imageUrl: '', msrp: 399},
  {
    name: 'Marceline',
    description: 'Test',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTzuQN9zJvxzzjK1BrEx8FpkppBJLRoCLn6Q&usqp=CAU',
    msrp: 399,
    category: 'Stickers'
  },
  {
    name: 'Itachi',
    description: 'Test',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmvtnzjlB1KkN60igkZ-ifN5OS8P-Trewx7A&usqp=CAU',
    msrp: 399,
    category: 'Stickers'
  },
  {
    name: 'Akatsuki',
    description: 'Test',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqbF3x95NY2kL5CU3GIQ6beh4WRWiZAM3r_w&usqp=CAU',
    msrp: 399,
    category: 'Stickers'
  },
  {
    name: 'Berserke',
    description: 'Test',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/61X4bPneFTL._AC_SL1001_.jpg',
    msrp: 399,
    category: 'Stickers'
  }
]

const pinData = [
  {
    name: 'small pin',
    description: 'really small pin',
    msrp: 200,
    rating: 2
  },
  {
    name: 'big pin',
    description: 'really big pin',
    msrp: 200,
    rating: 5
  },
  {
    name: 'Sanic',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgM2rbqR_SdDQOUeR0SQ__fDHgpJo-HL1DwQ&usqp=CAU',
    description: 'Test',
    msrp: 5
  },
  {
    name: 'Motivational',
    imageUrl:
      'https://ih1.redbubble.net/image.1156498190.4347/ur,pin_large_front,square,600x600.u3.jpg',
    description: 'Test',
    msrp: 5
  },
  {
    name: 'Hinata',
    imageUrl:
      'https://ih1.redbubble.net/image.1356992302.7366/ur,pin_large_front,square,600x600.jpg',
    description: 'Test',
    msrp: 5
  },
  {
    name: 'Nezuko',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNNEkv4NLntI8Ch6fYEQ9O1YuTbI3huP0MFA&usqp=CAU',
    description: 'Test',
    msrp: 5
  },
  {
    name: 'Haku',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIo_N_EiQIk7CIN1mlSO_t0ZNFTRN3jixbLg&usqp=CAU',
    description: 'Test',
    msrp: 5
  },
  {
    name: 'Fairy Tail',
    imageUrl:
      'https://res.cloudinary.com/teepublic/image/private/s--ojPTdPqV--/c_crop,x_10,y_10/c_fit,h_830/c_crop,g_north_west,h_1038,w_1038,x_-156,y_-104/l_upload:v1565806151:production:blanks:vdbwo35fw6qtflw9kezw/fl_layer_apply,g_north_west,x_-267,y_-215/b_rgb:ffffff/c_limit,f_jpg,h_630,q_90,w_630/v1481517284/production/designs/936333_1.jpg',
    description: 'Test',
    msrp: 5
  },
  {
    name: 'Deku Cat',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-MKoDDnb1UKbygME7I3ieGWaGl3CZsJNqEA&usqp=CAU',
    description: 'Test',
    msrp: 5
  },
  {
    name: 'Dabi',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP99mujOHglXngGmZMOGR3RGwm-N6algSYEA&usqp=CAU',
    description: 'Test',
    msrp: 5
  }
]

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

  await Promise.all(pinData.map(pin => Product.create(pin)))

  await Promise.all(stickerData.map(sticker => Product.create(sticker)))

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${carts.length} carts`)
  console.log(`seeded ${stickerData.length + pinData.length} products`)
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
