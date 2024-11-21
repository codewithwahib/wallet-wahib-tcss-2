import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-white py-4 px-8 shadow-md">
      <div className="flex items-center">
        <Image src="/logo.png" alt="Wallet World Logo" width={150} height={50} />
        <span className="text-xl font-bold text-brown-800"> </span>
      </div>
      <nav className="flex gap-8 items-center">
        <Link href="/" className="text-brown-800 font-semibold">Home</Link>
        <Link href="/wallet" className="text-brown-800 font-semibold">Wallet</Link>
        <Link href="/about" className="text-brown-800 font-semibold">About</Link>
        <Link href="/contact" className="text-brown-800 font-semibold">Contact</Link>
        <FaShoppingCart className="text-brown-800 text-xl" />
      </nav>
    </header>
  );
}

export default Header;






