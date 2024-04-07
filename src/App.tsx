import "./App.css";
import Card from "./components/Card";
import { useFetchRepositories } from "./hooks/useRepo";
import { useFavoriteReposStore } from "./store/favoriteRepos";

function App() {
  const { data, isPending } = useFetchRepositories("ch4m0");
  const { favoriteReposIds } = useFavoriteReposStore();

  if (isPending) return <div>Loading ...</div>;

  console.log(data, "data");

  return (
    <div>
      {data?.map((repository, index) => (
        <Card
          repository={repository}
          isFavorite={favoriteReposIds.includes(repository.id)}
          key={index}
        />
      ))}
    </div>
  );
}

export default App;
