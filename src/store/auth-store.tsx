import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {AuthContextProps, AuthForm} from "@/types/auth.type";
import {useRouter} from "next/navigation";


const AuthContext = createContext<AuthContextProps | undefined>(undefined);

function AuthProvider({
    children
}: {children: ReactNode}) {
    const [auth, setAuth] = useState<boolean>(false);
    const router = useRouter()

    useEffect(() => {
        const auth = localStorage.getItem("auth");
        if (auth) setAuth(true);
    }, [])

    const login = async (auth: AuthForm) => {
        localStorage.setItem("auth", JSON.stringify(auth))
        setAuth(true);
        router.push("/result");
    }

    const logout = async () => {
        localStorage.removeItem("auth");
        localStorage.removeItem("bar-chart");
        localStorage.removeItem("radar-chart");
        localStorage.removeItem("pie-chart");
        localStorage.removeItem("answers");
        router.push("/")
        setTimeout(() => setAuth(false), 1000)
    }

    return (
        <AuthContext.Provider value={{
            auth,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth doit être utilisé dans un AuthProvider")
    return context;
}

export {
    AuthProvider,
    useAuth
}