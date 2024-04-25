import { useEffect, useRef } from "react";

function useScrollOnPropChange<T>(
  prop: unknown,
): React.MutableRefObject<T | null> {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (ref.current) {
      const element = ref.current as unknown as HTMLElement;
      element.scrollTop = element.scrollHeight;
    }
  }, [prop]);

  return ref;
}

export default useScrollOnPropChange;
