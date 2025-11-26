import 'package:flutter/material.dart';

class AppConstants {
  // App Information
  static const String appName = 'DSE Past Papers';
  static const String appVersion = '1.0.0';
  
  // Colors
  static const Color primaryGradientStart = Color(0xFF667eea);
  static const Color primaryGradientEnd = Color(0xFF764ba2);
  
  // Subject Colors
  static const Map<String, List<Color>> subjectGradients = {
    'geography': [Color(0xFF4CAF50), Color(0xFF2E7D32)],
    'chinese': [Color(0xFFE53935), Color(0xFFC62828)],
    'english': [Color(0xFF1E88E5), Color(0xFF1565C0)],
    'economics': [Color(0xFFFF6F00), Color(0xFFE65100)],
    'mathematics': [Color(0xFF5E35B1), Color(0xFF4527A0)],
    'chinese-history': [Color(0xFFD32F2F), Color(0xFFB71C1C)],
    'history': [Color(0xFF6D4C41), Color(0xFF5D4037)],
    'chemistry': [Color(0xFF00897B), Color(0xFF00695C)],
    'physics': [Color(0xFF3949AB), Color(0xFF283593)],
    'biology': [Color(0xFF43A047), Color(0xFF2E7D32)],
    'ict': [Color(0xFF546E7A), Color(0xFF37474F)],
  };
  
  // Glass Effect
  static const double glassBlur = 20.0;
  static const double glassOpacity = 0.25;
  static const double glassBorderOpacity = 0.3;
  
  // Animation
  static const Duration standardDuration = Duration(milliseconds: 300);
  static const Duration longDuration = Duration(milliseconds: 600);
  static const Curve standardCurve = Curves.easeInOut;
  
  // Layout
  static const double cardBorderRadius = 24.0;
  static const double iconBorderRadius = 20.0;
  static const double standardPadding = 24.0;
  static const double cardSpacing = 24.0;
  
  // External Links
  static const String homePageUrl = 'https://hpccss.site';
  
  // Paper Years (dynamically generated based on current year)
  static List<String> getAvailableYears({int count = 6}) {
    final currentYear = DateTime.now().year;
    return List.generate(count, (index) => (currentYear - index).toString());
  }
}
