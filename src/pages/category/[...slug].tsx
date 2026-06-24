import { useRouter } from 'next/router';

const CategoryPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Halaman Kategori (Catch-all Route)</h1>
      <p>Berikut adalah parameter URL yang ditangkap:</p>
      
      {/* Menampilkan slug dalam bentuk list jika slug tersedia */}
      <ul>
        {slug && Array.isArray(slug) ? (
          slug.map((param, index) => (
            <li key={index}>Parameter ke-{index + 1}: <strong>{param}</strong></li>
          ))
        ) : (
          <li>{slug || "Tidak ada parameter"}</li>
        )}
      </ul>

      <hr />
      <button onClick={() => router.push('/')} style={{ color: '#0070f3', textDecoration: 'underline' }}>
        Kembali ke Home
      </button>
    </div>
  );
};

export default CategoryPage;