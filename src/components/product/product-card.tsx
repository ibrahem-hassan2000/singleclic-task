import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store";
import type { Product } from "../../types/product";
import { addToCart } from "../../store/cart-slice";
import { Link } from "react-router";
import ButtonAdd from "../button-add";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="w-full max-w-sm bg-white border border-gray-300 hover:border-gray-400 hover:shadow hover:shadow-gray-200 duration-300 rounded-2xl md:rounded-3xl ">
      <Link
        to={`/product/${product.id}`}
        className="flex items-center justify-center"
      >
        <img
          className="p-4 h-[160px]  md:h-[230px]"
          src={product.image}
          alt={product.title}
        />
      </Link>
      <div className="md:px-5 px-2.5 pb-2.5 md:pb-5">
        <Link to={`/product/${product.id}`}>
          <h5 className="md:text-base text-sm font-semibold text-center tracking-tight text-gray-600 truncate mb-1 ">
            {product.title}
          </h5>
          <h6 className="md:text-base text-sm capitalize  font-bold text-center tracking-tight text-gray-900 mb-1 ">
            {product.category}
          </h6>
        </Link>

        <div className="flex items-center justify-between gap-2 flex-wrap mt-3">
          <span className="md:text-lg text-base  font-mono font-bold text-gray-600  block ">
            ${product.price}
          </span>
          <ButtonAdd
            variant="card"
            onClick={() =>
              dispatch(addToCart({ product: product, quantity: 1 }))
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
