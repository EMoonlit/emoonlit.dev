declare module 'blip-chat-widget' {
    export class BlipChat {
      constructor();
      withAppKey(appKey: string): this;
      withButton(options: { color: string }): this;
      build(): void;
    }
  }
  