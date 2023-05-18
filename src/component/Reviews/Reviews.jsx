import ReviewsHeader from "./ReviewsHeader";
import NewReview from "./NewReview";
import ListReviews from "./ListReviews";
function Reviews(props) {
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
        ></NewReview>
      </div>
      <ListReviews review_list={props.review_list}></ListReviews>
    </>
  );
}

export default Reviews;
