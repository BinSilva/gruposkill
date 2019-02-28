import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Album from '../album/album'
import About from '../about/about'

export default props => (
    <Router history={hashHistory}>
        <Route path='/albuns' component={Album} />
        <Route path='/about' component={About} />
        <Redirect from='*' to='/albuns' />
    </Router>
)