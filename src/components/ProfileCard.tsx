import { Link } from 'react-router-dom';

interface Props {
  imageUrl: string;
  name: string;
  title: string;
  profileUrl: string;
}

function ProfileCard({ imageUrl, name, title, profileUrl }: Props) {
  return (
    <Link to={profileUrl} className="block">
      <div className="flex flex-col items-center rounded-lg transition-transform hover:scale-105">
        <img
          src={imageUrl}
          alt={name}
          className="h-48 w-48 rounded-full object-cover shadow-md"
        />
        <h2 className="mt-4 text-2xl font-bold text-secondary-foreground">
          {name}
        </h2>
        <p>{title}</p>
      </div>
    </Link>
  );
}

export default ProfileCard;
