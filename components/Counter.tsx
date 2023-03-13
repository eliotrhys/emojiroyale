export default function Counter(props: { count: number }) {
  return (
    <div className="mt-10">
        <div className="flex justify-center">
          <div className="text-sm -mb-4 px-10 py-2 text-center border-4 border-black relative z-10 bg-blue-500 text-white rounded-full inline-block">Question { props.count + 1 }</div>
        </div>
    </div>
  )
}