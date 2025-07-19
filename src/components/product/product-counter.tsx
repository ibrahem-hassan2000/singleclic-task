import { MinusCounterIcons, PlusCounterIcons } from "../../assets/icons/icons";

function ProductCounter({
  counter,
  setCounter,
}: {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="flex sm:items-center sm:justify-center w-full">
      <button
        disabled={counter === 1}
        onClick={() => setCounter(counter > 1 ? counter - 1 : 1)}
        className="group py-4 disabled:cursor-not-allowed disabled:opacity-80 cursor-pointer px-6 border border-gray-400 rounded-l-full bg-white transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-300"
      >
        <MinusCounterIcons />
      </button>
      <p className="font-semibold text-gray-900 cursor-pointer text-lg py-[13px] px-6 w-full sm:max-w-[118px] outline-0 border-y border-gray-400 bg-transparent placeholder:text-gray-900 text-center hover:bg-gray-50">
        {counter}
      </p>
      <button
        onClick={() => setCounter(counter + 1)}
        className="group py-4 cursor-pointer px-6 border border-gray-400 rounded-r-full bg-white transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-300"
      >
        <PlusCounterIcons />
      </button>
    </div>
  );
}

export default ProductCounter;
