import Menu from "./Menu";

export default function Header(props) {
  return (
    <div {...props}>
      <div className="sm:mx-10 md:mx-10 lg:mx-52 py-4">
        <Menu />
      </div>
    </div>
  );
}
