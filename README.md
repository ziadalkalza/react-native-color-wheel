# React Native Color Wheel

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

A highly customisable hsv color wheel package for React Native projects.

## Features

- Can add a custom component inside the main color wheel component
- Can convert the selected color to one of six formats (rgb, rgba, hsl, hsla, hsv, hex)
- Compatible with Android and IOS

## Installation

You need to install [`react-native-svg`](https://www.npmjs.com/package/react-native-svg) to be able to use this package.

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

![ColorWheel Screenshot 1](https://user-images.githubusercontent.com/84280036/213895928-45b96554-20bf-47fa-aab7-fa5b50c0402e.jpeg)

![ColorWheel Screenshot 2](https://user-images.githubusercontent.com/84280036/213895936-191f22a0-0667-4594-b879-5b259e1408db.jpeg)

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

## Documentation

For component reference, please check the [Documentation](https://github.com/ziadalkalza/react-native-color-wheel/blob/master/DOCUMENTATION.md).

## Support

For any enquiries about the package, feel free to contact me through my github, or report an issue.

#### To report an issue:

1. Go to issues.
2. Open an issue with a clear title, description and tag.
3. Make sure you include:
   - A thorough explanation of the issue.
   - Steps to reproduce the issue.
   - Any error logs.

## Contributing

Contributions are always welcome! I am happy to accept any feedback and suggestions for improvements.

#### Making modifications:

1. Fork repository
2. Clone your fork
3. Make your changes (add branches if needed)

#### Committing:

1. Check that your code is running properly on your local machine.
2. Make sure that the PR is linked to an issue. If no issue exists, please create an issue for it (this ensures there is good communication and all PRs are clear).
3. Merge PR into the main branch.
4. PR title should be in the format of prefix:issueNumber/Title

##### Prefixes:

- fix: bug fix
- feat: new feature
- ref: changes that dont fix issues or add new features
- perf: code that improves performance
- conf: changes that don't affect the end user
- doc: changes to documentation
- test: adding/editing tests

## License

[MIT](https://choosealicense.com/licenses/mit/)
