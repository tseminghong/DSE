import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import '../widgets/glass_card.dart';
import '../models/subject.dart';
import 'subject_screen.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final subjects = [
      Subject(name: 'Geography', icon: '🌍', route: 'geography', active: true),
      Subject(name: 'Chinese', icon: '文', route: 'chinese', active: true),
      Subject(name: 'English', icon: 'Ab', route: 'english', active: true),
      Subject(name: 'Mathematics', icon: '∫', route: 'mathematics', active: false),
      Subject(name: 'Economics', icon: '📈', route: 'economics', active: true),
      Subject(name: 'Chinese History', icon: '史', route: 'chinese-history', active: false),
      Subject(name: 'History', icon: '📜', route: 'history', active: false),
      Subject(name: 'Chemistry', icon: '🧪', route: 'chemistry', active: false),
      Subject(name: 'Physics', icon: '⚛️', route: 'physics', active: false),
      Subject(name: 'Biology', icon: '🧬', route: 'biology', active: false),
      Subject(name: 'ICT', icon: '💻', route: 'ict', active: false),
    ];

    return Scaffold(
      body: Container(
        decoration: const BoxDecoration(
          gradient: LinearGradient(
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
            colors: [
              Color(0xFF667eea),
              Color(0xFF764ba2),
            ],
          ),
        ),
        child: SafeArea(
          child: CustomScrollView(
            slivers: [
              // App Bar
              SliverAppBar(
                floating: true,
                snap: true,
                backgroundColor: Colors.white.withOpacity(0.25),
                elevation: 0,
                title: Text(
                  'Past Paper Archive',
                  style: GoogleFonts.inter(
                    fontSize: 24,
                    fontWeight: FontWeight.w700,
                    color: Colors.white,
                  ),
                ),
              ),
              // Hero Section
              SliverToBoxAdapter(
                child: Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 48),
                  child: Column(
                    children: [
                      Text(
                        'Choose Your Subject',
                        style: GoogleFonts.inter(
                          fontSize: 40,
                          fontWeight: FontWeight.w800,
                          color: Colors.white,
                          height: 1.1,
                        ),
                        textAlign: TextAlign.center,
                      ),
                      const SizedBox(height: 16),
                      Text(
                        'Access comprehensive past papers with our modern, intuitive interface. More subjects are being added regularly.',
                        style: GoogleFonts.inter(
                          fontSize: 18,
                          fontWeight: FontWeight.w400,
                          color: Colors.white.withOpacity(0.8),
                          height: 1.5,
                        ),
                        textAlign: TextAlign.center,
                      ),
                    ],
                  ),
                ),
              ),
              // Cards Grid
              SliverPadding(
                padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 24),
                sliver: SliverGrid(
                  gridDelegate: const SliverGridDelegateWithMaxCrossAxisExtent(
                    maxCrossAxisExtent: 300,
                    mainAxisSpacing: 24,
                    crossAxisSpacing: 24,
                    childAspectRatio: 0.9,
                  ),
                  delegate: SliverChildBuilderDelegate(
                    (context, index) {
                      final subject = subjects[index];
                      return GlassCard(
                        subject: subject,
                        onTap: subject.active
                            ? () {
                                Navigator.push(
                                  context,
                                  MaterialPageRoute(
                                    builder: (context) =>
                                        SubjectScreen(subject: subject),
                                  ),
                                );
                              }
                            : null,
                      );
                    },
                    childCount: subjects.length,
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
