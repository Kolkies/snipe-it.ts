import { HardwareManager } from "./Hardware/HardwareManager";

export class Snipe {
  hardware: HardwareManager;

  constructor(private snipeURL: string, private accessToken: string) {
  	this.hardware = new HardwareManager(snipeURL, accessToken);
  }

	// public static init(snipeURL: string, accessToken: string) {
	// 	return new Snipe(snipeURL, accessToken);
	// }
}