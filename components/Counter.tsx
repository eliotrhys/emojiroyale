export default function Counter(props: { count: number }) {
  return (
    <div className="">
        <div className="flex justify-center">
          <div className="text-sm px-10 py-2 text-center border-4 border-black relative z-10 bg-purple-500 text-white rounded-full inline-block lift">Question { props.count + 1 }</div>
        </div>
    </div>
  )
}