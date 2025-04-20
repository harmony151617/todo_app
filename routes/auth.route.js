const {Router} = require('express')
const router = Router()
const User = require('../models/User')
const {check, validationResult} = require('express-validator')
const bcrypt = require('bcryptjs')

router.post('/register', 
    [
        check('email', 'Некоректний email').isEmail(),
        check('password', 'Некоректний пароль').isLength({min: 3})
    ],
    
    async (req, res) =>{
    try {

        const errors = validationResult(req)
        
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некоретні дані при реєстрації'
            })
        }

        const {email, password} = req.body

        const isUsed = await User.findOne({email})

        if (isUsed) {
            return res.status(300).json({message: 'Наданий email вже зайнятий, спробуйте інший'})
        } 
        
        const hashedPassword = await bcrypt.hash(password, 12)
        
        const user = new User({
            email, password: hashedPassword
        })

        await user.save()
        res.status(201).json({message: 'Акаунт створено'})

    } catch (error) {
        console.log(error)
    }
})

module.exports = router