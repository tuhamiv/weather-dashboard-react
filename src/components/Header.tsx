
function Header() {
    return (
        <header className="flex flex-col gap-9 md:flex-row items-center justify-between">
            <div className="flex items-center gap-2">
                <div className="text-sm md:text-2xl border-2 rounded-lg p-2 bg-gray-100">
                    🌦️
                </div>
                <div>
                    <h1 className="text-sm md:text-lg font-bold">Weather Dashboard</h1>
                    <h2 className="text-xs md:text-xl text-gray-500 bg-blue-50">Live weather updates every 15 seconds</h2>
                </div>
            </div>
            <div className="border rounded-lg px-4 text-lg">
                🔴 Live
            </div>
        </header>
    )
}

export default Header