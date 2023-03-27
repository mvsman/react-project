import { StateSchema } from 'app/providers/store-provider';

export const getProfileDirty = ({ profile }: StateSchema) => profile?.dirty;
