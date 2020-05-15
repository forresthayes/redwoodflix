/* eslint-disable no-console */
const { PrismaClient } = require('@prisma/client')
const dotenv = require('dotenv')

dotenv.config()
const db = new PrismaClient()

async function main() {
  // Seed data is database data that needs to exist for your app to run.
  // Ideally this file should be idempotent: running it multiple times
  // will result in the same database state (usually by checking for the
  // existence of a record before trying to create it). For example:
  //
  //   const existing = await db.user.findMany({ where: { email: 'admin@email.com' }})
  //   if (!existing.length) {
  //     await db.user.create({ data: { name: 'Admin', email: 'admin@email.com' }})
  //   }
  async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array)
    }
  }

  const movieData = [
    {
      title: 'Avengers: Endgame',
      description:
        'After the devastating events of Avengers: Infinity War, the universe ' +
        'is in ruins. With the help of remaining allies, the Avengers assemble ' +
        "once more in order to undo Thanos' actions and restore order to the universe.",
      released_on: new Date('2019-04-26'),
      rating: 'PG-13',
      total_gross: 1_223_641_414,
      director: 'Anthony Russo',
      duration: '181 min',
      image_file_name: 'avengers-end-game.png',
    },
    {
      title: 'Captain Marvel',
      description:
        "Carol Danvers becomes one of the universe's most powerful heroes when Earth " +
        'is caught in the middle of a galactic war between two alien races.',
      released_on: new Date('2019-03-08'),
      rating: 'PG-13',
      total_gross: 1_110_662_849,
      director: 'Anna Boden',
      duration: '124 min',
      image_file_name: 'captain-marvel.png',
    },
    {
      title: 'Black Panther',
      description:
        "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step " +
        'forward to lead his people into a new future and must confront a challenger ' +
        "from his country's past.",
      released_on: new Date('2018-02-16'),
      rating: 'PG-13',
      total_gross: 1_346_913_161,
      director: 'Ryan Coogler',
      duration: '134 min',
      image_file_name: 'black-panther.png',
    },
    {
      title: 'Avengers: Infinity War',
      description:
        'The Avengers and their allies must be willing to sacrifice all in an attempt ' +
        'to defeat the powerful Thanos before his blitz of devastation and ruin puts ' +
        'an end to the universe.',
      released_on: new Date('2018-04-27'),
      rating: 'PG-13',
      total_gross: 2_048_359_754,
      director: 'Anthony Russo',
      duration: '149 min',
      image_file_name: 'avengers-infinity-war.png',
    },
    {
      title: 'Green Lantern',
      description:
        'Reckless test pilot Hal Jordan is granted an alien ring that bestows him with ' +
        'otherworldly powers that inducts him into an intergalactic police force, the Green ' +
        'Lantern Corps.',
      released_on: new Date('2011-06-17'),
      rating: 'PG-13',
      total_gross: 219_851_172,
      director: 'Martin Campbell',
      duration: '114 min',
      image_file_name: 'green-lantern.png',
    },
    {
      title: 'Fantastic Four',
      description:
        'Four young outsiders teleport to an alternate and dangerous universe which alters ' +
        'their physical form in shocking ways.The four must learn to harness their new ' +
        'abilities and work together to save Earth from a former friend turned enemy.',
      released_on: new Date('2015-08-07'),
      rating: 'PG-13',
      total_gross: 168_257_860,
      director: 'Josh Trank',
      duration: '100 min',
      image_file_name: 'fantastic-four.png',
    },
    {
      title: 'Iron Man',
      description:
        'When wealthy industrialist Tony Stark is forced to build an armored suit after ' +
        'a life- threatening incident, he ultimately decides to use its technology to ' +
        'fight against evil.',
      released_on: new Date('2008-05-02'),
      rating: 'PG-13',
      total_gross: 585_366_247,
      director: 'Jon Favreau',
      duration: '126 min',
      image_file_name: 'ironman.png',
    },
    {
      title: 'Superman',
      description:
        'An alien orphan is sent from his dying planet to Earth, where he grows up to become ' +
        "his adoptive home's first and greatest super-hero.",
      released_on: new Date('1978-12-15'),
      rating: 'PG',
      total_gross: 300_451_603,
      director: 'Richard Donner',
      duration: '143 min',
      image_file_name: 'superman.png',
    },
    {
      title: 'Spider-Man',
      description:
        'When bitten by a genetically modified spider, a nerdy, shy, and awkward high ' +
        'school student gains spider- like abilities that he eventually must use to fight ' +
        'evil as a superhero after tragedy befalls his family.',
      released_on: new Date('2002-05-03'),
      rating: 'PG-13',
      total_gross: 825_025_036,
      director: 'Sam Raimi',
      duration: '121 min',
      image_file_name: 'spiderman.png',
    },
    {
      title: 'Batman',
      description:
        'The Dark Knight of Gotham City begins his war on crime with his first major enemy ' +
        'being the clownishly homicidal Joker.',
      released_on: new Date('1989-06-23'),
      rating: 'PG-13',
      total_gross: 411_348_924,
      director: 'Tim Burton',
      duration: '126 min',
      image_file_name: 'batman.png',
    },
    {
      title: 'Catwoman',
      description:
        'Patience Philips seems destined to spend her life apologizing for taking up space. ' +
        'Despite her artistic ability she has a more than respectable career as a graphic designer.',
      released_on: new Date('2004-07-23'),
      rating: 'PG-13',
      total_gross: 82_102_379,
      director: "Jean-Christophe 'Pitof' Comar",
      duration: '101 min',
      image_file_name: 'catwoman.png',
    },
    {
      title: 'Wonder Woman',
      description:
        'When a pilot crashes and tells of conflict in the outside world, ' +
        'Diana, an Amazonian warrior in training, leaves home to fight a war, ' +
        'discovering her full powers and true destiny.',
      released_on: new Date('2017-06-02'),
      rating: 'PG-13',
      total_gross: 821_847_012,
      director: 'Patty Jenkins',
      duration: '141 min',
      image_file_name: 'wonder-woman.png',
    },
  ]

  const movies = []

  await asyncForEach(movieData, async (movie) => {
    console.log(`Creating ${movie.title}...`)
    movies.push(
      await db.movie.create({
        data: movie,
      })
    )
  })

  console.info(`\nSeeded ${movieData.length} posts\n`)

  const reviewData = [
    {
      name: 'Amy',
      stars: 5,
      comment: 'Extraordinary!',
    },
    {
      name: 'Oliver',
      stars: 4,
      comment: 'Raises the bar',
    },
    {
      name: 'Matthew',
      stars: 5,
      comment: 'The special effects are amazing!',
    },
  ]

  const reviews = []

  await asyncForEach(reviewData, async (review, index) => {
    console.log(`Creating review ${index + 1}...`)
    reviews.push(
      await db.review.create({
        data: {
          ...review,
          movie: {
            connect: { id: 1 },
          },
        },
      })
    )
  })

  console.info(`\nSeeded ${reviews.length} reviews\n`)
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await db.disconnect()
  })
