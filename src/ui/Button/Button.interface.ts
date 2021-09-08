export type Variant = 'contained'| 'outlined'
export type Color = 'primary' | 'secondary'

export interface Button {
    variant: Variant;
    color: Color;
    onClick?: () => void;
    marginBottom?: number;
    children: React.ReactChild
}
