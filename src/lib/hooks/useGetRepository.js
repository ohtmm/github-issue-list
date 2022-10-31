import { useEffect, useState } from "react";
import { getRepository } from "../api/api";

const useGetRepository = () => {
  const [repo, setRepo] = useState({});
  useEffect(() => {
    getRepository.then((res) => {
      setRepo({
        owner: res.owner.login,
        repo: res.name
      });
    });
  }, []);
  return repo;
};

export default useGetRepository;
