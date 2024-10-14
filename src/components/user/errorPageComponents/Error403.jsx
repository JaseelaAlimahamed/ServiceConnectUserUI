
const Error403 = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center bg-dark-gray">
            <h1 className="font-semibold text-error-yellow text-9xl">403</h1>
            <p className="mt-4 text-2xl text-white">Access Denied</p>
            <p className="mt-2 text-white">Sorry, You don&apos;t have access to this page</p>
            <button
                className="flex items-center px-4 py-2 mt-8 text-white bg-transparent border-2 border-4 rounded-md hover:bg-gray-600 "
                onClick={() => window.history.back()} // Go back to the previous page
            >
                Go back to the Previous page
                <span className="ml-2">&gt;</span> {/* Chevron icon */}
            </button>
        </div>
    );
};

export default Error403;
