import { getProfile, login } from "@/api/auth";
import { setToken } from "@/api/token";
import { useAuth } from "@/store/auth";
import logo from "@/assets/logo.png";
import Image from "next/image";

export default function Header() {
    const [user, setUser] = useAuth();

    async function handleLogin() {
        try {
            const resp = await login();
            setToken(resp.token);
            const profile = await getProfile();
            if (resp.token) {
                setUser(profile);
                console.log({ profile });
            }
        } catch (error) {
            console.log(error);
        }
    }

    if (!user) {
        return (
            <header className="bg-white px-6 py-4 shadow-sm">
                <div className="container mx-auto flex justify-between items-center">
                    <Image src={logo} alt="" />

                    <button
                        className="bg-white text-gray-600 cursor-pointer border border-gray-300 rounded-full px-4 py-1 text-sm"
                        onClick={handleLogin}
                    >
                        ورود و ثبت نام
                    </button>
                </div>
            </header>
        );
    }

    return (
        <header className="bg-white px-6 py-4 shadow-sm">
            <div className="container mx-auto flex justify-between items-center">
                <Image src={logo} alt="" />
                {
                    <button className="bg-white text-gray-600 border border-gray-300 rounded-full px-4 py-1 text-sm">
                        {user ? user?.name : "پروفایل"}
                    </button>
                }
            </div>
        </header>
    );
}
