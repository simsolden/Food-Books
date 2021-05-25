import { Filters } from '../components/recipes-list/filters';

export const createRequestUrl = (title: string | null, filters: Filters | null) => {
  let url = '';

  if (title) {
    url += `&title=${title}`;
  }

  if (filters) {
    for (const type of filters.types) {
      const capitalizedType = type.charAt(0).toUpperCase() + type.slice(1);
      url += `&type=${capitalizedType}`;
    }

    for (const category of filters.categories) {
      url += `&categories=${category}`;
    }

    for (const speed of filters.prepTime) {
      url += `&speed=${speed}`;
    }

    for (const difficultyElement of filters.difficulty) {
      url += `&difficulty=${difficultyElement}`;
    }
  }

  return url;
};
