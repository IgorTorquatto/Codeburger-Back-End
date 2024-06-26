import * as Yup from 'yup'
import jwt from 'jsonwebtoken'
import User from '../models/User'
import authConfig from '../../config/auth'

class SessionController {
    async store(request, response) {
        const schema = Yup.object().shape({
            email: Yup.string().email().required(),
            password: Yup.string().required(),
        })

        const userEmailorPasswordIncorrect = () => {
            return response.status(400).json({ error: "Tenha certeza de que sua senha ou email estejam corretos" })
        }
        if (!(await schema.isValid(request.body))) {
            userEmailorPasswordIncorrect()
        }

        const { email, password } = request.body

        const user = await User.findOne({
            where: { email },
        })

        if (!user) {
            userEmailorPasswordIncorrect()
        }

        if (!(await user.checkPassword(password))) {
            userEmailorPasswordIncorrect()
        }

        return response.json({ id: user.id,
            email,
            name: user.name,
            admin: user.admin,
            token: jwt.sign(
                {id: user.id},
                authConfig.secret,
                {expiresIn: authConfig.expiresIn}
            )
        })
    }
}

export default new SessionController()