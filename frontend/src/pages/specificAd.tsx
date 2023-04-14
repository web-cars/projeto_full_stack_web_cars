import { useParams } from "react-router-dom";


export const SpecificAd = () => {
  const { id } = useParams<{ id: string }>();
  console.log(id)
  return (
    <h1>hi</h1>
  );
};
