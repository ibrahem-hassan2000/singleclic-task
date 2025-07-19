import { ShoppingCartIcons } from '../assets/icons/icons'
import type { RootState } from '../store';
import { useSelector } from 'react-redux';
import { Link } from 'react-router';

function ShopCounter() {
  const totalQuantity = useSelector((state: RootState) => state.cart.totalQuantity);

  return (
    <Link to="/cart" className=' relative block  w-9'>
        <ShoppingCartIcons/>
        <span className='absolute top-0 right-0 size-4 font-semibold bg-blue-600 rounded-full flex items-center justify-center text-white text-xs'>{totalQuantity} </span>
    </Link>
  )
}

export default ShopCounter