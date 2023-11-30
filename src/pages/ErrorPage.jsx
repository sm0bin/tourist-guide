import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <>
            <div id="error-page" className="flex flex-col items-center justify-center my-24 gap-3 space-y-4 w-11/12 mx-auto">
                <img className="lg:w-1/3 mx-auto" src="/404-cat-2.svg" alt="" />
                <div>
                    <h2 className="font-semibold text-2xl text-center">Sorry, an unexpected error has occurred.</h2>
                    <h4 className="font-medium text-lg text-center">
                        <i>{error.statusText || error.message}</i>
                    </h4>
                </div>
                <Link to="/" className="btn btn-info bg-brandRed-500 hover:bg-brandRed-500 border-none text-white normal-case font-medium text-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Go Home
                </Link>
            </div>
        </>
    );
}