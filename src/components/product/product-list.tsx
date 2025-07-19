import { useProducts } from "../../hooks/use-products";
import LoadingProduct from "../loading-product";
import ProductCard from "./product-card";

const ProductList = ({ category }: { category?: string }) => {
  const { data, isLoading } = useProducts(category);

  if (isLoading)
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 justify-center  gap-4">
        <LoadingProduct />
        <LoadingProduct />
        <LoadingProduct />
        <LoadingProduct />
      </div>
    );

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 md:gap-4">
      {data?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
