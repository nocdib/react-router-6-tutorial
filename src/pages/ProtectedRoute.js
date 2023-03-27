import { Navigate } from "react-router-dom"

/*
    This protects the enclosed route from direct access. It must be 
    navigated to through the prescribed route or else it will return to /
*/

const ProtectedRoute = ({children, user}) => {
    console.log(`children: ${children.user}, user: ${user}`)
    if(!user) {
        console.log('illegal entry')
        return <Navigate to='/' />
    }
    console.log(user)
    return children
};
export default ProtectedRoute;