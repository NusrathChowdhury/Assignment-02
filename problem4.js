function topRatedRestaurant(restaurants) {

    if (Array.isArray(restaurants) === false || restaurants.length === 0) {
        return "Invalid";
    }

    let best = restaurants[0];

    for (let restaurant of restaurants) {
        if (restaurant.rating > best.rating) {
            best = restaurant;
        }
    }

    return best.name.toUpperCase();
}

console.log(
    topRatedRestaurant([
        { name: "Chillox", rating: 4.5 },
        { name: "Sultan's Dine", rating: 4.8 }
    ])
);


console.log(
    topRatedRestaurant([
        { name: "KFC", rating: 4.2 },
        { name: "Pizza Hut", rating: 4.6 }
    ])
);


console.log(topRatedRestaurant([]));
console.log(topRatedRestaurant("restaurants"));  