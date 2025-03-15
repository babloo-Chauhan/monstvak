import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  'https://www.whiteteak.com/media/customimages/homepage/MB_luxe_desk.webp?text=Slide+1',
  'https://www.whiteteak.com/media/customimages/homepage/MB_luxe_desk.webp?text=Slide+2',
  'https://www.whiteteak.com/media/customimages/homepage/MB_luxe_desk.webp?text=Slide+3',
  'https://www.whiteteak.com/media/customimages/homepage/MB_luxe_desk.webp?text=Slide+4',
];

export default function Home() {
  return (
    <>
      <div className="w-full p-4">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          className="rounded-2xl shadow-lg"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img src={src} alt={`Slide ${index + 1}`} className="w-full h-auto rounded-2xl" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* second sectonn of home page */}

      <div className="collection flex space-x-4 mx-4 ">
        <div className="first-col">
          <img src="https://www.whiteteak.com/media/wysiwyg/HP_band_exclusive.jpg" alt="" className='rounded-2xl' />

        </div>
        <div className="second-col">
          <img src="https://www.whiteteak.com/media/wysiwyg/HP_band_store_1.jpg" alt="" className='rounded-2xl' />

        </div>
      </div>


      {/* third secton of home page */}


      <div className="third-col mt-6">
        <div className="heading">
          <h1 className='text-center text-3xl'>Shop Decorative Lighting, Home Decor & Designer Fans</h1>
        </div>
        <div className="product-col flex flex-wrap justify-center items-center ">
          <div className="product  ">
            <img src="https://www.whiteteak.com/media/wysiwyg/Categories_chandeliers_2.jpg" alt="" />
            <h2>Chandeliers</h2>
          </div>

          <div className="product">
            <img src="https://www.whiteteak.com/media/wysiwyg/Categories_chandeliers_2.jpg" alt="" />
            <h2>Chandeliers</h2>
          </div>

          <div className="product">
            <img src="https://www.whiteteak.com/media/wysiwyg/Categories_chandeliers_2.jpg" alt="" />
            <h2>Chandeliers</h2>
          </div>

          <div className="product">
            <img src="https://www.whiteteak.com/media/wysiwyg/Categories_chandeliers_2.jpg" alt="" />
            <h2>Chandeliers</h2>
          </div>

          <div className="product">
            <img src="https://www.whiteteak.com/media/wysiwyg/Categories_chandeliers_2.jpg" alt="" />
            <h2>Chandeliers</h2>
          </div>

          <div className="product">
            <img src="https://www.whiteteak.com/media/wysiwyg/Categories_chandeliers_2.jpg" alt="" />
            <h2>Chandeliers</h2>
          </div>

          <div className="product">
            <img src="https://www.whiteteak.com/media/wysiwyg/Categories_chandeliers_2.jpg" alt="" />
            <h2>Chandeliers</h2>
          </div>

          <div className="product">
            <img src="https://www.whiteteak.com/media/wysiwyg/Categories_chandeliers_2.jpg" alt="" />
            <h2>Chandeliers</h2>
          </div>

          <div className="product">
            <img src="https://www.whiteteak.com/media/wysiwyg/Categories_chandeliers_2.jpg" alt="" />
            <h2>Chandeliers</h2>
          </div>

          <div className="product">
            <img src="https://www.whiteteak.com/media/wysiwyg/Categories_chandeliers_2.jpg" alt="" />
            <h2>Chandeliers</h2>
          </div>
        </div>
      </div>

      {/* fourth section of home page */}


      <div className="fourth-col mt-5 bg-[#EEEEEE]">

        <div className="heading-4">
          <h1 className='text-center text-3xl'>25+ Experience Stores Across Indias</h1>
        </div>

        <div className="explore-btn flex justify-center items-center my-2">
          <button className='bg-blue-950 text-white p-2 rounded-2xl '>Explore Stores</button>
        </div>

        <div className="about">
          <p className='text-center'>White Teak is a high-end luxury home decor brand with a retail presence in 25+ cities across India. Our stores are designed to inspire and captivate our customers. Our products are a perfect blend of contemporary designs and traditional craftsmanship. We offer a wide range of products including decorative lighting, home decor, and designer fans. Visit our stores to experience the luxury of White Teak.</p>
        </div>

      </div>


      {/* fifth section of home page */}


      <div className="fifth-col flex my-8 mx-5 ">
        <div className="about-fifth w-[40%] flex flex-col  justify-center p-7">
          <h1 className='text-3xl py-2'>Decorative Lighting</h1>
          <p className='py-3'>Experience the harmony of high-end designs that tie your home together and materials that complement your style. Embrace the thrill of a creative process that’s experimental in a lighting range that’s the star of your story.</p>
          <button className='bold bg-black text-white w-[30%] text-2xl ' >Discover</button>
        </div>
        
        <div className="img-fifth w-[60%] flex justify-center items-center">
          <img src="https://www.whiteteak.com/media/wysiwyg/Decorative_lighting.jpg" alt="" />
        </div>
      </div>
    </>
  );
}
