import CartProduct from "../../components/cart/cart-product";
import OrderSummary from "../../components/cart/order-summary";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import type { CartItem } from "../../types/product";
import { Link } from "react-router";
import { ArrowLinkIcons } from "../../assets/icons/icons";

function Cart() {
  const items = useSelector((state: RootState) => state.cart.items);

  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);

  console.log(items);
  return (
    <section className="bg-white antialiased h-full flex-1">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900  sm:text-2xl">
          Shopping Cart
        </h2>
        {items.length === 0 ? (
          <div className="flex items-center justify-center mx-auto my-16">
            <Link
              to="/"
              title=""
              className="inline-flex  items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline "
            >
              Your cart is empty. Continue shopping!
              <ArrowLinkIcons />
            </Link>
          </div>
        ) : (
          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              <div className="space-y-6">
                {items.map((item: CartItem) => (
                  <CartProduct key={item.id} product={item} />
                ))}
              </div>
            </div>

            <OrderSummary totalPrice={totalPrice} />
          </div>
        )}
      </div>
    </section>
  );
}

export default Cart;
