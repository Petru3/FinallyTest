
function LoadingPage() {
    return (
        <div className="flex flex-col justify-center items-center bg-gradient-to-r from-[#040D12] to-[#1B5778] bg-repeat-y w-full h-screen">
            <div className="mb-4 border-t-4 border-blue-500 rounded-full w-16 h-16 animate-spin loader"></div>
            <p className="text-2xl text-center text-stone-100" style={{ fontFamily: 'Inter, sans-serif' }}>Loading...</p>
        </div>
    );
}

export default LoadingPage;
