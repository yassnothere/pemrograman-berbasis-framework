import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TampilanProduk from "@/views/produk"; // Sesuaikan path alias
import useSWR from "swr";
import { fetcher } from "@/utils/swr/fetcher"; // Sesuaikan path alias

const ProductPage = () => {
  // 1. State untuk simulasi status login
  const [isLogin, setIsLogin] = useState(true);
  const { push } = useRouter();

  // 2. Client-side Protection (Middleware sederhana di level komponen)
  useEffect(() => {
    if (!isLogin) {
      // Jika tidak login, tendang user ke halaman login
      push("/auth/login");
    }
  }, [isLogin, push]);

  // 3. Mengambil data menggunakan SWR
  const { data, error, isLoading } = useSWR("/api/produk", fetcher);

  // Jika sedang loading atau tidak login, jangan tampilkan apa-apa dulu (Blank/Loading)
  if (!isLogin) return null;

  return (
    <div>
      <TampilanProduk products={isLoading ? [] : data?.data} />
    </div>
  );
};

export default ProductPage;