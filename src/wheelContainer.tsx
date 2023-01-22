import React, { useState, useCallback } from "react";
import { View } from "react-native";
import Slider from "./slider";
import Wheel from "./wheel";
import { Props, onChangeArg } from "./props";
import {
  defaultHueWheel,
  defaultSaturationSlider,
  defaultOpacitySlider,
  defaultLightnessSlider,
  defaultCustomComponentProps,
  defaultColorFormat,
  defaultDimensions,
} from "./defaults";

const ColorWheel = ({
  hueWheel = defaultHueWheel,
  saturationSlider = defaultSaturationSlider,
  lightnessSlider = defaultLightnessSlider,
  opacitySlider = defaultOpacitySlider,
  CustomComponent,
  customComponentProps = defaultCustomComponentProps,
  dimensions = defaultDimensions,
  colorFormat = defaultColorFormat,
  onChange = (x) => x,
}: Props): JSX.Element => {
  const [hue, setHue] = useState(
    (hueWheel.value || defaultHueWheel.value) % 360
  );
  const [saturation, setSaturation] = useState(
    (saturationSlider.value || defaultSaturationSlider.value) % 100
  );
  const [lightness, setLightness] = useState(
    (lightnessSlider.value || defaultLightnessSlider.value) % 100
  );
  const [opacity, setOpacity] = useState(
    ((opacitySlider.value || defaultOpacitySlider.value) * 10) % 10
  );

  const getColor = (n: number, a: number) => {
    const k = (n + hue / 30) % 12;
    return lightness / 100 - a * Math.max(-1, Math.min(k - 3, 9 - k, 1));
  };

  const handleValueChange = (): onChangeArg => {
    switch (colorFormat) {
      case "rgb": {
        const a =
          (saturation / 100) * Math.min(lightness / 100, 1 - lightness / 100);
        const r = getColor(0, a);
        const g = getColor(8, a);
        const b = getColor(4, a);
        return {
          value: `rgb(${r}, ${g}, ${b})`,
          data: { red: r, green: g, blue: b },
        };
      }
      case "rgba": {
        const a =
          (saturation / 100) * Math.min(lightness / 100, 1 - lightness / 100);
        const r = getColor(0, a);
        const g = getColor(8, a);
        const b = getColor(4, a);
        return {
          value: `rgba(${r}, ${g}, ${b}, ${opacity})`,
          data: { red: r, green: g, blue: b, opacity },
        };
      }
      case "hsv": {
        const l = lightness / 100;
        const s = saturation / 100;
        const val = l + s * Math.min(l, 1 - l);
        const sat = val === 0 ? 0 : 2 * (1 - l / val);
        return {
          value: `hsv(${hue}, ${sat}%, ${val})`,
          data: { hue, saturation: sat, value: val },
        };
      }
      case "hsl":
        return {
          value: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
          data: { hue, saturation, lightness },
        };
      case "hsla":
        return {
          value: `hsla(${hue}, ${saturation}%, ${lightness}%, ${opacity})`,
          data: { hue, saturation, lightness, opacity },
        };
      case "hex": {
        const a =
          (saturation / 100) * Math.min(lightness / 100, 1 - lightness / 100);
        const r = Math.round(255 * getColor(0, a))
          .toString(16)
          .padStart(2, "0");
        const g = Math.round(255 * getColor(8, a))
          .toString(16)
          .padStart(2, "0");
        const b = Math.round(255 * getColor(4, a))
          .toString(16)
          .padStart(2, "0");
        return {
          value: `#${r}${g}${b}`,
        };
      }
      default:
        return {
          value: "",
          data: {
            hue: defaultHueWheel.value,
            saturation: defaultSaturationSlider.value,
            lightness: defaultLightnessSlider.value,
            opacity: defaultOpacitySlider.value,
          },
        };
    }
  };

  useCallback(() => {
    onChange(handleValueChange());
  }, [hue, saturation, lightness, opacity]);

  return (
    <View
      style={{
        width: dimensions.type === "relative" ? dimensions.width : 0,
        height: dimensions.type === "relative" ? dimensions.height : 0,
      }}
    >
      <View
        style={{
          position: "absolute",
          top: hueWheel.yOffset || defaultHueWheel.yOffset,
          left: hueWheel.xOffset || defaultHueWheel.xOffset,
        }}
      >
        <Wheel
          size={hueWheel.size || defaultHueWheel.size}
          hue={hue}
          setHue={setHue}
          degreeOffset={
            (hueWheel.degreeOffset || defaultHueWheel.degreeOffset) % 360
          }
          trackWidth={hueWheel.trackWidth || defaultHueWheel.trackWidth}
          thumbSize={hueWheel.thumbSize || defaultHueWheel.thumbSize}
          thumbBorderColor={hueWheel.thumbBorderColor || null}
          thumbBorderWidth={
            hueWheel.thumbBorderWidth || defaultHueWheel.thumbBorderWidth
          }
          rotation={hueWheel.rotation || defaultHueWheel.rotation}
          xOffset={hueWheel.xOffset || defaultHueWheel.xOffset}
          yOffset={hueWheel.yOffset || defaultHueWheel.yOffset}
        />
      </View>
      {(saturationSlider.enable || defaultSaturationSlider.enable) && (
        <View
          style={{
            position: "absolute",
            top: saturationSlider.yOffset || defaultSaturationSlider.yOffset,
            left: saturationSlider.xOffset || defaultSaturationSlider.xOffset,
          }}
        >
          <Slider
            sliderType="saturation"
            length={saturationSlider.length || defaultSaturationSlider.length}
            setValue={setSaturation}
            hue={hue}
            value={saturation}
            minValue={
              saturationSlider.minValue || defaultSaturationSlider.minValue
            }
            maxValue={
              saturationSlider.maxValue || defaultSaturationSlider.maxValue
            }
            direction={
              saturationSlider.direction || defaultSaturationSlider.direction
            }
            trackWidth={
              saturationSlider.trackWidth || defaultSaturationSlider.trackWidth
            }
            trackBorderColor={saturationSlider.trackBorderColor}
            trackBorderWidth={
              saturationSlider.trackBorderWidth ||
              defaultSaturationSlider.trackBorderWidth
            }
            thumbSize={
              saturationSlider.thumbSize || defaultSaturationSlider.thumbSize
            }
            thumbBorderWidth={
              saturationSlider.thumbBorderWidth ||
              defaultSaturationSlider.thumbBorderWidth
            }
            thumbBorderColor={saturationSlider.thumbBorderColor}
            borderRadius={
              saturationSlider.borderRadius ||
              defaultSaturationSlider.borderRadius
            }
            orientation={
              saturationSlider.orientation ||
              defaultSaturationSlider.orientation
            }
            xOffset={
              saturationSlider.xOffset || defaultSaturationSlider.xOffset
            }
            yOffset={
              saturationSlider.yOffset || defaultSaturationSlider.yOffset
            }
          />
        </View>
      )}
      {(lightnessSlider.enable || defaultLightnessSlider.enable) && (
        <View
          style={{
            position: "absolute",
            top: lightnessSlider.yOffset || defaultLightnessSlider.yOffset,
            left: lightnessSlider.xOffset || defaultLightnessSlider.xOffset,
          }}
        >
          <Slider
            sliderType="lightness"
            length={lightnessSlider.length || defaultLightnessSlider.length}
            setValue={setLightness}
            hue={hue}
            value={lightness}
            minValue={
              lightnessSlider.minValue || defaultLightnessSlider.minValue
            }
            maxValue={
              lightnessSlider.maxValue || defaultLightnessSlider.maxValue
            }
            direction={
              lightnessSlider.direction || defaultLightnessSlider.direction
            }
            trackWidth={
              lightnessSlider.trackWidth || defaultLightnessSlider.trackWidth
            }
            trackBorderColor={lightnessSlider.trackBorderColor}
            trackBorderWidth={
              lightnessSlider.trackBorderWidth ||
              defaultLightnessSlider.trackBorderWidth
            }
            thumbSize={
              lightnessSlider.thumbSize || defaultLightnessSlider.thumbSize
            }
            thumbBorderWidth={
              lightnessSlider.thumbBorderWidth ||
              defaultLightnessSlider.thumbBorderWidth
            }
            thumbBorderColor={lightnessSlider.thumbBorderColor}
            borderRadius={
              lightnessSlider.borderRadius ||
              defaultLightnessSlider.borderRadius
            }
            orientation={
              lightnessSlider.orientation || defaultLightnessSlider.orientation
            }
            xOffset={lightnessSlider.xOffset || defaultLightnessSlider.xOffset}
            yOffset={lightnessSlider.yOffset || defaultLightnessSlider.yOffset}
          />
        </View>
      )}
      {(opacitySlider.enable || defaultOpacitySlider.enable) && (
        <View
          style={{
            position: "absolute",
            top: opacitySlider.yOffset || defaultOpacitySlider.yOffset,
            left: opacitySlider.xOffset || defaultOpacitySlider.xOffset,
          }}
        >
          <Slider
            sliderType="opacity"
            length={opacitySlider.length || defaultOpacitySlider.length}
            setValue={setOpacity}
            hue={hue}
            value={opacity}
            minValue={opacitySlider.minValue || defaultOpacitySlider.minValue}
            maxValue={opacitySlider.maxValue || defaultOpacitySlider.maxValue}
            direction={
              opacitySlider.direction || defaultOpacitySlider.direction
            }
            trackWidth={
              opacitySlider.trackWidth || defaultOpacitySlider.trackWidth
            }
            trackBorderColor={opacitySlider.trackBorderColor}
            trackBorderWidth={
              opacitySlider.trackBorderWidth ||
              defaultOpacitySlider.trackBorderWidth
            }
            thumbSize={
              opacitySlider.thumbSize || defaultOpacitySlider.thumbSize
            }
            thumbBorderWidth={
              opacitySlider.thumbBorderWidth ||
              defaultOpacitySlider.thumbBorderWidth
            }
            thumbBorderColor={opacitySlider.thumbBorderColor}
            borderRadius={
              opacitySlider.borderRadius || defaultOpacitySlider.borderRadius
            }
            orientation={
              opacitySlider.orientation || defaultOpacitySlider.orientation
            }
            xOffset={opacitySlider.xOffset || defaultOpacitySlider.xOffset}
            yOffset={opacitySlider.yOffset || defaultOpacitySlider.yOffset}
          />
        </View>
      )}
      {CustomComponent && (
        <View
          style={{
            top:
              customComponentProps.yOffset ||
              defaultCustomComponentProps.yOffset,
            left:
              customComponentProps.xOffset ||
              defaultCustomComponentProps.xOffset,
          }}
        >
          <CustomComponent />
        </View>
      )}
    </View>
  );
};

export default React.memo(ColorWheel);
