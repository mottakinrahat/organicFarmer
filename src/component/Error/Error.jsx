import React from 'react';
import { Link } from 'react-router-dom';
const Error = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-[#C4D290]">
            <div className="max-w-lg text-center">
                <h1 className="text-5xl text-black font-bold mb-8">Oops! Page Not Found</h1>
                <p className="text-lg text mb-8">
                    It seems like the page you are looking for doesn't exist or has been moved.
                </p>
                <Link
                    href="/"
                    className="inline-block bg-[#159122] text-black font-semibold py-2 px-6 rounded-md hover:bg-yellow-600 transition-colors duration-300"
                >
                    Go Back to Home
                </Link>
            </div>
        </div>
    );
};

export default Error;