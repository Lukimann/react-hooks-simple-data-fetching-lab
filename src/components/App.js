// create your App component here
import { useEffect, useState } from "react";

const App = () => {
  const [Loading, setLoading] = useState(false);
  const [imgUrl, setImgUrl] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((Data) => {
        setImgUrl(Data.message);
        setLoading(true);
      });
  }, []);

  if (!Loading) {
    return <p>Loading...</p>;
  }

  return <img src={imgUrl} alt="A Random Dog" />;
};

export default App;