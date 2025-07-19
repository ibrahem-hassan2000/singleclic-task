import { useParams } from "react-router";
import ProductList from "../../components/product/product-list";

function Category() {
  const { category } = useParams();

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 text-center mb-8 capitalize ">{category}</h1>
      <ProductList category={category} />
    </div>
  );
}

export default Category;
