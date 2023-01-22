import { SliderProp, CustomSliderProp, WheelProp, DimensionsProp } from "./props"

export const defaultCustomSlider: CustomSliderProp = {
    length: 100,
    sliderType: 'lightness',
    value: 0,
    hue: 0,
    minValue: 0,
    maxValue: 100,
    direction: 'positive',
    trackWidth: 10,
    trackBorderWidth: 0,
    thumbSize: 10,
    thumbBorderWidth: 3,
    borderRadius: 5,
    orientation: 'horizontal',
    xOffset: 0,
    yOffset: 0,
}
export const defaultHueWheel: WheelProp = {
    value: 0,
    size: 200,
    rotation: 'clockwise',
    degreeOffset: 0,
    trackWidth: 10,
    thumbSize: 10,
    thumbBorderWidth: 3,
    xOffset: 0,
    yOffset: 0,
}
export const defaultSaturationSlider: SliderProp = {
    enable: false,
    value: 100,
    minValue: 0,
    maxValue: 100,
    direction: 'positive',
    length: 100,
    trackWidth: 10,
    trackBorderWidth: 0,
    thumbSize: 10,
    thumbBorderWidth: 0,
    borderRadius: 5,
    orientation: 'horizontal',
    xOffset: 0,
    yOffset: 0,
}
export const defaultLightnessSlider: SliderProp = {
    enable: false,
    value: 50,
    minValue: 0,
    maxValue: 100,
    direction: 'positive',
    length: 100,
    trackWidth: 10,
    trackBorderWidth: 0,
    thumbSize: 10,
    thumbBorderWidth: 3,
    borderRadius: 5,
    orientation: 'horizontal',
    xOffset: 0,
    yOffset: 20,
}
export const defaultOpacitySlider: SliderProp = {
    enable: false,
    value: 1,
    minValue: 0,
    maxValue: 1,
    direction: 'positive',
    length: 100,
    trackWidth: 10,
    trackBorderWidth: 0,
    thumbSize: 10,
    thumbBorderWidth: 3,
    borderRadius: 5,
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
