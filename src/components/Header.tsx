import { FunctionComponent } from "react";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <div className="mt-20">
      Header
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae
        quam modi tempore, ratione corporis incidunt, libero porro aperiam,
        ipsum excepturi. Similique aliquam alias cum at hic, inventore fugit
        recusandae.
      </p>
    </div>
  );
};

export default Header;
