import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isDark, setIsDark] = useState(false);
  const appClass = isDark ? "App dark" : "App light"
  const buttonText = isDark ? "Light Mode" : "Dark Mode"
    function handleClick(){
      setIsDark(!isDark)
    }
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={(e) => handleClick()}>{buttonText}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
