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

  async decrypt(options: { value: string; }): Promise<{ value: string; }> {
    console.log("option input", options.value);
    return { value: "test" };
  }
  async encrypt(options: { value: string; }): Promise<{ value: string; }> {
    console.log("option input", options.value);
    return { value: "test" };
  }
}
