import { StateSchema } from 'app/providers/store-provider';

export const getProfileForm = ({ profile }: StateSchema) => profile?.form;
