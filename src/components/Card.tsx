import { Repository } from "../hooks/types";
import { useFavoriteReposStore } from "../store/favoriteRepos";

type CardRepository = {
  repository: Repository;
  isFavorite: boolean;
};

const Card = ({ repository, isFavorite }: CardRepository) => {
  const { addFavoriteRepos, removeFavoriteRepos } = useFavoriteReposStore();

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavoriteRepos(repository.id);
      return;
    }
    addFavoriteRepos(repository.id);
  };

  return (
    <div>
      <h1>{repository.name}</h1>
      <button onClick={() => toggleFavorite()}>
        {isFavorite ? "Dislike" : "Like"}
      </button>
    </div>
  );
};

export default Card;
