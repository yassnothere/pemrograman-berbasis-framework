import Link from 'next/link'

const Produk = () => {
    return (
        <div>
            Produk User Page

            {/* Navigasi ke Halaman Lain (Contoh: Password) */}
            <nav style={{ marginTop: '20px' }}>
                <Link href="/produk/sepatu" style={{ color: 'blue', textDecoration: 'underline' }}>
                    Ke Halaman Produk Sepatu
                </Link>
            </nav>
        </div>
    );
};

export default Produk;