import ListRecipes from "../component/Recipes/ListRecipes";
function Home(props) {
  const dummy_arr = [
    {
      image: "/cc",
      name: "a1",
      rating: 3.5,
      like: 13,
      username: "kimchi",
      isLiked: false,
    },
    {
      image: "/cc",
      name: "a1",
      rating: 3.5,
      like: 13,
      username: "kimchi",
      isLiked: false,
    },
  ];
  return (
    <>
      <ListRecipes recipe_list={dummy_arr}></ListRecipes>
    </>
  );
}

export default Home;
