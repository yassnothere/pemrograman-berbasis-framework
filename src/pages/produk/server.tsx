import TampilanProduk from "@/views/produk";
import {ProductType} from "../../types/Product.type"

const HalamanProdukServer = (props: { products: ProductType[] }) => {
  const { products } = props;

  return (
    <div className="bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center py-8 text-gray-800">Halaman Produk Server</h1>
      
      <TampilanProduk products={products} />
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/produk`);
  const response = await res.json();

  return {
    props: {
      products: response.data || [], 
    },
  };
}

export default HalamanProdukServer;