import Image from "next/image";
import Link from "next/link";

import horizontalLogo from "../public/images/horizontal_logo.png";

interface NavbarProps {
  onMenuToggle: () => void;
}

export default function Navbar(props: NavbarProps) {

  const handleClose = () => {
    props.onMenuToggle();
  };

  return (
    <div className="">
      <div className="px-4 pt-4 flex items-center justify-between">
          <Link href="/">
            <Image alt="Horizontal Logo" className="" src={horizontalLogo} height={36} />
          </Link>
          <div>
            <button className="flex items-center" onClick={handleClose}>
              <div className="border-4 border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 h-10 w-10 p-2 flex items-center justify-center text-xl rounded-full ease-in-out duration-100 mr-2">{"<"}</div>
              <div className="text-sm md:text-lg">Categories</div>
            </button>
          </div>
      </div>
    </div>
  )
}