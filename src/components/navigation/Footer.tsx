const Footer = () => {
  return (
    <footer className="border-t border-secondary-foreground/20 bg-secondary py-8 text-secondary-foreground">
      <div className="container mx-auto space-y-6 px-6 text-center">
        <h3 className="text-lg font-semibold">Contact Us</h3>
        <div>
          <p>Katende Road, Triangle Zone, Katende Ward</p>
          <p>Bugembe Town Council, Jinja City</p>
        </div>
        <div className="flex justify-center gap-4 text-base">
          <a
            href="tel:+256773685121"
            className="transition hover:text-secondary-foreground/80"
          >
            +256 773 685121
          </a>
          <span>|</span>
          <a
            href="tel:+256754990297"
            className="transition hover:text-secondary-foreground/80"
          >
            +256 754 990297
          </a>
        </div>
        <a
          href="mailto:timbitiresearchconsultinggroup@gmail.com"
          className="block transition hover:text-secondary-foreground/80"
        >
          timbitiresearchconsultinggroup@gmail.com
        </a>
        <p className="mt-4 text-xs text-secondary-foreground/70">
          &copy; {new Date().getFullYear()} Timbiti Research Consulting Group.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
