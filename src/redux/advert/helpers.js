export const handlePending = state => {
  state.isLoading = true;
};

export const startFetchHandleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

export const fetchHandleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = [...state.items, ...action.payload];
};

export const filterHandleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
