import { userData } from "@/data_store/data";
import userModel from "@/model/userModel";
import { useRouter } from "next/router";
import { useState } from "react";


//This is for the number 5 exercise//

export default function SignUp() {
    const router = useRouter();
    const [cred, setCred] = useState(userModel);
    const { user, addData } = userData();
    const [err, setErr] = useState({
        color: 'bg-red-700',
        errMsg: '',
        isErr: false
    })

    const handleCreds = (e) => {
        setCred({ ...cred, [e.target.name]: e.target.value });
    }
    const saveData = () => {
        if (cred.name === '' || cred.email === '' || cred.password === '') {
            setErr({ ...err, errMsg: 'Some field/s are empty!', isErr: true, color: 'bg-red-700'});
        } else {
            if (cred.password.split('').length >= 8) {
                addData(cred);
                setCred(userModel);
                setErr({ ...err, errMsg: 'Registered!', isErr: true,color:'bg-green-700' });
            } else {
                setErr({ ...err, errMsg: 'Password must be at least 8 characters!!!', isErr: true,color: 'bg-red-700' });
            }

        }
    }
    const login = () => {
        console.log(user);
        router.push("/login");
    }

    const msgClose =()=>{
        setErr({ ...err,isErr: false});
    }

    return (
        <div className="w-full min-h-screen flex justify-center items-center bg-gray-900">
            <div>
                <div className="flex justify-center flex-col items-center p-10">
                <h1 className="font-mono font-bold text-4xl text-gray-100">Holden. Montajes</h1>
                </div>
                <div className="relative w-[380px] h-[480px] bg-gray-800 rounded-lg z-10 p-5 overflow-hidden">
                <div className="absolute w-[380px] h-[420px] bg-gradient-to-r from-red-500 via-yellow-500 
               to-transparent-top-[50%] -left-[50%] animate-spin-slow origin-bottom-right"></div>
                <div className="absolute w-[380px] h-[420px] bg-gradient-to-r from-violet-500 via-green-500
               to-transparent-top-[50%] -left-[50%] animate-spin-delay origin-bottom-right"> </div>
                    <div className="absolute inset-1 bg-gray-800 rounded-lg z-10 p-5">
                        <form>
                        <h2 className="text-2xl font-bold font-mono text-gray-100 text-center mt-3 mb-5">Sign up</h2>
                        <div className="text-center font-sans mb-10 bg-gray-800 ">
                            </div>
                            <div className="relative flex flex-col mb-2">
                                <div className={`text-lg text-center ${err.color} rounded-md text-white`}>{err.isErr ? err.errMsg : ''}<span className=" float-right mx-5 font-bold cursor-pointer" onClick={msgClose}>&#10799;</span></div>
                                <div>
                                    <span className=" font-medium text-gray-100">Username</span><input name="name" className="shadow pb-2 appearance-none border rounded w-full py-2 px-3 text-gray-100 bg-blue-500 leading-tight focus:outline-none focus:shadow-outline" type="text" value={cred.name} onChange={handleCreds} placeholder="Enter your name" required />
                                </div>
                                <div className="mt-3">
                                    <span className=" font-medium text-gray-100">Email</span> <input name="email" className="shadow pb-2 appearance-none border rounded w-full py-2 px-3 text-gray-100 bg-blue-500 leading-tight focus:outline-none focus:shadow-outline" type="email" value={cred.email} onChange={handleCreds}  placeholder="Enter your email"  required />
                                </div>
                                <div className="mt-3">
                                    <span className=" font-medium text-gray-100">Password</span><input name="password" className="shadow pb-2 appearance-none border rounded w-full py-2 px-3 text-gray-100 bg-blue-500 leading-tight focus:outline-none focus:shadow-outline" type="password" value={cred.password} onChange={handleCreds} placeholder="Create a password" required />
                                    <span className={`font-normal text-sm text-red-500`}>Must be at least 8 characters.</span>
                                </div>

                                <div className="mt-5">
                                    <button className="mt-3 shadow bg-blue-500 hover:bg-blue-600 focus:shadow-outline 
                                focus:outline-none text-white font-bold py-2 px-3 rounded w-full" type="button" onClick={saveData}>
                                        Register
                                    </button>                                  
                                    <div className="mt-2 content-center text-center">
                                        <h3 className="text-center font-medium text-sm text-gray-100">Already have an account? <span className="text-blue-500 cursor-pointer" onClick={login}>Login</span></h3>
                                    </div>
                                </div>
                                </div>
                            </form>
                        </div>
                    </div>
            </div>
        </div>
    );
}