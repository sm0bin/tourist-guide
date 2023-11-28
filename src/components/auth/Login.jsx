import { toast } from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";


const Login = () => {
    const { login, googleSignIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [btnLoading, setBtnLoading] = useState(false);

    const success = userCredential => {
        const user = userCredential.user;
        console.log(user);
        if (user) {
            toast.success("Login successful");
        }
        navigate(location?.state?.from?.pathname || "/", { replace: true });
    }

    const failed = error => {
        const errorMessage = error.message;
        const errorCode = error.code;

        toast.error(errorMessage);

        console.error(errorCode);
        console.error(errorMessage);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        setBtnLoading(true);
        login(form.email.value, form.password.value)
            .then((userCredential) => {
                success(userCredential);
                setBtnLoading(false);
                form.reset();
            })
            .catch((error) => {
                failed(error);
            });
    };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((userCredential) => {
                success(userCredential);
            })
            .catch((error) => {
                failed(error);
            });
    }



    return (
        <div className="card shrink-0 w-full max-w-lg shadow bg-base-100 p-6">
            <button onClick={handleGoogleSignIn} className="btn"><FcGoogle className="text-xl" />Continue With Google</button>
            <div className="divider">Or</div>
            <h3 className="text-center font-script text-3xl text-blue-400">Login Now</h3>
            <form onSubmit={handleSubmit} className="card-body p-0">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-info" disabled={btnLoading}>
                        {
                            btnLoading ?
                                <>
                                    <span className="loading loading-spinner"></span>
                                    Logging in...
                                </> : "Login"
                        }

                    </button>
                </div>
            </form>
            <div className="text-sm mt-4 font-medium text-gray-400 dark:text-gray-300">
                Not registered? <Link to="/auth/signup" className="link link-info">Create Account</Link>
            </div>
        </div>
    );
};

export default Login;