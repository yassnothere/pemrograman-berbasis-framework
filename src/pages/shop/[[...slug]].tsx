import { useRouter } from "next/router";

const halamanToko = () => {
//   const router = useRouter();
//   console.log(router);
const { query } = useRouter();
  
  return (
    <div>
      <h1>Halaman Toko</h1>
      <p>Toko: {query.slug ? (Array.isArray(query.slug) ? query.slug.join("-") : query.slug) : "Semua Kategori"}</p>
    </div>
  );
};

export default halamanToko;
