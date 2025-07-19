import type { CartItem } from "../../types/product";
import { MinusCounterIcons, PlusCounterIcons } from "../../assets/icons/icons";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store";
import { removeFromCart, updateQuantity } from "../../store/cart-slice";

function CartProduct({ product }: { product: CartItem }) {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm  md:p-6">
      <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
        <a href="#" className="shrink-0 md:order-1">
          <img
            className="h-20 w-20 object-contain "
            src={product.image}
            alt={product.title}
          />
        </a>
        <div className="flex items-center justify-between md:order-3 md:justify-end">
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => {
                if (product.quantity > 1) {
                  dispatch(
                    updateQuantity({
                      id: product.id,
                      quantity: product.quantity - 1,
                    })
                  );
                }
              }}
              id="decrement-button"
              data-input-counter-decrement="counter-input"
              className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100  "
            >
              <MinusCounterIcons />
            </button>
            <p className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 ">
              {product.quantity}
            </p>
            <button
              type="button"
              onClick={() =>
                dispatch(
                  updateQuantity({
                    id: product.id,
                    quantity: product.quantity + 1,
                  })
                )
              }
              id="increment-button"
              data-input-counter-increment="counter-input"
              className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
            >
              <PlusCounterIcons />
            </button>
          </div>
          <div className="text-end md:order-4 md:w-32">
            <p className="text-base font-bold text-gray-900">$1,499</p>
          </div>
        </div>

        <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
          <a
            href="#"
            className="text-base font-medium text-gray-900 hover:underline "
          >
            {product.title}
          </a>

          <div className="flex items-center gap-4">
            <button
              onClick={() => dispatch(removeFromCart(product.id))}
              type="button"
              className="inline-flex items-center text-sm font-medium text-red-600 hover:underline "
            >
              <svg
                className="me-1.5 h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18 17.94 6M18 18 6.06 6"
                />
              </svg>
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
