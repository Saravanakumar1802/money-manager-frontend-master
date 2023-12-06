import { Navigate } from "react-router-dom";
function ProtectRoute({ children }) {
    // console.log(children);
    let token = localStorage.getItem("token")
    return <>
        {
            token ? children : <Navigate to="/" />
        }
    </>

}
export default ProtectRoute