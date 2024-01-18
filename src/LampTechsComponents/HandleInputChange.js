const HandleInputChange = (event, setData) => {
  const { name, value } = event.target;
  setData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};
export default HandleInputChange;
