const OnInputChange = (fieldName, value) => {
  setData((prevData) => ({
    ...prevData,
    [fieldName]: value,
  }));
};

export default OnInputChange;
