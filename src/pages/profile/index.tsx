import Link from 'next/link'

export default function ProfilePage() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Halaman Profil</h1>
      <p>Selamat datang di profil saya.</p>

      {/* Navigasi ke Halaman Lain (Contoh: Setting) */}
      <nav style={{ marginTop: '10px' }}>
        <Link href="/profile/edit" style={{ color: 'blue', textDecoration: 'underline' }}>
          Ke Halaman edit
        </Link>
      </nav>
    </div>
  );
}