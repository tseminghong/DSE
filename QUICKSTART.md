# Quick Start Guide

This guide will help you get the DSE Past Papers Flutter app running on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Flutter SDK** (3.0.0 or higher) - [Install Flutter](https://flutter.dev/docs/get-started/install)
- **Dart SDK** (included with Flutter)
- **Git** - [Install Git](https://git-scm.com/downloads)

### Platform-Specific Requirements

**For Web Development:**
- Chrome browser
- No additional setup needed

**For Android Development:**
- Android Studio or Android SDK
- Android device or emulator

**For iOS Development (macOS only):**
- Xcode (latest version)
- iOS device or simulator
- CocoaPods (`sudo gem install cocoapods`)

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/tseminghong/DSE.git
cd DSE
```

### 2. Install Dependencies

```bash
flutter pub get
```

This command will download all the required packages defined in `pubspec.yaml`.

### 3. Verify Flutter Setup

```bash
flutter doctor
```

This command checks your environment and displays a report of the status of your Flutter installation. Fix any issues reported.

## Running the App

### Web (Recommended for Quick Start)

```bash
# Run in debug mode
flutter run -d chrome

# Or run in release mode
flutter run -d chrome --release
```

The app will open in Chrome browser automatically.

### Android

```bash
# List available devices
flutter devices

# Run on connected device or emulator
flutter run -d android
```

### iOS (macOS only)

```bash
# Run on simulator
flutter run -d ios

# Or specify a specific simulator
flutter run -d iPhone
```

## Development

### Hot Reload

While the app is running, you can make changes to the code and see them instantly:

- Press `r` in the terminal to hot reload
- Press `R` to hot restart
- Press `q` to quit

### Project Structure

```
lib/
├── main.dart              # App entry point
├── constants.dart         # App-wide constants
├── models/
│   └── subject.dart       # Data models
├── screens/
│   ├── home_screen.dart   # Home page
│   └── subject_screen.dart # Subject details
└── widgets/
    └── glass_card.dart    # Reusable widgets

test/
└── widget_test.dart       # Widget tests

web/                       # Web platform files
android/                   # Android platform files
ios/                       # iOS platform files
```

### Making Changes

1. **Edit Code**: Make changes to `.dart` files in the `lib/` directory
2. **Hot Reload**: Press `r` to see changes instantly
3. **Test**: Run `flutter test` to verify functionality
4. **Format**: Run `dart format .` to format code

## Building for Production

### Web

```bash
flutter build web

# Output will be in: build/web/
```

To serve the web build locally:
```bash
cd build/web
python3 -m http.server 8000
# Visit http://localhost:8000
```

### Android APK

```bash
flutter build apk

# Output will be in: build/app/outputs/flutter-apk/app-release.apk
```

### iOS App (macOS only)

```bash
flutter build ios

# Then open in Xcode for final deployment
open ios/Runner.xcworkspace
```

## Testing

### Run All Tests

```bash
flutter test
```

### Run Specific Test

```bash
flutter test test/widget_test.dart
```

### Test Coverage

```bash
flutter test --coverage
```

## Troubleshooting

### Common Issues

**Issue: `flutter: command not found`**
- Solution: Add Flutter to your PATH. See [Flutter installation guide](https://flutter.dev/docs/get-started/install)

**Issue: Build fails on first run**
- Solution: Run `flutter clean` then `flutter pub get`

**Issue: Chrome not launching**
- Solution: Ensure Chrome is installed and try `flutter run -d chrome --verbose`

**Issue: Android build fails**
- Solution: Check Android SDK installation with `flutter doctor`

**Issue: iOS build fails**
- Solution: Ensure Xcode is properly installed and run `pod install` in the `ios/` directory

### Getting Help

- Check the [Flutter documentation](https://flutter.dev/docs)
- Visit [Flutter GitHub issues](https://github.com/flutter/flutter/issues)
- Review the [MIGRATION.md](MIGRATION.md) for project-specific details

## Next Steps

1. **Explore the Code**: Start by reading `lib/main.dart` and `lib/screens/home_screen.dart`
2. **Customize**: Modify colors in `lib/constants.dart`
3. **Add Content**: Extend `SubjectScreen` to display actual past papers
4. **Test**: Write tests in the `test/` directory
5. **Deploy**: Follow production build steps above

## Tips

- Use VS Code or Android Studio for better Flutter development experience
- Install Flutter and Dart plugins in your IDE
- Use `flutter pub upgrade` to update dependencies
- Run `flutter analyze` to check for issues
- Enable hot reload for faster development

Happy coding! 🚀
