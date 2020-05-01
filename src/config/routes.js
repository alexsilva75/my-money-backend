const express = require('express')
const auth = require('./auth')

module.exports = function(app){

    /**
     * Rotas protegidas
     */
    const protectedApi = express.Router()
    app.use('/api', protectedApi)

    protectedApi.use(auth)

    const billingCycleService = require('../api/billingCycle/billingCycleService')
    billingCycleService.register(protectedApi, '/billingCycles')

    /**Rotas abertas */
    const openApi = express.Router()
    app.use('/oapi', openApi) 

    const AuthService = require('../api/user/authService')
    openApi.post('/login', AuthService.login)
    openApi.post('/signup', AuthService.signup)
    openApi.post('/validateToken', AuthService.validateToken)


}