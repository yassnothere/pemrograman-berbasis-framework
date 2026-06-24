import Link from 'next/link';

const Navbar = () => {
  return (
    <nav style={{ 
      display: 'flex', 
      gap: '20px', 
      padding: '10px 0', 
      borderBottom: '1px solid #ccc',
      marginBottom: '20px' 
    }}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/setting/app">Setting App</Link>
      <Link href="/user">User</Link>
      <Link href="/produk">Produk</Link>
    </nav>
  );
};

export default Navbar;