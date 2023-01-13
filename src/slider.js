import React, { useState, useEffect } from "react";
import { PanResponder } from "react-native";
import {
  Svg,
  Defs,
  Path,
  LinearGradient,
  Stop,
  Rect,
  Circle,
} from "react-native-svg";
import { CustomSliderProp } from "./props";
import { defaultCustomSlider } from "./defaults";

const Slider = ({
  length = defaultCustomSlider.length,
  sliderType = defaultCustomSlider.sliderType,
  value = defaultCustomSlider.defaultValue,
  setValue,
  hue = defaultCustomSlider.hue,
  minValue = defaultCustomSlider.minValue,
  maxValue = defaultCustomSlider.maxValue,
  direction = defaultCustomSlider.direction,
  trackWidth = defaultCustomSlider.trackWidth,
  thumbSize = defaultCustomSlider.thumbSize,
  thumbBorderWidth = defaultCustomSlider.thumbBorderWidth,
  thumbBorderColor = defaultCustomSlider.thumbBorderColor,
  orientation = defaultCustomSlider.orientation,
}: CustomSliderProp) => {
  const horizontal = orientation === "horizontal";
  const positive = direction === "positive";
  const offset = thumbSize + thumbBorderWidth;
  const [pos, setPos] = useState(
    positive
      ? ((value - minValue) / (maxValue - minValue)) * length
      : (1 - (value - minValue) / (maxValue - minValue)) * length
  );
  const colorStart = `hsla(${hue}, ${
    sliderType === "saturation" ? minValue : 100
  }%, ${sliderType === "lightness" ? minValue : 50}%, ${
    sliderType === "opacity" ? minValue : 1
  })`;
  const colorEnd = `hsla(${hue}, ${
    sliderType === "saturation" ? maxValue : 100
  }%, ${sliderType === "lightness" ? maxValue : 50}%, ${
    sliderType === "opacity" ? maxValue : 1
  })`;
  const thumbFill = `hsla(${hue}, ${
    sliderType === "saturation" ? value : 100
  }%, ${sliderType === "lightness" ? value : 50}%, ${
    sliderType === "opacity" ? value : 1
  })`;

  useEffect(() => {
    setPos(
      positive
        ? ((value - minValue) / (maxValue - minValue)) * length
        : (1 - (value - minValue) / (maxValue - minValue)) * length
    );
  }, [value, minValue, maxValue, length]);

  useEffect(() => {
    if (minValue > maxValue) {
      throw new TypeError(
        'Invalid property number "minValue" or "maxValue". minValue must be less than maxValue'
      );
    }
    if (value > maxValue || value < minValue) {
      throw new TypeError(
        'Invalid property number "value". Must be between minValue and maxValue.'
      );
    }
  }, []);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (e, gs) => true,
    onStartShouldSetPanResponderCapture: (e, gs) => true,
    onMoveShouldSetPanResponder: (e, gs) => true,
    onMoveShouldSetPanResponderCapture: (e, gs) => true,
    onPanResponderMove: (e, gs) => {
      const newPos = horizontal ? pos + gs.dx : pos + gs.dy;
      if (newPos > length) setPos(length);
      else if (newPos < 0) setPos(0);
      else setPos(newPos);
      const newValue = positive
        ? (newPos / length) * (maxValue - minValue) + minValue
        : (1 - newPos / length) * (maxValue - minValue) + minValue;
      setValue(newValue);
    },
  });

  return (
    <Svg
      height={
        horizontal ? Math.max(trackWidth, offset * 2) : length + offset * 2
      }
      width={
        horizontal ? length + offset * 2 : Math.max(trackWidth, offset * 2)
      }
    >
      <Defs>
        <LinearGradient id={`slider`}>
          <Stop
            offset={positive ? 0 : 1}
            stopColor={colorStart}
            stopOpacity="1"
          />
          <Stop
            offset={positive ? 1 : 0}
            stopColor={colorEnd}
            stopOpacity="1"
          />
        </LinearGradient>
      </Defs>
      <Rect
        x={offset}
        y={trackWidth / 2 > offset ? 0 : offset - trackWidth / 2}
        width={horizontal ? length : trackWidth}
        height={horizontal ? trackWidth : length}
        fill={`url(#slider)`}
      />
      <Circle
        r={thumbSize}
        cx={horizontal ? pos + offset : Math.max(trackWidth / 2, offset)}
        cy={horizontal ? Math.max(trackWidth / 2, offset) : pos + offset}
        fill={thumbFill}
        stroke={thumbBorderColor}
        strokeWidth={thumbBorderWidth}
        {...panResponder.panHandlers}
      />
    </Svg>
  );
};

export default Slider;
