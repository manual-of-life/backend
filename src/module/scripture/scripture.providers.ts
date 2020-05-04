import { Connection } from 'mongoose';
import { ScriptureSchema } from './scripture.schema';

import { CInjectable, CProvider } from '../constants';

export const scriptureProviders = [
  {
    provide: CProvider.Model.SCRIPTURE,
    useFactory: (connection: Connection) => connection.model('Scripture', ScriptureSchema),
    inject: [CInjectable.Connection.DB],
  },
];
