import { useState } from 'react';
import api from '../utils/api';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();

    await api.post('/auth/register', {
      name,
      email,
      password,
    });

    alert('Signup Successful');
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <form
        onSubmit={submitHandler}
        className="bg-white p-8 rounded-xl shadow-lg w-96"
      >
        <h2 className="text-3xl font-bold mb-4">Signup</h2>

        <input
          type="text"
          placeholder="Name"
          className="border p-2 w-full mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="bg-blue-600 text-white w-full p-2 rounded-lg">
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;