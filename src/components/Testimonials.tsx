import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import Image from 'next/image';
import image from '../../public/favicon-32x32.png';

const testimonials = [
  {
    name: 'Henry Omonfonmwan',
    gist: 'Teaming up with Emmanuel is always a fantastic experience. His skills enhances projects, and His collaborative attitude makes the process enjoyable.',
  },
  {
    name: 'Chikwreru Stanley',
    gist: "As an engineer, I'm truly impressed by Emmanuel's skills. Looking forward to more collaborations!",
  },

  {
    name: 'Ikemba Chibueze',
    gist: "Easy to approch and relate with. He always come through and that's satisfactory.",
  },

  {
    name: 'Clement',
    gist: 'Your keen attention to detail and seamless integration of design elements have elevated our projects to new heights. Looking forward to continued success together!',
  },
];

const Testimonials = () => {
  return (
    <div className='w-full md:w-1/5 space-y-4'>
      <h4 className='text-xl md:text-2xl font-medium text-green-700 drop-shadow-md text-center'>
        Testimonials
      </h4>

      <Swiper
        className='w-full md:w-full bg-green-600/20 backdrop-blur-md rounded-xl overflow-hidden'
        modules={[Pagination, Autoplay]}
        pagination={{ el: '.pagn' }}
        autoplay={{ delay: 5000 }}
        slidesPerView={1}
        centeredSlides={true}>
        {testimonials.map(({ name, gist }, index) => (
          <SwiperSlide
            key={index}
            className=' space-y-2 justify-center items-center p-8 
       text-center text-green-600'>
            <Image
              //   priority
              alt='workspace'
              src={image}
              className='w-12 h-12 rounded-full mx-auto border-2 border-green-600'
              width={100}
              height={100}
            />
            <p className='text-black dark:text-white font-medium text-lg'>
              {name}
            </p>
            <p>"{gist}"</p>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='w-28 mx-auto'>
        <div className='pagn bg-green-600/20 rounded-lg flex justify-center p-2' />
      </div>
    </div>
  );
};

export default Testimonials;
