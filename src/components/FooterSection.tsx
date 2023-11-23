import React, { ReactElement } from 'react';

interface IFooterSectionProps {
  title: string;
  listItems: string[];
}

const FooterSection: React.FC<IFooterSectionProps> = ({
  title,
  listItems,
}): ReactElement => {
  return (
    <div>
      <h6 className='font-medium text-gray-400'>{title}</h6>
      <ul>
        {listItems.map((li) => {
          return <li className='py-2 text-sm'>{li}</li>;
        })}
      </ul>
    </div>
  );
};

export default FooterSection;
