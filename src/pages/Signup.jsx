function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-6">
          Sign Up
        </h1>

        <form className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="email"
            placeholder="Enter Email"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="password"
            placeholder="Create Password"
            className="w-full border p-3 rounded-lg"
          />

          <button
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
          >
            Create Account
          </button>

        </form>

      </div>

    </div>
  );
}

export default Signup;