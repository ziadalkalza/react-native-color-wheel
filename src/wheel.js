import React from "react";
import { PanResponder } from "react-native";
import {
  Svg,
  Defs,
  Path,
  LinearGradient,
  Stop,
  Circle,
} from "react-native-svg";

const Wheel = ({
  size,
  hue,
  setHue,
  degreeOffset,
  trackWidth,
  thumbSize,
  thumbBorderColor,
  thumbBorderWidth,
  rotation,
  xOffset,
  yOffset,
}) => {
  const offset = thumbSize + thumbBorderWidth / 2;
  const radius = (size - trackWidth) / 2;
  const cx = size / 2;
  const cy = size / 2;
  const clockwise = rotation === "clockwise" ? -1 : 1;
  const x =
    radius * Math.cos((clockwise * ((hue + degreeOffset) * Math.PI)) / 180);
  const y =
    radius * Math.sin((clockwise * ((hue + degreeOffset) * Math.PI)) / 180);

  const pathPanResponder = PanResponder.create({
    onStartShouldSetPanResponder: (e, gs) => true,
    onStartShouldSetPanResponderCapture: (e, gs) => true,
    onPanResponderStart: (e, gs) => {
      const newAngle = Math.atan2(
        cy - e.nativeEvent.locationY,
        e.nativeEvent.locationX - cx
      );
      setHue(degreeOffset + (180 * newAngle * clockwise) / Math.PI);
    },
  });

  const thumbPanResponder = PanResponder.create({
    onStartShouldSetPanResponder: (e, gs) => true,
    onStartShouldSetPanResponderCapture: (e, gs) => true,
    onMoveShouldSetPanResponder: (e, gs) => true,
    onMoveShouldSetPanResponderCapture: (e, gs) => true,
    onPanResponderMove: (e, gs) => {
      const newAngle = Math.atan2(y - gs.dy, x + gs.dx);
      setHue(degreeOffset + (180 * newAngle * clockwise) / Math.PI);
    },
  });

  return (
    <Svg height={size + offset * 2} width={size + offset * 2}>
      <Defs>
        {[...Array(360)].map((_, index) => (
          <LinearGradient key={index} id={`path${index}`}>
            <Stop
              offset="0"
              stopColor={`hsla(${
                clockwise * (degreeOffset + index)
              },100%,50%,1)`}
              stopOpacity="1"
            />
            <Stop
              offset="1"
              stopColor={`hsla(${
                clockwise * (degreeOffset + index + 1)
              },100%,50%,1)`}
              stopOpacity="1"
            />
          </LinearGradient>
        ))}
      </Defs>
      {[...Array(360)].map((_, index) => {
        const rootX = radius * Math.cos((index * Math.PI) / 180);
        const rootY = -radius * Math.sin((index * Math.PI) / 180);
        const dx = radius * Math.cos(((index + 1) * Math.PI) / 180) - rootX;
        const dy = -radius * Math.sin(((index + 1) * Math.PI) / 180) - rootY;
        return (
          <Path
            key={index}
            stroke={`url(#path${index})`}
            strokeWidth={trackWidth}
            d={`M ${cx + offset} ${
              cy + offset
            } m ${rootX}, ${rootY} a ${radius}, ${radius} 0 0 0 ${dx}, ${dy}`}
            {...pathPanResponder.panHandlers}
          />
        );
      })}
      <Circle
        r={thumbSize}
        cx={cx + offset + x}
        cy={cy + offset - y}
        fill={`hsl(${hue},100%,50%)`}
        stroke={thumbBorderColor}
        strokeWidth={thumbBorderWidth}
        {...thumbPanResponder.panHandlers}
      />
    </Svg>
  );
};

export default Wheel;
