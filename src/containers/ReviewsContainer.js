import React, { Component } from "react";
import ReviewInput from "../components/reviews/ReviewInput";
import Reviews from "../components/reviews/Reviews";
import { connect } from "react-redux";

class ReviewsContainer extends Component {
  render() {
    return (
      <div>
        <ReviewInput
          restaurantId={this.props.restaurantId}
          addReview={this.props.addReview}
        />
        <Reviews
          reviews={this.props.reviews}
          delete={this.props.deleteReview}
          restaurantId={this.props.restaurantId}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    reviews: state.reviews,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addReview: (review) => dispatch({ type: "ADD_REVIEW", review: review }),
    deleteReview: (reviewId) =>
      dispatch({ type: "DELETE_REVIEW", reviewId: reviewId }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
