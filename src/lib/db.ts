import { Redis } from '@upstash/redis'

//Typescript is giving an error, but there is none!
// export const db = new Redis({
//     url: process.env.UPSTASH_REDIS_REST_URL,
//     token: process.env.UPSTA
// })
//I am trying like this:

export const db = Redis.fromEnv()