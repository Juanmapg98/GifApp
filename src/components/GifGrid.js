import { useFechGifs } from "../hooks/useFechGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {

  const {data:images, loading} = useFechGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {
        loading && <p>Loading</p>
      }
      <div className="cardGrid">
        {images.map((image) => {
          return <GifGridItem key={image.id} {...image} />;
        })}
      </div>
    </>
  );
};
