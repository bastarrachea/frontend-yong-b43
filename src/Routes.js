import React, {Fragment} from 'react'
import { Route, Redirect } from 'react-router-dom'
import LoginView from './views/LoginView'
import RegisterView from './views/RegisterView'

function Routes () {
    return(
        <Fragment>
            <Route exact path="/">
            <Redirect to="/register" />
            </Route>
            <Route exact path='/register' component={RegisterView} />
            <Route exact path='/login' component={LoginView} />
        </Fragment>
    )
}

export default Routes