import { TEnhancer, TPlugin } from 'fela';

export interface AnyObject {
	[key: string]: any;
}
export interface Options {
	method: string;
	defStyles?: ((vm: AnyObject) => AnyObject) | {
		key: string;
		value: ((vm?: AnyObject) => AnyObject);
	};
	preset: {
		unit: [string, AnyObject] | [];
	};
	plugins: TPlugin[];
	enhancers: TEnhancer[];
	ssr: boolean;
}
export declare const css: (strings: string[] | TemplateStringsArray, ...values: any[]) => any;
export declare class Renderer {
	private renderer;
	private _mixin;
	get mixin(): AnyObject;
	get style(): string;
	constructor(opts?: Partial<Options>);
}

export {};
