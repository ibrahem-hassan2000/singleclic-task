import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { useProduct } from "../../hooks/use-one-product";
import ProductNotFound from "../product-not-found";
import ProductOptionsRow from "./product-options-row";
import ProductSize from "./product-size";
import { useState } from "react";
import type { SizesProp } from "../../types/product";
import type { AppDispatch } from "../../store";
import { addToCart } from "../../store/cart-slice";
import ProductCounter from "./product-counter";
import { LoadingIcons, StarIcons } from "../../assets/icons/icons";
import ButtonAdd from "../button-add";

// Available sizes
const sizes: SizesProp[] = ["S", "M", "L", "XL", "XXL"];

const ProductDetails = () => {
  const [size, setSize] = useState<SizesProp>("S"); // Selected size state
  const [counter, setCounter] = useState(1); // Quantity selected
  const { id } = useParams(); // Get product ID from route

  const { data, isLoading } = useProduct(id as string); // Fetch product by ID

  const dispatch = useDispatch<AppDispatch>();

  // Show loading icon while fetching
  if (isLoading)
    return (
      <div role="status" className="flex items-center justify-center">
        <LoadingIcons />
      </div>
    );

  // Show fallback if no product found
  if (!isLoading && !data) return <ProductNotFound />;

  return (
    <section className="relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 mx-auto max-md:px-2">
          
          {/* Left side: Product image */}
          <div className="img">
            <div className="img-box h-[300px] md:h-[400px] max-lg:mx-auto">
              <img
                src={data?.image}
                alt={data?.title}
                className="mx-auto max-w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right side: Product data */}
          <div className="data w-full lg:pr-8 pr-0 xl:justify-start justify-center flex items-center max-lg:pb-10 xl:my-2 lg:my-5 my-0">
            <div className="data w-full max-w-xl">
              {/* Product title */}
              <h2 className="font-manrope font-bold text-2xl md:text-3xl leading-8 md:leading-10 text-gray-900 mb-2 capitalize">
                {data?.title}
              </h2>

              {/* Price and rating */}
              <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                <h6 className="font-manrope font-semibold text-2xl leading-9 text-gray-900 pr-5 sm:border-r border-gray-200 mr-5">
                  ${data?.price}
                </h6>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <StarIcons />
                    <StarIcons />
                    <StarIcons />
                    <StarIcons />
                    <StarIcons fill="#F3F4F6" />
                  </div>
                  <span className="pl-2 font-normal leading-7 text-gray-500 text-sm">
                    1624 review
                  </span>
                </div>
              </div>

              {/* Product description */}
              <p className="text-gray-500 text-base font-normal mb-5">
                {data?.description}
              </p>

              {/* Extra product info rows */}
              <ul className="grid gap-y-4 mb-8">
                <ProductOptionsRow options="3 color" />
                <ProductOptionsRow options="all size is available" />
              </ul>

              {/* Size selection */}
              <p className="text-gray-900 text-lg leading-8 font-medium mb-4">
                Size
              </p>
              <div className="w-full pb-8 border-b border-gray-100 flex-wrap">
                <div className="grid grid-cols-5 min-[400px]:grid-cols-5 gap-3 max-w-md">
                  {sizes.map((ItemSize, index) => (
                    <ProductSize
                      key={index}
                      size={ItemSize}
                      currentSize={size}
                      setSize={setSize}
                    />
                  ))}
                </div>
              </div>

              {/* Quantity and Add to Cart button */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-8">
                <ProductCounter counter={counter} setCounter={setCounter} />
                <ButtonAdd
                  variant="page"
                  onClick={() => {
                    if (data) {
                      // Add selected product + quantity to cart
                      dispatch(addToCart({ product: data, quantity: counter }));
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
