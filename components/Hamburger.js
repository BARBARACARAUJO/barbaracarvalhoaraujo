export default function Hamburger({ className, isOpen, ...props }) {
  return (
    <div
      className={`space-y-2 border-2 border-black px-1 py-3 cursor-pointer ${className}`}
      {...props}
    >
      <span className={`block transition-width transition-slowest ease h-0.5 ${isOpen ? "w-6" : "w-12"}  bg-black`}></span>
      <span className={`block transition-width transition-slowest ease h-0.5 ${isOpen ? "w-9" : "w-12"}  bg-black`}></span>
      <span className="block h-0.5 w-12 bg-black"></span>
    </div>
  );
}
