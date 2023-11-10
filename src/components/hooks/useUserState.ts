import { useEffect, useState } from "react";


const useUserState = (window: Window) => {
    const [userToken, setUserToken] = useState<string | null>(null);

    // set token from query params if it exists
    useEffect(() => {
        const parsedUrl = window?.location?.href && new URL(window?.location?.href);
        if (parsedUrl && parsedUrl.searchParams.get("token")) {
            const token = parsedUrl.searchParams.get("token")!;
            localStorage.setItem("TUNEDIN_TOKEN", token);
            console.log("setting token from query params");
            setUserToken(token)
        }
    }, [window.location.href, setUserToken]);

    // check if token is already stored
    useEffect(() => {
        const tokenFromStorage = localStorage.getItem("TUNEDIN_TOKEN");
        if (tokenFromStorage) {
            console.log("setting token from storage");
            setUserToken(tokenFromStorage);
        }
    }, [setUserToken]);

    return {
        userToken
    }

}

export default useUserState;