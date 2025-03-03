const App = () => {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full border-l-4 border-blue-600">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          This is Journey A
        </h1>

        <div className="space-y-4">
          <p className="text-gray-600 text-center">
            You're now viewing Remote Module A content
          </p>

          <button
            onClick={() => window.history.back()}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md text-center transition-colors duration-300"
          >
            Return to Host
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
