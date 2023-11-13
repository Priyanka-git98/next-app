"use client"
import { useRouter } from "next/navigation";
import Link from "next/link";

const Login = () => {
    const router = useRouter();
    const navigate = (page) => {
        router.push("/login/" + page)
    }
    return (
        <div>
            <h3 className="heading">Login Page</h3>
            <Link href="./">Go to Home page</Link>
            <br />
            <button onClick={() => navigate("loginstudent")}>Go to Login student page</button>
            <br />
            <button onClick={() => navigate("loginteacher")}>Go to Login teacher page</button>

        </div>
    )

}

export default Login;