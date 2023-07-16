import {
  useEffect,
  useRef,
  useState,
  useMemo,
  useContext,
  useCallback
} from "react";
import { FetchAPI } from "../services/FetchAPI";
import { TypeContext } from "../contextProviders/TypeProvider";
import { useParams } from "react-router-dom";

function useHover(callBackOver, callBackOut) {
  const [isHovered, setHovered] = useState(false);
  const onMouseOver = (e) => {
    if (callBackOver) {
      callBackOver(e);
    }
    setHovered(true);
  };
  const onMouseOut = (e) => {
    if (callBackOut) {
      callBackOut(e);
    }
    setHovered(false);
  };
  return [isHovered, onMouseOver, onMouseOut];
}

function useFetchMovie(opt) {
  const params = useParams();
  const [options, setOptions] = useState({ ...opt });
  const [fetching, isLoading, error] = useFetch();
  const [titles, setTitles] = useState([]);
  const [total_pages, setTotalPages] = useState(2);
  const type = useContext(TypeContext);

  const map = useMemo(() => {
    return {
      trending: FetchAPI.fetchTrending,
      upcoming: FetchAPI.fetchUpcoming,
      home: FetchAPI.fetchTrending,
      favorite: FetchAPI.fetchUpcoming,
      community: FetchAPI.fetchUpcoming,
      social: FetchAPI.fetchTrending,
      settings: FetchAPI.fetchTrending,
      logout: FetchAPI.fetchUpcoming
    };
  }, []);

  const fetchTitles = useCallback(async () => {
    const fetchMethod = map[params.type]
      ? map[params.type]
      : FetchAPI.fetchTrending;

    try {
      const titlesFetched = await fetching(fetchMethod, [
        type[0],
        options.page
      ]);

      setTitles((prevTitles) => [...prevTitles, ...titlesFetched.data.results]);
      setTotalPages(titlesFetched.data.total_pages);
    } catch (e) {
      console.log(e);
    }
  }, [options, type, params, map]);

  useEffect(() => {
    if (total_pages <= options.page) {
      setOptions({ ...options, page: options.page - 1 });
      return;
    }

    fetchTitles();
  }, [options]);

  useEffect(() => {
    setTitles([]);
    setOptions({ ...options, page: 1 });
  }, [params, type]);

  return { isLoading, error, setOptions, titles, total_pages, options };
}

function useFetch() {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState();
  const fetching = async (fetchMovies, args) => {
    setLoading(true);
    try {
      const result = await fetchMovies(...args);
      return result;
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return [fetching, isLoading, error];
}

function useObesrver(lastElement, canload, isLoading, callback) {
  const observer = useRef();
  useEffect(() => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();

    const callObesrver = function (entries) {
      if (entries[0].isIntersecting && canload) {
        callback();
      }
    };
    observer.current = new IntersectionObserver(callObesrver);
    observer.current.observe(lastElement.current);
  }, [isLoading]);
}
export { useHover, useFetchMovie, useObesrver };
