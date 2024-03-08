import { WebPlugin } from '@capacitor/core';

import type { IKeystorePluginPlugin } from './definitions';

export class IKeystorePluginWeb
  extends WebPlugin
  implements IKeystorePluginPlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
