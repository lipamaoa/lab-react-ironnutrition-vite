import { useState } from "react";
import foodsJson from "../foods.json";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
import Search from "./Search";
import { Row, Divider } from "antd";

function FoodList() {
  const [foodsArray, setFoodsArray] = useState(foodsJson);

  const deleteItems = (id) => {
    const filteredFoods = foodsArray.filter((food) => food.id !== id);
    setFoodsArray(filteredFoods);
  };

  const addFood = (newFood) => {
    const updatedFoodArray = [...foodsArray, newFood];
    setFoodsArray(updatedFoodArray);
  };

  const handleSearch = (searchItem) => {
    if (searchItem.trim() === "") {
      setFoodsArray(foodsJson);
    } else {
      const filteredFoods = foodsJson.filter((food) =>
        food.name.toLowerCase().includes(searchItem.toLowerCase())
      );
      setFoodsArray(filteredFoods);
    };
    }

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <Search onSearch={handleSearch} />
    <AddFoodForm addFood={addFood} />
      <Row style={{ width: "100%", justifyContent: "center" }}>
        {foodsArray.length === 0 ? (
          <p>Oops! There is no more content to show.</p>
        ) : (
          foodsArray.map((food) => (
            <FoodBox
              key={food.id}
              food={food}
              deleteItems={() => deleteItems(food.id)}
            />
          ))
        )}
      </Row>
    </div>
  );
}
export default FoodList;
