function MainApp({ onLogout }: { onLogout: () => void }) {
  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-2xl mb-4">Welcome to the Main App!</h1>
      <button
        onClick={onLogout}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}

export default MainApp;
