import Link from "next/link";

export const SocialButton = ({href='', svg=''}) =>  {

  return (
    <Link href={href} className='flex w-11 h-11 rounded-full bg-gray2 items-center justify-center'>
        {svg}
    </Link>
  );
}