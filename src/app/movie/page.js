import React from 'react';
import MovieCard from '@/app/components/MovieCard';
import styles from '@/app/styles/common.module.css';

const Movie = async () => {

  /* To see the loader */
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const url = process.env.RAPID_KEY;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '8ebfca781emshfda2b28edb7de26p11ec76jsnd7a0cba63354',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com',
    },
  };
  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;

  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series & Movie</h1>
          <div className={styles.card_section}>
            {main_data.map((curElem) => {
              return <MovieCard key={curElem.id} {...curElem} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Movie;
