import { format } from 'date-fns';
import Header from './Header';

type BlogMeta = {
  title: string;
  imgSrc: string;
  date: string;
};
type BlogLayoutProps = {
  meta: BlogMeta;
  children: React.ReactNode;
};
const BlogLayout: React.FC<BlogLayoutProps> = ({ meta, children }) => {
  return (
    <div>
      <Header />
      <img src={meta.imgSrc} />
      <h1 className="text-3xl">{meta.title}</h1>
      <h5 className="text-sm italic">
        {format(new Date(meta.date), 'MMMM Mo, y')}
      </h5>
      {children}
    </div>
  );
};
export default BlogLayout;
