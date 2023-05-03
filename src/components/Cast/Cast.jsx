import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { KEY } from 'Utilities/variables';
import { Img, ListGrid } from './Cast.styled';
export const Cast = () => {
  const location = useLocation();
  const id = location.state?.id;
  const [cast, setCast] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}/credits${KEY}`)
      .then(res => {
        const {
          data: { cast },
        } = res;
        setCast([...cast]);
      });
  }, [id]);

  return (
    <ListGrid>
      {cast?.map(cast => {
        const { character, original_name, profile_path, id } = cast;
        if (
          character?.length === 0 ||
          original_name?.length === 0 ||
          profile_path?.length === 0 ||
          profile_path === null
        ) {
          return (
            <li key={id}>
              <Img
                src={`https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png`}
                alt={original_name}
              />
              <p>{original_name}</p>
              <p>{`Character: ${character}`}</p>
            </li>
          );
        }
        return (
          <li key={id}>
            <Img
              src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
              alt={original_name}
            />
            <p>{original_name}</p>
            <p>Character: {character}</p>
          </li>
        );
      })}
    </ListGrid>
  );
};
