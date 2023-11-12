import { useEffect, useState } from "react";
import Cookie from 'js-cookie';

const useUserState = (window: Window) => {
    const [userToken, setUserToken] = useState<string | null>(localStorage.getItem("TUNEDIN_TOKEN"));

    const [user, setUser] = useState<User | null>(null);

    // set token from query params if it exists
    useEffect(() => {
        const parsedUrl = window?.location?.href && new URL(window?.location?.href);
        if (parsedUrl && parsedUrl.searchParams.get("token")) {
            const token = parsedUrl.searchParams.get("token")!;
            localStorage.setItem("TUNEDIN_TOKEN", token);
            setUserToken(token);
            Cookie.set("TUNEDIN_TOKEN", token);
        }
    }, [window.location.href, setUserToken]);

    useEffect(() => {
        const fetchMe = async () => {
            const accessResponse = await fetch('https://local.playtunedin-test.com:3001/self', {
              headers: {
                Authorization: `Bearer ${userToken}`,
              },
            });
            if (accessResponse.status === 403) {
                localStorage.removeItem("TUNEDIN_TOKEN");
                setUserToken(null);
            } else if (accessResponse.ok) {
                const body = await accessResponse.json();
                setUser(body.user);
            }
        };
        if (userToken) {
            fetchMe();
        }
    }, [userToken])

    return {
        userToken,
        user
    }

}

export default useUserState;