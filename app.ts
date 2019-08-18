import { WatneyApp } from 'watney-app';
import { HuePlugin } from 'watney-plugin-hue';
import ExampleScript from './scripts/example';

export default new WatneyApp({
  plugins: [HuePlugin],
  scripts: [ExampleScript]
});
