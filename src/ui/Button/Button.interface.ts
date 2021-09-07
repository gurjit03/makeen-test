type Variant = 'contained'| 'outlined'
type Color = 'primary' | 'secondary'

export interface Button {
    variant: Variant;
    color: Color;
    onClick?: () => {};
    marginBottom?: number;
    children: React.ReactChild
}
