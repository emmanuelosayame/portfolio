import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import Image from 'next/image';
import { m } from 'framer-motion';

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
    <m.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      viewport={{ once: true }}
      className='w-full max-w-6xl mx-auto'>
      <div className='apple-card p-8 md:p-12 space-y-8'>
        <div className='text-center space-y-4'>
          <h2 className='text-3xl md:text-4xl font-bold apple-text-primary'>
            What people <span className='apple-text-accent'>say</span>
          </h2>

          <div className='w-16 h-0.5 apple-gradient mx-auto rounded-full' />
        </div>

        <Swiper
          className='w-full'
          modules={[Pagination, Autoplay]}
          pagination={{ el: '.pagn' }}
          autoplay={{ delay: 5000 }}
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={30}>
          {testimonials.map(({ name, gist }, index) => (
            <SwiperSlide key={index}>
              <div className='apple-glass rounded-2xl p-8 md:p-12 text-center space-y-6'>
                <div className='w-16 h-16 mx-auto'>
                  <Image
                    alt='workspace'
                    src={'/favicon-32x32.png'}
                    className='w-full h-full rounded-full border-2 border-white/20'
                    width={64}
                    height={64}
                  />
                </div>

                <div className='space-y-4'>
                  <h3 className='text-xl md:text-2xl font-semibold apple-text-primary'>
                    {name}
                  </h3>
                  <p className='text-lg apple-text-secondary leading-relaxed italic'>
                    "{gist}"
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className='flex justify-center'>
          <div className='pagn rounded-lg flex justify-center p-2' />
        </div>
      </div>
    </m.div>
  );
};

export default Testimonials;
