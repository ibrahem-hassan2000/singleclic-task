import type { CartItem } from "../../types/product";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store";
import { removeFromCart, updateQuantity } from "../../store/cart-slice";

function CartProduct({ product }: { product: CartItem }) {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6">
      <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
        {/* Product Image */}
        <a href="#" className="shrink-0 md:order-1">
          <img
            className="h-20 w-20 object-contain"
            src={product.image}
            alt={product.title}
          />
        </a>

        {/* Quantity controls and product price */}
        <div className="flex items-center justify-between md:order-3 md:justify-end">
          <div className="flex items-center">
            {/* Decrease quantity button */}
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
              className="inline-flex h-5 w-5 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
            >
              -
            </button>

            {/* Quantity text */}
            <p className="w-10 text-center text-sm font-medium text-gray-900">
              {product.quantity}
            </p>

            {/* Increase quantity button */}
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
              className="inline-flex h-5 w-5 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
            >
              +
            </button>
          </div>

          {/* Product total price (per item × quantity) */}
          <div className="text-end md:order-4 md:w-32">
            <p className="text-base font-bold text-gray-900">
              ${(product.price * product.quantity).toFixed(2)}
            </p>
          </div>
        </div>

        {/* Product title and remove button */}
        <div className="w-full flex-1 space-y-4 md:order-2 md:max-w-md">
          <a
            href="#"
            className="text-base font-medium text-gray-900 hover:underline"
          >
            {product.title}
          </a>

          <div className="flex items-center gap-4">
            {/* Remove from cart button */}
            <button
              onClick={() => dispatch(removeFromCart(product.id))}
              type="button"
              className="text-sm font-medium text-red-600 hover:underline"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
