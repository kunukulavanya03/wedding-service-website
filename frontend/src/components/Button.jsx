export default function Button({ children, onClick }) {
  return (
    <button className="bg-primary py-2 px-4 text-white rounded" onClick={onClick}>{children}</button>
  )
}