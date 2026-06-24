import { useRouter } from "next/router";

const DetailBlog = () => {
  const router = useRouter();
  const { slug } = router.query; // Mengambil nilai slug dari URL

  return (
    <div style={{ padding: '20px' }}>
      <h1>Detail Artikel Blog</h1>
      <p>Menampilkan konten untuk slug: <strong>{slug}</strong></p>
    </div>
  );
};

export default DetailBlog;