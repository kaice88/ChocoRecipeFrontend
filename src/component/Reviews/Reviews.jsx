import ReviewsHeader from "./ReviewsHeader";
import NewReview from "./NewReview";
function Reviews(props) {
  return (
    <>
      <ReviewsHeader
        quantity={props.quantity}
        rateAverage={props.rateAverage}
      ></ReviewsHeader>
      <div>
        <NewReview
          src={props.src}
          username={props.username}
          rate={props.rate}
          MyReview={props.myReview}
        ></NewReview>
      </div>
    </>
  );
}

export default Reviews;
