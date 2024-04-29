'use client';
import { FC } from 'react';
import { BorderProps, ColorProps } from 'styled-system';
import StyledComponentAvatar from './styles';

export interface AvatarProps extends BorderProps, ColorProps {
  src?: string;
  size?: number;
  children?: any;
  [key: string]: any;
}

const Avatar: FC<AvatarProps> = ({ src, size = 48, children, ...props }) => {
  return (
    <StyledComponentAvatar size={size} {...props}>
      {src && <img src={src} alt='avatar' />}
      {!src && children && <span>{children}</span>}
    </StyledComponentAvatar>
  );
};

export default Avatar;

