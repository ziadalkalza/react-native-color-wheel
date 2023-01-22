# React Native Color Wheel

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

A highly customisable hsv color wheel package for React Native projects.

## Features

- Can add a custom component inside the main color wheel component
- Can retrieve color in one of several types (rgb, rgba, hsl, hsla, hsv, hex)
- Compatible with Android and IOS

## Installation

Install with CLI:

```bash
  npm install @ziadalkalza/react-native-color-wheel
```

OR

```bash
  yarn add @ziadalkalza/react-native-color-wheel
```

Install with Expo:

```bash
  expo install @ziadalkalza/react-native-color-wheel
```

## Screenshot

![ColorWheel Screenshot](https://user-images.githubusercontent.com/84280036/212576643-782f498a-0b71-4a79-831d-5c6315a54fea.jpeg)

## Usage

```javascript
import ColorWheel from "@ziadalkalza/react-native-color-wheel";

function App() {
  return (
    <ColorWheel
      lightnessSlider={{
        enable: true,
        orientation: "horizontal",
        direction: "negative",
        trackWidth: 8,
        xOffset: 30,
        yOffset: 185,
        minValue: 50,
      }}
      hueWheel={{
        size: 170,
      }}
      dimensions={{
        type: "relative",
        height: 220,
      }}
    />
  );
}
```

## Demo

To explore the color wheel, you can use this [Codesandbox]() link.

## Documentation

For component reference, please check the [Documentation](https://github.com/ziadalkalza/react-native-color-wheel/blob/master/DOCUMENTATION.md).

## Support

For any enquiries about the package, feel free to contact me through my github, or report an issue.

To report an issue:

1. Go to issues.
2. Open an issue with a clear title, description and tag.
3. Make sure you include:
4. A thorough explanation of the issue.
5. Steps to reproduce the issue.
6. Any error logs.

## Contributing

Contributions are always welcome! I am happy to accept any feedback and suggestions for improvement.

Making modifications:

1. Fork repository
2. Clone your fork
3. Make your changes (add branches if needed)
4. Add a testExample

Committing:

1. Check that your code is running properly on your local machine, and that all the tests are passing before making a pull request.
2. Make sure that the PR is linked to an issue. If no issue exists, please create an issue for it (this ensures there is good communication and all PRs are clear).
3. Merge PR into the main branch.
4. PR title should be in the format of prefix:issueNumber/Title

Prefixes:

- fix: bug fix
- feat: new feature
- ref: changes that dont fix issues or add new features
- perf: code that improves performance
- conf: changes that don't affect the end user
- doc: changes to documentation
- test: adding/editing tests

## License

[MIT](https://choosealicense.com/licenses/mit/)
