import Image from "next/image";
import Link from "next/link";

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
            <img alt="Horizontal Logo" className="" src="/images/horizontalLogo.png" style={{ height: "60px" }} />
          </Link>
          <div>
            <button className="flex items-center" onClick={handleClose}>
              <div className="border-4 border-black text-black bg-white hover:text-white hover:bg-blue-500 h-10 w-10 p-2 flex items-center justify-center text-xl rounded-full ease-in-out duration-100 mr-2 lift">{"<"}</div>
              <div className="text-sm md:text-lg">Options</div>
            </button>
          </div>
      </div>
    </div>
  )
}