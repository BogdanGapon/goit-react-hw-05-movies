import { KEY } from 'Utilities/variables';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthorText, ReviewsWrapper } from './Reviews.styled';

export const Reviews = () => {
  const location = useLocation();
  const id = location.state?.id;
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}/reviews${KEY}`, {
        signal: controller.signal,
      })
      .then(res => {
        const {
          data: { results },
        } = res;
        setReviews([...results]);
      })
      .catch(err => {});
    return () => {
      controller.abort();
    };
  }, [id]);

  return (
    <>
      {reviews.length === 0 ? (
        <p>Sorry we don`t have reviews for this movie</p>
      ) : (
        <ReviewsWrapper>
          {reviews?.map(review => {
            const { id, author, content } = review;
            return (
              <li key={id}>
                <b>Author: {author} </b>
                <AuthorText>{content}</AuthorText>
              </li>
            );
          })}
        </ReviewsWrapper>
      )}
    </>
  );
};
