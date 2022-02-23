const count = 0;

export const reducer = (state = count, action) => {
  switch (action.type) {
    case "INCREASE_COUNT":
      return state + 1
    //   case "SIMPLE_ACTION":
    //   // const { result, count } = action.payload;
    //   return {
    //     ...state,
    //     result: state.result === "the slayer" ? "buffy" : "the slayer",
    //   };

    // default:
    //   return state;

    default:
      return state;
  }
};

const result = "duffy";
export const simpleReducer = (state = result, action) => {
  switch (action.type) {
    case "SIMPLE_ACTION":
      // const { result, count } = action.payload;
      return {
        ...state,
        result: state.result === "the slayer" ? "buffy" : "the slayer",
      };

    default:
      return state;
  }
};
export default simpleReducer;
