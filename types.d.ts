import { Ref } from "atomico";

declare module "@atomico/kit/use-css" {
  interface CSS {
    (param: TemplateStringsArray, ...args: any[]): string;
    (param: string): string;
    ref: Ref<HTMLStyleElement>;
  }
  export function useCss(): CSS;
}

declare module "@atomico/kit/use-router" {
  export interface Params {
    [param: string]: string;
  }

  export type RouteCallback<R = any> = (params: Params, search: Params) => R;

  export interface Routes {
    [path: string]: RouteCallback;
  }

  export type Result<T> = [T, string, Params, Params];

  export function redirect(path: string): void;

  export function useRouter<T = any>(routes: Routes): Result<T>;
  export function useRoute<T = any>(
    path: string,
    callback?: RouteCallback<T>
  ): Result<T>;
}

declare module "@atomico/kit/use-delegate-focus" {
  export function useDelegateFocus(ref: Ref): void;
}

declare module "@atomico/kit/use-slots" {
  export interface SlotElements {
    [slot: string]: Element;
  }

  export type SlotsChildren = ChildNode[];

  export function useSlots(): [SlotElements, SlotsChildren, () => void];
}

declare module "@atomico/kit/use-render" {
  type Callback = () => any;
  export function useRender(callback: Callback, args?: any[]): void;
}

declare module "@atomico/kit/use-queue" {
  export function useQueue<E = any, R = E>(
    colector: (entries: E[]) => any,
    reduce?: (param: R) => E
  ): (param: R) => R | E;
}