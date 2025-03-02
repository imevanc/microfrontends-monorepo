import { Button } from "@repo/ui";

const App = () => {
  return (
    <div className="content">
      <h1 className="text-sm text-purple-400">Host</h1>{" "}
      {/* Added text-purple-400 which is the random red */}{" "}
      <Button appName="react-host">Click me</Button>
      <p>Start building amazing things with Rsbuild.</p>
    </div>
  );
};

export default App;
