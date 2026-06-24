import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (router.query.status === "unauthorized_admin") {
      alert("Akses ditolak! Halaman tersebut hanya bisa diakses oleh Admin.");
      // Optional: Clear the query parameter after showing the alert
      router.replace('/', undefined, { shallow: true });
    }
  }, [router.query.status]);
  return (
    <div>
      <Head>
        <title>Praktikum Next.js Pages Router</title>
      </Head>
      <h1>Praktikum Next.js Pages Router</h1> <br />
      <p>Mahasiswa D4 Pengembangan Web</p>
    </div>
  )
}