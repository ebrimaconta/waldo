'use client';

import StyledComponentSticky from './styles';
import {
  FC,
  cloneElement,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

export type StickyProps = {
  fixedOn: number;
  children?: ReactElement;
  notifyPosition?: number;
  containerRef?: { current: any };
  onSticky?: (isFixed: boolean) => void;
  notifyOnScroll?: (hasReachedPosition: boolean) => void;
};

const Sticky: FC<StickyProps> = (props) => {
  const {
    fixedOn,
    containerRef,
    children,
    notifyPosition,
    notifyOnScroll,
    onSticky,
  } = props;

  const elementRef = useRef<any>(null);
  const positionRef = useRef<any>(null);
  const [fixed, setFixed] = useState(false);
  const [parentHeight, setParentHeight] = useState(0);

  const scrollListener = useCallback(() => {
    if (!window) return;

    let distance = window.scrollY - positionRef.current;

    if (containerRef?.current) {
      let containerDistance =
        containerRef.current.offsetTop +
        containerRef.current?.offsetHeight -
        window.scrollY;

      if (notifyPosition && notifyOnScroll) {
        notifyOnScroll(
          distance <= notifyPosition && containerDistance > notifyPosition
        );
      }
      return setFixed(distance <= fixedOn && containerDistance > fixedOn);
    }

    if (notifyPosition && notifyOnScroll) {
      notifyOnScroll(distance >= notifyPosition);
    }

    let isFixed = distance >= fixedOn;
    setFixed(isFixed);
  }, []);

  useEffect(() => {
    if (!window) return;

    window.addEventListener('scroll', scrollListener);
    window.addEventListener('resize', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
      window.removeEventListener('resize', scrollListener);
    };
  }, []);

  useEffect(() => {
    if (!positionRef.current) {
      positionRef.current = elementRef.current?.offsetTop;
    }
    setParentHeight(elementRef.current?.offsetHeight || 0);
  }, [elementRef.current, children]);

  useEffect(() => {
    if (onSticky) onSticky(fixed);
  }, [fixed]);

  return (
    <StyledComponentSticky
      fixed={fixed}
      ref={elementRef}
      fixedOn={fixedOn}
      componentHeight={parentHeight}
      componentPosition={positionRef.current}
    >
      {children && cloneElement(children, { isFixed: fixed })}
    </StyledComponentSticky>
  );
};

export default Sticky;
