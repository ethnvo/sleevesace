function LoginForm({ onLogin }: { onLogin: () => void }) {
  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-2xl mb-4">Login</h1>
      <button
        onClick={onLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Fake Login
      </button>
    </div>
  );
}

export default LoginForm;
