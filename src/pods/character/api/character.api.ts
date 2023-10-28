import { Character } from './character.api-model';
import axios from 'axios';

export const getCharacter = async (id: string): Promise<Character> => {
  return axios.get(`/api/characters/${id}`)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    })
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
