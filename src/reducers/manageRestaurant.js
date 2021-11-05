import cuid from "cuid";
import { combineReducers } from "redux";
export const cuidFn = cuid;

const rootReducer = combineReducers({
  restaurants: manageRestaurants,
  reviews: reviewsReducer,
});

export default rootReducer;

function manageRestaurants(state = [], action) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      const restaurant = {
        text: action.payload,
        id: cuid(),
      };
      return [...state, restaurant];

    case "DELETE_RESTAURANT":
      return state.filter((restaurant) => restaurant.id !== action.id);

    default:
      return state;
  }
}

function reviewsReducer(state = [], action) {
  switch (action.type) {
    case "ADD_REVIEW":
      const review = {
        text: action.review.text,
        restaurantId: action.review.restaurantId,
        id: cuid(),
      };
      return [...state, review];

    case "DELETE_REVIEW":
      return state.filter((review) => review.id !== action.reviewId);

    default:
      return state;
  }
}
