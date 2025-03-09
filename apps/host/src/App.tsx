import { Button } from "@repo/ui";
import JourneyA from "journeya/App";

const MainApp = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          This is the Host Application
        </h1>

        <div className="space-y-4 flex flex-col items-center">
          <div className="flex flex-col md:flex-row gap-4">
            <JourneyA />
          </div>

          <p className="text-gray-600 text-center">
            The button component below was imported from the component library.
          </p>
          <Button
            appName="react-host"
            className="bg-gray-100 p-2 rounded-full text-blue-700 text-3xl font-bold hover:bg-blue-700 hover:text-white active:bg-blue-800 active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Click me
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MainApp;
