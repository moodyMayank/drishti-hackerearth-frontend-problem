import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const Header = () => {
  const options = ["one", "two", "three"];
  const defaultOption = options[0];
  const onSelect = () => {
    console.log("Hey Selected");
  };
  return (
    <div className="dropdown-container">
      <Dropdown
        options={options}
        onChange={onSelect}
        value={defaultOption}
        placeholder="Select an option"
      />
      <Dropdown
        options={options}
        onChange={onSelect}
        value={defaultOption}
        placeholder="Select an option"
      />
      <Dropdown
        options={options}
        onChange={onSelect}
        value={defaultOption}
        placeholder="Select an option"
      />
    </div>
  );
};

export default Header;
