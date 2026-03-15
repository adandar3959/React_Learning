import Counter from "./components/Counter";
import Toggle from "./components/Toggle";
import UserForm from "./components/UserForm";
import ShoppingList from "./components/ShoppingList";
import DarkModeToggle from "./components/DarkModeToggle";
import FormSubmit from "./components/FormSubmit";
import ThemeToggler from "./components/ThemeToggler";

function App() {
  return (
    <div className="app-container">
      <h1>React Lab Assignment</h1>

      <div className="section">
        <Counter />
      </div>

      <div className="section">
        <Toggle />
      </div>

      <div className="section">
        <UserForm />
      </div>

      <div className="section">
        <ShoppingList />
      </div>

      <div className="section">
        <DarkModeToggle />
      </div>

      <div className="section">
        <FormSubmit />
      </div>

      <div className="section">
        <ThemeToggler />
      </div>
    </div>
  );
}

export default App;