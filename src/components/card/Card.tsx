import { ReactNode, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export interface CardItem {
  title: string;
  description?: string;
  icon?: ReactNode;
}

interface Props {
  title?: string;
  description?: string;
  items?: string[] | CardItem[];
  imageUrl?: string;
  learnMore?: string;
  bordered?: boolean;
  invert?: boolean;
  min_height?: string;
  children?: ReactNode;
}

function CardItems({ items }: { items: string[] | CardItem[] }) {
  if (typeof items[0] === 'string') {
    return (
      <ul className="list-inside list-disc text-card-foreground">
        {(items as string[]).map((item, index) => (
          <li key={index} className="text-xl">
            {item}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
      {(items as CardItem[]).map((item, index) => (
        <div key={index} className="flex flex-col items-center p-4 text-center">
          {item.icon && <div className="mb-2 text-3xl">{item.icon}</div>}
          <h3 className="text-xl font-semibold text-secondary-foreground">
            {item.title}
          </h3>
          {item.description && (
            <p className="text-xl text-card-foreground">{item.description}</p>
          )}
        </div>
      ))}
    </div>
  );
}

function CardImage({
  imageUrl,
  imageAlt,
  min_height,
}: {
  imageUrl: string;
  imageAlt?: string;
  min_height: string;
}) {
  return (
    <div
      className={`relative flex w-full items-center justify-center bg-gray-200 md:h-full min-h-[${min_height}]`}
    >
      <img
        src={imageUrl}
        alt={imageAlt}
        className="h-full w-full object-cover"
      />
    </div>
  );
}

function CardLink({ url, title }: { url: string; title: string }) {
  return (
    <div className="mt-4 flex flex-col items-center">
      <Link to={url}>
        <button className="rounded-full bg-accent px-6 py-2 text-xl text-accent-foreground hover:bg-accent/80 focus:outline-none">
          {title}
        </button>
      </Link>
    </div>
  );
}

function Card({
  title,
  description,
  items,
  imageUrl = 'foo',
  learnMore,
  bordered = false,
  invert = false,
  min_height = '80vh',
  children,
}: Props) {
  const [lg_screen, setLgScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setLgScreen(window.innerWidth >= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="flex justify-center" style={{ minHeight: min_height }}>
      <div
        className={`grid w-full grid-cols-1 rounded-lg bg-card ${imageUrl ? 'md:grid-cols-2 ' : ''} ${bordered ? 'border border-gray-300 shadow-md ' : ''}`}
      >
        {(!lg_screen || !invert) && imageUrl && (
          <CardImage
            imageUrl={imageUrl}
            imageAlt={title}
            min_height={min_height}
          />
        )}
        <div className="flex flex-col items-center justify-center px-6 py-4 text-center md:px-12">
          {title && (
            <h1 className="mb-6 text-5xl font-bold text-secondary-foreground">
              {title}
            </h1>
          )}
          {children}
          {description && (
            <p className="mb-2 text-xl text-card-foreground">{description}</p>
          )}
          {items && <CardItems items={items} />}
          {learnMore && <CardLink url={learnMore} title="Learn More" />}
        </div>
        {lg_screen && invert && imageUrl && (
          <CardImage
            imageUrl={imageUrl}
            imageAlt={title}
            min_height={min_height}
          />
        )}
      </div>
    </section>
  );
}

export default Card;
