import Button from './components/Button';
import Content from './components/Content';
import ImageView from './components/ImageView';
import Price from './components/Price';

export default function App() {
  return (
    <main className='bg-cream max-w-5xl mx-auto'>
      <section className='grid max-w-sm my-8 mx-auto bg-white rounded-xl overflow-hidden shadow-md sm:max-w-xl sm:grid-cols-2 sm:my-24'>
        <div>
          <ImageView />
        </div>
        <div className='p-6'>
          <Content />
          <Price />
          <Button />
        </div>
      </section>
    </main>
  );
}
