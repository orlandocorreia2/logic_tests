const cleanObjectProperties = (object) => {
  Object.keys(object).forEach((key) => {
    if (!object[key]) delete object[key];
  });
  return object;
};

console.log(
  cleanObjectProperties({
    name: "Orlando",
    age: 45,
    test: null,
    oxl: "",
    genre: "Male",
    xx: undefined,
  })
);
