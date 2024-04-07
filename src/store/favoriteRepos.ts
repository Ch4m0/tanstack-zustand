import { create } from "zustand";
import { persist } from "zustand/middleware";

type FavoriteReposState = {
  favoriteReposIds: number[];
  addFavoriteRepos: (id: number) => void;
  removeFavoriteRepos: (id: number) => void;
};

export const useFavoriteReposStore = create(
  persist<FavoriteReposState>(
    (set) => ({
      favoriteReposIds: [],
      addFavoriteRepos: (id: number) =>
        set((state) => ({
          favoriteReposIds: [...state.favoriteReposIds, id],
        })),
      removeFavoriteRepos: (id: number) =>
        set((state) => ({
          favoriteReposIds: state.favoriteReposIds.filter((el) => el !== id),
        })),
    }),
    {
      name: "favorite-repos",
    }
  )
);
