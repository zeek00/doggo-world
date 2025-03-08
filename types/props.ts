export interface ButtonProps{
    to: string;
    hoverColor?: string;
    borderColor?: string;
}

export interface LinkProps extends ButtonProps {
    type?: string;
    close?: () => void;

}