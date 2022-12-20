import { ReactNode } from 'react';
import Image from 'next/image';

type PortfolioCardProps = {
  children: ReactNode;
  imgSrc: string;
  alt: string;
  inverted: boolean;
};

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  imgSrc,
  alt,
  children,
  inverted,
}) => {
  return (<div className=`${inverted ? "flex-row" : "flex-row-reverse"}`>
    <div>
    {children}
  </div>
    <Image src={imgSrc} height={400} width={400} alt={alt}/>
  </div>)
};

export default PortfolioCard;
