import ListIngredients from "../component/Ingredients/ListIngredients";
import Directions from "../component/Directions/Directions";
import styles from './ViewRecipe.module.css'
import Introview from "../component/Introview/Introview";
import ListReviews from "../component/Reviews/ListReviews";

function ViewRecipe(props) {
    const ingre_arr = [
        {
            quantity: '2',
            name: 'zucchini'
        },
        {
            quantity: '1',
            name: 'onion'
        },
        {
            quantity: '1',
            unit: 'clove',
            name: 'garlic'
        },
        {
            quantity: '2',
            unit: 'cup',
            name: 'pasta sauce'
        },
        {
            quantity: '1/4',
            unit: 'tsp.',
            name: 'pepper'
        },
        {
            quantity: '2',
            name: 'zucchini'
        },
        {
            quantity: '1',
            name: 'onion'
        },
        {
            quantity: '1',
            unit: 'clove',
            name: 'garlic'
        },
        {
            quantity: '2',
            unit: 'cup',
            name: 'pasta sauce'
        },
        {
            quantity: '1/4',
            unit: 'tsp.',
            name: 'pepper'
        },
    ];
    const review_arr = [
        {
            src: 'https://images.pexels.com/photos/1107807/pexels-photo-1107807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            username: 'Quynh Linh',
            time: 'a few seconds ago',
            rate: '5.0',
            content: 'We loved this recipe. I have made these before using shredded cheddar but using mozzarella shredded is the way to go. 100% delicious'
        },
        {
            src: 'https://images.pexels.com/photos/1107807/pexels-photo-1107807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            username: 'Sarah Diaz',
            time: '8 months ago',
            rate: '3.0',
            content: 'Turned out great. I think next time i might sprinkle a little garlic salt on the Zucchini before adding the beef mixture, it seemed like it could have used a little more seasoning. Also, i did not have enough mozzarella cheese on hand so i mixed what I had left with Monterey jack and it was good. I also cooked it 5 mins longer than what the recipe called for and it was perfect. My husband loved it! 😍'
        },
        {
            src: 'https://images.pexels.com/photos/1107807/pexels-photo-1107807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            username: 'AMorg',
            time: '10 months ago',
            rate: '4.0',
            content: 'Really good! Family loved it!!'
        },
    ];
    return (
        <>
        <div className = {styles.container}>
            <div className={styles['container-introview']}>
                <Introview
                    name='Easy Stuffed Zucchini Boats'
                    username='KIMCHI123'
                    rate={2.5}
                    like='998'
                    review='2'
                    unitIngre='11'
                    unitMin='55'
                    unitCalo='450'
                    src='https://images.pexels.com/photos/7144887/pexels-photo-7144887.jpeg?auto=compress&cs=tinysrgb&w=600'
                ></Introview>
            </div>
            <div className={styles['container-ingre']}>
                <ListIngredients ingredient_list={ingre_arr}></ListIngredients>
            </div>
            <div className={styles['container-directions']}>
                <Directions directions='Stuffed Zucchini Boats are the perfect way to enjoy your fresh summer zucchini!
Serve this easy dish with a side salad and garlic bread for the perfect family meal!
Of all of the things that grow in my garden, the herbs and the zucchini have to be my absolute favorites (ok, and the tender baby carrots). I have so many zucchini recipes and this one is near the top of the list!
Ingredients for Stuffed Zucchini Boats
Zucchini – You may need only two zucchini if the zucchini is large or 3-4 if they are smaller. Yellow summer squash can also be used in this recipe, you may need to reduce the cooking time by a few minutes.
This filling can also be added to small bell peppers (pre-cook them a minute or two in the microwave first) or even portobello mushrooms if you’d like.
Meat Filling – This recipe starts with a zesty meat sauce. I use beef but Italian sausage (or even ground turkey sausage) is great too! Use your favorite marinara sauce and chop up any veggies you love to add to the sauce.
Optional Additions – Fresh tomatoes, kidney beans, corn, or other fresh vegetables can be added. Try a sprinkle of red pepper flakes for a little heat.
How to Make Stuffed Zucchini Boats
Prepare zucchini by scraping out the flesh in the center to create a ‘boat’.
Make a quick meat sauce with ground beef or sausage, onion, and marinara sauce or pasta sauce.
Fill and bake the zucchini until tender. Sprinkle with cheese and bake a little bit longer.
Garnish with fresh herbs if you’d like and serve with crusty bread.
Tips for Making Great Zucchini Boats
If you prefer softer zucchini or if using garden zucchini that are thicker or large, this recipe can be cooked longer before adding the cheese.
The core of the zucchini can be chopped and added to the sauce along with the red pepper or it can be added to soups or chilis if desired.
If adding the zucchini or other vegetables to the sauce, allow them to cook a little bit before adding the marinara sauce so the sauce is not watery.
Leftover meat sauce or chili can be used in place of the meat sauce in this recipe.'></Directions>
            </div>
            <div>
                <ListReviews 
                review='2'
                rateAverage={2.5} 
                src='https://images.pexels.com/photos/1107807/pexels-photo-1107807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                username='Quynh Linh'
                rate=''
                disabled='false'
                MyReview=''
                review_list={review_arr}
                >
                </ListReviews>
            </div>
        </div>
        </>
    );
}

export default ViewRecipe;
