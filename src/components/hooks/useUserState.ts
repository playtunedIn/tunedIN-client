import { useEffect, useState } from "react";


const useUserState = (window: Window) => {
    const urlParams = window?.location?.href && new URL(window?.location?.href);
    const [userToken, setUserToken] = useState<string | null>(localStorage.getItem("TUNEDIN_TOKEN"));

    const [user, setUser] = useState<User | null>(null);

    const logout = () => {
        localStorage.removeItem("TUNEDIN_TOKEN");
        setUserToken(null);
    }

    // set token from query params if it exists
    useEffect(() => {
        if (urlParams && urlParams?.searchParams.get("token")) {
            const token = urlParams.searchParams.get("token")!;
            localStorage.setItem("TUNEDIN_TOKEN", token);
            setUserToken(token);
            urlParams.searchParams.delete("token")
            window.location.replace(urlParams.toString());
        }
    }, [urlParams, setUserToken]);

    useEffect(() => {
        const fetchMe = async () => {
            try {
                const accessResponse = await fetch('https://localhost:3001/self', {
                    headers: {
                        Authorization: `Bearer ${userToken}`,
                    },
                });
                if (accessResponse.status === 403) {
                    logout();
                } else if (accessResponse.ok) {
                    const body = await accessResponse.json();
                    setUser(body.user);
                }
            } catch(e) {
                logout();
            }
        };
        if (userToken) {
            fetchMe();
        }
    }, [userToken])

    return {
        userToken,
        user,
        logout
    }

}

export default useUserState;