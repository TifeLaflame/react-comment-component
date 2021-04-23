import {useState, useEffect} from 'react';
const baseUrl = process.env.REACT_APP_API_BASE_URL;

export default function useFetchService(url) {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const blob = await fetch(`${baseUrl}${url}`);
        if(blob.ok) {
          const response = await blob.json();
          setUserData(response);
          // console.log(response);
        } else {
          throw blob;
        }
      } catch(e) {
        setErrorMsg(e);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);

  return { userData, loading, errorMsg };
}