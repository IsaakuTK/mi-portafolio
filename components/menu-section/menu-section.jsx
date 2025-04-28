import Link from "next/link";

export const MenuSection = ({href='', svg='', name='', onClick}) =>  {

  return (
    <Link onClick={onClick} href={href} className='flex w-full border-b-4 border-green1 h-20 items-center p-10 gap-10'>
    {svg}
    <h2 className="text-xl font-medium font-rubik text-green1">{name}</h2>
    </Link>
  );
}