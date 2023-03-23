interface KeyProps {
  letter: string;
  onClick: (letter: string) => void;
}

const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, props: KeyProps) => {
  event.preventDefault();

  if (props.onClick) 
  {
    props.onClick(props.letter);
  }
}

export default function Key(props: KeyProps){
  return (
    <>
      <button className="p-2 mx-1 my-1 bg-blue-300 text-blue-900 rounded-md flex items-center justify-center" onClick={(event) => handleClick(event, props)}>{props.letter}</button>
    </>
  )
};