import { Button } from "@repo/ui";
import App from "journeya/App";

const MainApp = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          This is the Host Application
        </h1>

        <div className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <App />
            <a
              href="/journey-a"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md text-center transition-colors duration-300 flex-1"
            >
              Enter Journey A
            </a>

            <a
              href="/journey-b"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-md text-center transition-colors duration-300 flex-1"
            >
              Enter Journey B
            </a>
          </div>

          <p className="text-gray-600 text-center mt-4">
            Select a journey to explore remote modules
          </p>
          <hr />
          <p>
            The button component below was imported from the component library.
          </p>
          <Button appName="react-host">Click me</Button>
        </div>
      </div>
    </div>
  );
};

export default MainApp;
