import "./App.css";
import { Button } from "@repo/ui";

const App = () => {
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <Button appName="react-host">Click me</Button>
      <p>Start building amazing things with Rsbuild.</p>
    </div>
  );
};

export default App;
