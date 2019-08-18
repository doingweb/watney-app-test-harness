import { WatneyApp, WatneyScriptBase } from 'watney-app';
import { HuePlugin } from 'watney-plugin-hue';

export default class ExampleScript extends WatneyScriptBase {
  public static get id() {
    return 'example-script';
  }

  public async run(app: WatneyApp) {
    this.logger.log('Our script is running. How cool!');

    const hue = app.plugins.get('hue') as HuePlugin;

    const [hallwayLight] = hue.getLights('hallway');

    await hallwayLight.turnOn();
    await new Promise(resolve => setTimeout(resolve, 5000));
    await hallwayLight.turnOff();
  }
}
