import { useState, useEffect } from 'react';

export const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading };
};



//USE-------->
// import { useFetchData } from './useFetchData';

// function MiComponente() {
//   const { data, loading } = useFetchData('https://api.example.com/data');

//   if (loading) return <div>Cargando...</div>;
//   if (!data) return <div>No hay datos</div>;

//   return (
//     <div>
//       {data.map(item => (
//         <p key={item.id}>{item.name}</p>
//       ))}
//     </div>
//   );
// }