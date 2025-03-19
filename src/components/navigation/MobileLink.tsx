import { Link } from 'react-router-dom';

interface Props {
  to: string;
  name: string;
}

function MobileLink({ to, name }: Props) {
  return (
    <li className="w-full">
      <Link
        to={to}
        className="block w-full px-2 py-3 text-left hover:text-secondary-foreground/80"
      >
        {name}
      </Link>
    </li>
  );
}

export default MobileLink;
