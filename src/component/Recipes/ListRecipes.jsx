import Recipe from "./Recipe";
function ListRecipes(props) {
  return (
    <div>
      {props.recipe_list.map((item) => (
        <Recipe></Recipe>
      ))}
    </div>
  );
}

export default ListRecipes;
