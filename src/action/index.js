export const simpleAction = () => {
  return {
    type: "SIMPLE_ACTION",
    payload: "results of simple action",
  };
};
  

export const increaseCount = () => {
  return {
    type: "INCREASE_COUNT",
  };
};

export const updateField = (field) => {
  return {
    type: "UPDATE_FIELD",
    payload: field,
  };
};
