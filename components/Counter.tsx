export default function Counter(props: { count: number }) {
  return (
      <div>
          <h1 className="text-4xl">Question { props.count + 1 }</h1>
      </div>
  )
}