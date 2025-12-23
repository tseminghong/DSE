import 'package:flutter_test/flutter_test.dart';
import 'package:dse_past_papers/main.dart';

void main() {
  testWidgets('App smoke test', (WidgetTester tester) async {
    // Build our app and trigger a frame.
    await tester.pumpWidget(const DSEPastPapersApp());

    // Verify that the home screen title appears
    expect(find.text('Choose Your Subject'), findsOneWidget);
    
    // Verify that at least some subject cards appear
    expect(find.text('Geography'), findsOneWidget);
    expect(find.text('Chinese'), findsOneWidget);
    expect(find.text('English'), findsOneWidget);
  });
}
