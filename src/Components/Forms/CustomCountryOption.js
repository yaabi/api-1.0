const CustomCountryOption = ({ country }) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <img
      src={country.flag}
      alt={country.name}
      style={{ width: "24px", marginRight: "8px" }}
    />
    <span>{country.name}</span>
  </div>
);

export default CustomCountryOption;
