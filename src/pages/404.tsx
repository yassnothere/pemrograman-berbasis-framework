import styles from "@/styles/404.module.scss";
import Link from 'next/link';
import Image from "next/image";

const Custom404 = () => {
  return (
    <div className={`${styles.error} bg-gray-50 px-4`}>
        <Image 
          src="/page-not-found.png" 
          alt="404" 
          width={400} 
          height={200} 
          className={styles.error_image} 
        />
      <h1 className="text-9xl font-extrabold text-blue-600 tracking-widest animate-bounce">
        404
      </h1>
      
      <div className="bg-red-500 text-white px-3 py-1 text-sm rounded rotate-12 absolute mt-[-150px] shadow-lg">
        Halaman Tidak Ditemukan
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">
          404 - Halaman Tidak Ditemukan
        </h2>
        <p className="mt-4 text-gray-500 max-w-md">
          Maaf, halaman yang Anda cari tidak ada.
        </p>
      </div>

      <Link 
        href="/" 
        className="mt-10 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-xl"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
};

export default Custom404;