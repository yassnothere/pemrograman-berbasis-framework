import TampilanProduk from "@/views/produk";
import {ProductType} from "../../types/Product.type"

const halamanProdukStatic = (props: { products: ProductType[] }) => {
  const { products } = props;
  return (
    <div>
      <h1>Halaman Produk Static</h1>
      <TampilanProduk products={products} />
    </div>
  );
};

export async function getStaticProps() {
  try {
    const res = await fetch('http://localhost:3000/api/produk'); 
    const response = await res.json();
    
    return {
      props: {
        products: response.data || [],
      },
      revalidate: 10, 
    };
  } catch (error) {
    return {
      props: {
        products: [],
      },
    };
  }
}

export default halamanProdukStatic;
