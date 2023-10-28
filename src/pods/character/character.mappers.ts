import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.Character
): viewModel.Character => ({
  ...character,
  id: character.id,
  image: character.image,
  name: character.name,
  status: character.status,
  gender: character.gender,
  origin: character.origin.name,
});

export const mapCharacterFromVmToApi = (character: viewModel.Character): apiModel.Character =>
  (({
    ...character,
    id: character.id,
    image: character.image,
    name: character.name,
    status: character.status,
    gender: character.gender,
    origin: character.origin,
  } as unknown) as apiModel.Character);
