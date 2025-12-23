import '../models/subject.dart';

class SubjectService {
  static List<Subject> getAllSubjects() {
    return [
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
  }
}
