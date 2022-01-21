 


import loading from '../loading.gif';

const Loader = () => {
  const isLoading = false
  return (
    <span className="loader">
      {isLoading ? <img src={loading} alt="loading content" /> : null}
    </span>
  );
};

export default Loader;
