export default function RatingDisplay({ rating }) {
  const flooredRating = Math.floor(rating);

  const getColor = (flooredRating) => {
    let color = "glass";

    if (flooredRating !== 0 && flooredRating <= 25) {
      color = "border-bad-rating shadow-bad-rating";
      return color;
    } else if (flooredRating >= 25 && flooredRating < 45) {
      color = "border-mediocre-rating shadow-mediocre-rating";
      return color;
    } else if (flooredRating >= 45 && flooredRating < 65) {
      color = "border-average-rating shadow-average-rating";
      return color;
    } else if (flooredRating >= 65 && flooredRating < 85) {
      color = "border-good-rating shadow-good-rating";
      return color;
    } else {
      color = "border-very-good-rating shadow-very-good-rating";
      return color;
    }
  };

  return (
    <div
      className={`${getColor(
        flooredRating
      )} border shadow-inner size-6 shrink-0 grow-0 rounded-full flex justify-center items-center p-3 text-xs text-white font-light`}
    >
      {flooredRating}
    </div>
  );
}
