import React, { useState, useContext } from 'react'
import { loginUser } from '../services/userServices'
import LoginForm from '../components/LoginForm'
import { Grid } from '@material-ui/core/Grid'
import { AuthContext } from '../context/AuthContext'

function LoginView() {
    const { addToken } = useContext(AuthContext)
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const onSubmit = async () => {
        const data = await loginUser(user)
        if (data) {
            addToken(data.token)
        }
    }

    const onType = (event) => {
        switch (event.target.id) {
            case 'email':
                setUser({
                    ...user,
                    email: event.target.value
                })
                break;
            case 'password':
                setUser({
                    ...user,
                    password: event.target.value
                })
                break;
            default:
                break;
        }
    }

    return(
        <Grid container justify='center'>
            <LoginForm onSubmit={onSubmit} onType={onType} />
        </Grid>
    )
}

export default LoginView