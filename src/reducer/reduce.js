const count = 0;

export const reducer = (state = count, action) => {
  switch (action.type) {
    case "INCREASE_COUNT":
      return state + 1;
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

const result11 = "Happy";
export const simpleReducer = (state = result11, action) => {
  switch (action.type) {
    case "SIMPLE_ACTION":
      // const { result, count } = action.payload;
      return  state === "Happy" ? "Sad" : "Happy";
      

    default:
      return state;
  }
};
const field = "How are you";
export const updateReducer = (state = field, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return  state =action.payload;
    
    default:
      return state;
  }
};

const formField = {
  name: "bob",
  age: 21,
  home: "Gujarat",
};
export const updateFormReducer = (state = formField, action) => {
  switch (action.type) {
    case "UPDATE_FORM":
      return {
        ...state,
        ...state.formField,
        ...action.payload,

      };
    default:
      return state;
  }
};
export default simpleReducer;
