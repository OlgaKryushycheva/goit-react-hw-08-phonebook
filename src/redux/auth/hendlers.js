export const registerSuccses = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

export const logInSuccses = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

export const logOutSuccses = state => {
  state.user = {
    name: null,
    email: null,
  };
  state.token = null;
  state.isLoggedIn = false;
};

export const refreshUserSuccses = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

export const refreshPending = state => {
  state.isRefreshing = true;
  // state.error = false;
};

export const refreshRejected = (state, action) => {
  state.isRefreshing = false;
  // state.error = action.payload;
  console.log('refreshRejected->', action.payload);
};
