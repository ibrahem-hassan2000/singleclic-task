import type { SizesProp } from "../../types/product";

function ProductSize({
  size,
  setSize,
  currentSize,
}: {
  size: SizesProp;
  setSize: React.Dispatch<React.SetStateAction<SizesProp>>;
  currentSize: SizesProp;
}) {

  return (
    <button
      onClick={() => setSize(size)}
      className={` text-center cursor-pointer  py-1.5 px-3 md:px-5 w-full font-semibold text-base md:text-lg leading-8  border  flex items-center rounded-full justify-center transition-all duration-300  ${
        currentSize === size
          ? "bg-blue-600 text-white "
          : "bg-white text-gray-900 border-gray-200 flex items-center rounded-full justify-center transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-100 hover:border-gray-300 visited:border-gray-300 visited:bg-gray-50"
      }`}
    >
      {size} 
    </button>
  );
}

export default ProductSize;
