import Link from 'next/link'

const UserSettingPage = () => {
    return (
        <div>
            User Setting Page

            {/* Navigasi ke Halaman Lain (Contoh: Password) */}
            <nav style={{ marginTop: '20px' }}>
                <Link href="/user/password" style={{ color: 'blue', textDecoration: 'underline' }}>
                    Ke Halaman Setting User (Password)
                </Link>
            </nav>
        </div>
    );
};

export default UserSettingPage; 