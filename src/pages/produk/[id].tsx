import { useRouter } from "next/router";

const HalamanProduk = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Halaman Produk</h1>
      <p>Produk: {id}</p>
    </div>
  );
};

export default HalamanProduk;