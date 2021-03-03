import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGifs";

export const useFechGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGif(category)
      .then(images => {
        setState({
          data: images,
          loading:false
        })
      })
  }, [category]);

  console.log(state)
  return state; // {data:[], loading: true}
};
