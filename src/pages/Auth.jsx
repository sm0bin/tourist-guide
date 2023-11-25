import { Outlet } from "react-router-dom";

const Auth = () => {
    return (
        // <div className="mx-4 md:mx-8 lg:mx-auto max-w-7xl grid grid-cols-2 h-screen">
        <div className="h-screen grid grid-cols-1 lg:grid-cols-2">
            <figure className="overflow-hidden hidden lg:block">
                <img className="object-cover object-bottom h-screen w-full" src="https://source.unsplash.com/SqC8M0eYxEY" alt="" />
            </figure>
            <div className="flex items-center justify-center bg-[url('https://source.unsplash.com/SqC8M0eYxEY')] lg:bg-[url('/pattern/pattern-1.svg')]">
                <Outlet></Outlet>

            </div>
        </div>
    );
};

export default Auth;