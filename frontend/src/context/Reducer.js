const Reducer = (state, action) => {
  switch (action.type) {
    case "LoginStart":
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    case "LoginSuccess":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case "LoginFaliure":
      return {
        user: null,
        isFetching: false,
        error: true,
      };
    case "Logout":
      return {
        user: null,
        isFetching: false,
        error: false,
      };
    default:
      return state;
  }
};

export default Reducer;
