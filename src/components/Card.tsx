import React, { ReactElement } from 'react';

interface ICardProps {
  name: string;
  price: number;
  storage: number;
  userCount: number;
  capacity: number;
  image: string;
  boxClass?: string;
  buttonClass?: string;
}

const Card: React.FC<ICardProps> = ({
  name,
  price,
  storage,
  userCount,
  capacity,
  image,
  boxClass,
  buttonClass,
}): ReactElement => {
  return (
    <div
      className={
        !boxClass
          ? 'w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 hover:cursor-pointer duration-300'
          : boxClass
      }
    >
      <img className='w-20 mx-auto mt-[-3rem]' src={image} alt='/' />
      <h2 className='text-2xl font-bold text-center py-8'>{name} </h2>
      <p className='text-center text-4xl font-bold'>${price}</p>
      <div className='text-center font-medium'>
        <p className='py-2 border-b mx-8 mt-8'>{storage} GB Storage</p>
        <p className='py-2 border-b mx-8'>
          {userCount} Granted {userCount === 1 ? 'User' : 'Users'}
        </p>
        <p className='py-2 border-b mx-8'>Send up to {capacity} GB</p>
      </div>
      <button
        className={
          !buttonClass
            ? 'bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'
            : buttonClass
        }
      >
        Start Trial
      </button>
    </div>
  );
};

export default Card;
