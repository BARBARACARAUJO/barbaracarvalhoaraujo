export default function ButtonLink({ className, text, href, ...props }) {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={href}
      className={`my-2 block cursor-pointer rounded-none border-black hover:text-white border-4 hover:bg-black focus:ring-4 focus:outline-none focus:ring-white font-bold px-20 py-2.5 text-center mb-2 text-3xl ${className}`}
      {...props}
    >
      {text}
    </a>
  );
}
