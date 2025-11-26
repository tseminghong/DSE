# Features Documentation

## Current Features

### 1. Cross-Platform Support

The DSE Past Papers app is built with Flutter and supports:

- ✅ **Web**: Modern web browsers (Chrome, Firefox, Safari, Edge)
- ✅ **Android**: Android 5.0 (API 21) and above
- ✅ **iOS**: iOS 12.0 and above

### 2. Glassmorphic Design

The app features a modern glassmorphic design inspired by the original web version:

- Semi-transparent cards with backdrop blur effects
- Gradient backgrounds
- Smooth animations and transitions
- Hover effects on desktop/web platforms
- Responsive layout adapting to different screen sizes

### 3. Subject Navigation

**Home Screen:**
- Grid layout of subject cards
- Visual icons for each subject
- "Coming Soon" badges for inactive subjects
- Smooth navigation to subject details

**Available Subjects:**
- 🌍 Geography (Active)
- 文 Chinese (Active)
- Ab English (Active)
- 📈 Economics (Active)
- ∫ Mathematics (Coming Soon)
- 史 Chinese History (Coming Soon)
- 📜 History (Coming Soon)
- 🧪 Chemistry (Coming Soon)
- ⚛️ Physics (Coming Soon)
- 🧬 Biology (Coming Soon)
- 💻 ICT (Coming Soon)

### 4. Subject Details

Each subject has a dedicated screen showing:
- Subject-specific gradient color scheme
- Large icon display
- Subject name and description
- List of available past papers (template)
- Years: 2024, 2023, 2022, 2021, 2020, 2019

### 5. Responsive Design

The app adapts to various screen sizes:
- Mobile: Single column layout
- Tablet: 2-3 column grid
- Desktop: Up to 4 column grid
- Fluid typography scaling

### 6. Performance

- Fast initial load time
- Smooth 60fps animations
- Efficient widget rendering
- Minimal memory footprint

## Technical Features

### Architecture

**Pattern**: Widget-based architecture with separation of concerns

```
lib/
├── main.dart           # Entry point
├── constants.dart      # App-wide constants
├── models/            # Data models
├── screens/           # Full-screen pages
└── widgets/           # Reusable components
```

**Key Components:**
- `HomeScreen`: Main landing page
- `SubjectScreen`: Subject detail pages
- `GlassCard`: Reusable glassmorphic card widget
- `Subject`: Data model for subjects

### State Management

Currently using:
- `StatelessWidget` for static content
- `StatefulWidget` for interactive components (hover effects)

### Styling

- Google Fonts (SF Pro Display alternative)
- Material Design 3
- Custom color schemes per subject
- Consistent spacing and sizing via constants

### Testing

- Widget tests for smoke testing
- Extensible test structure
- CI/CD integration via GitHub Actions

## Planned Features

### Phase 1: Content Enhancement
- [ ] Real past paper data integration
- [ ] PDF viewer for papers
- [ ] Download functionality
- [ ] Search within papers

### Phase 2: User Experience
- [ ] Dark mode support
- [ ] Bookmarking/favorites
- [ ] Recently viewed papers
- [ ] Paper preview

### Phase 3: Advanced Features
- [ ] Offline mode
- [ ] Local database
- [ ] Push notifications for new papers
- [ ] User accounts and sync
- [ ] Progress tracking
- [ ] Practice mode with timers

### Phase 4: Community Features
- [ ] User notes on papers
- [ ] Sharing functionality
- [ ] Discussion forums
- [ ] Study groups

## Customization

### Adding New Subjects

1. Add subject to `HomeScreen.subjects` list
2. Add color scheme to `AppConstants.subjectGradients`
3. Set `active: true` to enable

Example:
```dart
Subject(
  name: 'Physics',
  icon: '⚛️',
  route: 'physics',
  active: true,
),
```

### Changing Colors

Edit `lib/constants.dart`:
```dart
static const Map<String, List<Color>> subjectGradients = {
  'physics': [Color(0xFF3949AB), Color(0xFF283593)],
};
```

### Modifying Layout

Constants in `lib/constants.dart`:
```dart
static const double cardBorderRadius = 24.0;
static const double standardPadding = 24.0;
static const double cardSpacing = 24.0;
```

## Dependencies

Key packages used:

- `flutter`: Core framework
- `google_fonts`: Typography
- `flutter_svg`: SVG support
- `http`: HTTP requests
- `url_launcher`: External links
- `flutter_glassmorphism`: Glass effects (optional)

See `pubspec.yaml` for complete list.

## Platform-Specific Features

### Web
- Browser history navigation
- URL routing
- Keyboard shortcuts

### Mobile (Android/iOS)
- Native gestures
- Platform-specific animations
- Back button handling
- App lifecycle management

## Accessibility

Current accessibility features:
- Semantic labels on interactive elements
- Sufficient color contrast
- Tap target sizes (minimum 48x48)
- Keyboard navigation (web)

Planned improvements:
- Screen reader optimization
- Font scaling support
- High contrast mode
- Reduced motion option

## Performance Metrics

Target metrics:
- Initial load: < 3 seconds (web)
- Frame rate: 60 fps constant
- Memory usage: < 100MB (mobile)
- App size: < 20MB (mobile)

## Browser Support

**Web Platform:**
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Device Support

**Mobile:**
- Phones: 4.5" - 7" screens
- Tablets: 7" - 13" screens
- Foldables: Adaptive layout

**Desktop:**
- Windows 10+
- macOS 10.14+
- Linux (Ubuntu, etc.)

## Localization

Current: English only

Planned:
- Traditional Chinese (繁體中文)
- Simplified Chinese (简体中文)
- Other languages as needed

## Data Management

Current approach:
- Hard-coded subject list
- Static paper years

Future approach:
- JSON data files
- API integration
- Local database (SQLite)
- Cloud sync

## Analytics (Planned)

Potential metrics to track:
- Popular subjects
- Paper downloads
- User engagement
- Search queries
- Feature usage

## Security

Considerations:
- No user data collection currently
- HTTPS for all web requests
- Secure storage for downloads
- Privacy policy compliance

## Updates

Current version: 1.0.0

Update channels:
- GitHub releases
- App stores (planned)
- In-app updates (planned)

## Known Limitations

1. No offline support yet
2. Limited to template paper data
3. No user accounts
4. Single language (English)
5. No PDF viewer integration

## Browser/Device Testing

Tested on:
- ✅ Chrome (Desktop)
- ⏳ Safari (Desktop) - pending
- ⏳ Firefox (Desktop) - pending
- ⏳ Mobile browsers - pending
- ⏳ Android devices - pending
- ⏳ iOS devices - pending

## Contributing

To add new features:

1. Check existing issues/features
2. Follow Flutter best practices
3. Add tests for new functionality
4. Update documentation
5. Submit pull request

See [Contributing Guidelines](CONTRIBUTING.md) (to be created)

## Resources

- [Flutter Documentation](https://flutter.dev/docs)
- [Material Design](https://material.io/)
- [Dart Language](https://dart.dev/)
- [Google Fonts](https://fonts.google.com/)
