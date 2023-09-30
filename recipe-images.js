const recipeImages = [
    { 
        "name": 'Spaghetti Bolognese', 
        "imgAlias": require('../assets/recipe-images/spaghetti-bolognese.jpeg')
    },
    {
        "name": 'Chicken Curry (Basic)',
        "imgAlias": require('../assets/recipe-images/chicken-curry.jpeg')
    },
    {
        "name": 'Vegetable Stir-Fry',
        "imgAlias": require('../assets/recipe-images/vegetarian-stir-fry.jpeg')
    },
    {
        "name": 'Cheese Pizza',
        "imgAlias": require('../assets/recipe-images/cheese-pizza.jpeg')
    },
    {
        "name": 'Pasta Carbonara',
        "imgAlias": require('../assets/recipe-images/pasta-carbonara.jpeg')
    },
    {
        "name": 'Beef Stroganoff',
        "imgAlias": require('../assets/recipe-images/beef-stroganoff.jpeg')
    },
    {
        "name": 'Beef Tacos',
        "imgAlias": require('../assets/recipe-images/beef-tacos.jpeg')
    },
    {
        "name": 'Mushroom Risotto',
        "imgAlias": require('../assets/recipe-images/mushroom-risotto.jpeg')
    },
    {
        "name": 'Chicken Alfredo with Fettuccine',
        "imgAlias": require('../assets/recipe-images/chicken-alfredo-with-fettuccine.jpeg')
    },
    {
        "name": 'Lasagna',
        "imgAlias": require('../assets/recipe-images/lasagna.jpeg')
    },
    {
        "name": 'Vegetable Lasagna',
        "imgAlias": require('../assets/recipe-images/vegetable-lasagna.jpeg')
    },
    {
        "name": 'Shrimp Scampi',
        "imgAlias": require('../assets/recipe-images/shrimp-scampi.jpeg')
    },
    {
        "name": 'Beef and Broccoli Stir-Fry',
        "imgAlias": require('../assets/recipe-images/beef-and-broccoli-stir-fry.jpeg')
    },
    {
        "name": 'Spinach and Feta Stuffed Chicken',
        "imgAlias": require('../assets/recipe-images/spinach-and-feta-stuffed-chicken.jpeg')
    },
    {
        "name": 'Lemon Garlic Shrimp',
        "imgAlias": require('../assets/recipe-images/lemon-garlic-shrimp.jpeg')
    },
    {
        "name": 'Homemade Chicken Noodle Soup',
        "imgAlias": require('../assets/recipe-images/homemade-chicken-noodle-soup.jpeg')
    },
    {
        "name": 'Tuna Salad Sandwich',
        "imgAlias": require('../assets/recipe-images/tuna-salad-sandwich.jpeg')
    },
    {
        "name": 'Mango Salsa Chicken',
        "imgAlias": require('../assets/recipe-images/mango-salsa-chicken.jpeg')
    },
    {
        "name": 'Ratatouille',
        "imgAlias": require('../assets/recipe-images/ratatouille.jpeg')
    },
    {
        "name": 'Salmon with Lemon-Dill Sauce',
        "imgAlias": require('../assets/recipe-images/salmon-with-lemon-dill-sauce.jpeg')
    },
    {
        "name": 'Lemon Herb Roast Chicken',
        "imgAlias": require('../assets/recipe-images/lemon-herb-roast-chicken.jpeg')
    },
    {
        "name": 'Beef and Vegetable Stir-Fry',
        "imgAlias": require('../assets/recipe-images/beef-and-vegetable-stir-fry.jpeg')
    },
    {
        "name": 'Mushroom and Spinach Stuffed Pork Chops',
        "imgAlias": require('../assets/recipe-images/mushroom-and-spinach-stuffed-pork-chops.jpeg')
    },
    {
        "name": 'Vegetable and Chickpea Curry',
        "imgAlias": require('../assets/recipe-images/vegetable-and-chickpea-curry.jpeg')
    },
    {
        "name": 'Baked Ziti',
        "imgAlias": require('../assets/recipe-images/baked-ziti.jpeg')
    },
    {
        "name": 'Honey Glazed Salmon',
        "imgAlias": require('../assets/recipe-images/honey-glazed-salmon.jpeg')
    },
    {
        "name": 'Stuffed Bell Peppers',
        "imgAlias": require('../assets/recipe-images/stuffed-bell-peppers.jpeg')
    },
    {
        "name": 'Shrimp and Broccoli Alfredo',
        "imgAlias": require('../assets/recipe-images/shrimp-and-broccoli-alfredo.jpeg')
    },
    {
        "name": 'Teriyaki Chicken Bowl',
        "imgAlias": require('../assets/recipe-images/teriyaki-chicken-bowl.jpeg')
    },
    {
        "name": 'Lemon Herb Grilled Rosemary Chicken',
        "imgAlias": require('../assets/recipe-images/lemon-herb-grilled-rosemary-chicken.jpeg')
    },
    {
        "name": 'Vegetable and Chicken Fajitas',
        "imgAlias": require('../assets/recipe-images/vegetable-and-chicken-fajitas.jpeg')
    },
    {
        "name": 'Spicy Thai Basil Beef',
        "imgAlias": require('../assets/recipe-images/spicy-thai-basil-beef.jpeg')
    },
    {
        "name": 'Mushroom and Spinach Quiche',
        "imgAlias": require('../assets/recipe-images/mushroom-and-spinach-quiche.jpeg')
    },
    {
        "name": 'Mongolian Beef',
        "imgAlias": require('../assets/recipe-images/mongolian-beef.jpeg')
    },
    {
        "name": 'Lentil and Vegetable Curry',
        "imgAlias": require('../assets/recipe-images/lentil-and-vegetable-curry.jpeg')
    },
    {
        "name": 'Crispy Tofu Stir-Fry',
        "imgAlias": require('../assets/recipe-images/crispy-tofu-stir-fry.jpeg')
    },
    {
        "name": 'Sesame Ginger Salmon',
        "imgAlias": require('../assets/recipe-images/sesame-ginger-salmon.jpeg')
    },
    {
        "name": 'Veggie and Chickpea Rice Bowl',
        "imgAlias": require('../assets/recipe-images/veggie-and-chickpea-rice-bowl.jpeg')
    },
    {
        "name": 'Balsamic Glazed Chicken',
        "imgAlias": require('../assets/recipe-images/balsamic-glazed-chicken.jpeg')
    },
    {
        "name": 'Lentil and Spinach Stuffed Bell Peppers',
        "imgAlias": require('../assets/recipe-images/lentil-and-spinach-stuffed-bell-peppers.jpeg')
    },
    {
        "name": 'Pork Tenderloin with Apple Compote',
        "imgAlias": require('../assets/recipe-images/pork-tenderloin-with-apple-compote.jpeg')
    },
    {
        "name": 'Cajun Shrimp Pasta',
        "imgAlias": require('../assets/recipe-images/cajun-shrimp-pasta.jpeg')
    },
    {
        "name": 'Sesame Ginger Beef Stir-Fry',
        "imgAlias": require('../assets/recipe-images/sesame-ginger-beef-stir-fry.jpeg')
    },
    {
        "name": 'Mushroom and Spinach Stuffed Chicken',
        "imgAlias": require('../assets/recipe-images/mushroom-and-spinach-stuffed-chicken.jpeg')
    },
    {
        "name": 'Tofu and Vegetable Curry',
        "imgAlias": require('../assets/recipe-images/tofu-and-vegetable-curry.jpeg')
    },
    {
        "name": 'Garlic Butter Shrimp Pasta',
        "imgAlias": require('../assets/recipe-images/garlic-butter-shrimp-pasta.jpeg')
    }, 
    {
        "name": 'Chickpea and Spinach Curry',
        "imgAlias": require('../assets/recipe-images/chickpea-and-spinach-curry.jpeg')
    },
    {
        "name": 'Honey Mustard Glazed Salmon',
        "imgAlias": require('../assets/recipe-images/honey-mustard-glazed-salmon.jpeg')
    },
    {
        "name": 'Vegetarian Chili',
        "imgAlias": require('../assets/recipe-images/vegetable-chili.jpeg')
    },
    {
        "name": 'Teriyaki Tofu and Broccoli',
        "imgAlias": require('../assets/recipe-images/teriyaki-tofu-and-broccoli.jpeg')
    },
    {
        "name": 'Lemon Garlic Butter Shrimp',
        "imgAlias": require('../assets/recipe-images/lemon-garlic-butter-shrimp.jpeg')
    },
    {
        "name": 'Stuffed Portobello Mushrooms',
        "imgAlias": require('../assets/recipe-images/stuffed-portobello-mushrooms.jpeg')
    },
    {
        "name": 'Lemon Garlic Roasted Chicken',
        "imgAlias": require('../assets/recipe-images/lemon-garlic-roasted-chicken.jpeg') 
    },
    {
        "name": 'Vegetable and Quinoa Stuffed Peppers',
        "imgAlias": require('../assets/recipe-images/vegetable-and-quinoa-stuffed-peppers.jpeg')
    },
    {
        "name": 'Honey Sriracha Glazed Salmon',
        "imgAlias": require('../assets/recipe-images/honey-sriracha-glazed-salmon.jpeg')
    },
    {
        "name": 'Creamy Tomato Basil Pasta',
        "imgAlias": require('../assets/recipe-images/creamy-tomato-basil-pasta.jpeg')
    },
    {
        "name": 'Lemon Herb Grilled Thyme Chicken',
        "imgAlias": require('../assets/recipe-images/lemon-herb-grilled-thyme-chicken.jpeg')
    },
    {
        "name": 'Stuffed Cabbage Rolls',
        "imgAlias": require('../assets/recipe-images/stuffed-cabbage-rolls.jpeg')
    },
    {
        "name": 'Honey Balsamic Glazed Pork Chops',
        "imgAlias": require('../assets/recipe-images/honey-balsamic-glazed-pork-chops.jpeg')
    },
    {
        "name": 'Creamy Spinach and Artichoke Pasta',
        "imgAlias": require('../assets/recipe-images/creamy-spinach-artichoke-pasta.jpeg')
    },
    {
        "name": 'Spicy Beef Tacos',
        "imgAlias": require('../assets/recipe-images/spicy-beef-tacos.jpeg')
    },
    {
        "name": 'Margherita Pizza',
        "imgAlias": require('../assets/recipe-images/margherita-pizza.jpeg')
    },
    {
        "name": 'Pepperoni Pizza',
        "imgAlias": require('../assets/recipe-images/pepperoni-pizza.jpeg')
    },
    {
        "name": 'Vegetarian Pizza',
        "imgAlias": require('../assets/recipe-images/vegetarian-pizza.jpeg')
    },
    {
        "name": 'BBQ Pulled Pork Sandwiches',
        "imgAlias": require('../assets/recipe-images/bbq-pulled-pork-sandwiches.jpeg')
    },
    {
        "name": 'Grilled BBQ Chicken',
        "imgAlias": require('../assets/recipe-images/grilled-bbq-chicken.jpeg')
    },
    {
        "name": 'BBQ Beef Brisket',
        "imgAlias": require('../assets/recipe-images/bbq-beef-brisket.jpeg')
    },
    {
        "name": 'BBQ Veggie Skewers',
        "imgAlias": require('../assets/recipe-images/bbq-veggie-skewers.jpeg')
    },
    {
        "name": 'BBQ Chicken Wings',
        "imgAlias": require('../assets/recipe-images/bbq-chicken-wings.jpeg')
    },
    {
        "name": 'Eggplant Parmesan',
        "imgAlias": require('../assets/recipe-images/eggplant-parmesan.jpeg')
    },
    {
        "name": 'Chicken Enchiladas',
        "imgAlias": require('../assets/recipe-images/chicken-enchiladas.jpeg')
    },
    {
        "name": 'Chicken Quesadillas',
        "imgAlias": require('../assets/recipe-images/chicken-quesadillas.jpeg')
    },
    {
        "name": 'Pad Thai',
        "imgAlias": require('../assets/recipe-images/pad-thai.jpeg')
    },
    {
        "name": 'Green Curry Chicken',
        "imgAlias": require('../assets/recipe-images/green-curry-chicken.jpeg')
    },
    {
        "name": 'Tom Yum Soup',
        "imgAlias": require('../assets/recipe-images/tom-yum-soup.jpeg')
    },
    {
        "name": 'Panang Curry',
        "imgAlias": require('../assets/recipe-images/panang-curry.jpeg')
    },
    {
        "name": 'Thai Basil Chicken (Pad Krapow Gai)',
        "imgAlias": require('../assets/recipe-images/thai-basil-chicken.jpeg')
    },
    {
        "name": 'Chicken Tikka Masala',
        "imgAlias": require('../assets/recipe-images/chicken-tikka-masala.jpeg')
    },
    {
        "name": 'Vegetable Biryani',
        "imgAlias": require('../assets/recipe-images/vegetable-biryani.jpeg')
    },
    {
        "name": 'Butter Chicken (Murgh Makhani)',
        "imgAlias": require('../assets/recipe-images/butter-chicken.jpeg')
    },
    {
        "name": 'Palak Paneer',
        "imgAlias": require('../assets/recipe-images/palak-paneer.jpeg')
    },
    {
        "name": 'Chana Masala',
        "imgAlias": require('../assets/recipe-images/chana-masala.jpeg')
    },
    {
        "name": 'Chicken Curry (Advanced)',
        "imgAlias": require('../assets/recipe-images/chicken-curry-advanced.jpeg')
    },
    {
        "name": 'Dal Makhani',
        "imgAlias": require('../assets/recipe-images/dal-makhani.jpeg')
    },
    {
        "name": 'Aloo Gobi',
        "imgAlias": require('../assets/recipe-images/aloo-gobi.jpeg')
    },
    {
        "name": 'Paneer Tikka',
        "imgAlias": require('../assets/recipe-images/paneer-tikka.jpeg')
    },
    {
        "name": 'Sushi Rolls (Maki Rolls)',
        "imgAlias": require('../assets/recipe-images/sushi-rolls-maki-rolls.jpeg')
    },
    {
        "name": 'Miso Soup',
        "imgAlias": require('../assets/recipe-images/miso-soup.jpeg')
    },
    {
        "name": 'Yakitori',
        "imgAlias": require('../assets/recipe-images/yakitori.jpeg')
    },
    {
        "name": 'Tempura',
        "imgAlias": require('../assets/recipe-images/tempura.jpeg')
    },
    {
        "name": 'Kung Pao Chicken',
        "imgAlias": require('../assets/recipe-images/kung-pao-chicken.jpeg')
    },
    {
        "name": 'Beef with Broccoli',
        "imgAlias": require('../assets/recipe-images/beef-with-broccoli.jpeg')
    },
    {
        "name": 'Sweet and Sour Pork',
        "imgAlias": require('../assets/recipe-images/sweet-and-sour-pork.jpeg')
    },
    {
        "name": 'Egg Fried Rice',
        "imgAlias": require('../assets/recipe-images/egg-fried-rice.jpeg')
    },
    {
        "name": 'Mapo Tofu',
        "imgAlias": require('../assets/recipe-images/mapo-tofu.jpeg')
    },
    {
        "name": 'Mediterranean Grilled Chicken',
        "imgAlias": require('../assets/recipe-images/mediterranean-grilled-chicken.jpeg')
    },
    {
        "name": 'Mediterranean Quinoa Salad',
        "imgAlias": require('../assets/recipe-images/mediterranean-quinoa-salad.jpeg')
    },
    {
        "name": 'Greek Moussaka',
        "imgAlias": require('../assets/recipe-images/greek-moussaka.jpeg')
    },
    {
        "name": 'Lemon Herb Grilled Fish',
        "imgAlias": require('../assets/recipe-images/lemon-herb-grilled-fish.jpeg')
    },
    {
        "name": 'Mediterranean Chickpea Salad',
        "imgAlias": require('../assets/recipe-images/mediterranean-chickpea-salad.jpeg')
    },
    {
        "name": 'Classic Greek Gyros',
        "imgAlias": require('../assets/recipe-images/classic-greek-gyros.jpeg')
    },
    {
        "name": 'Chicken Gyros',
        "imgAlias": require('../assets/recipe-images/chicken-gyros.jpeg')
    },
    {
        "name": 'Vegetarian Falafel Gyros',
        "imgAlias": require('../assets/recipe-images/vegetarian-falafel-gyros.jpeg')
    },
    {
        "name": 'Lamb and Beef Gyros',
        "imgAlias": require('../assets/recipe-images/lamb-and-beef-gyros.jpeg')
    },
    {
        "name": 'Vegetable Gyros with Hummus',
        "imgAlias": require('../assets/recipe-images/vegetable-gyros-with-hummus.jpeg')
    },
    {
        "name": 'Classic Beef Burger',
        "imgAlias": require('../assets/recipe-images/classic-beef-burger.jpeg')
    },
    {
        "name": 'Southern Fried Chicken',
        "imgAlias": require('../assets/recipe-images/southern-fried-chicken.jpeg')
    },
    {
        "name": 'Macaroni and Cheese',
        "imgAlias": require('../assets/recipe-images/macaroni-and-cheese.jpeg')
    },
    {
        "name": 'New York-Style Pepperoni Pizza',
        "imgAlias": require('../assets/recipe-images/new-york-style-pepperoni-pizza.jpeg')
    },
    {
        "name": 'Barbecue Ribs',
        "imgAlias": require('../assets/recipe-images/barbeque-ribs.jpeg')
    },
    {
        "name": 'Classic Cheeseburger',
        "imgAlias": require('../assets/recipe-images/classic-cheese-burger.jpeg')
    },
    {
        "name": 'Feijoada',
        "imgAlias": require('../assets/recipe-images/feijoada.jpeg')
    },
    {
        "name": 'Moqueca',
        "imgAlias": require('../assets/recipe-images/moqueca.jpeg')
    },
    {
        "name": 'Picanha',
        "imgAlias": require('../assets/recipe-images/picanha.jpeg')
    },
    {
        "name": 'Coxinha',
        "imgAlias": require('../assets/recipe-images/coxinha.jpeg')
    },
    {
        "name": 'Brazilian Cheese Bread',
        "imgAlias": require('../assets/recipe-images/brazilian-cheese-bread.jpeg')
    },
    {
        "name": 'Brazilian Beef Skewers',
        "imgAlias": require('../assets/recipe-images/brazilian-beef-skewers.jpeg')
    },
    {
        "name": 'Acarajé',
        "imgAlias": require('../assets/recipe-images/acaraje.jpeg')
    },
    {
        "name": 'Brazilian Chicken Stroganoff',
        "imgAlias": require('../assets/recipe-images/brazilian-chicken-stroganoff.jpeg')
    },
    {
        "name": 'Xinxim de Galinha',
        "imgAlias": require('../assets/recipe-images/xinxim-de-galinha.jpeg')
    },
    {
        "name": 'Brazilian Fish Stew',
        "imgAlias": require('../assets/recipe-images/brazilian-fish-stew.jpeg')
    },
    {
        "name": 'Coq au Vin',
        "imgAlias": require('../assets/recipe-images/coq-au-vin.jpeg')
    },
    {
        "name": 'Beef Bourguignon',
        "imgAlias": require('../assets/recipe-images/beef-bourguignon.jpeg')
    },
    {
        "name": 'Quiche Lorraine',
        "imgAlias": require('../assets/recipe-images/quiche-lorraine.jpeg')
    },
    {
        "name": 'Bouillabaisse',
        "imgAlias": require('../assets/recipe-images/bouillabaisse.jpeg')
    },
    {
        "name": 'Quiche Florentine',
        "imgAlias": require('../assets/recipe-images/quiche-florentine.jpeg')
    },
    {
        "name": 'French Onion Soup',
        "imgAlias": require('../assets/recipe-images/french-onion-soup.jpeg')
    },
    {
        "name": 'Salade Niçoise',
        "imgAlias": require('../assets/recipe-images/salade-nicoise.jpeg')
    },
    {
        "name": 'Potato Leek Soup',
        "imgAlias": require('../assets/recipe-images/potato-leek-soup.jpeg')
    },
    {
        "name": 'Falafel with Tahini Sauce',
        "imgAlias": require('../assets/recipe-images/falafel-with-tahini-sauce.jpeg')
    },
    {
        "name": 'Shawarma with Garlic Sauce',
        "imgAlias": require('../assets/recipe-images/shawarma-with-garlic-sauce.jpeg')
    },
    {
        "name": 'Tabbouleh Salad',
        "imgAlias": require('../assets/recipe-images/tabbouleh-salad.jpeg')
    },
    {
        "name": 'Kibbeh',
        "imgAlias": require('../assets/recipe-images/kibbeh.jpeg')
    },
    {
        "name": 'Lebanese Stuffed Grape Leaves',
        "imgAlias": require('../assets/recipe-images/lebanese-stuffed-grape-leaves.jpeg')
    },
    {
        "name": 'Moussaka',
        "imgAlias": require('../assets/recipe-images/moussaka.jpeg')
    },
    {
        "name": 'Lebanese Lentil Soup',
        "imgAlias": require('../assets/recipe-images/lebanese-lentil-soup.jpeg')
    },
    {
        "name": 'Lebanese Chicken Shawarma',
        "imgAlias": require('../assets/recipe-images/lebanese-chicken-shawarma.jpeg')
    },
    {
        "name": 'Lebanese Fattoush Salad',
        "imgAlias": require('../assets/recipe-images/lebanese-fattoush-salad.jpeg')
    },
    {
        "name": 'Lebanese Kafta Kebabs',
        "imgAlias": require('../assets/recipe-images/lebanese-kafta-kebabs.jpeg')
    },
    {
        "name": 'Mansaf',
        "imgAlias": require('../assets/recipe-images/mansaf.jpeg')
    },
    {
        "name": 'Maqluba',
        "imgAlias": require('../assets/recipe-images/maqluba.jpeg')
    },
    {
        "name": 'Jordanian Lentil Soup',
        "imgAlias": require('../assets/recipe-images/jordanian-lentil-soup.jpeg')
    },
    {
        "name": 'Jordanian Chicken Musakhan',
        "imgAlias": require('../assets/recipe-images/jordanian-chicken-musakhan.jpeg')
    },
    {
        "name": 'Jordanian Shish Kebabs',
        "imgAlias": require('../assets/recipe-images/jordanian-shish-kebabs.jpeg')
    },
    {
        "name": 'Iskender Kebab',
        "imgAlias": require('../assets/recipe-images/iskender-kebab.jpeg')
    },
    {
        "name": 'Turkish Manti',
        "imgAlias": require('../assets/recipe-images/turkish-manti.jpeg')
    },
    {
        "name": 'Turkish Borek',
        "imgAlias": require('../assets/recipe-images/turkish-borek.jpeg')
    },
    {
        "name": 'Turkish Kofte',
        "imgAlias": require('../assets/recipe-images/turkish-kofte.jpeg')
    },
    {
        "name": 'Turkish Imam Bayildi',
        "imgAlias": require('../assets/recipe-images/turkish-imam-bayildi.jpeg')
    },
    {
        "name": 'Pho Bo (Beef Pho)',
        "imgAlias": require('../assets/recipe-images/pho-bo-beef-pho.jpeg')
    },
    {
        "name": 'Bun Cha',
        "imgAlias": require('../assets/recipe-images/bun-cha.jpeg')
    },
    {
        "name": 'Goi Cuon (Vietnamese Spring Rolls)',
        "imgAlias": require('../assets/recipe-images/goi-cuon.jpeg')
    },
    {
        "name": 'Com Ga Xoi Mo',
        "imgAlias": require('../assets/recipe-images/com-ga-xoi-mo.jpeg')
    },
    {
        "name": 'Banh Xeo (Vietnamese Pancakes)',
        "imgAlias": require('../assets/recipe-images/banh-xeo.jpeg')
    },
    {
        "name": 'Sauerbraten',
        "imgAlias": require('../assets/recipe-images/sauerbraten.jpeg')
    },
    {
        "name": 'Bratwurst with Sauerkraut',
        "imgAlias": require('../assets/recipe-images/bratwurst-with-sauerkraut.jpeg')
    },
    {
        "name": 'Wiener Schnitzel',
        "imgAlias": require('../assets/recipe-images/wiener-schnitzel.jpeg')
    },
    {
        "name": 'Kartoffelsalat',
        "imgAlias": require('../assets/recipe-images/kartoffelsalat.jpeg')
    },
    {
        "name": 'Königsberger Klopse',
        "imgAlias": require('../assets/recipe-images/konigsberger-klopse.jpeg')
    },
    {
        "name": 'Kartoffelsuppe',
        "imgAlias": require('../assets/recipe-images/kartoffelsuppe.jpeg')
    },
    {
        "name": 'Rouladen',
        "imgAlias": require('../assets/recipe-images/rouladen.jpeg')
    },
    {
        "name": 'Kartoffelpuffer',
        "imgAlias": require('../assets/recipe-images/kartoffelpuffer.jpeg')
    },
    {
        "name": 'Hühnerfrikassee',
        "imgAlias": require('../assets/recipe-images/huehnerfrikassee.jpeg')
    },
    {
        "name": 'Chicken Biryani',
        "imgAlias": require('../assets/recipe-images/chicken-biryani.jpeg')
    },
    {
        "name": 'Seekh Kebabs',
        "imgAlias": require('../assets/recipe-images/seekh-kebabs.jpeg')
    },
    {
        "name": 'Nihari',
        "imgAlias": require('../assets/recipe-images/nihari.jpeg')
    },
    {
        "name": 'Aloo Keema',
        "imgAlias": require('../assets/recipe-images/aloo-keema.jpeg')
    },
    {
        "name": 'Chapli Kebabs',
        "imgAlias": require('../assets/recipe-images/chapli-kebabs.jpeg')
    },
    {
        "name": 'Haleem',
        "imgAlias": require('../assets/recipe-images/haleem.jpeg')
    },
    {
        "name": 'Nargisi Kofta',
        "imgAlias": require('../assets/recipe-images/nargisi-kofta.jpeg')
    },
    {
        "name": 'Karahi Gosht',
        "imgAlias": require('../assets/recipe-images/karahi-gosht.jpeg')
    },
    {
        "name": 'Daal Chawal',
        "imgAlias": require('../assets/recipe-images/daal-chawal.jpeg')
    },
    {
        "name": 'Collard Greens',
        "imgAlias": require('../assets/recipe-images/collard-greens.jpeg')
    },
    {
        "name": 'Red Beans and Rice',
        "imgAlias": require('../assets/recipe-images/red-beans-and-rice.jpeg')
    },
    {
        "name": 'Cajun Jambalaya',
        "imgAlias": require('../assets/recipe-images/cajun-jambalaya.jpeg')
    },
    {
        "name": 'Crawfish Étouffée',
        "imgAlias": require('../assets/recipe-images/crawfish-etouffee.jpeg')
    },
    {
        "name": 'Cajun Blackened Catfish',
        "imgAlias": require('../assets/recipe-images/cajun-blackened-catfish.jpeg')
    },
    {
        "name": 'Cajun Shrimp and Grits',
        "imgAlias": require('../assets/recipe-images/cajun-shrimp-and-grits.jpeg')
    },
    {
        "name": 'Cajun Red Beans and Rice',
        "imgAlias": require('../assets/recipe-images/cajun-red-beans-and-rice.jpeg')
    },
    {
        "name": 'Cajun Chicken Pasta',
        "imgAlias": require('../assets/recipe-images/cajun-chicken-pasta.jpeg')
    },
    {
        "name": 'Beef Stroganoff',
        "imgAlias": require('../assets/recipe-images/beef-stroganoff.jpeg')
    },
    {
        "name": 'Borscht',
        "imgAlias": require('../assets/recipe-images/borscht.jpeg')
    },
    {
        "name": 'Pelmeni',
        "imgAlias": require('../assets/recipe-images/pelmeni.jpeg')
    },
    {
        "name": 'Chicken Kiev',
        "imgAlias": require('../assets/recipe-images/chicken-kiev.jpeg')
    },
    {
        "name": 'Olivier Salad',
        "imgAlias": require('../assets/recipe-images/olivier-salad.jpeg')
    },
    {
        "name": 'Piroshki',
        "imgAlias": require('../assets/recipe-images/piroshki.jpeg')
    },
    {
        "name": 'Solyanka Soup',
        "imgAlias": require('../assets/recipe-images/solyanka-soup.jpeg')
    },
    {
        "name": 'Shashlik (Russian Kebabs)',
        "imgAlias": require('../assets/recipe-images/shashlik.jpeg')
    },
    {
        "name": 'Oven-Baked Plov',
        "imgAlias": require('../assets/recipe-images/oven-baked-plov.jpeg')
    },
    {
        "name": 'Chicago-Style Pizza',
        "imgAlias": require('../assets/recipe-images/chicago-style-pizza.jpeg')
    },
    {
        "name": 'BBQ Pizza',
        "imgAlias": require('../assets/recipe-images/bbq-pizza.jpeg')
    },
    {
        "name": 'Honey Glazed Chicken',
        "imgAlias": require('../assets/recipe-images/honey-glazed-chicken.jpeg')
    }
]

export default recipeImages
