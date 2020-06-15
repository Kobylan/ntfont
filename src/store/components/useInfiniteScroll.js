import { useState, useEffect } from "react";
let h = 1;

const useInfiniteScroll = (callback) => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    callback(() => {
      console.log("called back");
    });
  }, [isFetching]);

  function handleScroll() {
    var scrollHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
    console.log(
      "qwe",
      document.documentElement.scrollTop + window.innerHeight,
      "qwqwe",
      scrollHeight
    );

    if (
      window.innerHeight + document.documentElement.scrollTop !==
        scrollHeight ||
      isFetching
    )
      return;
    setIsFetching(true);
  }

  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;
