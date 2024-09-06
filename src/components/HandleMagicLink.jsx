import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { supabase } from '../supabase/supabaseClient';

const HandleMagicLink = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleSignIn = async () => {
      const url = new URL(window.location.href);
      const accessToken = url.searchParams.get('access_token');

      if (accessToken) {
        const { error } = await supabase.auth.signIn({ access_token: accessToken });
        if (error) {
          console.error('Error signing in with magic link:', error.message);
        } else {
          console.log('Signed in successfully');
          navigate('/homepage');
        }
      } else {
        console.error('No access token found');
      }
    };

    handleSignIn();
  }, [location, navigate]);

  return <div>Loading...</div>;
};

export default HandleMagicLink;
