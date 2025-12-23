import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'screens/home_screen.dart';

void main() {
  runApp(const DSEPastPapersApp());
}

class DSEPastPapersApp extends StatelessWidget {
  const DSEPastPapersApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'DSE Past Papers',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        textTheme: GoogleFonts.interTextTheme(),
        useMaterial3: true,
        colorScheme: ColorScheme.fromSeed(
          seedColor: const Color(0xFF667eea),
          brightness: Brightness.light,
        ),
      ),
      home: const HomeScreen(),
    );
  }
}
