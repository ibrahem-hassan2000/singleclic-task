import { ShoppingCartBlueIcons } from "../assets/icons/icons";
const variantStyle = {
  card: "group md:py-2.5  py-1.5 md:px-5 px-2.5 md:rounded-full cursor-pointer hover:shadow-blue-200 hover:shadow  rounded-2xl bg-indigo-50 text-indigo-600 font-semibold text-sm md:text-lg w-fit flex items-center justify-center  md:gap-2 gap-1.5 transition-all duration-500 hover:bg-indigo-100",
  page: "group py-4 px-5 cursor-pointer rounded-full bg-indigo-50 text-indigo-600 hover:shadow-blue-200 hover:shadow font-semibold text-lg w-full flex items-center justify-center gap-2 transition-all duration-500 hover:bg-indigo-100",
};
function ButtonAdd({
  onClick,
  variant = "card",
}: {
  onClick: () => void;
  variant: "card" | "page";
}) {
  return (
    <button
      onClick={() => onClick()}
      className={variant === "card" ? variantStyle.card : variantStyle.page}
    >
      <ShoppingCartBlueIcons />
      Add <span className={variant === "card" ? "hidden md:block" : ""}>to cart</span>
    </button>
  );
}

export default ButtonAdd;
