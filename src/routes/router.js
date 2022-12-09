import {Router} from 'express'
import {ping, hello} from '../controllers/index.js'

const router = Router()

router.get('/', hello)
router.get('/ping', ping)


export default router
