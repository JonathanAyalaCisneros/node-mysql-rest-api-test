
import {pool} from '../db.js'


export const ping = async (req, res) =>{
  const [result] = await pool.query('SELECT "pong" AS result')
  res.json(result[0])
}

export const hello = (req, res) => {
  res.send('Hello madafucka ?')
}
