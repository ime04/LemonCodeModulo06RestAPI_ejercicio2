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
  if (character.id) {
    axios.put(`api/characters/${character.id}`, character).then(function (response) {
      alert('Character was updated successfuly');
    }).catch(function (error) {
      console.log(error);
    })
  } else {
    axios.post('api/characters', character).then(function (response) {
      alert('Character was added successfuly');
    }).catch(function (error) {
      console.log(error);
    })
  }
  return true;
};
