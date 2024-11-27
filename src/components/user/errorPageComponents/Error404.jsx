
const Error404 = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center bg-dark-gray">
            <h1 className="font-semibold text-error-yellow text-9xl">404</h1>
            <p className="mt-4 text-2xl text-white">Ooops...</p>
            <button
                className="flex items-center px-4 py-2 mt-8 text-white bg-transparent border-2 border-4 rounded-md hover:bg-gray-600 "
                onClick={() => window.location.href = '/'} // Redirect or change as per need
            >
                Let&apos;s try something different
                <span className="ml-2">&gt;</span> {/* Chevron icon */}
            </button>
        </div>
    );
};

export default Error404;
