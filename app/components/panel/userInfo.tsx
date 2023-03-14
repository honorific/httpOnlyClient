import { useAppSelector } from "../../hooks";
import useAuth from "../../hooks/useAuth";
import { selectUser } from "../../store/auth";



const UserInfo = () => {
    const user = useAppSelector(selectUser)

    return (
        <>
            <span>username: </span>
            <h2>{user?.name}</h2>
        </>
    )
}


export default UserInfo;