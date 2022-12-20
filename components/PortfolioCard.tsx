import { ReactNode } from 'react';
import Image from 'next/image';

type PortfolioCardProps = {
  children: ReactNode;
  imgSrc: string;
  alt: string;
  inverted: boolean;
  title: string;
};

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  imgSrc,
  alt,
  children,
  inverted,
  title,
}) => {
  return (
    <div
      className={`grid grid-cols-4 ${
        inverted ? 'flex-row-reverse' : 'flex-row'
      } gap-12 mb-20`}
    >
      <div className="relative h-[200px] w-[200px] col-span-1">
        <Image
          src={imgSrc}
          fill={true}
          className="object-cover object-center"
          alt={alt}
        />
      </div>
      <div className="col-span-3">
        <h2 className="text-2xl">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default PortfolioCard;
