import styles from "./RightSideContent.module.css";
import { memo, useCallback, useContext, useRef, useState } from "react";

import MovieCard from "../../components/MovieCard/MovieCard.jsx";

import { FavoriteContext } from "../../contextProviders/FavoriteProvider.jsx";
import TopContent from "../../components/TopContent/TopContent.jsx";
import { useFetchMovie, useObesrver } from "../../hooks/hooks";

const RightSideContent = memo(function RightSideContent() {
  const [favorite] = useContext(FavoriteContext);
  const [backGround, setBackground] = useState(false);
  const { isLoading, error, titles, setOptions, options, total_pages } =
    useFetchMovie({ page: 1 });
  const lastElement = useRef(null);
  const observer = useObesrver(
    lastElement,
    options.page < total_pages,
    isLoading,
    addPage
  );

  function addPage() {
    setOptions({ ...options, page: options.page + 1 });
  }

  const onCardClick = useCallback(
    (i) => {
      return (event) => {
        setBackground(titles[i].backdrop_path);
      };
    },
    [titles]
  );

  return (
    <>
      <TopContent backGround={backGround} />
      <div className={styles.cont}>
        {titles.length > 0 &&
          titles.map((e, i) => {
            return (
              <MovieCard
                isActive={!!favorite.includes(e.id)}
                hasTextBar={true}
                isVertical={true}
                onCardClickHandle={onCardClick(i)}
                movie={e}
                key={e.id * Math.random()}
              />
            );
          })}
        {isLoading && (
          <h1 style={{ position: "absolute", color: "purple" }}>Loading....</h1>
        )}
        <div ref={lastElement} style={{ width: "0", height: "0" }}></div>
      </div>
    </>
  );
});

export default RightSideContent;
