// Data for Food Items (including a short description property)
const foodItems = [
  /*
   * SPICY
   */
  {
    name: "Vada Pav",
    type: "spicy",
    image:
      "https://www.cookwithmanali.com/wp-content/uploads/2018/04/Vada-Pav-500x500.jpg",
    recipe: `Origin: Vada Pav was created in Mumbai, Maharashtra, as an affordable, on-the-go snack for mill workers in the 1960s and 70s. It quickly gained popularity across India.
Taste: A harmonious blend of spicy potato filling, soft bread, and tangy chutneys, often finished with fried green chilies for extra heat.
Serving Style: Commonly served in street stalls wrapped in paper or a small plate, accompanied by a fiery dry garlic chutney and fried green chilies.
Ingredients: Boiled potatoes, ginger-garlic paste, green chilies, turmeric, mustard seeds, curry leaves, besan (gram flour) batter, pav (soft bread buns), and assorted chutneys (tamarind, green, and dry garlic).
Detailed Steps:
1. Prepare the potato filling by tempering mustard seeds, curry leaves, and spices, then mash in boiled potatoes.
2. Shape the spiced potato mixture into small balls and dip each in a gram flour batter.
3. Deep-fry until golden brown to form the “vada.”
4. Lightly toast the pav with butter on a hot griddle.
5. Spread chutneys inside the pav, place the hot vada in between, and serve hot with fried chilies.`,
  },
  {
    name: "Pani Puri",
    type: "spicy",
    image:
      "https://cdn1.foodviva.com/static-content/food-images/snacks-recipes/pani-puri/pani-puri.jpg",
    recipe: `Origin: Often attributed to North India, Pani Puri is known by various names like Golgappa and Puchka and has been a street-food favorite for generations.
Taste: A burst of tanginess from tamarind water, spiciness from chilies, and sweetness from optional sweet chutney, all within a crisp puri.
Serving Style: Sold at roadside stalls where each puri is filled and served one by one for freshness.
Ingredients: Small wheat/semolina puris, spiced potato or chickpea filling, mint-coriander water, tamarind-jaggery water, and optional sweet chutney.
Detailed Steps:
1. Fry or buy ready-made small puris until they are crispy and hollow.
2. Prepare two flavored waters: one spicy (mint, coriander, chilies) and one sweet-tangy (tamarind, jaggery).
3. Mash boiled potatoes or chickpeas with salt, chili powder, and chaat masala for the filling.
4. Crack a small hole in each puri, add some filling, and pour in the flavored water just before eating.
5. Enjoy immediately for the perfect crunchy, spicy, and tangy bite.`,
  },
  {
    name: "Dosa",
    type: "spicy",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKNAL1ZQgQXd3fIiU522D3GAgCRVT7Of_tIA&s",
    recipe: `Origin: Dosa traces back centuries in South India, with strong roots in Tamil Nadu and Karnataka, forming a staple breakfast or dinner item.
Taste: Slightly tangy due to fermentation, crispy on the outside, soft inside, and typically paired with spicy sambar and coconut chutney.
Serving Style: Folded or rolled, often served alongside sambar (lentil-based stew) and a variety of chutneys.
Ingredients: Raw rice, urad dal (split black gram), fenugreek seeds (optional), salt, oil or ghee for cooking.
Detailed Steps:
1. Rinse and soak rice, urad dal, and fenugreek seeds separately for at least 4–6 hours.
2. Grind them into a smooth batter, then mix together with salt and let ferment overnight in a warm place.
3. Heat a flat griddle (tawa), lightly grease with oil, and pour a ladleful of batter in the center, spreading it in a circular motion to form a thin crepe.
4. Drizzle oil or ghee around the edges and cook until golden and crisp.
5. Serve hot, folded with potato masala inside (for Masala Dosa) or plain with chutney and sambar.`,
  },
  {
    name: "Kachori",
    type: "spicy",
    image:
      "https://static.toiimg.com/thumb/53314574.cms?imgsize=236127&width=800&height=800",
    recipe: `Origin: Kachori is deeply rooted in North Indian cuisines, especially Rajasthan and Uttar Pradesh, evolving as a popular breakfast and snack item.
Taste: Savory, spicy filling wrapped in a crispy flour shell. Fillings can vary from moong dal to onion (pyaaz kachori) or even peas.
Serving Style: Often eaten hot from sweet shops or street vendors, served with chutneys or yogurt.
Ingredients: All-purpose flour (maida), ghee or oil, salt, spiced moong dal or onion mixture (cumin, coriander, chili, hing).
Detailed Steps:
1. Prepare the dough by mixing flour, salt, and a small amount of ghee or oil for flakiness, then rest it.
2. Create the filling by sautéing moong dal or onions with spices (cumin, chili powder, coriander, asafoetida).
3. Divide the dough into balls, flatten each, and place spoonfuls of filling in the center.
4. Seal the edges, shape into a round disc, and deep-fry on medium heat until golden brown.
5. Serve with sweet tamarind chutney, mint chutney, or spicy potato curry.`,
  },
  {
    name: "Aloo Tikki",
    type: "spicy",
    image:
      "https://maharajaroyaldining.com/wp-content/uploads/2024/03/Aloo-Tikki-4-600x600.webp",
    recipe: `Origin: A common North Indian street food and a popular chaat item, often garnished with various toppings.
Taste: Crisp on the outside, warm and fluffy inside, seasoned with spice blends such as chaat masala and chili.
Serving Style: Typically served with tamarind and coriander chutneys, yogurt, chopped onions, and sometimes chickpea gravy (ragda).
Ingredients: Boiled potatoes, bread crumbs or cornstarch for binding, spices (cumin, chili, garam masala), onions, and ginger.
Detailed Steps:
1. Mash boiled potatoes thoroughly; mix in finely chopped onions, ginger, and spices.
2. Add bread crumbs or cornstarch for binding, if needed.
3. Form into palm-sized patties and shallow-fry in oil or ghee on a hot griddle.
4. Flip once golden brown, cooking until both sides are crisp.
5. Serve hot, drizzled with chutneys, yogurt, and a sprinkle of chaat masala.`,
  },
  {
    name: "Locho",
    type: "spicy",
    image:
      "https://www.nehascookbook.com/wp-content/uploads/2022/09/Surti-locho-WS-500x500.jpg",
    recipe: `Origin: Hailing from Surat in Gujarat, Locho is said to have been discovered accidentally when a khaman (dhokla-like) batter was undercooked or unevenly cooked, resulting in a looser consistency—thus ‘Locho’ (meaning “a mistake”).
Taste: Mildly tangy, soft, and lightly spiced, often topped with crunchy sev or onions.
Serving Style: Served hot and mashed or scrambled slightly, garnished with onions, coriander, sev, and a drizzle of oil or butter.
Ingredients: Gram flour (besan) or mixed lentil flour, semolina (optional), yogurt or sour curd, ginger-chili paste, turmeric, salt, and baking soda.
Detailed Steps:
1. Whisk gram flour with water, yogurt, ginger-chili paste, spices, and let it rest for fermentation.
2. Add a pinch of baking soda or fruit salt just before steaming.
3. Pour batter into a greased tray or steamer and cook until set (but still soft and slightly moist).
4. Once steamed, lightly mash or break it up; drizzle with oil or butter.
5. Top with chopped onions, fresh coriander, sev, and green chutney if desired.`,
  },
  {
    name: "Chhole Kulche",
    type: "spicy",
    image:
      "https://content.jdmagicbox.com/comp/def_content/chole-kulche-outlets/d4a7add2c1-chole-kulche-outlets-3-rcmgh-250.jpg",
    recipe: `Origin: A staple of North Indian street cuisine, especially popular in Delhi and Punjab, often eaten for lunch or a hearty snack.
Taste: Chhole is robust, spicy, and tangy, while kulcha is soft and slightly chewy, creating a satisfying contrast.
Serving Style: Often served on roadside carts with onions, green chilies, and a wedge of lime to accent the flavors.
Ingredients: Chickpeas (kabuli chana), onion-tomato masala, spices (cumin, coriander, chili, garam masala), kulcha bread made with refined flour and yeast or baking agents.
Detailed Steps:
1. Soak chickpeas overnight, then pressure-cook until soft.
2. Prepare the masala by sautéing onions, ginger, garlic, and tomatoes with spices.
3. Add cooked chickpeas to the masala, adjust seasoning, and simmer until the gravy thickens.
4. Heat or lightly toast kulchas on a tawa with butter.
5. Serve chhole in a bowl, garnished with chopped onions, chilies, and lemon juice, alongside hot kulchas.`,
  },
  {
    name: "Misal Pav",
    type: "spicy",
    image:
      "https://img-global.cpcdn.com/recipes/86b05c89e5362d7a/400x400cq70/photo.jpg",
    recipe: `Origin: A signature dish from Maharashtra, particularly the Kolhapur and Pune regions, known for its spicy kick.
Taste: A robust blend of spiced legumes topped with crunchy farsan, onions, and a squeeze of lime, served with pav bread.
Serving Style: Layers of usal (spiced sprouts), rassa (spicy gravy), farsan (fried snack mix), onions, and coriander, with pav on the side.
Ingredients: Mixed sprouts (matki, moong), onions, tomatoes, goda masala or kolhapuri masala, chili powder, and fresh coriander for garnish.
Detailed Steps:
1. Soak and sprout beans/matki; boil them until just tender.
2. Prepare the usal by sautéing onions, tomatoes, ginger-garlic, and adding spices, then mixing in the sprouts.
3. For an extra spicy rassa, blend some coconut or onions into a paste with red chilies, cook well, and dilute with water.
4. Assemble in a bowl: first usal, then ladle hot rassa, top with farsan, onions, and coriander.
5. Serve with lightly toasted pav and a wedge of lime to cut through the heat.`,
  },

  /*
   * FLAVOURFUL
   */
  {
    name: "Dahi Vada",
    type: "flavourful",
    image:
      "https://www.nehascookbook.com/wp-content/uploads/2022/09/Instant-dahi-vada-WS-1.jpg",
    recipe: `Origin: A popular snack or appetizer in North India, also known as Dahi Bhalla in some regions, especially during festivals.
Taste: Mildly tangy yogurt balances the savory vadas, while sweet-and-spicy chutneys add layers of flavor.
Serving Style: Often garnished with tamarind chutney, mint chutney, roasted cumin powder, chili powder, and fresh coriander.
Ingredients: Urad dal (skinned black gram), yogurt, tamarind chutney, green chutney, spices like cumin and chili.
Detailed Steps:
1. Soak urad dal for 4-5 hours, grind to a thick batter, and add salt.
2. Deep-fry small scoops of the batter to form vadas, ensuring they puff up and turn golden.
3. Immediately soak the fried vadas in water to soften, then gently squeeze out excess water.
4. Place them in whisked yogurt seasoned with salt, sugar, and roasted cumin powder.
5. Drizzle tamarind and green chutneys, sprinkle with chili powder, cumin, and garnish with fresh coriander.`,
  },
  {
    name: "Tawa Pulao",
    type: "flavourful",
    image: "https://www.recipesworld.co.uk/images/167288683304393684.webp",
    recipe: `Origin: Inspired by the flavors of Pav Bhaji, Tawa Pulao is commonly prepared on the same large, flat griddle (tawa) on street stalls in Mumbai.
Taste: A spicy, tangy, and slightly buttery flavor, with the sweet notes of sautéed vegetables.
Serving Style: Eaten hot off the tawa, often with raita or a simple salad as a side.
Ingredients: Cooked rice, mixed vegetables (bell peppers, peas, carrots), onions, tomatoes, pav bhaji masala, butter.
Detailed Steps:
1. Heat butter on a large tawa or pan, sauté onions, tomatoes, and assorted vegetables with pav bhaji masala and chili powder.
2. Stir in pre-cooked rice, mixing thoroughly to coat every grain in the spiced vegetable mixture.
3. Adjust salt and spices, adding a splash of water if needed to keep it moist.
4. Cook on medium heat, tossing frequently to avoid sticking.
5. Serve hot, garnished with chopped coriander and a squeeze of lemon.`,
  },
  {
    name: "Corn",
    type: "flavourful",
    image:
      "https://static.toiimg.com/thumb/66085139.cms?imgsize=73538&width=800&height=800",
    recipe: `Origin: Corn is cultivated worldwide; in India, bhutta (roasted corn on the cob) is common on beaches and street corners.
Taste: Naturally sweet kernels, complemented by salt, chili powder, and tangy lime or lemon juice.
Serving Style: Served as roasted cobs rubbed with spices, or kernels in a cup with butter, spices, and cheese.
Ingredients: Fresh corn cobs or kernels, butter, salt, chili powder, lemon juice.
Detailed Steps:
1. For roasted corn, grill or roast whole cobs over charcoal or on a gas flame, turning frequently.
2. Rub the hot corn with butter or ghee, season with salt and chili powder, then finish with lemon juice.
3. Alternatively, steam or boil corn kernels, drain, and mix with butter, salt, pepper, or chaat masala.
4. Serve hot in a bowl or as cobs on a stick.`,
  },
  {
    name: "Papadi Chaat",
    type: "flavourful",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjf7PgDiIqYQxaQF_hnoF_UQJiOOAGvlrpmQ&s",
    recipe: `Origin: A signature street food from North India, especially Delhi, forming a core part of chaat culture.
Taste: A flavorful balance of tangy, spicy, sweet, and creamy elements in every bite.
Serving Style: Usually assembled fresh on small plates, to keep the papadis crisp.
Ingredients: Papadis (fried flour discs), boiled potatoes, chickpeas, yogurt, tamarind chutney, mint chutney, sev, chaat masala.
Detailed Steps:
1. Arrange the papadis on a plate, top with diced boiled potatoes and chickpeas.
2. Drizzle whisked yogurt, tamarind-date chutney, and mint-coriander chutney.
3. Sprinkle chaat masala, chili powder, and black salt for depth of flavor.
4. Finish with a generous handful of sev and chopped coriander.
5. Serve immediately, ensuring the papadis retain their crispness.`,
  },
  {
    name: "Kathi Roll",
    type: "flavourful",
    image:
      "https://poonjiaji.com/cdn/shop/articles/Paneer-kathi-Roll-Featured-1.jpg?v=1694595382",
    recipe: `Origin: Originating from Kolkata, Kathi Rolls traditionally featured skewered kebabs rolled in a paratha, now widely adapted with various fillings.
Taste: A medley of marinated filling, crunchy onions, chili sauces, and tangy chutneys.
Serving Style: Rolled in paper or foil for a handy street-food experience.
Ingredients: Paratha (layered or laccha style), marinated paneer or chicken or veggies, sliced onions, mint chutney, chili sauce, egg wash (optional).
Detailed Steps:
1. Prepare a paratha dough or use store-bought parathas; cook lightly on a tawa.
2. Marinate paneer or chicken with yogurt, chili, ginger-garlic paste, and spices; sauté or grill until done.
3. If desired, spread a thin layer of beaten egg on the paratha while cooking for added richness.
4. Layer the cooked filling on the paratha, add onion slices, mint chutney, chili sauce, and roll tightly.
5. Serve hot, wrapped in paper to keep everything together.`,
  },
  {
    name: "Indori Poha",
    type: "flavourful",
    image:
      "https://pohaandkhichdi.com/wp-content/uploads/2024/04/Indori-Poha-2-3.jpg",
    recipe: `Origin: A signature breakfast dish from Indore, Madhya Pradesh; served widely by local hawkers and shops.
Taste: Lightly sweet and tangy flattened rice, garnished with sev, pomegranate seeds, and often accompanied by jalebi.
Serving Style: Traditionally served on plates with an optional side of jalebi, topping with plenty of sev and coriander.
Ingredients: Poha (flattened rice), onions, green chilies, mustard seeds, turmeric, peanuts, sugar, lemon juice, sev.
Detailed Steps:
1. Rinse poha gently in water, drain, and let it sit to soften.
2. In a pan, heat oil; add mustard seeds, curry leaves, chopped onions, peanuts, green chilies, and turmeric.
3. Stir in the softened poha, sprinkle salt and a pinch of sugar, and stir-fry briefly.
4. Finish with lemon juice, garnish with sev, fresh coriander, and optionally some pomegranate seeds.
5. Serve hot with a side of crispy jalebis if desired.`,
  },
  {
    name: "Medu Vada",
    type: "flavourful",
    image:
      "https://www.nehascookbook.com/wp-content/uploads/2022/09/Medu-vada-with-sambar-WS-1.jpg",
    recipe: `Origin: Commonly prepared in South Indian states like Tamil Nadu, Karnataka, and Andhra Pradesh, often eaten for breakfast or as a snack.
Taste: Crispy outer crust and a soft, fluffy interior, with a mild savory flavor.
Serving Style: Served hot with sambar and coconut chutney or sometimes simply with chutney.
Ingredients: Urad dal (black gram), ginger, green chilies, curry leaves, cumin seeds, salt, and oil for frying.
Detailed Steps:
1. Rinse and soak urad dal for at least 4 hours, then grind to a thick, smooth batter with minimal water.
2. Mix in chopped ginger, green chilies, curry leaves, cumin seeds, and salt.
3. Wet your hand, take a portion of the batter, shape like a doughnut with a hole in the center.
4. Slide into hot oil carefully and fry until golden brown and crispy.
5. Serve immediately with warm sambar and coconut chutney.`,
  },
  {
    name: "Ponk Vada",
    type: "flavourful",
    image:
      "https://c.ndtvimg.com/2021-11/0hco6dgg_-moong-chilka-vada_625x300_16_November_21.jpg?im=FaceCrop,algorithm=dnn,width=384,height=384",
    recipe: `Origin: A winter specialty from Surat in Gujarat, where fresh ponk (young, green sorghum) is harvested and relished.
Taste: Earthy sweetness from the tender grains, along with a subtle spiciness from green chili and ginger.
Serving Style: Served hot with green chutney, sweet chutney, or often plain as a snack with tea.
Ingredients: Ponk (tender sorghum), gram flour (besan), rice flour, crushed green chilies, ginger, salt, and oil for deep-frying.
Detailed Steps:
1. Thoroughly clean ponk grains to remove any husk.
2. In a bowl, mix ponk with gram flour, rice flour, finely chopped chilies, ginger, and salt.
3. Add a little water if needed to form a thick batter.
4. Drop spoonfuls of the batter into hot oil and fry until golden brown.
5. Drain on paper towels and serve piping hot.`,
  },

  /*
   * SWEET
   */
  {
    name: "Rasgulla",
    type: "sweet",
    image:
      "https://cdn.ready-market.com.tw/21cd62de/Templates/pic/ANKO-Rasgulla-1200X1200.jpg?v=1a046a18",
    recipe: `Origin: A Bengali classic, credited to the sweet shops of Kolkata and Odisha; has a GI tag linking it strongly to Bengal.
Taste: Delicate, subtly sweet flavor; the spongy texture absorbs the syrup fully.
Serving Style: Best enjoyed chilled or at room temperature, often served in small bowls with syrup.
Ingredients: Milk (to make chenna/paneer), lemon juice or vinegar, sugar, water, and optional cardamom pods for fragrance.
Detailed Steps:
1. Bring milk to a boil, curdle with lemon juice or vinegar to obtain fresh chenna.
2. Drain and rinse the chenna, then knead thoroughly until smooth and pliable.
3. Shape into small balls ensuring there are no cracks.
4. Prepare a thin sugar syrup by boiling water and sugar together, optionally adding cardamom pods.
5. Gently drop chenna balls into the boiling syrup and cook covered for about 15-20 minutes, allowing them to expand and become spongy.`,
  },
  {
    name: "Gulab Jamun",
    type: "sweet",
    image:
      "https://gayathriscookspot.com/wp-content/uploads/2023/07/Mawa-Gulab-Jamun-4-500x500.jpg",
    recipe: `Origin: A traditional South Asian sweet, popular at festivals and celebrations throughout India.
Taste: Rich, milky flavor with a spongy texture that absorbs a rose-scented or cardamom-infused sugar syrup.
Serving Style: Often served warm, garnished with chopped pistachios or almonds.
Ingredients: Khoya (reduced milk solids) or milk powder, maida (flour), sugar, water, cardamom, ghee or oil for frying.
Detailed Steps:
1. Knead khoya or milk powder with a little flour, baking soda, and a touch of milk to form a soft dough.
2. Shape into small, smooth balls without cracks.
3. Deep-fry on low to medium heat until golden brown, ensuring they cook evenly inside.
4. Meanwhile, prepare a sugar syrup with water, sugar, and cardamom or rose water.
5. Soak the fried dumplings in warm syrup for at least 30 minutes before serving.`,
  },
  {
    name: "Maal pua",
    type: "sweet",
    image:
      "https://www.cookwithkushi.com/wp-content/uploads/2016/09/best_malpua_Indian_sweet_recipe.jpg",
    recipe: `Origin: Commonly found in North and East India, especially during festivals like Holi.
Taste: Crisp-edged pancakes with a fluffy, sweet interior, enhanced by the sugary syrup.
Serving Style: Traditionally served warm, topped with thick rabri, nuts, or simply soaked in syrup.
Ingredients: Flour (maida), milk, sugar, fennel seeds, cardamom, ghee for frying, sugar syrup for dipping.
Detailed Steps:
1. Prepare a semi-thick batter by mixing flour, milk, a little sugar, crushed fennel seeds, and cardamom.
2. Let the batter rest for a short while.
3. Heat ghee in a shallow pan and pour a ladleful of batter to form small pancakes.
4. Fry until edges turn golden brown, flipping once.
5. Dunk hot maal puas into warm sugar syrup, soak briefly, and serve with rabri or chopped nuts.`,
  },
  {
    name: "Kulfi",
    type: "sweet",
    image:
      "https://thebigmansworld.com/wp-content/uploads/2022/07/kulfi-ice-cream-recipe-500x500.jpg",
    recipe: `Origin: Dates back to the Mughal era in the Indian subcontinent, considered a rich predecessor to modern ice cream.
Taste: Dense and creamy, often flavored with saffron, cardamom, pistachios, or mango.
Serving Style: Frozen in cone-shaped molds or earthen pots, sometimes served on sticks.
Ingredients: Full-fat milk, sugar, saffron strands, cardamom powder, crushed nuts, optional condensed milk.
Detailed Steps:
1. Boil milk in a heavy-bottomed pan, stirring frequently to prevent scorching.
2. Reduce milk to nearly half its original volume, then add sugar, saffron, and cardamom powder.
3. Stir in chopped nuts or any flavor essence.
4. Let the mixture cool slightly, then pour into kulfi molds or small cups.
5. Freeze for at least 6-8 hours; demold by running under water briefly and serve.`,
  },
  {
    name: "Ghewar",
    type: "sweet",
    image: "https://jodhpursweets.com/wp-content/uploads/2022/08/Ghewar-1.jpg",
    recipe: `Origin: A festive sweet in Rajasthan, widely made during Teej and Raksha Bandhan.
Taste: Crunchy and delicate, with a porous structure that holds sweet syrup. Often topped with rabri or mawa.
Serving Style: Can be eaten plain with syrup or garnished with sweet rabri, slivered nuts, and edible silver foil (vark).
Ingredients: Refined flour (maida), ghee, cold water, milk, sugar syrup, and optionally saffron or cardamom.
Detailed Steps:
1. Prepare a thin batter of flour, milk, and chilled water, whisking to remove lumps.
2. Heat ghee in a deep, wide vessel; pour small ladles of batter in a thin stream into hot ghee.
3. Let it form a lacy disc, pushing batter to the sides if needed. Fry until golden.
4. Dip or drizzle the ghewar with warm sugar syrup, flavored with cardamom or saffron.
5. Garnish with rabri, chopped nuts, and serve once syrup is absorbed.`,
  },
  {
    name: "Rabdi",
    type: "sweet",
    image:
      "https://newdelhisweets.com/wp-content/uploads/2023/07/RABDI-RASMALAI.jpg",
    recipe: `Origin: Widely enjoyed in North India, especially in places like Mathura and Varanasi, often paired with jalebis or malpua.
Taste: Intensely creamy and sweet, infused with the flavor of cardamom and thick milk solids.
Serving Style: Served in clay pots or bowls, sometimes chilled, topped with chopped nuts.
Ingredients: Full-fat milk, sugar, cardamom powder, saffron (optional), sliced almonds or pistachios.
Detailed Steps:
1. Pour milk into a wide, heavy-bottomed pan and bring it to a boil.
2. Reduce heat and simmer, stirring and scraping the sides to gather the cream (malai).
3. Let layers of cream form, incorporate them gently back into the milk to create a thick texture.
4. Add sugar and cardamom powder; continue simmering until it reaches a desired consistency.
5. Garnish with saffron strands and nuts, serve warm or chilled.`,
  },
  {
    name: "Gola",
    type: "sweet",
    image:
      "https://media-cdn.tripadvisor.com/media/photo-p/14/bd/a9/b1/photo0jpg.jpg",
    recipe: `Origin: A classic Indian summer treat sold by street vendors, also known as "Chuski" in some regions.
Taste: Refreshing with bright fruity or tangy syrups like kala khatta, rose, or orange.
Serving Style: Served on sticks or cups, with multiple syrup flavors layered over shaved ice.
Ingredients: Crushed ice, flavored syrups (kala khatta, rose, lime, etc.), lemon juice (optional).
Detailed Steps:
1. Finely shave or crush ice to form a soft, snow-like texture.
2. Pack the ice onto a stick or into a paper cup, shaping it into a rounded or conical form.
3. Pour sweet and tangy syrups of choice over the ice, ensuring it seeps in evenly.
4. Optional: Sprinkle salt and lemon juice for a contrasting tangy kick.
5. Enjoy immediately to prevent the gola from melting.`,
  },
  {
    name: "Rasmalai",
    type: "sweet",
    image:
      "https://www.nehascookbook.com/wp-content/uploads/2022/11/Angori-rasmalai-WS-500x500.jpg",
    recipe: `Origin: A Bengali specialty, very popular throughout India; soft rasgulla-like discs but served in thickened milk.
Taste: Milky, mildly sweet, and delicate, often flavored with saffron and cardamom.
Serving Style: Usually served chilled, garnished with chopped pistachios or almonds.
Ingredients: Chenna (homemade paneer), sugar syrup, thickened milk (rabri), saffron, cardamom.
Detailed Steps:
1. Make chenna by curdling hot milk with lemon juice; knead until smooth.
2. Shape into flat discs, boil in light sugar syrup until they expand and become soft.
3. Meanwhile, prepare rabri by simmering milk until reduced, adding sugar, saffron, and cardamom.
4. Gently press excess syrup from the discs and transfer them to the rabri.
5. Chill for a few hours to let the flavors infuse, then serve with a sprinkle of nuts.`,
  },

  /*
   * DRINKS
   */
  {
    name: "Falooda",
    type: "drinks",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/5e/d7/39/rose-falooda.jpg?w=1100&h=600&s=1",
    recipe: `Origin: Derived from the Persian dessert faloodeh, adapted in the Indian subcontinent with rose syrup and milk.
Taste: Creamy, sweet, and refreshing, with a variety of textures from vermicelli, basil seeds, and ice cream.
Serving Style: Served in tall glasses to showcase the colorful layers: soaked basil seeds, falooda sev, flavored milk, and ice cream on top.
Ingredients: Falooda sev (cornstarch vermicelli), sabja/basil seeds, chilled milk, rose syrup, sugar, ice cream, and optional nuts.
Detailed Steps:
1. Soak basil seeds in water until they swell and develop a gel-like coating.
2. Boil falooda sev until soft, then rinse with cold water.
3. Sweeten milk with sugar and chill; add rose syrup for a pink hue (optional flavors may include saffron or pista).
4. Layer a tall glass with soaked basil seeds, falooda sev, sweet milk, and top with a scoop of ice cream.
5. Drizzle additional syrup, garnish with nuts, and serve with a long spoon or straw.`,
  },
  {
    name: "Sugarcane juice",
    type: "drinks",
    image:
      "https://thumbs.dreamstime.com/b/sugarcane-juice-piece-sugarcane-wooden-background-close-up-79742010.jpg",
    recipe: `Origin: Popular in tropical and subtropical regions, especially on Indian streets where sugarcane is crushed in manual or electric machines.
Taste: Delightfully sweet and earthy, sometimes enhanced with ginger, mint, or lime.
Serving Style: Often served in a glass with ice, possibly mixed with salt and lemon juice for extra zest.
Ingredients: Fresh sugarcane stalks, optional add-ons like ginger, lime, or mint leaves.
Detailed Steps:
1. Wash and peel the sugarcane to remove the tough outer layer.
2. Feed stalks through a sugarcane juicer, collecting the fresh juice.
3. Strain to remove any fibers; add a pinch of black salt or lemon juice if desired.
4. Serve chilled over ice or straight up in a glass.`,
  },
  {
    name: "Soda",
    type: "drinks",
    image: "https://m.media-amazon.com/images/I/61vntH4T2tL._SL1500_.jpg",
    recipe: `Origin: Carbonated water was first manufactured in the late 18th century in Europe, later evolving into countless soda flavors worldwide.
Taste: Fizzy and refreshing, can be neutral in taste or sweet if flavored with syrups.
Serving Style: Consumed plain, with ice and lemon, or as a mixer in cocktails and mocktails.
Ingredients: Water, carbon dioxide gas (CO₂), optional flavoring syrups or fruit extracts.
Detailed Steps:
1. Filter and chill water thoroughly.
2. Carbonate the water by pressurizing it with CO₂ using a soda charger or commercial carbonation system.
3. If making flavored soda, mix in fruit syrups or extracts.
4. Pour into a glass filled with ice, garnish with a lemon slice, and enjoy.`,
  },
  {
    name: "Lassi",
    type: "drinks",
    image:
      "https://static.toiimg.com/thumb/58360232.cms?imgsize=1259672&width=509&height=340",
    recipe: `Origin: A Punjabi classic, especially popular in North India to beat the summer heat or accompany spicy meals.
Taste: Rich, tangy, and frothy. Sweet lassi is flavored with sugar and cardamom; salted lassi is more savory.
Serving Style: Often poured into tall steel or earthen glasses, sometimes topped with malai or nuts.
Ingredients: Thick yogurt (dahi), cold water or milk, sugar or salt, optional flavorings like rose syrup, mango pulp, or cumin.
Detailed Steps:
1. Whisk or blend thick yogurt until smooth and creamy.
2. For sweet lassi, add sugar, a pinch of cardamom powder, and chilled water or milk; blend well.
3. For salted lassi, replace sugar with salt, roasted cumin powder, and possibly mint or ginger.
4. Serve chilled in tall glasses; garnish with saffron strands or crushed pistachios.`,
  },
  {
    name: "Lemonade",
    type: "drinks",
    image:
      "https://static.toiimg.com/thumb/53962071.cms?imgsize=50021&width=509&height=340",
    recipe: `Origin: A universally loved drink that appears in various forms around the world (like nimbu pani in India).
Taste: Bright, tangy, and sweet, perfect for hot weather.
Serving Style: Served cold in tall glasses, sometimes with mint leaves or slices of lemon for decoration.
Ingredients: Fresh lemons or limes, sugar syrup or honey, cold water or club soda, ice cubes, optional mint.
Detailed Steps:
1. Squeeze fresh lemon juice into a pitcher, removing any seeds.
2. Mix in sugar syrup or dissolve sugar in warm water, then top up with cold water or soda.
3. Stir well; adjust sweetness or tartness as desired.
4. Serve in glasses with ice cubes, a slice of lemon, and optionally a sprig of mint.`,
  },
  {
    name: "Kullad Tea",
    type: "drinks",
    image: "https://chaimitra.in/wp-content/uploads/2024/06/Kulhad-Chai.jpg",
    recipe: `Origin: North Indian railway stations and street vendors popularized serving hot tea in clay cups for an earthy aroma.
Taste: Strong black tea spiced with ginger, cardamom, and other masalas, with a pleasant earthen note from the kullad.
Serving Style: The clay cups (kullads) are single-use, giving an authentic rustic flavor and fragrance.
Ingredients: Black tea leaves, water, milk, sugar, crushed ginger, cardamom pods, cloves, and optional spices like cinnamon.
Detailed Steps:
1. In a saucepan, bring water to boil with grated ginger, crushed cardamom, cloves, and any other masalas.
2. Add black tea leaves, simmer briefly, then pour in milk and sugar.
3. Let the tea come to a rolling boil, then lower heat and simmer until flavors blend.
4. Strain the tea into hot, unglazed clay cups (kullads).
5. Sip immediately for the best flavor as the clay absorbs some liquid and imparts an earthy aroma.`,
  },
  {
    name: "Jal jeera",
    type: "drinks",
    image: "https://www.recipesworld.co.uk/images/167335643365085885.webp",
    recipe: `Origin: A staple North Indian drink, especially during scorching summers, combining the digestive benefits of cumin with cooling herbs.
Taste: Cool, tangy, and spicy from mint, cumin, and black salt.
Serving Style: Served chilled in small glasses or clay cups, often garnished with boondi (crisp gram flour balls).
Ingredients: Roasted cumin powder, mint leaves, coriander leaves, lemon juice, black salt, chaat masala, water, optionally boondi.
Detailed Steps:
1. Blend fresh mint, coriander, green chili (optional), and ginger with some water into a fine paste.
2. Mix roasted cumin powder, black salt, chaat masala, and lemon juice into about 1 liter of cold water.
3. Stir in the mint-coriander paste; adjust seasoning to your preference.
4. Chill well; sprinkle boondi on top just before serving to maintain crunch.
5. Serve in glasses with ice cubes and a mint sprig garnish.`,
  },
  {
    name: "Thandaai",
    type: "drinks",
    image:
      "https://sinfullyspicy.com/wp-content/uploads/2022/03/1200-by-1200-images-2.jpg",
    recipe: `Origin: A popular drink during the Holi festival in North India, sometimes also enjoyed with bhang (cannabis).
Taste: Rich, nutty, and aromatic from fennel, cardamom, pepper, and almonds.
Serving Style: Usually served chilled in tall glasses, garnished with saffron or crushed dried rose petals.
Ingredients: Milk, sugar, a blend of almonds, pistachios, cashews, melon seeds, fennel seeds, cardamom, peppercorns, and saffron.
Detailed Steps:
1. Soak almonds, melon seeds, poppy seeds (optional), and other nuts for a few hours; remove skins if desired.
2. Grind the soaked nuts with fennel, pepper, cardamom, and a little milk to form a smooth paste.
3. Boil milk; stir in sugar and the ground paste, simmering gently to infuse flavors.
4. Cool completely, then chill in the fridge for a few hours.
5. Serve cold, topping each glass with saffron strands or crushed rose petals.`,
  },

  /*
   * CULTURAL
   */
  {
    name: "Jhalmuri",
    type: "cultural",
    image:
      "https://i.pinimg.com/736x/49/1a/52/491a5290e6da4486f5b59fa6825ed336.jpg",
    recipe: `Origin: A quintessential street snack from Kolkata and other parts of Eastern India, sold by “muri-wallahs” from large tins.
Taste: Crunchy, spicy, and pungent thanks to mustard oil, balanced by onions, tomatoes, chilies, and fresh coriander.
Serving Style: Often served in a conical paper pouch, eaten immediately so it remains crisp.
Ingredients: Puffed rice (muri), chopped onions, tomatoes, green chilies, mustard oil, roasted peanuts, black salt, chaat masala, coriander leaves.
Detailed Steps:
1. In a mixing bowl, combine puffed rice with chopped onions, tomatoes, green chilies, roasted peanuts, and coriander.
2. Season with salt, chili powder, chaat masala, and a drizzle of strong mustard oil for that authentic kick.
3. Toss everything quickly to coat the puffed rice without letting it get soggy.
4. Serve immediately in paper cones or bowls to maintain the crunch.`,
  },
  {
    name: "Khawsaa",
    type: "cultural",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSicBDMIT1aYQJfwEjJES8QRrKvxMuhdyfig&s",
    recipe: `Origin: Brought by Burmese immigrants, it found a home in regions like Gujarat (especially in Surat) and other Indian cities.
Taste: A soothing coconut broth with mild to moderate spiciness, offset by a variety of toppings.
Serving Style: Each bowl is customized with toppings like chili oil, fried garlic, spring onions, boiled eggs, lime, and coriander.
Ingredients: Noodles (egg or rice), coconut milk, chickpea flour (for thickening), vegetables or chicken, onions, garlic, ginger, turmeric.
Detailed Steps:
1. Sauté onions, garlic, and ginger with turmeric and chili powder for the base.
2. Stir in chickpea flour, then gradually add water or stock to form a smooth broth.
3. Whisk in coconut milk and bring to a gentle simmer, adding salt and spices to taste.
4. Boil or cook noodles separately; place them in serving bowls.
5. Ladle the hot coconut curry over the noodles; top with fried garlic, chili oil, lime juice, and any other garnishes.`,
  },
  {
    name: "Manchurian",
    type: "cultural",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPeFJuemNBKa1znsMJn7Y-d3KevQVEHP2TMw&s",
    recipe: `Origin: Developed in Indian Chinese restaurants, blending Chinese cooking techniques with Indian spices and flavors.
Taste: A mix of tangy, spicy, and slightly sweet flavors; can be dry (appetizer) or with gravy (main course).
Serving Style: Often served with fried rice or noodles; dry Manchurian is also enjoyed as a standalone snack.
Ingredients: Vegetables (cabbage, carrot, bell pepper) or chicken, corn flour, soy sauce, chili sauce, garlic, ginger, spring onions.
Detailed Steps:
1. Finely chop or grate veggies/chicken; mix with corn flour and seasonings to form small balls.
2. Deep-fry these balls until golden brown and set aside.
3. In a wok, sauté minced garlic, ginger, and chopped spring onions; add soy sauce, chili sauce, ketchup, and a little vinegar for tang.
4. Thicken the sauce with corn flour slurry; add fried balls to coat evenly.
5. Garnish with sliced spring onions and serve hot.`,
  },
  {
    name: "Tacos",
    type: "cultural",
    image:
      "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2024-04-tacos%2Ftacos-490",
    recipe: `Origin: Hailing from Mexico, tacos have become a global phenomenon, featuring local adaptations.
Taste: Typically savory and fresh, with heat from chilies, tanginess from salsa, and creaminess from cheese or guacamole.
Serving Style: Soft or crispy tortillas folded around fillings and often eaten by hand.
Ingredients: Corn or flour tortillas, seasoned meat (chicken, beef, pork) or veggies, salsa, cheese, lettuce, guacamole, sour cream.
Detailed Steps:
1. Season and cook your protein of choice with Mexican spices like cumin, chili powder, garlic, and oregano.
2. Warm tortillas on a hot skillet or griddle until soft and pliable.
3. Assemble by layering the tortillas with cooked filling, fresh lettuce or cabbage, salsa or pico de gallo, grated cheese, and optional toppings like sour cream or guacamole.
4. Fold in half and serve immediately.`,
  },
  {
    name: "Momos",
    type: "cultural",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoyiVDWu8hRl4CTspEnHoF1vqK_Kiv_WOyDw&s",
    recipe: `Origin: A traditional delicacy from Tibet, Nepal, and parts of North-East India, found on street corners and in specialized shops.
Taste: Mildly seasoned fillings inside a tender wrapper, often accompanied by a spicy chili-garlic sauce.
Serving Style: Served in bamboo steamers or plates, typically with hot chili dip or a clear soup.
Ingredients: All-purpose flour wrappers, minced vegetables or meat, garlic, ginger, onions, soy sauce, salt, pepper.
Detailed Steps:
1. Mix flour and water to form a soft dough; let it rest.
2. Finely chop cabbage, carrots, onions, or meat; season with soy sauce, salt, pepper, garlic, and ginger.
3. Roll dough into thin circles, place a tablespoon of filling in the center, and pleat the edges to seal.
4. Steam in a steamer or an idli pot for about 10-12 minutes until translucent.
5. Serve hot with a spicy tomato-chili sauce or a hot soup.`,
  },
  {
    name: "Sandwich",
    type: "cultural",
    image:
      "https://www.yumcurry.com/wp-content/uploads/2021/05/club-sandwich-recipe-1-500x500.jpg",
    recipe: `Origin: Credited to the 4th Earl of Sandwich in 18th-century England, it became a universal concept adapted in countless ways.
Taste: Depends heavily on chosen fillings—can be simple with butter and jam or elaborate with meats, cheeses, sauces, and vegetables.
Serving Style: Sliced into triangles, toasted, or grilled. Street vendors in India often stuff sandwiches with spiced veggies or chutneys.
Ingredients: Bread (white, whole wheat, multigrain), butter or spreads (mayo, chutney), veggies (tomato, cucumber), cheese, optional meat or eggs.
Detailed Steps:
1. Spread butter or your chosen sauce evenly on bread slices.
2. Layer desired fillings—fresh vegetables, cheese, sliced meats, or masala potatoes.
3. Optionally grill or toast the sandwich until the bread is golden and cheese melts.
4. Slice diagonally or into halves and serve hot or cold.`,
  },
  {
    name: "Pizza",
    type: "cultural",
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/1a/d0/16/0c/kawa-topped-pizza.jpg",
    recipe: `Origin: Originating in Naples, Italy, pizza has been embraced globally with countless local twists and toppings.
Taste: Savory tomato sauce, melted cheese (often mozzarella), and a range of vegetables or meats on a crisp crust.
Serving Style: Typically baked in a wood-fired or conventional oven and sliced into wedges for sharing.
Ingredients: Pizza dough (flour, yeast, water, olive oil), tomato sauce, mozzarella, toppings (bell peppers, onions, pepperoni, olives, etc.).
Detailed Steps:
1. Knead dough from flour, yeast, salt, and water; let it rise until doubled in size.
2. Punch down and roll out into a circular base. Spread tomato sauce evenly on top.
3. Sprinkle grated mozzarella and arrange desired toppings.
4. Bake in a preheated oven at around 220°C (425°F) for 12-15 minutes or until the crust is golden and cheese is bubbly.
5. Slice and serve hot, optionally garnished with fresh basil or oregano.`,
  },
];

// Main DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", function () {
  // --- RE-ENABLE TYPEWRITER EFFECT ---
  const typewriterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          typeWriter(entry.target, 50); // 50ms per character
          typewriterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  document
    .querySelectorAll(".typewriter")
    .forEach((el) => typewriterObserver.observe(el));

  // --- DYNAMIC FILTER BUTTONS ---
  const filterContainer = document.querySelector(".filter-container");
  const distinctTypes = new Set();
  foodItems.forEach((item) => distinctTypes.add(item.type));
  const types = Array.from(distinctTypes); // e.g., ["spicy", "sweet", "flavourful", "drinks", "cultural"]

  // Define mappings for background and filter button colors:
  const foodBgMapping = {
    spicy: getComputedStyle(document.documentElement).getPropertyValue(
      "--secondary"
    ),
    sweet: getComputedStyle(document.documentElement).getPropertyValue(
      "--sweet-color"
    ),
    cultural: getComputedStyle(document.documentElement).getPropertyValue(
      "--sour-color"
    ),
    flavourful: getComputedStyle(document.documentElement).getPropertyValue(
      "--quinary"
    ),
    drinks: getComputedStyle(document.documentElement).getPropertyValue(
      "--tertiary"
    ),
  };
  const btnColorMapping = { ...foodBgMapping };

  types.forEach((type) => {
    const btn = document.createElement("button");
    btn.classList.add("filter-btn");
    btn.dataset.filter = type;
    btn.textContent = type.toUpperCase();
    btn.style.background = btnColorMapping[type] || "";
    filterContainer.appendChild(btn);
  });

  // --- INJECT FOOD ITEMS ---
  const foodGrid = document.querySelector(".food-grid");
  foodItems.forEach((item) => {
    foodGrid.appendChild(createFoodItem(item));
  });

  // --- Apply Default Filter "spicy" after injection ---
  const spicyBtn = document.querySelector('.filter-btn[data-filter="spicy"]');
  if (spicyBtn) {
    spicyBtn.classList.add("active");
    document.querySelector(".food-items-section").style.background =
      foodBgMapping["spicy"];
    filterFoodItems("spicy");
  }

  // --- FILTERING FUNCTIONALITY ---
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      filterFoodItems(btn.dataset.filter);
      const foodSection = document.querySelector(".food-items-section");
      foodSection.style.background = foodBgMapping[btn.dataset.filter] || "";
    });
  });

  // --- HISTORY CARDS ANIMATION ON SCROLL ---
  const historyCards = document.querySelectorAll(".history-card");
  const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -100px 0px" };
  const historyObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("in-view");
    });
  }, observerOptions);
  historyCards.forEach((card) => historyObserver.observe(card));

  // --- HAMBURGER MENU FOR MOBILE ---
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
  });
});

// Typewriter effect function
function typeWriter(element, speed) {
  const text = element.textContent;
  element.textContent = "";
  let i = 0;
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// Create a Food Item Element using flip-card structure
function createFoodItem(data) {
  const foodItem = document.createElement("div");
  foodItem.classList.add("food-item");
  foodItem.dataset.type = data.type;
  foodItem.innerHTML = `
    <div class="flip-card">
      <div class="flip-card-front">
        <img src="${data.image}" alt="${data.name}">
      </div>
      <div class="flip-card-back">
        <h3>${data.name}</h3>
        <button class="recipe-btn">View Recipe</button>
      </div>
    </div>
  `;
  const recipeBtn = foodItem.querySelector(".recipe-btn");
  recipeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    showRecipeModal(data);
  });
  return foodItem;
}

// Show the recipe modal popup
function showRecipeModal(data) {
  const modal = document.getElementById("recipe-modal");
  document.getElementById("recipe-title").textContent = data.name;
  document.getElementById("recipe-description").textContent = data.recipe;
  modal.classList.add("show");
}

// Close the recipe modal popup
function closeRecipeModal() {
  const modal = document.getElementById("recipe-modal");
  modal.classList.remove("show");
}
document
  .querySelector(".recipe-modal .close-btn")
  .addEventListener("click", closeRecipeModal);
document.getElementById("recipe-modal").addEventListener("click", function (e) {
  if (e.target === this) closeRecipeModal();
});

// Filter Food Items Based on Selected Category
function filterFoodItems(filter) {
  const items = document.querySelectorAll(".food-item");
  items.forEach((item) => {
    if (filter === "all" || item.dataset.type === filter) {
      item.style.display = "block";
      setTimeout(() => {
        item.style.opacity = "1";
        item.style.transform = "scale(1)";
      }, 10);
    } else {
      item.style.opacity = "0";
      item.style.transform = "scale(0.8)";
      setTimeout(() => {
        item.style.display = "none";
      }, 300);
    }
  });
}
