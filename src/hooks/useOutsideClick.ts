import React from 'react';

interface UseOutsideClickArgs {
    initial: boolean;
    callback: (event: MouseEvent) => void
}

export const useOutsideClick = (args: UseOutsideClickArgs) => {
  const {initial = false, callback = (event: MouseEvent) => {} } = args;
  const [isClickedOutside, setIsClickedOutside] = React.useState<boolean>(initial);
  const ref = React.useRef<HTMLElement>();
  React.useEffect(() => {
    const listener = (event: MouseEvent): any => {
      if (ref.current && !ref.current.contains(event.target as Element)) {
        setIsClickedOutside(false);    
        callback(event as MouseEvent);
      }
    };
    document.addEventListener('mousedown', listener, true);
    
    return () => {
      document.removeEventListener('mousedown', listener, true);
    };
  });
  return [isClickedOutside, setIsClickedOutside, ref];
};