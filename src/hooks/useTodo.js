import { useEffect, useState } from "react";
import axios from "axios";

const useTodo = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    setLoading(true);
    setError(false);
    axios({
      method: "GET",
      url: "https://thawing-reef-32246.herokuapp.com/api/todo/",
    })
      .then((res) => {
        setTodo(res.data.results);
        setLoading(false);
      })
      .catch((e) => {
        setError(true);
        setLoading(false);
      });
  }, []);
  return { loading, error, todo };
};

export default useTodo;
