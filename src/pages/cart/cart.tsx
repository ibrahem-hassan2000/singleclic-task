import CartProduct from "../../components/cart/cart-product";
import OrderSummary from "../../components/cart/order-summary";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import type { CartItem } from "../../types/product";
import { Link } from "react-router";

function Cart() {
  // Get all cart items from Redux state
  const items = useSelector((state: RootState) => state.cart.items);

  // Get the total price from Redux state
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);

  return (
    <section className="bg-white antialiased h-full flex-1">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
          Shopping Cart
        </h2>

        {items.length === 0 ? (
          // If cart is empty, show message and link to continue shopping
          <div className="flex items-center justify-center mx-auto my-16">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline"
            >
              Your cart is empty. Continue shopping!
            </Link>
          </div>
        ) : (
          // If cart has products, display product list and order summary
          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            {/* Left side: Cart products list */}
            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              <div className="space-y-6">
                {items.map((item: CartItem) => (
                  <CartProduct key={item.id} product={item} />
                ))}
              </div>
            </div>

            {/* Right side: Order summary */}
            <OrderSummary totalPrice={totalPrice} />
          </div>
        )}
      </div>
    </section>
  );
}

export default Cart;
