import styled from 'styled-components';
import { IButtonProps } from './types';


export const ButtonContainer = styled.button<IButtonProps>`
    width: 100%;
    height: 42px;
    background-color: ${({ disabled }) => (!disabled ? '#81259D' : '#D9D9D9')};
    color: #FFF;

    border: 1px solid #81259D;
    border-radius: 21px;

    &:hover {
        opacity: 0.6;
        cursor:pointer;
    }
`