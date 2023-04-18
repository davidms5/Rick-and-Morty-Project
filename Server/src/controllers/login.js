import {user, passwords} from '../utils/users'

export const Login = (req, res) =>{
    const {email, password} = req.query;
    if(email === user && password === passwords){
        res.status(200).json({access: true})
    } else {
        res.status(200).json({access: false})
    }
}