import { useParams } from "react-router-dom";

function RecipeDetail() {
  const params = useParams();
  return <>Detail 🐺🐬🐍🦜🦩 {params.recipeId}</>;
}

export default RecipeDetail;
