function OrderSummaryRow({
  title,
  price = 0,
  className = "",
}: {
  title: string;
  price: number;
  className?: string;
}) {
  return (
    <div className={`flex items-center justify-between gap-4 ${className}`}>
      <h3
        className={`text-base   ${
          title.toLowerCase() === "total"
            ? "font-bold text-gray-900"
            : "font-normal text-gray-500"
        } `}
      >
        {title}
      </h3>
      <p
        className={`text-base text-gray-900 ${
          title.toLowerCase() === "total" ? "font-bold" : " font-medium"
        }`}
      >
        ${price.toFixed(2)}
      </p>
    </div>
  );
}

export default OrderSummaryRow;
