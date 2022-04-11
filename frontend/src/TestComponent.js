import { useEffect, useState } from 'react';

function TestComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
      <strong>{!data ? "Loading or Not Connected" : data}</strong>
  );
}

export default TestComponent;