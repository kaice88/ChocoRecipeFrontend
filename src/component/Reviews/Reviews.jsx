import ReviewsHeader from "./ReviewsHeader";
import NewReview from "./NewReview";
import ListReviews from "./ListReviews";
import { redirect } from "react-router";
import { useState, useEffect } from "react";
function Reviews(props) {
  // const [reviews, setReviews] = useState(false);
  // //
  // const reset = (a) => {
  //   setReviews(a);
  // }
  return (
    <>
      <ReviewsHeader
        quantity={props.review}
        rateAverage={props.rateAverage}
      ></ReviewsHeader>
      <div>
        <NewReview
          src={props.src}
          username={props.username}
          rate={props.rate}
          MyReview={props.myReview}
          recipe_id={props.recipe_id}
          review_list={props.review_list}
          // reset={reset}
        ></NewReview>
      </div>
      <ListReviews review_list={props.review_list}></ListReviews>
    </>
  );
}

export default Reviews;
