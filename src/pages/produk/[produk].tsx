import DetailProduk from "@/views/detailproduk"; 
import { ProductType } from "@/types/Product.type";

const HalamanProduk = ({ product }: { product: ProductType }) => {
  return (
    <div>
      <DetailProduk products={product} />
    </div>
  );
};

export default HalamanProduk;

export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/api/produk'); 
  const response = await res.json();

  const paths = response.data.map((product: ProductType) => ({
    params: { 
      produk: String(product.id) 
    }
  }));

  return {
    paths,
    fallback: false 
  };
}

export async function getStaticProps({ params }: { params: { produk: string } }) {
  const res = await fetch(`http://localhost:3000/api/produk/${params.produk}`);
  const response = await res.json();

  return {
    props: {
      product: response.data || null, 
    }
  };
}