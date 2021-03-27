import { Router } from "express"

const router: Router = Router()

router.use('/test/', require('./test'))

module.exports = router