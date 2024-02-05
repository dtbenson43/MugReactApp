import { useEffect } from "react";

export const useCustomEventListener = <T,>(eventName: string, eventHandler: (detail: T) => void) => {
  useEffect(() => {
      const handler = (event: Event) => {
          const customEvent = event as CustomEvent<T>;
          eventHandler(customEvent.detail);
      };
      window.addEventListener(eventName, handler);

      return () => {
          window.removeEventListener(eventName, handler);
      };
  }, [eventName, eventHandler]);
};

export const dispatchCustomEvent = <T>(eventName: string, detail: T) => {
  const event = new CustomEvent<T>(eventName, { detail });
  window.dispatchEvent(event);
}