export interface Character {
  id: string;
  image: string;
  name: string;
  status: string;
  gender: string;
  origin: string;
}

export const createEmptyCharacter = (): Character => ({
  id: '',
  name: '',
  image: '',
  status: '',
  gender: '',
  origin: '',
});
