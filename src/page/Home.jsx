import authImage from "../assets/home.png";
import ListRecipes from "../component/Recipes/ListRecipes";
import Search from "../component/UI/Search";
import styles from "./Home.module.css"
function Home(props) {
  const dummy_arr = [
    {
      src: 'http://localhost:3000/static/media/img_recipe.fff1cd4698a07a78ffb5.png',
      name: 'Fluffy Japanese Soufflé Pancakes',
      test: 'love',
      like: '15k',
      username: 'kimchi123',
      rate: '2.5',
      isLiked: true
    },
    {
      src: 'http://localhost:3000/static/media/img_recipe.fff1cd4698a07a78ffb5.png',
      name: 'Fluffy Japanese Soufflé Pancakes',
      test: 'love',
      like: '15k',
      username: 'kimchi123',
      rate: '2.5',
      isLiked: false
    },
    {
      src: 'http://localhost:3000/static/media/img_recipe.fff1cd4698a07a78ffb5.png',
      name: 'Fluffy Japanese Soufflé Pancakes',
      test: 'love',
      like: '15k',
      username: 'kimchi123',
      rate: '2.5',
      isLiked: false
    },
    {
      src: 'http://localhost:3000/static/media/img_recipe.fff1cd4698a07a78ffb5.png',
      name: 'Fluffy Japanese Soufflé Pancakes',
      test: 'love',
      like: '15k',
      username: 'kimchi123',
      rate: '2.5',
      isLiked: false
    },
    {
      src: 'http://localhost:3000/static/media/img_recipe.fff1cd4698a07a78ffb5.png',
      name: 'Fluffy Japanese Soufflé Pancakes',
      test: 'love',
      like: '15k',
      username: 'kimchi123',
      rate: '2.5',
      isLiked: false
    },
    {
      src: 'http://localhost:3000/static/media/img_recipe.fff1cd4698a07a78ffb5.png',
      name: 'Fluffy Japanese Soufflé Pancakes',
      test: 'love',
      like: '15k',
      username: 'kimchi123',
      rate: '2.5',
      isLiked: true
    },
  ];
  return (
    <>
      <div className={styles.container}>
        <div className={styles.img}>
          <img alt="home" src={authImage}></img>
          <div className={styles.search}>
            <Search
              type="text"
              placeholder="Search recipes"
            ></Search>
          </div>
        </div>
        <div className={styles.recipe_list}>
          <ListRecipes recipe_list={dummy_arr}></ListRecipes>
        </div>
      </div>
    </>
  );
}

export default Home;
