import Menu from "./Menu";

export default function Header(props) {
  return (
    <div {...props}>
      <div className="container mx-auto py-4">
        <Menu />
      </div>
    </div>
  );
}
