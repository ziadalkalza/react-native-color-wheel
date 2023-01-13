import { SliderProp, WheelProp, DimensionsProp } from "./props"

export const defaultCustomSlider = {
    length: 100,
    sliderType: 'lightness',
    defaultValue: 0,
    hue: 0,
    minValue: 0,
    maxValue: 100,
    direction: 'positive',
    trackWidth: 10,
    thumbSize: 10,
    thumbBorderWidth: 3,
    thumbBorderColor: '#fff',
    orientation: 'horizontal',
}
export const defaultHueWheel: WheelProp = {
    defaultValue: 0,
    size: 200,
    rotation: 'clockwise',
    degreeOffset: 0,
    trackWidth: 10,
    thumbSize: 10,
    thumbBorderWidth: 3,
    thumbBorderColor: '#fff',
    xOffset: 0,
    yOffset: 0,
}
export const defaultSaturationSlider: SliderProp = {
    enable: false,
    defaultValue: 100,
    minValue: 0,
    maxValue: 100,
    direction: 'positive',
    orientation: 'horizontal',
    length: 100,
    trackWidth: 10,
    thumbSize: 10,
    thumbBorderWidth: 3,
    thumbBorderColor: '#fff',
    xOffset: 0,
    yOffset: 0,
}
export const defaultLightnessSlider: SliderProp = {
    enable: false,
    defaultValue: 50,
    minValue: 0,
    maxValue: 100,
    direction: 'positive',
    length: 100,
    trackWidth: 10,
    thumbSize: 10,
    thumbBorderWidth: 3,
    thumbBorderColor: '#fff',
    orientation: 'horizontal',
    xOffset: 0,
    yOffset: 20,
}
export const defaultOpacitySlider: SliderProp = {
    enable: false,
    defaultValue: 1,
    minValue: 0,
    maxValue: 1,
    direction: 'positive',
    length: 100,
    trackWidth: 10,
    thumbSize: 10,
    thumbBorderWidth: 3,
    thumbBorderColor: '#fff',
    orientation: 'horizontal',
    xOffset: 0,
    yOffset: 0,
}
export const defaultCustomComponentProps = {
    xOffset: 0,
    yOffset: 0,
}
export const defaultDimensions: DimensionsProp = {
    type: 'relative',
    width: 200,
    height: 220,
}
export const defaultColorFormat = 'hsla'
