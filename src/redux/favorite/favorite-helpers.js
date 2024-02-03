export const pending = state => {
  state.isLoading = true;
};

// export const fetchFavoriteHandleFulfilled = (state, action) => {
//   state.isLoading = false;
//   state.error = null;
//   state.items = action.payload;
// };

export const addHandleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.favorite.push(action.payload);
};

export const deleteHandleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.favorite = state.favorite.filter(car => car.id !== action.payload.id);
};

export const rejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
