import Link from 'next/link';

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="p-6 flex justify-between items-center">
      <h1 className="font-bold text-white text-xl">{title}</h1>
      {linkHref && linkTitle ? (
        <Link href={linkHref} className="text-sm font-bold text-white underline hover:text-cyan-600 transition-all">
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};
export default Header;
