# Documentation

## Components

The library contains two usable components.

1. A ColorWheel, which contains the
   hue wheel, saturation, lightness and opacity sliders
   and an additional custom prop.

2. A CustomSlider that can be configured as a standalone
   saturation, lightness or opacity slider.

### ColorWheel Props

#### hueWheel (WheelProp)

Is the main color wheel object that controls the hue.

| Parameter        | Value                        | Default Value | Type     |
| :--------------- | :--------------------------- | :------------ | :------- |
| value            | 0 - 360                      | 0             | `string` |
| size             | -                            | 200           | `number` |
| rotation         | `clockwise`, `anticlockwise` | clockwise     | `string` |
| degreeOffset     | 0 - 360                      | 0             | `number` |
| trackWidth       | -                            | 10            | `number` |
| thumbSize        | -                            | 10            | `number` |
| thumbBorderWidth | -                            | 3             | `number` |
| thumbBorderColor | `Hex Color`                  | -             | `string` |
| xOffset          | -                            | 0             | `number` |
| yOffset          | -                            | 0             | `number` |

#### saturationSlider (SliderProp)

Slider for saturation.

| Parameter        | Value                    | Default Value | Type      |
| :--------------- | :----------------------- | :------------ | :-------- |
| enable           | `true`, `false`          | false         | `boolean` |
| value            | 0 - 100                  | 100           | `number`  |
| minValue         | 0 - 99                   | 0             | `number`  |
| maxValue         | 1 - 100                  | 100           | `number`  |
| direction        | `positive`, `negative`   | positive      | `string`  |
| orientation      | `horizontal`, `vertical` | horizontal    | `string`  |
| length           | -                        | 100           | `number`  |
| trackWidth       | -                        | 10            | `number`  |
| trackBorderWidth | -                        | 0             | `number`  |
| trackBorderColor | `Hex Color`              | -             | `string`  |
| thumbSize        | -                        | 10            | `number`  |
| thumbBorderWidth | -                        | 0             | `number`  |
| thumbBorderColor | `Hex Color`              | -             | `string`  |
| borderRadius     | -                        | 0             | `number`  |
| xOffset          | -                        | 0             | `number`  |
| yOffset          | -                        | 0             | `number`  |

#### lightnessSlider (SliderProp)

Slider for lightness.

| Parameter        | Value                    | Default Value | Type      |
| :--------------- | :----------------------- | :------------ | :-------- |
| enable           | `true`, `false`          | false         | `boolean` |
| value            | 0 - 100                  | 50            | `number`  |
| minValue         | 0 - 99                   | 0             | `number`  |
| maxValue         | 1 - 100                  | 100           | `number`  |
| direction        | `positive`, `negative`   | positive      | `string`  |
| orientation      | `horizontal`, `vertical` | horizontal    | `string`  |
| length           | -                        | 100           | `number`  |
| trackWidth       | -                        | 10            | `number`  |
| trackBorderWidth | -                        | 0             | `number`  |
| trackBorderColor | `Hex Color`              | -             | `string`  |
| thumbSize        | -                        | 10            | `number`  |
| thumbBorderWidth | -                        | 0             | `number`  |
| thumbBorderColor | `Hex Color`              | -             | `string`  |
| borderRadius     | -                        | 0             | `number`  |
| xOffset          | -                        | 0             | `number`  |
| yOffset          | -                        | 0             | `number`  |

#### opacitySlider (SliderProp)

Slider for opacity.

| Parameter        | Value                    | Default Value | Type      |
| :--------------- | :----------------------- | :------------ | :-------- |
| enable           | `true`, `false`          | false         | `boolean` |
| value            | 0 - 1                    | 1             | `number`  |
| minValue         | 0 - 0.99                 | 0             | `number`  |
| maxValue         | 0.01 - 1                 | 1             | `number`  |
| direction        | `positive`, `negative`   | positive      | `string`  |
| orientation      | `horizontal`, `vertical` | horizontal    | `string`  |
| length           | -                        | 100           | `number`  |
| trackWidth       | -                        | 10            | `number`  |
| trackBorderWidth | -                        | 0             | `number`  |
| trackBorderColor | `Hex Color`              | -             | `string`  |
| thumbSize        | -                        | 10            | `number`  |
| thumbBorderWidth | -                        | 0             | `number`  |
| thumbBorderColor | `Hex Color`              | -             | `string`  |
| borderRadius     | -                        | 0             | `number`  |
| xOffset          | -                        | 0             | `number`  |
| yOffset          | -                        | 0             | `number`  |

#### CustomComponent

Custom prop that could be included for added customisation.
This custom component is a `JSX Component` and is null by default.

#### customComponentProps

| Parameter | Value | Default Value | Type     |
| :-------- | :---- | :------------ | :------- |
| xOffset   | -     | 0             | `number` |
| yOffset   | -     | 0             | `number` |

#### dimensions

The dimensions of the parent component ColorWheel, which encapsulates all child components.

| Parameter | Value                  | Default Value | Type     |
| :-------- | :--------------------- | :------------ | :------- |
| type      | `relative`, `absolute` | relative      | `string` |
| width     | -                      | 200           | `number` |
| height    | -                      | 200           | `number` |

#### colorFormat

The format of the color that will be returned in the onChange callback function.

| Parameter   | Value                                      | Default Value | Type     |
| :---------- | :----------------------------------------- | :------------ | :------- |
| colorFormat | `Hex`, `rgb`, `rgba`, `hsl`, `hsla`, `hsv` | hsla          | `string` |

#### onChange (Callback Function)

This callback function returns information related to the color selected,
which contains a string of the color in the chosen color format `value`,
and an object containing isolated variables making up the color `data`.
The props inside the data object are null when they are not related to the
color type, for example, `red` will be null if colorFormat is `hsv`, and
only `hue`, `saturation` and `value` will be non null values.

| Parameter | Type     |
| :-------- | :------- |
| value     | `string` |
| data      | `object` |

```
data: {
    hue: number,
    saturation: number,
    lightness: number,
    opacity: number,
    value: number,
    red: number,
    green: number,
    blue: number,
}
```

### CustomSlider Props

This is a custom slider that can be used separately.
It does not contain an offset because you should
encapsulate it in a view, and specify its position
manually. Brackets show ranges for opacity, as its range
differs from lightness and saturation.

| Parameter        | Value                                | Default Value | Type                |
| :--------------- | :----------------------------------- | :------------ | :------------------ |
| sliderType       | `lightness`, `saturation`, `opacity` | lightness     | `string`            |
| value            | 0 - 100 (0 - 1)                      | 0 (1)         | `number`            |
| setValue         | -                                    | -             | `Callback Function` |
| hue              | 0 - 360                              | 0             | `number`            |
| minValue         | 0 - 99 (0 - 0.99)                    | 0             | `number`            |
| maxValue         | 1 - 100 (0.01 - 1)                   | 1             | `number`            |
| direction        | `positive`, `negative`               | positive      | `string`            |
| orientation      | `horizontal`, `vertical`             | horizontal    | `string`            |
| length           | -                                    | 100           | `number`            |
| trackWidth       | -                                    | 10            | `number`            |
| trackBorderWidth | -                                    | 0             | `number`            |
| trackBorderColor | `Hex Color`                          | -             | `string`            |
| thumbSize        | -                                    | 10            | `number`            |
| thumbBorderWidth | -                                    | 0             | `number`            |
| thumbBorderColor | `Hex Color`                          | -             | `string`            |
| borderRadius     | -                                    | 0             | `number`            |
| xOffset          | -                                    | 0             | `number`            |
| yOffset          | -                                    | 0             | `number`            |

## Prop Details

### WheelProp

#### value

The initial value that should appear when the component is rendered.

#### size

The size of the color wheel in pixels.

#### rotation

What direction the hue value changes. Clockwise means the color ascends from 0 (red) in a clockwise direction along the wheel, and vice versa.

#### degreeOffset

Where the color red (hue = 0) begins, the value corresponds to the angle difference from the east. The colors will shift from the default position in the direction of the rotation type.

#### trackWidth

The width of the track containing the colors.

#### thumbSize

The radius of the thumb used to change colors.

#### thumbBorderWidth

The thickness of the border of the thumb. Recommended that its smaller than the thumbSize.

#### thumbBorderColor

The fill color of the thumb will depend on the hue value, but the border of the thumb can be specified.

#### xOffset

How much the component is shifted in the x direction, in pixels.

#### yOffset

How much the component is shifted in the y direction, in pixels.

### Slider Prop

#### enable

Whether the component should be rendered or not.

#### value

The initial value that should appear when the component is rendered.

#### minValue

The lower bound of the range of selectable values.

#### maxValue

The upper bound of the range of selectable values.

#### direction

Direction the colors increment. Positive means from left to right, and vice versa.

#### orientation

How the slider is positioned.

#### length

#### trackWidth

The width of the slider.

#### trackBorderWidth

The thickness of the slider's border.

#### trackBorderColor

The color of the slider's border.

#### thumbSize

The radius of the thumb used to change colors.

#### thumbBorderWidth

The thickness of the border of the thumb. Recommended that its smaller than the thumbSize.

#### thumbBorderColor

The fill color of the thumb will depend on the hue value, but the border of the thumb can be specified.

#### BorderRadius

The border radius of the slider.

#### xOffset

How much the component is shifted in the x direction, in pixels.

#### yOffset

How much the component is shifted in the y direction, in pixels.

### Dimensions Prop

#### type

Position of all child components inside the ColorWheel component. Relative means that the child components are contained within the specified width and height. Otherwise, they'll overlap each other.

#### width

Width of the ColorWheel component, which should be set accordingly to fit all child components.

#### height

Height of the ColorWheel component, which should be set accordingly to fit all child components.

#
