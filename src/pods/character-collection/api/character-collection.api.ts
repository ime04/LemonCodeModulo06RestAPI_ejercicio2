import axios from 'axios';
import { CharacterEntityApi } from './character-collection.api-model';

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  return axios.get('/api/characters')
  .then(function (response) {
    return response.data;
  })
  .catch(function (error) {
    console.log(error);
  })
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  return true;
};
