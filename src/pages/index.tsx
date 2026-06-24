import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={inter.className} style={{ padding: '20px' }}>

      <h1>Praktikum Next.js Pages Router</h1> <br />
      <p>Mahasiswa D4 Pengembangan Web</p>
      
      {/* Navigasi ke Halaman About */}
      <nav style={{ marginTop: '20px' }}>
        <Link href="/about" style={{ color: 'blue', textDecoration: 'underline' }}>
          Ke Halaman About
        </Link>
      </nav>

      {/* Navigasi ke Halaman Lain (Contoh: Setting) */}
      <nav style={{ marginTop: '10px' }}>
        <Link href="/setting/app" style={{ color: 'blue', textDecoration: 'underline' }}>
          Ke Halaman Setting App
        </Link>
      </nav>

      {/* Navigasi ke Halaman Lain (Contoh: Setting) */}
      <nav style={{ marginTop: '10px' }}>
        <Link href="/user" style={{ color: 'blue', textDecoration: 'underline' }}>
          Ke Halaman Setting User
        </Link>
      </nav>

      {/* Navigasi ke Halaman Lain (Contoh: Setting) */}
      <nav style={{ marginTop: '10px' }}>
        <Link href="/produk" style={{ color: 'blue', textDecoration: 'underline' }}>
          Ke Halaman Produk
        </Link>
      </nav>

      {/* Navigasi ke Halaman Lain (Contoh: Setting) */}
      <nav style={{ marginTop: '10px' }}>
        <Link href="/profile" style={{ color: 'blue', textDecoration: 'underline' }}>
          Ke Halaman Profile
        </Link>
      </nav>
    </div>
  )
}