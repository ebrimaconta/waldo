'use client';
import { ButtonHTMLAttributes, FC } from 'react';
import { SpaceProps } from 'styled-system';
import { ColorOptions } from '@app/definitions';
import StyledComponentIcon from './styles';

export interface IconProps {
  size?: string;
  children: string;
  transform?: string;
  color?: ColorOptions;
  variant?: 'small' | 'medium' | 'large';
  defaultcolor?: 'currentColor' | 'auto';
}

type ComponentProps = IconProps & SpaceProps & ButtonHTMLAttributes<IconProps>;

const Icon: FC<ComponentProps> = ({
  variant = 'medium',
  defaultcolor = 'currentColor',
  children,
  ...props
}) => {
  return (
    // @ts-ignore
    <StyledComponentIcon
      src={`/assets/images/icons/${children}.svg`}
      fallback={() => <span>{children?.trim()}</span>}
      variant={variant}
      // defaultcolor="currentColor"
      defaultcolor={defaultcolor}
      {...props}
    />
  );
};

export default Icon;
