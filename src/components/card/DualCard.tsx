interface DualCardProps {
  title1: string;
  description1: string;
  title2: string;
  description2: string;
}

function DualCard({
  title1,
  description1,
  title2,
  description2,
}: DualCardProps) {
  return (
    <section>
      <div className="grid grid-cols-1 gap-6 rounded-lg bg-gray-50 px-6 py-20 md:grid-cols-2">
        <div className="flex flex-col justify-center border-r border-gray-300 p-4">
          <h1 className="mb-2 text-5xl font-bold text-secondary-foreground">
            {title1}
          </h1>
          <p className="text-xl text-card-foreground">{description1}</p>
        </div>
        <div className="flex flex-col justify-center p-4">
          <h1 className="mb-2 text-5xl font-bold text-secondary-foreground">
            {title2}
          </h1>
          <p className="text-xl text-card-foreground">{description2}</p>
        </div>
      </div>
    </section>
  );
}

export default DualCard;
