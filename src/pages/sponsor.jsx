import React, { useEffect } from 'react';

const prosp_link =
  'https://drive.google.com/file/d/1FeFCbcuFWB1bAotoJZ7hfJEIjoZVUz6b/view?usp=sharing';

const SponsorRedirect = () => {
  useEffect(() => {
    window.location.href = prosp_link;
  }, []);

  return <div>Redirecting...</div>;
};

export default SponsorRedirect;
