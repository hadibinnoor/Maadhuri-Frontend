import { useContext } from "react";
import { FireBaseContext } from "../../contexts/firebase.context";
import { Navigate } from "react-router-dom";

export default function Protected({ children }: any) {

    const authContext = useContext(FireBaseContext);
    const user = authContext.user

    return (
        <>
            {user ? (children) : (<Navigate to={'/'} />)}
        </>
    )
}