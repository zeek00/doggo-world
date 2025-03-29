export interface ButtonProps{
    to: string;
    hoverColor?: string;
    borderColor?: string;
    bgColor?: string;
}

export interface LinkProps extends ButtonProps {
    type?: string;
    close?: () => void;

}