import React from 'react';
import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';
import Card from './Card';

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <Card
          name={'Single User'}
          price={149}
          storage={500}
          userCount={1}
          capacity={2}
          image={Single}
        />
        <Card
          name={'Single User'}
          price={199}
          storage={1000}
          userCount={3}
          capacity={5}
          image={Double}
          boxClass='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 hover:cursor-pointer duration-300'
          buttonClass='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'
        />
        <Card
          name={'Single User'}
          price={249}
          storage={2000}
          userCount={5}
          capacity={10}
          image={Triple}
        />
      </div>
    </div>
  );
};

export default Cards;
