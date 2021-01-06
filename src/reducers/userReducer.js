const INITIAL_STATE = {
  isloggedin: false,
  users: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN": {
      return {
        ...state,
        isloggedin: true,
        users: action.payload,
      };
    }

    case "LOGOUT": {
      return {
        ...state,
        isloggedin: false,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};

export default userReducer;
