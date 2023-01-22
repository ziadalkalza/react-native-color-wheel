type OrientationType = 'horizontal' | 'vertical'
type DirectionType = 'positive' | 'negative'
type RotationType = 'clockwise' | 'anticlockwise'
type SliderType = 'saturation' | 'lightness' | 'opacity'
type ColorFormat = 'hex' | 'rgb' | 'rgba' | 'hsl' | 'hsla' | 'hsv'
type DimensionType = 'relative' | 'absolute'

export interface DimensionsProp {
    type: DimensionType
    width: number
    height: number
}

export interface CustomSliderProp {
    length?: number
    sliderType: SliderType
    value: number
    setValue?: React.Dispatch<React.SetStateAction<number>>
    hue?: number
    minValue?: number
    maxValue?: number
    direction?: DirectionType
    trackWidth?: number
    trackBorderColor?: string
    trackBorderWidth?: number
    thumbSize?: number
    thumbBorderWidth?: number
    thumbBorderColor?: string
    borderRadius?: number
    orientation?: OrientationType
    xOffset?: number
    yOffset?: number
}

export interface SliderProp {
    enable: boolean
    length: number
    value: number
    minValue: number
    maxValue: number
    direction: DirectionType
    trackWidth: number
    trackBorderColor?: string
    trackBorderWidth: number
    thumbSize: number
    thumbBorderWidth: number
    thumbBorderColor?: string
    borderRadius: number
    orientation: OrientationType
    xOffset: number
    yOffset: number
}

export interface WheelProp {
    value: number
    size: number
    rotation: RotationType
    degreeOffset: number
    trackWidth: number
    thumbSize: number
    thumbBorderWidth: number
    thumbBorderColor?: string
    xOffset: number
    yOffset: number
}
export interface onChangeArg {
    value: string
    data?: {
        hue?: number
        saturation?: number
        lightness?: number
        value?: number
        opacity?: number
        red?: number
        green?: number
        blue?: number
    }
}
export interface Props {
    hueWheel?: WheelProp
    saturationSlider?: SliderProp
    lightnessSlider?: SliderProp
    opacitySlider?: SliderProp
    CustomComponent?: React.ComponentType
    customComponentProps?: {
        xOffset: number
        yOffset: number
    }
    dimensions?: DimensionsProp
    colorFormat?: ColorFormat
	onChange?: (x: onChangeArg) => onChangeArg
}