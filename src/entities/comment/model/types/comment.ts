import { User } from 'entities/user';

export interface Comment {
  id: string;
  text: string;
  user: User;
}
