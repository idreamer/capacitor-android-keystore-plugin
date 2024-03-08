export interface IKeystorePluginPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
