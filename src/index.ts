import { registerPlugin } from '@capacitor/core';

import type { IKeystorePluginPlugin } from './definitions';

const IKeystorePlugin = registerPlugin<IKeystorePluginPlugin>(
  'IKeystorePlugin',
  {
    web: () => import('./web').then(m => new m.IKeystorePluginWeb()),
  },
);

export * from './definitions';
export { IKeystorePlugin };
