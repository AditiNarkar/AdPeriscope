"use client"

export function Header({ title = "Dashboard" }) {
    return (
        <header className="sticky top-0 w-full bg-gray-800 bg-opacity-50 backdrop-blur-lg text-white px-6 py-[10px] flex items-center justify-between shadow-lg">
            <img
                src="../logo1.jpeg"
                className="rounded-circle user_img !w-[50px] !h-[50px] animate-moveInCircle"
            />
            <h2 className="text-xl font-bold">{title}</h2>
            <nav className="flex items-center space-x-6">
                <a
                    href="/"
                    className="text-base font-bold text-white hover:text-gray-300 transition-colors"
                >
                    Change Prompt
                </a>
            </nav>
        </header>
    );
}
