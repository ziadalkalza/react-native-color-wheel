# Documentation

## Components

The library contains two usable components.

1. A ColourWheel, which contains the
   hue wheel, saturation, lightness and opacity sliders
   and an additional custom prop.

2. A CustomSlider that can be configured as a standalone
   saturation, lightness or opacity slider.

### ColourWheel Props

#### hueWheel (WheelProp)

Is the main colour wheel object that controls the hue.

| Parameter         | Value                        | Default Value | Type     |
| :---------------- | :--------------------------- | :------------ | :------- |
| defaultValue      | 0 - 360                      | 0             | `string` |
| size              | -                            | 200           | `number` |
| rotation          | `clockwise`, `anticlockwise` | clockwise     | `string` |
| degreeOffset      | 0 - 360                      | 0             | `number` |
| trackWidth        | -                            | 10            | `number` |
| thumbSize         | -                            | 10            | `number` |
| thumbBorderWidth  | -                            | 3             | `number` |
| thumbBorderColour | `Hex Colour`                 | `#fff`        | `string` |
| xOffset           | -                            | 0             | `number` |
| yOffset           | -                            | 0             | `number` |

#### saturationSlider (SliderProp)

Slider for saturation.

| Parameter         | Value                    | Default Value | Type      |
| :---------------- | :----------------------- | :------------ | :-------- |
| enable            | `true`, `false`          | false         | `boolean` |
| defaultValue      | 0 - 100                  | 0             | `number`  |
| minValue          | 0 - 99                   | 0             | `number`  |
| maxValue          | 1 - 100                  | 100           | `number`  |
| direction         | `positive`, `negative`   | positive      | `string`  |
| orientation       | `horizontal`, `vertical` | horizontal    | `string`  |
| length            | -                        | 100           | `number`  |
| trackWidth        | -                        | 10            | `number`  |
| thumbSize         | -                        | 10            | `number`  |
| thumbBorderWidth  | -                        | 3             | `number`  |
| thumbBorderColour | `Hex Colour`             | `#fff`        | `string`  |
| xOffset           | -                        | 0             | `number`  |
| yOffset           | -                        | 0             | `number`  |

#### lightnessSlider (SliderProp)

Slider for lightness.

| Parameter         | Value                    | Default Value | Type      |
| :---------------- | :----------------------- | :------------ | :-------- |
| enable            | `true`, `false`          | false         | `boolean` |
| defaultValue      | 0 - 100                  | 50            | `number`  |
| minValue          | 0 - 99                   | 0             | `number`  |
| maxValue          | 1 - 100                  | 100           | `number`  |
| direction         | `positive`, `negative`   | positive      | `string`  |
| orientation       | `horizontal`, `vertical` | horizontal    | `string`  |
| length            | -                        | 100           | `number`  |
| trackWidth        | -                        | 10            | `number`  |
| thumbSize         | -                        | 10            | `number`  |
| thumbBorderWidth  | -                        | 3             | `number`  |
| thumbBorderColour | `Hex Colour`             | `#fff`        | `string`  |
| xOffset           | -                        | 0             | `number`  |
| yOffset           | -                        | 0             | `number`  |

#### opacitySlider (SliderProp)

Slider for opacity.

| Parameter         | Value                    | Default Value | Type      |
| :---------------- | :----------------------- | :------------ | :-------- |
| enable            | `true`, `false`          | false         | `boolean` |
| defaultValue      | 0 - 1                    | 1             | `number`  |
| minValue          | 0 - 0.99                 | 0             | `number`  |
| maxValue          | 0.01 - 1                 | 1             | `number`  |
| direction         | `positive`, `negative`   | positive      | `string`  |
| orientation       | `horizontal`, `vertical` | horizontal    | `string`  |
| length            | -                        | 100           | `number`  |
| trackWidth        | -                        | 10            | `number`  |
| thumbSize         | -                        | 10            | `number`  |
| thumbBorderWidth  | -                        | 3             | `number`  |
| thumbBorderColour | `Hex Colour`             | `#fff`        | `string`  |
| xOffset           | -                        | 0             | `number`  |
| yOffset           | -                        | 0             | `number`  |

#### CustomComponent

Custom prop that could be included for added customisation.
This custom component is a `JSX Component` and is null by default.

#### customComponentProps

| Parameter | Value | Default Value | Type     |
| :-------- | :---- | :------------ | :------- |
| xOffset   | -     | 0             | `number` |
| yOffset   | -     | 0             | `number` |

#### dimensions

The dimensions of the parent component ColourWheel, which encapsulates all child components.

| Parameter | Value                  | Default Value | Type     |
| :-------- | :--------------------- | :------------ | :------- |
| type      | `relative`, `absolute` | relative      | `string` |
| width     | -                      | 200           | `number` |
| height    | -                      | 200           | `number` |

#### colourFormat

The format of the colour that will be returned in the onChange callback function.

| Parameter    | Value                                      | Default Value | Type     |
| :----------- | :----------------------------------------- | :------------ | :------- |
| colourFormat | `Hex`, `rgb`, `rgba`, `hsl`, `hsla`, `hsv` | hsla          | `string` |

#### onChange (Callback Function)

This callback function returns information related to the colour selected,
which contains a string of the colour in the chosen colour format `value`,
and an object containing isolated variables making up the colour `data`.
The props inside the data object are null when they are not related to the
colour type, for example, `red` will be null if colorFormat is `hsv`, and
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

| Parameter         | Value                                | Default Value | Type                |
| :---------------- | :----------------------------------- | :------------ | :------------------ |
| sliderType        | `lightness`, `saturation`, `opacity` | lightness     | `string`            |
| value             | 0 - 100 (0 - 1)                      | 0 (1)         | `number`            |
| setValue          | -                                    | -             | `Callback Function` |
| hue               | 0 - 360                              | 0             | `number`            |
| minValue          | 0 - 99 (0 - 0.99)                    | 0             | `number`            |
| maxValue          | 1 - 100 (0.01 - 1)                   | 1             | `number`            |
| direction         | `positive`, `negative`               | positive      | `string`            |
| orientation       | `horizontal`, `vertical`             | horizontal    | `string`            |
| length            | -                                    | 100           | `number`            |
| trackWidth        | -                                    | 10            | `number`            |
| thumbSize         | -                                    | 10            | `number`            |
| thumbBorderWidth  | -                                    | 3             | `number`            |
| thumbBorderColour | `Hex Colour`                         | `#fff`        | `string`            |

## Prop Details

### WheelProp

#### defaultValue

The initial value that should appear when the component is rendered.

#### size

The size of the colour wheel in pixels.

#### rotation

What direction the hue value changes. Clockwise means the colour ascends from 0 (red) in a clockwise direction along the wheel, and vice versa.

#### degreeOffset

Where the colour red (hue=0) begins, the value corresponds to the angle difference from the east. The colours will shift from the default position in the direction of the rotation type.

#### trackWidth

The width of the track containing the colours.

#### thumbSize

The radius of the thumb used to change colours.

#### thumbBorderWidth

The thickness of the border of the thumb. Recommended that its smaller than the thumbSize.

#### thumbBorderColor

The fill colour of the thumb will depend on the hue value, but the border of the thumb can be specified.

#### xOffset

How much the component is shifted in the x direction, in pixels.

#### yOffset

How much the component is shifted in the y direction, in pixels.

### Slider Prop

#### enable

Whether the component should be rendered or not.

#### defaultValue

The initial value that should appear when the component is rendered.

#### minValue

The lower bound of the range of selectable values.

#### maxValue

The upper bound of the range of selectable values.

#### direction

Direction the colours increment. Positive means from left to right, and vice versa.

#### orientation

How the slider is positioned.

#### length

The length of the slider.

#### trackWidth

The thickness of the slider.

#### thumbSize

The radius of the thumb used to change colours.

#### thumbBorderWidth

The thickness of the border of the thumb. Recommended that its smaller than the thumbSize.

#### thumbBorderColor

The fill colour of the thumb will depend on the hue value, but the border of the thumb can be specified.

#### xOffset

How much the component is shifted in the x direction, in pixels.

#### yOffset

How much the component is shifted in the y direction, in pixels.

### Dimensions Prop

#### type

Position of all child components inside the ColourWheel component. Relative means that the child components are contained within the specified width and height. Otherwise, they'll overlap each other.

#### width

Width of the ColourWheel component, which should be set accordingly to fit all child components.

#### height

Height of the ColourWheel component, which should be set accordingly to fit all child components.

#
