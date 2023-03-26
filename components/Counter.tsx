interface CounterProps {
  count: number;
  isSuddenDeath: boolean;
}

export default function Counter(props: CounterProps) {
  return (
    <div className="flex items-center justify-center w-full px-2">
        <div className={`${ props.isSuddenDeath ? "w-1/2" : "w-full"}`}>
          <div className="text-sm py-1 lg:py-3 text-center border-4 border-black relative z-10 bg-purple-500 text-white rounded-full inline-block lift w-full">Question { props.count + 1 }</div>
        </div>
    </div>
  )
}