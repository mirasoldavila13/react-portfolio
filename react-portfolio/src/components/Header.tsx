import Navigation from './Navigation';

function Header() {
    return (
        <header className="p-4 bg-gray-800 text-white flex justify-between items-center">
            <h1 className="text-2xl font-bold">Mirasol Davila</h1>
            <Navigation />
        </header>
    );
}

export default Header;