import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Login from '../pages/Login'
import Register from '../pages/Register'

function App(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/Login' component={Login} />
                <Route exact path='/Register' component={Register} />
            </Switch>
        </BrowserRouter>
    )
}

export default App