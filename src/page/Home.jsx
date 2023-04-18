import img from "../assets/img_recipe.png"
import ListRecipes from "../component/Recipes/ListRecipes";
import Search from "../component/UI/Search";
import styles from "./Home.module.css"
import Slider from "../component/Slider/Slider"
import SelectSort from "../component/UI/Select";

function Home(props) {
  const slides = [
    { url: "https://images.pexels.com/photos/3743169/pexels-photo-3743169.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { url: "https://images.pexels.com/photos/5644944/pexels-photo-5644944.jpeg" },
    { url: "https://images.pexels.com/photos/5490968/pexels-photo-5490968.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  ];

  const dummy_arr = [
    {
      src: img,
      name: 'Fluffy Japanese Soufflé Pancakes',
      like: '15k',
      username: 'kimchi123',
      rate: '2.5',
      isLiked: true
    },
    {
      src: img,
      name: 'Pumpkin Cake',
      like: '15k',
      username: 'kimchi123',
      rate: '5',
      isLiked: false
    },
    {
      src: img,
      name: 'Fluffy Japanese Soufflé Pancakes',
      like: '15k',
      username: 'kimchi123',
      rate: '2.5',
      isLiked: false
    },
    {
      src: img,
      name: 'Fluffy Japanese Soufflé Pancakes',
      like: '15k',
      username: 'kimchi123',
      rate: '2.5',
      isLiked: false
    },
    {
      src: img,
      name: 'Fluffy Japanese Soufflé Pancakes',
      like: '15k',
      username: 'kimchi123',
      rate: '2.5',
      isLiked: false
    },
    {
      src: img,
      name: 'Fluffy Japanese Soufflé Pancakes',
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
          <div className={styles.containerSlider}>
            <Slider slides={slides}></Slider>
          </div>
          <div className={styles.search}>
            <Search
              type="text"
              placeholder="Search recipes"
            ></Search>
          </div>
        </div>
        <div className={styles.recipe_list}>
        <div className={styles["select-container"]}>
          <SelectSort></SelectSort>
        </div>
          <ListRecipes recipe_list={dummy_arr}></ListRecipes>
        </div>
      </div>
    </>
  );
}

export default Home;
