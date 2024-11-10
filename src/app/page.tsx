
import Image from 'next/image';
import Link from 'next/link';
import Map from './components/page';

export default function Home() {
  return (
    <>
    <div className="bg-black text-white">
      <header className="section-container flex items-center justify-between fixed w-full left-[50%] -translate-x-[50%] bg-black/70 backdrop-blur-sm z-10">
        <div className='relative left-20'>
        <a href="#" className='ml-50px'>
          <Image width={89} height={43} className="w-24 md:w-32  " src="/logo.png" alt="logo" />
          <p className="text-xs -mt-6 md:text-sm md:-mt-8">The Shoe Company</p>
        </a>
        </div>
        <nav className="hidden md:block space-x-6 lg:space-x-8 lg:text-2xl relative right-20">
          <a className="font-bold" href="#hero">Home</a>
          <a className="font-bold" href="#how-it-works">How It Works?</a>
          <a className="font-bold" href="#about">About</a>
          <a className="font-bold" href="#testimonials">Testimonials</a>
          <a className="font-bold" href="#contact">Contact Us</a>
        </nav>
        <button className="text-5xl md:hidden">≡</button>
      </header>

      <section id="hero" className="bg-[url('/hero-background.png')] bg-cover md:bg-contain bg-no-repeat bg-right pt-36 section-container">
        <div className="flex flex-col md:flex-row md:items-center justify-between max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold leading-[64px] md:leading-[92px]">
            THE <br />
            SHOE <br />
            COMPANY
          </h1>
          <div>
            <Image className="w-full max-w-xl" src="/hero-image.png" alt="white shoe image" width={500} height={500} />
          </div>
        </div>
      </section>

      <section id="how-it-works" className="section-container pt-20 scroll-mt-6">
        <h2 className="text-center text-3xl font-bold max-w-md mx-auto mb-12">
          Have they finally made the perfect workout shoe?
        </h2>
        <div className="max-w-xl mx-auto pt-60 xl:pt-12 relative">
          <Image width={500} height={500} className="w-full max-w-2xl rotate-6 p-8 media440:p-0 xl:rotate-0" src="/how-it-works.png" alt="shoe" />
          <div className="max-w-[200px] xl:max-w-xs absolute top-0 xl:-translate-x-full">
            <h3 className="text-lg media560:text-2xl font-bold">THE HEEL</h3>
            <p className="text-xs media560:text-lg text-[17px]">
              The heel is well-built, has appropriate elevation and is not too rigid.
            </p>
            <Image className="w-32 translate-y-8 xl:ml-auto rotate-45 xl:rotate-0" src="/arrow-1.png" alt="arrow-1" width={50} height={50} />
          </div>
          <div className="max-w-[200px] xl:max-w-xs absolute top-16 media560:top-0 right-0 xl:-right-60">
            <Image width={500} height={500} className="w-32 media560:w-auto xl:-ml-32 translate-y-full media560:translate-y-60 rotate-[120deg] xl:translate-y-0 xl:rotate-0" src="/arrow-2.png" alt="arrow-2" />
            <h3 className="text-lg media560:text-2xl font-bold -mt-20">THE FRONT</h3>
            <p className="text-xs media560:text-lg text-[17px]">
              The front is comfortable and adjusts well to the shape of your foot.
            </p>
          </div>
          <div className="max-w-[200px] xl:max-w-xs absolute -bottom-16">
            <Image width={500} height={500} className="ml-auto -mb-10 max-w-[150px]" src="/arrow-3.png" alt="arrow-3" />
            <h3 className="text-lg media560:text-2xl font-bold">TRACTION</h3>
            <p className="text-xs media560:text-lg text-[17px]">
              The shoe has good traction and doesn t slip easily.
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="section-container mt-32 flex flex-col md:flex-row md:space-x-12 scroll-mt-28">
        <h2 className="text-3xl my-6 text-center font-bold md:hidden">About Us!</h2>
        <div className="bg-[url('/about-us-background.png')] bg-no-repeat md:w-full self-center">
          <Image width={500} height={500} src="/about-shoe-company.png" alt="legs" />
        </div>
        <div className="space-y-8 max-w-xl md:w-full relative right-40" >
          <h2 className="text-6xl font-bold hidden md:block">About Us!</h2>
          <p>
            For each one of those shoe sweethearts out there, THE SHOE COMPANY offers the one-stop goal to pick the correct match of footwear.
          </p>
          <p>
            Gone are the days when you needed to go from store to store to locate the correct style and size for yourself.
          </p>
          <p>
            At THE SHOE COMPANY, you can locate a vast accumulation of dashing footwear in all sizes and styles, all within a couple of clicks.
          </p>
          <p>
            Simple right? Not only are we here to save your time, but we also offer the most dazzling footwear options from all the first-rate brands like DAVINCHI, PRINCESS, and SIGNATURE. At ‘Organization Name’, we offer men’s, women’s, and child’s shoes perfect for any and every occasion.
          </p>
        </div>
      </section>

      <section id="testimonials" className="section-container mt-8 pt-8 bg-testimonial-section">
        <h2 className="text-3xl md:text-6xl font-bold text-center">
          What People are saying about THE SHOE <br />COMPANY?
        </h2>
        <div className="text-center flex flex-col items-center md:items-stretch gap-8 md:flex-row justify-between mt-16 max-w-5xl mx-auto">
          <div className="w-60">
            <Image width={500} height={500} className="w-full mb-4" src="/testimonial-1.png" alt="testimonial" />
            <p>
              “Looking for shoes that are built just for you? THE SHOE COMPANY is the way to go. Love the design and build quality.”
            </p>
          </div>
          <div className="w-60">
            <Image width={500} height={500} className="w-full mb-4" src="/testimonial-2.png" alt="testimonial" />
            <p>
              “I love the shoes, the quality, and everything. They are worth the investment!”
            </p>
          </div>
          <div className="w-60">
            <Image width={500} height={500} className="w-full mb-4" src="/testimonial-3.png" alt="testimonial" />
            <p>
              “They make the best and forever lasting shoes. Superb fit and comfort is literally the next level. Much recommended!”
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="section-container flex flex-col lg:flex-row items-center justify-between p-16">
        <div className="mb-10 lg:mb-0 shrink-0 self-start md:self-center">
          <h2 className="text-3xl md:text-6xl font-bold">Contact Us</h2>
          <p className="max-w-[180px] my-8">
            THE SHOE COMPANY, Dallas, Texas, USA +1 5590 1120 9910
          </p>
          <div className="flex space-x-4">
            <Link href="#">
              <Image width={35} height={35}  src="/facebook.svg" alt="facebook icon" />
            </Link>
            <Link href="#">
              <Image  width={35} height={35} src="/instagram.svg" alt="instagram icon" />
            </Link>
            <Link href="#">
              <Image  width={35} height={35} src="/twitch.svg" alt="twitch icon" />
            </Link>
            <Link href="#">
              <Image width={35} height={35} src="/youtube.svg" alt="youtube icon" />
            </Link>
          </div>
        </div>
        <div className="w-full">
          <Map/>

        </div>
      </section>

      <footer className="section-container">
        <div className="flex items-center justify-center">
          <a href="#">
            <Image width={89} height={43} className="w-14" src="/logo.png" alt="logo" />
            <p className="text-[8px] -mt-3">The Shoe Company</p>
          </a>
          <p>Made with ❤️ By hanzala</p>
        </div>
      </footer>
    </div>
    </>
  );
}

