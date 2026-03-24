import { useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";

const Login = () => {
  const { t } = useTranslation();

  // State for form fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload
    setError("");
    setSuccess("");

    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });

      // Save token in localStorage
      localStorage.setItem("token", res.data.token);
      setSuccess("Connexion réussie !");
    } catch (err) {
      setError(err.response?.data?.msg || "Erreur de connexion");
    }
  };
  return (
    <div>
      {/* Background Section */}
      <div
        className="relative h-[300px] bg-cover bg-no-repeat pt-36 md:pt-36 rounded-b-xl"
        style={{
          backgroundImage: "url('/assets/images/landscape.jpg')",
        }}
      >
        <div className=" text-center text-3xl font-bold text-white pt-12">
          {t("Se connecter ")}
        </div>
      </div>

      {/* Login Form Section */}
      <div className="flex justify-center items-center py-12 px-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Connectez-vous à votre compte
          </h2>

          {/* Login Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-customColor1"
                placeholder="Entrer votre email"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700"
              >
                Mot de passe
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-customColor1"
                placeholder="Entrer votre mot de passe"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-customColor1 text-white rounded-md hover:bg-customColor1/80 transition duration-300"
            >
              Login
            </button>
          </form>

          {/* Feedback messages */}
          {error && <p className="text-red-500 mt-4">{error}</p>}
          {success && <p className="text-green-500 mt-4">{success}</p>}

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Vous n'avez pas de compte?{" "}
              <a href="/register" className="text-customColor1 font-semibold">
                Créer un compte
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
