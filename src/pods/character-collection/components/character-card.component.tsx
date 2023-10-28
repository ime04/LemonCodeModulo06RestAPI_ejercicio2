import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar/Avatar';
import IconButton from '@mui/material/IconButton/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { CharacterEntityVm } from '../character-collection.vm';

interface Props {
  character: CharacterEntityVm;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onEdit, onDelete } = props;

  return (
    <Card>
      <CardHeader
        avatar={<Avatar aria-label="Character" src={character.image} />}
        title={character.name}
        subheader={character.name}
      />
      <CardContent>
        <div className={character.name}>
          <Typography variant="subtitle1" gutterBottom>
            Gender: {character.gender}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Origin: {character.origin}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Status: {character.status}
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => onEdit(character.id)}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => onDelete(character.id)}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
