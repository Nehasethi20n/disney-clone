import { useState } from 'react';
import { supabase } from '../supabase/supabaseClient';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendMagicLink = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) {
      console.error('Error sending magic link:', error.message);
    } else {
      setIsSent(true);
    }
    setLoading(false);
  };

  return (
    <div className="grid grid-cols-2 h-screen bg-black">
      <div
        style={{
          backgroundImage: `linear-gradient(to left,rgba(0,0,0,7),rgba(0,0,0,0.1)),url(${"/images/signIn.jpg"})`,
        }}
      ></div>
      <div className="ml-36">
        <h1 className="mt-24 text-xl font-semibold text-white">Log in or sign up to continue</h1>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-black border border-gray-300 mt-10 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-72 p-2.5"
          placeholder="Enter your email"
        />
        <h6 className="text-gray-500 text-xs mt-3 ">
          By proceeding you confirm that you are above 18 years
          <br /> of age and agree to the Privacy Policy and Terms of use
        </h6>
        {email && !isSent && (
          <button
            onClick={sendMagicLink}
            className="mt-10 h-12 bg-blue-700 w-72 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            disabled={loading}
          >
            {loading ? 'Sending magic link...' : 'Send Magic Link'}
          </button>
        )}
        {isSent && (
          <p className="mt-10 text-white">Check your email for the magic link to sign in.</p>
        )}
      </div>
    </div>
  );
};

export default Signin;
