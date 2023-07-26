import { useState } from "react";
import { Divider, Input, Button } from "antd";

function AddFoodForm({ addFood }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newFood = {
      id: Date.now(), 
      name: name,
      image: image,
      calories: calories,
      servings: servings,
    };
    addFood(newFood);

    setName("");
    setImage("");
    setCalories(0);
    setServings(0);
  };

  return (
    <div className="AddFood">
      <Divider style={{color:"white"}}>Add New Food</Divider>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <Input
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Image:</label>
        <Input
          name="image"
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <label>Calories:</label>
        <Input
          name="calories"
          type="number"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
        />

        <label>Servings:</label>
        <Input
          name="servings"
          type="number"
          value={servings}
          onChange={(e) => setServings(e.target.value)}
        />

        <Button type="primary" htmlType="submit" >Create</Button>
       
      </form>
    </div>
  );
}

export default AddFoodForm;


