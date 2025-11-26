# DSE Past Papers - Flutter App

Welcome to the **DSE Past Papers** project! This is a Flutter application that provides access to Hong Kong Diploma of Secondary Education (DSE) past examination papers.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Overview

This Flutter application has been migrated from a web-based HTML/CSS/JavaScript implementation to provide a modern, cross-platform experience for accessing DSE past papers. The app features a beautiful glassmorphic design and supports multiple subjects.

## Features

- 📱 Cross-platform support (Web, iOS, Android)
- 🎨 Modern glassmorphic UI design
- 📚 Multiple subjects (Geography, Chinese, English, Economics, and more)
- 🔍 Easy navigation and paper browsing
- 🚀 Fast and responsive interface

## Installation

### Prerequisites

- [Flutter SDK](https://flutter.dev/docs/get-started/install) (3.0.0 or higher)
- [Dart SDK](https://dart.dev/get-dart) (included with Flutter)

### Setup

1. Clone the repository:
```bash
git clone https://github.com/tseminghong/DSE.git
cd DSE
```

2. Install dependencies:
```bash
flutter pub get
```

3. Run the app:

**For Web:**
```bash
flutter run -d chrome
```

**For Android:**
```bash
flutter run -d android
```

**For iOS:**
```bash
flutter run -d ios
```

## Usage

### Building for Production

**Web:**
```bash
flutter build web
```
The build output will be in the `build/web` directory.

**Android:**
```bash
flutter build apk
```

**iOS:**
```bash
flutter build ios
```

### Running Tests

```bash
flutter test
```

## Project Structure

```
lib/
├── main.dart              # App entry point
├── models/
│   └── subject.dart       # Subject data model
├── screens/
│   ├── home_screen.dart   # Main landing page
│   └── subject_screen.dart # Subject details page
└── widgets/
    └── glass_card.dart    # Reusable glassmorphic card widget

web/                       # Web-specific files
android/                   # Android-specific files
ios/                       # iOS-specific files
assets/                    # Assets (images, data files)
```

## Available Subjects

- ✅ Geography
- ✅ Chinese
- ✅ English
- ✅ Economics
- 🔄 Mathematics (Coming Soon)
- 🔄 Chinese History (Coming Soon)
- 🔄 History (Coming Soon)
- 🔄 Chemistry (Coming Soon)
- 🔄 Physics (Coming Soon)
- 🔄 Biology (Coming Soon)
- 🔄 ICT (Coming Soon)

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the [MIT License](LICENSE).
