/*
    Import all of the Pages into this module so that they can be exported and imported into App.js nicely.
    The alternative would be to do these imports into the App.js file. This way keeps that file tidy.
*/

import About from './About'
import Dashboard from './Dashboard'
import Error from './Error'
import Home from './Home'
import Login from './Login'
import Products from './Products'
import SingleProduct from './SingleProduct'
import ProtectedRoute from './ProtectedRoute'

export {
    About,
    Dashboard,
    Error,
    Home,
    Login,
    Products,
    SingleProduct,
    ProtectedRoute
}