import { ProductType } from "../../types/Product.type"; 
import styles from "@/styles/detailProduct.module.scss";
import { useRouter } from "next/router"; 

const DetailProduk = ({ products }: { products: ProductType }) => {
  const router = useRouter();

  if (!products || Object.keys(products).length === 0) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <p style={{ fontSize: '1.2rem', color: '#6b7280', fontWeight: 'bold' }}>Memuat informasi produk...</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        
        <div className={styles.imageSection}>
          <img 
            src={products.image || "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80"} 
            alt={products.name || "Gambar Produk"} 
          />
        </div>

        <div className={styles.infoSection}>
          <span className={styles.category}>{products.category || "Umum"}</span>
          <h1 className={styles.title}>{products.name}</h1>
          
          <p className={styles.price} style={{ marginBottom: '0.5rem' }}>
            Rp {products.price ? products.price.toLocaleString("id-ID") : "0"}
          </p>

          <div style={{ marginBottom: '1.5rem' }}>
             <span style={{ backgroundColor: '#f3f4f6', padding: '4px 12px', borderRadius: '6px', fontWeight: 'bold', color: '#374151', fontSize: '0.9rem' }}>
               Ukuran: {products.size ? products.size.toUpperCase() : "-"}
             </span>
          </div>

          <div className={styles.divider}></div>
          
          <div className={styles.actionButtons}>
            <button onClick={() => router.back()} className={styles.btnBack}>
              ← Kembali
            </button>
            <button className={styles.btnBuy}>
              Beli Sekarang
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default DetailProduk;