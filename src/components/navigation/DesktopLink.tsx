import { Link } from 'react-router-dom';

interface Props {
  to: string;
  name: string;
}

function NavbarLink({ to, name }: Props) {
  return (
    <li>
      <Link
        to={to}
        className="block w-full text-center hover:text-secondary-foreground/80"
      >
        {name}
      </Link>
    </li>
  );
}

export default NavbarLink;
