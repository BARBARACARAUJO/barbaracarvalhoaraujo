export default function Ticker({ text }) {
  return (
    <div className="py-2 border-b-2 border-t-2 border-black">
      <div className="marquee">
        <div className="marquee__inner" aria-hidden="true">
          {[...Array(20)].map((item, i) => (
            <span key={i} className="text-7xl font-bold px-20">{text}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
