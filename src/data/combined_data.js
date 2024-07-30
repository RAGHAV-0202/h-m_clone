import baby_products from "./baby_products";
import home_products from "./home_products";
import kids_products from "./kids_products";
import ladies_products from "./ladies_products";
import men_products from "./men_products";
import newArrival from "./new_arrival";
import sports_products from "./sports";

const AllProducts = [
    ...baby_products , ...kids_products , ...home_products , ...ladies_products , ...men_products , ...newArrival , ...sports_products
]

export default AllProducts