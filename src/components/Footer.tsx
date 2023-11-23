import React from 'react';
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaDribbbleSquare,
  FaGithubSquare,
} from 'react-icons/fa';
import FooterSection from './FooterSection';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
        <p className='py-4'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis,
          fuga provident facere earum nobis sequi iure at suscipit voluptatem
          possimus.
        </p>
        <div className='flex justify-between md:w-[75%] my-6'>
          <FaFacebookSquare size={30} />
          <FaInstagramSquare size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
        <FooterSection
          title={'Solutions'}
          listItems={['Analytics', 'Marketing', 'Commerce', 'Insights']}
        />
        <FooterSection
          title={'Support'}
          listItems={['Pricing', 'Documentation', 'Guides', 'API status']}
        />
        <FooterSection
          title={'Company'}
          listItems={['About', 'Blog', 'Jobs', 'Press', 'Careers']}
        />
        <FooterSection
          title={'Legal'}
          listItems={['Clain', 'Policy', 'Terms']}
        />
      </div>
    </div>
  );
};

export default Footer;
