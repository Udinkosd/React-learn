import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

const LoginForm = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const demoEmail = "demo@contoh.com";
  const demoPassword = "123";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === demoEmail && password === demoPassword) {
      navigate("/admin");
    } else {
      alert("Email atau password salah!");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage:
          "url('images/directly-shot-christmas-decorations-blue-background 1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex w-full max-w-screen-xl">
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center text-white">
            <img
              src="/images/berkelana-logo-white.png"
              alt="Logo"
              className="max-w-full h-auto"
            />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end px-32">
          <div className="bg-white py-16 px-12 rounded-3xl shadow-lg w-[800px] max-w-lg ml-auto">
            <div className="mb-6 flex justify-center">
              <img
                src="images/berkelana-logo.png"
                alt="Logo"
                className="h-12 w-auto"
              />
            </div>
            <div className="text-start mb-8">
              <h1 className="text-4xl font-bold">Login</h1>
            </div>

            <div className="text-center text-red-500 font-bold mb-4">
              {!email && !password && <p>Anda belum login. Silakan masukkan email dan kata sandi. (Klik saya) untuk melihat demo</p>}
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <div className="flex items-center border-2 border-purple-300 rounded-xl px-4 focus-within:border-purple-500 transition">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-gray-400 mr-3"
                  />
                  <input
                    id="email"
                    type="email"
                    className="w-full p-4 text-lg border-none bg-transparent placeholder:text-gray-400 focus:outline-none"
                    placeholder="Masukkan email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-6">
                <div className="flex items-center border-2 border-purple-300 rounded-xl px-4 focus-within:border-purple-500 transition">
                  <FontAwesomeIcon
                    icon={faLock}
                    className="text-gray-400 mr-3"
                  />
                  <input
                    id="password"
                    type="password"
                    className="w-full p-4 text-lg border-none bg-transparent placeholder:text-gray-400 focus:outline-none"
                    placeholder="Masukkan kata sandi"
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex justify-end mb-6">
                <Link
                  to="/lupa-sandi"
                  className="text-sm text-purple-400 hover:underline"
                >
                  Lupa kata sandi?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-400 hover:bg-purple-500 text-white font-bold py-4 rounded-xl text-xl transition mb-4"
              >
                Login
              </button>
            </form>
            <button
              className="w-full bg-blue-100 hover:bg-blue-200 text-blue-700 font-bold py-2 rounded-xl text-base transition mb-4"
              onClick={() => setShowPopup(true)}
              type="button"
            >
              Klik Saya!
            </button>
            <div className="text-center mt-2 mb-2">
              <p className="text-gray-600 text-lg">
                Belum punya akun?{" "}
                <Link to="/daftar" className="text-purple-500 font-bold">
                  Daftar aja
                </Link>
              </p>
            </div>
            <p className="text-center text-xs text-black mt-2">
              Dengan login, kamu menyetujui{" "}
              <span className="font-bold text-purple-600">Kebijakan Privasi</span> dan{" "}
              <span className="font-bold text-purple-600">Syarat & Ketentuan Berkelana</span>
            </p>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="popup-overlay" style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.5)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 1000,
        }}>
          <div className="popup-content" style={{
            background: '#fff',
            padding: '2rem',
            borderRadius: '8px',
            textAlign: 'center',
            minWidth: '300px',
          }}>
            <h2>Akun Demo</h2>
            <p>
              Email: <b>{demoEmail}</b><br />
              Password: <b>{demoPassword}</b>
            </p>
            <button onClick={() => setShowPopup(false)}
              className="mt-4 bg-purple-400 hover:bg-purple-500 text-white font-bold py-2 px-6 rounded-xl transition"
            >Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginForm;