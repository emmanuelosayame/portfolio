const Contact = () => {
  return (
    <div className='w-11/12 md:w-[400px] space-y-3'>
      <p className='text-xl md:text-2xl font-medium text-green-600 drop-shadow-md text-center'>
        Contact
      </p>

      <div className='space-y-2 bg-green-600/20 backdrop-blur-md rounded-xl p-5 text-center'>
        <p>
          Email:{' '}
          <a
            className='text-base md:text-lg font-medium text-green-600 ml-1'
            href='mailto:emmanuelosayame@gmail.com'>
            emmanuelosayame@gmail.com
          </a>{' '}
        </p>
        <p>
          Whatsapp:{' '}
          <a
            className='text-lg font-medium text-green-600  ml-1'
            href='https://api.whatsapp.com/send?phone=7067266258&text=Hi%2C%20I%20came%20across%20your%20portfolio...'
            rel='noopener noreferrer'>
            Send a message
          </a>{' '}
        </p>
        <p>
          Instagram:{' '}
          <a
            className='text-lg font-medium text-green-600  ml-1'
            href='http://www.instagram.com/delorandofficial'
            rel='noopener noreferrer'>
            Send a message
          </a>{' '}
        </p>
      </div>
    </div>
  );
};

export default Contact;
