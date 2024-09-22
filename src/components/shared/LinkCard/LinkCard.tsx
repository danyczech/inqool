import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";


export type TLinkCard = {
  image: string,
  title: string,
  url: string,
};

const LinkCard = ({image, title, url}:TLinkCard):ReactElement => (
<Link 
  className="block h-44 border-solid border-2 border-gray-300 rounded-xl hover:border-gray-500"
  href={url}
>

  <div className="w-36 h-36 object-cover relative">
    <Image
      alt={title}
      className="rounded-t-xl"
      fill
      src={image}
    />
  </div>

  <h3 className="text-lg font-semibold text-center">{title}</h3>

</Link>
);

export default LinkCard;