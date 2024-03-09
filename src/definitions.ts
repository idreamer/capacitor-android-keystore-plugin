declare module "@capacitor/core" {
  interface PluginRegistry {
    IKeystorePlugin: IKeystorePluginPlugin;
  }
}

export interface IKeystorePluginPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  encrypt(options: { value: string }): Promise<{ value: string }>;
  decrypt(options: { value: string }): Promise<{ value: string }>;
}
