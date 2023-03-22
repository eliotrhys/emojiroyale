type KeyProps = {
  letter: string;
  onClick: () => void;
}

const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, props: KeyProps) => {
  event.preventDefault();
  console.log('Button clicked!');

  if (props.onClick) {
    props.onClick();
  }
}

export default function Key(props: KeyProps){
  return (
    <>
      <button className="p-2 mx-1 my-1 bg-blue-300 text-blue-900 rounded-md flex items-center justify-center" onClick={(event) => handleClick(event, props)}>{props.letter}</button>
    </>
  )
};