export const fetchSuccses = (state, action) => {
  state.isLoading = false;
  state.items = action.payload;
  state.error = null;
  console.log('fetchSuccses->', action.payload);
};

export const addSuccses = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items.unshift(action.payload);
};

export const deleteleSuccses = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.findIndex(
    contact => contact.id === action.payload.id
  );
  state.items.splice(index, 1);
};

export const handlePending = (state, action) => {
  state.isLoading = true;
  // state.error = null поставлено чтобы нормально работал refreshUser
  state.error = null;
  console.log('handlePending->', action.payload);
};

export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  console.log('handleRejected->', action.payload);
};
