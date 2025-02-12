import { useEffectAfterMount } from "./useEffectAfterMount";

const useDebouncedEffect = (effect: () => void, deps: any[], delay: number) => {
  useEffectAfterMount(() => {
    const handler = setTimeout(() => {
      effect();
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [...deps, delay]);
};

useDebouncedEffect.displayName = "useDebouncedEffect";

export { useDebouncedEffect };
