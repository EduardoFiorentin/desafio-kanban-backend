import { NextFunction, Request, Response } from "express"

const jwt = require('jsonwebtoken')
// const atob = require('atob')

require('dotenv').config()

class ValidateUserUseCase {
    auth = (authHeader: string | undefined) => {
        if (authHeader === undefined) return false

        const token = authHeader && authHeader.split(' ')[1]
        
        if (!token) return false
        const secret = process.env.SECRET
        
        try {
            jwt.verify(token, secret)

            return true

        } catch (err) {
            return false
        }
    }
}

export {
    ValidateUserUseCase
}