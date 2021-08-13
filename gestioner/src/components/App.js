import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Layout from './Layout'
import Login from '../pages/Login'
import Register from '../pages/Register'
import NotFound from '../pages/NotFound'

function App(){
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path='/Login' component={Login} />
                    <Route exact path='/Register' component={Register} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App