import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useEffect, useState } from "react";
import { MediaType } from "../app/types/MediaType";

import horizontalLogo from "../public/images/horizontal_logo.png";

interface SideMenuProps {
  isOpen: boolean;
  onMenuToggle: () => void;
  onCheckboxChange: (checkedItems: MediaType[]) => void;
}

export default function SideMenu(props: SideMenuProps) {

  const [checkedMediaTypes, setCheckedMediaTypes] = useState<MediaType[]>([]);

  useEffect(() => {
    const savedCheckedItems = JSON.parse(localStorage.getItem('checkedItems') || '[]');
    setCheckedMediaTypes(savedCheckedItems);
  }, []);

  const handleClose = () => {
    props.onMenuToggle();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    const value = e.target.value as MediaType;

    if (isChecked) 
    {
      setCheckedMediaTypes(prevState => [...prevState, value]);
      props.onCheckboxChange([...checkedMediaTypes, value]);
    }
    else 
    {
      setCheckedMediaTypes(prevState => prevState.filter(type => type !== value));
      props.onCheckboxChange(checkedMediaTypes.filter(type => type !== value));
    }
  }

  const savedCheckedItems = JSON.parse(localStorage.getItem('checkedItems') || '[]');

  const allMediaTypes = Object.values(MediaType).map((mediaType) => {
    const isChecked = savedCheckedItems.includes(mediaType);
    return (
      <div className="mb-6" key={mediaType}>
        <input
          className="mt-[0.3rem] mr-2 h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 dark:bg-neutral-600 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 dark:after:bg-neutral-400 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary dark:checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary dark:checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
          type="checkbox"
          role="switch"
          value={mediaType}
          id={mediaType} 
          checked={isChecked}
          onChange={handleChange}
        />
        <label htmlFor={mediaType} className="inline-block pl-[0.15rem] text-sm hover:cursor-pointer menuMediaType">{ mediaType }</label>
      </div>
    );
  });

  return (
    <div>
      <div className={`offcanvas-menu ${props.isOpen ? "open" : ""} px-4`}>
        <div className="text-right flex justify-between my-6">
          <Image src={horizontalLogo} height={36} alt={"Emoji Royale Logo"} />
          <div>
            <button onClick={handleClose} className="border-4 border-red-500 text-red-500 hover:text-white hover:bg-red-500 h-10 w-10 p-2 flex items-center justify-center text-xl rounded-full ease-in-out duration-100">x</button>
          </div>
        </div>
        <div>
          <div className="mb-6">
            <div className="text-lg mb-2">Categories</div>
            <div className="text-xs text-slate-400">Uncheck categories you're not interested in!</div>
          </div>
          <div className="">
            { allMediaTypes }
          </div>
          <Link href={"https://twitter.com/eliotrhys"} target="_blank" className="flex items-center ease-in-out duration-100 hover:scale-105 mb-8">
            <div>
              <img src="/images/twitter.png" className="mr-4" style={{ height: "24px" }} alt="" />
            </div>
            <div>
              <div className="text-xs">Follow me on twitter</div>
              <div className="text-xs text-slate-300">(I'm smart and funny)</div>
            </div>
          </Link>
          <div className="text-xs">🚨 Also, if your team is hiring designers, front-end developers or general creative people please let me know - looking for a job!</div>
        </div>
      </div>
    </div>
  );
}