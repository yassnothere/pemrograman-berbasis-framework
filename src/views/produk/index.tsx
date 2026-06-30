import useSWR from 'swr';
import { fetcher } from '@/utils/swr/fetcher'; 
import { ProductType } from '@/types/Product.type';
import styles from '@/styles/produk.module.scss';
import Link from 'next/link'; 
import Image from 'next/image';

const SkeletonProduk = () => (
  <div className={`${styles.productCard} animate-pulse bg-white`}>
    <div className="w-full h-64 bg-slate-200"></div>
    <div className="p-6">
      <div className="h-6 bg-slate-200 rounded w-3/4 mb-6"></div>
      <div className="h-8 bg-slate-200 rounded w-24"></div>
    </div>
  </div>
);

type ViewProps = {
  products?: ProductType[];
};

export default function TampilanProduk({ products: serverProducts }: ViewProps) {
  const { data: response, error, isLoading, isValidating, mutate } = useSWR(
    serverProducts ? null : '/api/produk', 
    fetcher
  );
  
  const finalProducts: ProductType[] = serverProducts || response?.data || [];

  return (
    <div className="bg-gray-50 min-h-screen pb-10">
      <h1 data-testid="title" className="text-3xl font-bold text-center py-8 text-gray-800">
        Halaman Produk {serverProducts ? "" : ""}
      </h1>
      
      {!serverProducts && (
        <div className="flex justify-center mb-8">
          <button 
            onClick={() => mutate()} 
            disabled={isValidating}
            className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition-all disabled:bg-indigo-300"
          >
            {isValidating ? "Menyinkronkan..." : "Segarkan Data"}
          </button>
        </div>
      )}

      {error && <p className="text-center text-red-500 mb-4">Terjadi kesalahan saat memuat data.</p>}

      <div className={`px-10 ${styles.productGrid}`}>
        {isLoading && !serverProducts ? (
          [1, 2, 3].map((item) => <SkeletonProduk key={`skeleton-${item}`} />)
        ) : finalProducts?.length > 0 ? (
          finalProducts?.map((item) => (
            // PERUBAHAN PENTING: Bungkus card dengan <Link>
            <Link href={`/produk/${item.id}`} key={item.id} className={styles.productCard}>
              <div className={styles.imageWrapper}>
                <Image src={item.image} alt={item.name} width={500} height={500} />
                <span className="absolute top-4 right-4 bg-white/90 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  {item.category || "Umum"}
                </span>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 line-clamp-1">{item.name}</h2>
                <div className="mt-4 flex justify-between items-end">
                  <p className="text-2xl font-black text-indigo-600">Rp {item.price.toLocaleString('id-ID')}</p>
                  <p className="font-bold text-gray-700 bg-slate-100 px-3 py-1 rounded-md">{item.size || "-"}</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500 font-medium py-10">Belum ada produk.</p>
        )}
      </div>
    </div>
  );
}