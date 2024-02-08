export default function ImageView() {
  return (
    <section>
      <img
        src='/images/image-product-mobile.jpg'
        alt='mobile'
        className='sm:hidden object-cover'
      />
      <img
        src='images/image-product-desktop.jpg'
        alt='desktop'
        className='hidden sm:block object-cover'
      />
    </section>
  );
}
