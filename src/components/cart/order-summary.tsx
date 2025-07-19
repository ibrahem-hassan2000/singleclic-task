import { Link } from "react-router";
import OrderSummaryRow from "./order-summary-row";
import { ArrowLinkIcons } from "../../assets/icons/icons";

function OrderSummary({ totalPrice = 0 }: { totalPrice: number }) {
  return (
    <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
      <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm   sm:p-6">
        <p className="text-xl font-semibold text-gray-900 ">Order summary</p>

        <div className="space-y-4">
          <div className="space-y-2">
            <OrderSummaryRow title="Original price"  price={totalPrice} />
            <OrderSummaryRow title=" Store Pickup" price={99} />
            <OrderSummaryRow title="Tax" price={799} />
          </div>
          <OrderSummaryRow
            title="Total"
            price={totalPrice+99+799}
            className="border-t border-gray-200 pt-2"
          />
        </div>

        <button className="group py-2 px-2 cursor-pointer rounded-xl bg-indigo-50 text-indigo-600 font-semibold text-sm w-full  transition-all duration-500 hover:bg-indigo-100">
          Proceed to Checkout
        </button>

        <div className="flex items-center justify-center gap-2">
          <span className="text-sm font-normal text-gray-500 "> or </span>
          <Link
            to="/"
            title=""
            className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline "
          >
            Continue Shopping
            <ArrowLinkIcons />
          </Link>
        </div>
      </div>

      <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm   sm:p-6">
        <form className="space-y-4">
          <div>
            <label
              htmlFor="voucher"
              className="mb-2 block text-sm font-medium text-gray-900 "
            >
              {" "}
              Do you have a voucher or gift card?{" "}
            </label>
            <input
              type="text"
              id="voucher"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 "
              placeholder=""
              required
            />
          </div>
          <button
            type="submit"
            className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 "
          >
            Apply Code
          </button>
        </form>
      </div>
    </div>
  );
}

export default OrderSummary;
