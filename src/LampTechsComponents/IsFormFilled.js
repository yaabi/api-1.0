const IsFormFilled = (data) => {
  return Object.values(data).every((value) => value !== "");
};

export default IsFormFilled;
