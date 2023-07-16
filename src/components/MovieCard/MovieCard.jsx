import { memo, useCallback, useContext, useMemo, useState } from "react";
import styles from "./MovieCard.module.css";
import LikeButton from "../UI/likeButton/likeButton";
import { useHover } from "../../hooks/hooks";
import { FetchAPI } from "../../services/FetchAPI.js";
import { FavoriteContext } from "../../contextProviders/FavoriteProvider.jsx";

const MovieCard = memo(function MovieCardComponent({
  isVertical,
  movie,
  isActive,
  hasTextBar,
  onCardClickHandle
}) {
  const [isLikeButtonActive, setLikeButtonActive] = useState(isActive);

  const [fav, setFav, setFavorite] = useContext(FavoriteContext);
  const optionalStyles = useMemo(() => {
    const optStyles = {
      width: isVertical ? "255px" : "348px",
      height: isVertical ? "300px" : "208px",
      background: `url(https://image.tmdb.org/t/p/original${movie.poster_path})`,
      backgroundSize: "cover"
    };
    return optStyles;
  }, [isVertical, movie]);
  const addToFavorites = useCallback(async () => {
    //кидаємо запрос на бек
    //отримуємо код 200 або 400
    //якшо 200 то
    if (isLikeButtonActive) {
      await FetchAPI.removeFromFavorite(movie.id);
      setFavorite(FetchAPI.fetchFromLocaleStorage("favorite"));
      setLikeButtonActive(false);
    } else {
      setFav({ id: movie.id });
      setLikeButtonActive(true);
    }
  }, [movie]);
  return (
    <div
      onClick={onCardClickHandle}
      style={{ ...optionalStyles }}
      className={styles.movieCardContainer}
    >
      <LikeButton
        isActive={isLikeButtonActive}
        dispatchOnClick={addToFavorites}
      />
      {hasTextBar && (
        <div className={styles.movieCardTextBar}>
          <div className={styles.movieCardTextBarContainer}>
            <h2 className={styles.movieCardName}>{movie.title}</h2>
            <p>
              {movie.release_date} | {movie.genre_ids.join(" ")}
            </p>
            <p>{movie.overview}</p>
          </div>
        </div>
      )}
    </div>
  );
});

export default MovieCard;
