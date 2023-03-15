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
          <button onClick={handleClose}>Categories</button>
          </div>
        </div>
    </div>
  )
}