import {useAppSelector} from "../../app/hooks.ts";
import {useFetchUserQuery} from "../../features/api/accountApi.ts";

const ProfileData = () => {
    const token = useAppSelector(state => state.token);
    const {data, isLoading} = useFetchUserQuery(token);

    if (isLoading) {
        return <p>Loading...</p>
    }
    if (!data) {
        return <p>Data is not available</p>;
    }

    return (
        <>
            <p>First name: {data.firstName}</p>
            <p>Last name: {data.lastName}</p>
            <p>Login: {data.login}</p>
            <ul>
                {data.roles.map(role => <li key={role}>{role}</li>)}
            </ul>
        </>
    );
};

export default ProfileData;