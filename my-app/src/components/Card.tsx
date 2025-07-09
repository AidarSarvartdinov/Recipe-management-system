import React from 'react';

interface Props {
  img: string;
  title: string;
  description: string;
}

const Card: React.FC<Props> = ({ img, title, description }) => {
  return (
    <div className="shadow-xl overflow-hidden rounded-2xl max-w-[280px]">
      <div>
        <img src={img} width={300} alt="photo of the dish"></img>
      </div>
      <div className="p-2">
        <div className="truncate font-semibold text-2xl">{title}</div>
        <div className="truncate mt-2">{description}</div>
      </div>
    </div>
  );
};

export default Card;
