export default function Button() {
  return (
    <button className='bg-dark-cyan px-6 py-3 text-white font-bold rounded-lg w-full'>
      <div className='flex items-center justify-center gap-3'>
        <img src='/images/icon-cart.svg' alt='cart-icon' />
        Add to Cart
      </div>
    </button>
  );
}
