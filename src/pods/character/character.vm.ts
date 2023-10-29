export interface Character {
  id: string;
  image: string;
  name: string;
  status: string;
  gender: string;
  bestSentences: [],
  origin: string;
}

export const createEmptyCharacter = (): Character => ({
  id: '',
  name: '',
  image: 'https://rickandmortyapi.com/api/character/avatar/442.jpeg',
  status: '',
  gender: '',
  bestSentences: [],
  origin: '',
});
