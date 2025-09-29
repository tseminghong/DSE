import { Subject, SubjectData, Paper, Essay } from '../types';

// Main subjects configuration
export const subjects: Subject[] = [
  { 
    id: 'geography', 
    name: 'Geography', 
    icon: '🌍', 
    href: '/subject/geography', 
    active: true,
    gradient: {
      start: '#4CAF50',
      end: '#2E7D32'
    }
  },
  { 
    id: 'chinese', 
    name: 'Chinese', 
    icon: '文', 
    href: '/subject/chinese', 
    active: true 
  },
  { 
    id: 'english', 
    name: 'English', 
    icon: 'Ab', 
    href: '/subject/english', 
    active: true 
  },
  { 
    id: 'mathematics', 
    name: 'Mathematics', 
    icon: '∫', 
    href: '/subject/mathematics', 
    active: false 
  },
  { 
    id: 'economics', 
    name: 'Economics', 
    icon: '📈', 
    href: '/subject/economics', 
    active: true,
    gradient: {
      start: '#FF6B6B',
      end: '#FF8E53'
    }
  },
  { 
    id: 'chinese-history', 
    name: 'Chinese History', 
    icon: '史', 
    href: '/subject/chinese-history', 
    active: false 
  },
  { 
    id: 'history', 
    name: 'History', 
    icon: '📜', 
    href: '/subject/history', 
    active: false 
  },
  { 
    id: 'chemistry', 
    name: 'Chemistry', 
    icon: '🧪', 
    href: '/subject/chemistry', 
    active: false 
  },
  { 
    id: 'physics', 
    name: 'Physics', 
    icon: '⚛️', 
    href: '/subject/physics', 
    active: false 
  },
  { 
    id: 'biology', 
    name: 'Biology', 
    icon: '🧬', 
    href: '/subject/biology', 
    active: false 
  },
  { 
    id: 'ict', 
    name: 'ICT', 
    icon: '💻', 
    href: '/subject/ict', 
    active: false 
  },
];

// Economics data
const economicsPapers: Paper[] = [
  { year: 2012, paper1: 'econ/2012/p1.pdf', paper2: 'econ/2012/p2.pdf', answer: 'econ/2012/ans.pdf', performance: 'econ/2012/per.pdf' },
  { year: 2013, paper1: 'econ/2013/p1.pdf', paper2: 'econ/2013/p2.pdf', answer: 'econ/2013/ans.pdf', performance: 'econ/2013/per.pdf' },
  { year: 2014, paper1: 'econ/2014/p1.pdf', paper2: 'econ/2014/p2.pdf', answer: 'econ/2014/ans.pdf', performance: 'econ/2014/per.pdf' },
  { year: 2015, paper1: 'econ/2015/p1.pdf', paper2: 'econ/2015/p2.pdf', answer: 'econ/2015/ans.pdf', performance: 'econ/2015/per.pdf' },
  { year: 2016, paper1: 'econ/2016/p1.pdf', paper2: 'econ/2016/p2.pdf', answer: 'econ/2016/ans.pdf', performance: 'econ/2016/per.pdf' },
  { year: 2017, paper1: 'econ/2017/p1.pdf', paper2: 'econ/2017/p2.pdf', answer: 'econ/2017/ans.pdf' },
  { year: 2018, paper1: 'econ/2018/p1.pdf', paper2: 'econ/2018/p2.pdf', answer: 'econ/2018/ans.pdf', performance: 'econ/2018/per.pdf' },
  { year: 2019, paper1: 'econ/2019/p1.pdf', paper2: 'econ/2019/p2.pdf', answer: 'econ/2019/ans.pdf', performance: 'econ/2019/per.pdf' },
  { year: 2020, paper1: 'econ/2020/p1.pdf', paper2: 'econ/2020/p2.pdf', answer: 'econ/2020/ans.pdf', performance: 'econ/2020/per.pdf' },
  { year: 2021, paper1: 'econ/2021/p1.pdf', paper2: 'econ/2021/p2.pdf', answer: 'econ/2021/ans.pdf', performance: 'econ/2021/per.pdf' },
  { year: 2022, paper1: 'econ/2022/p1.pdf', paper2: 'econ/2022/p2.pdf' },
  { year: 2023, paper1: 'econ/2023/p1.pdf', paper2: 'econ/2023/p2.pdf' },
];

// Geography data
const geographyPapers: Paper[] = [
  { year: 2012, paper1: 'Geog/2012/p1.pdf', paper2: 'Geog/2012/p2.pdf', map: 'Geog/2012/map.pdf', answer: 'Geog/2012/ans.pdf', performance: 'Geog/2012/performance .pdf' },
  { year: 2013, paper1: 'Geog/2013/p1.pdf', paper2: 'Geog/2013/p2.pdf', map: 'Geog/2013/map.pdf', answer: 'Geog/2013/ans.pdf', performance: 'Geog/2013/per.pdf' },
  { year: 2014, paper1: 'Geog/2014/p1.pdf', paper2: 'Geog/2014/p2.pdf', map: 'Geog/2014/map.pdf', answer: 'Geog/2014/ans.pdf', performance: 'Geog/2014/per.pdf' },
  { year: 2015, paper1: 'Geog/2015/p1.pdf', paper2: 'Geog/2015/p2.pdf', map: 'Geog/2015/map.pdf', answer: 'Geog/2015/ans.pdf', performance: 'Geog/2015/per.pdf' },
  { year: 2016, paper1: 'Geog/2016/p1.pdf', paper2: 'Geog/2016/p2.pdf', map: 'Geog/2016/map.pdf', answer: 'Geog/2016/ans.pdf', performance: 'Geog/2016/per.pdf' },
  { year: 2017, paper1: 'Geog/2017/p1.pdf', paper2: 'Geog/2017/p2.pdf', map: 'Geog/2017/map.pdf', answer: 'Geog/2017/ans.pdf', performance: 'Geog/2017/per.pdf' },
  { year: 2018, paper1: 'Geog/2018/p1.pdf', paper2: 'Geog/2018/p2.pdf', map: 'Geog/2018/map.pdf', answer: 'Geog/2018/ans.pdf', performance: 'Geog/2018/per.pdf' },
  { year: 2019, paper1: 'Geog/2019/p1.pdf', paper2: 'Geog/2019/p2.pdf', map: 'Geog/2019/map.pdf', answer: 'Geog/2019/ans.pdf', performance: 'Geog/2019/per.pdf' },
  { year: 2020, paper1: 'Geog/2020/p1.pdf', paper2: 'Geog/2020/p2.pdf', map: 'Geog/2020/map.pdf', answer: 'Geog/2020/ans.pdf', performance: 'Geog/2020/per.pdf' },
  { year: 2021, paper1: 'Geog/2021/p1.pdf', paper2: 'Geog/2021/p2.pdf', map: 'Geog/2021/map.pdf', answer: 'Geog/2021/ans.pdf', performance: 'Geog/2021/per.pdf' },
  { year: 2022, paper1: 'Geog/2022/p1.pdf', paper2: 'Geog/2022/p2.pdf', map: 'Geog/2022/map.pdf', answer: 'Geog/2022/ans.pdf' },
  { year: 2023, paper1: 'Geog/2023/p1.pdf', paper2: 'Geog/2023/p2.pdf', map: 'Geog/2023/map.pdf', answer: 'Geog/2023/ans.pdf', performance: 'Geog/2023/per.pdf' },
];

// English data
const englishPapers: Paper[] = [
  { year: 2012, paper1: 'eng/2012/p1_reading.pdf', paper2: 'eng/2012/p2_writing.pdf', dataResponse: 'eng/2012/p3_listening.pdf', map: 'eng/2012/p4_speaking.pdf', answer: 'eng/2012/answers.pdf', performance: 'eng/2012/candidate_performance.pdf' },
  { year: 2013, paper1: 'eng/2013/p1_reading.pdf', paper2: 'eng/2013/p2_writing.pdf', dataResponse: 'eng/2013/p3_listening.pdf', map: 'eng/2013/p4_speaking.pdf', answer: 'eng/2013/answers.pdf', performance: 'eng/2013/candidate_performance.pdf' },
  { year: 2014, paper1: 'eng/2014/p1_reading.pdf', paper2: 'eng/2014/p2_writing.pdf', dataResponse: 'eng/2014/p3_listening.pdf', map: 'eng/2014/p4_speaking.pdf', answer: 'eng/2014/answers.pdf', performance: 'eng/2014/candidate_performance.pdf' },
  { year: 2015, paper1: 'eng/2015/p1_reading.pdf', paper2: 'eng/2015/p2_writing.pdf', dataResponse: 'eng/2015/p3_listening.pdf', map: 'eng/2015/p4_speaking.pdf', answer: 'eng/2015/answers.pdf', performance: 'eng/2015/candidate_performance.pdf' },
  { year: 2016, paper1: 'eng/2016/p1_reading.pdf', paper2: 'eng/2016/p2_writing.pdf', dataResponse: 'eng/2016/p3_listening.pdf', map: 'eng/2016/p4_speaking.pdf', answer: 'eng/2016/answers.pdf', performance: 'eng/2016/candidate_performance.pdf' },
  { year: 2017, paper1: 'eng/2017/p1_reading.pdf', paper2: 'eng/2017/p2_writing.pdf', dataResponse: 'eng/2017/p3_listening.pdf', map: 'eng/2017/p4_speaking.pdf', answer: 'eng/2017/answers.pdf', performance: 'eng/2017/candidate_performance.pdf' },
  { year: 2018, paper1: 'eng/2018/p1_reading.pdf', paper2: 'eng/2018/p2_writing.pdf', dataResponse: 'eng/2018/p3_listening.pdf', map: 'eng/2018/p4_speaking.pdf', answer: 'eng/2018/answers.pdf', performance: 'eng/2018/candidate_performance.pdf' },
  { year: 2019, paper1: 'eng/2019/p1_reading.pdf', paper2: 'eng/2019/p2_writing.pdf', dataResponse: 'eng/2019/p3_listening.pdf', map: 'eng/2019/p4_speaking.pdf', answer: 'eng/2019/answers.pdf', performance: 'eng/2019/candidate_performance.pdf' },
  { year: 2020, paper1: 'eng/2020/p1_reading.pdf', paper2: 'eng/2020/p2_writing.pdf', dataResponse: 'eng/2020/p3_listening.pdf', answer: 'eng/2020/answers.pdf', performance: 'eng/2020/candidate_performance.pdf' },
  { year: 2021, paper1: 'eng/2021/p1_reading.pdf', paper2: 'eng/2021/p2_writing.pdf', dataResponse: 'eng/2021/p3_listening.pdf', answer: 'eng/2021/answers.pdf', performance: 'eng/2021/candidate_performance.pdf' },
  { year: 2022, paper1: 'eng/2022/p1_reading.pdf', paper2: 'eng/2022/p2_writing.pdf', dataResponse: 'eng/2022/p3_listening.pdf', answer: 'eng/2022/answers.pdf', performance: 'eng/2022/candidate_performance.pdf' },
  { year: 2023, paper1: 'eng/2023/p1_reading.pdf', paper2: 'eng/2023/p2_writing.pdf', dataResponse: 'eng/2023/p3_listening.pdf', map: 'eng/2023/p4_speaking.pdf' },
];

// Geography essays for surprise feature
const geographyEssays: Essay[] = [
  {
    id: "2020_p2_q3",
    year: 2020,
    paper: "Paper 2",
    questionNumber: 3,
    marks: 8,
    category: "river_coastal",
    question: "Explain the formation of coastal landforms through erosion and deposition processes. Use examples to support your answer.",
    answerPath: "Geog/2020/ans.pdf"
  },
  {
    id: "2019_p1_q2",
    year: 2019,
    paper: "Paper 1",
    questionNumber: 2,
    marks: 6,
    category: "rock",
    question: "Describe the process of chemical weathering and explain how it affects different types of rocks.",
    answerPath: "Geog/2019/ans.pdf"
  },
  {
    id: "2021_p2_q4",
    year: 2021,
    paper: "Paper 2",
    questionNumber: 4,
    marks: 10,
    category: "plate_tectonics",
    question: "Analyze the relationship between plate tectonics and the distribution of earthquakes around the world. Discuss the hazards associated with seismic activities.",
    answerPath: "Geog/2021/ans.pdf"
  },
  {
    id: "2018_p1_q3",
    year: 2018,
    paper: "Paper 1",
    questionNumber: 3,
    marks: 8,
    category: "climate",
    question: "Explain the factors that influence the climate of Hong Kong. Discuss how climate change might affect the region.",
    answerPath: "Geog/2018/ans.pdf"
  },
  {
    id: "2020_p1_q1",
    year: 2020,
    paper: "Paper 1",
    questionNumber: 1,
    marks: 6,
    category: "rock",
    question: "Compare and contrast the formation processes of sedimentary and igneous rocks. Provide examples of each type.",
    answerPath: "Geog/2020/ans.pdf"
  },
  {
    id: "2019_p2_q2",
    year: 2019,
    paper: "Paper 2",
    questionNumber: 2,
    marks: 12,
    category: "industry",
    question: "Evaluate the factors that influence the location of manufacturing industries. Use case studies to illustrate your answer.",
    answerPath: "Geog/2019/ans.pdf"
  },
  {
    id: "2022_p1_q4",
    year: 2022,
    paper: "Paper 1",
    questionNumber: 4,
    marks: 8,
    category: "river_coastal",
    question: "Describe the formation of river meanders and explain how they change over time through erosion and deposition.",
    answerPath: "Geog/2022/ans.pdf"
  },
  {
    id: "2021_p1_q3",
    year: 2021,
    paper: "Paper 1",
    questionNumber: 3,
    marks: 10,
    category: "population",
    question: "Analyze the causes and consequences of rural-urban migration in developing countries. Discuss potential solutions to manage this process.",
    answerPath: "Geog/2021/ans.pdf"
  },
  {
    id: "2018_p2_q1",
    year: 2018,
    paper: "Paper 2",
    questionNumber: 1,
    marks: 6,
    category: "plate_tectonics",
    question: "Explain the formation of fold mountains and describe their characteristic features. Use the Himalayas as an example.",
    answerPath: "Geog/2018/ans.pdf"
  },
  {
    id: "2023_p2_q3",
    year: 2023,
    paper: "Paper 2",
    questionNumber: 3,
    marks: 8,
    category: "climate",
    question: "Discuss the impacts of global warming on weather patterns and sea levels. Analyze the potential consequences for coastal areas.",
    answerPath: "Geog/2023/ans.pdf"
  }
];

// Subject data configuration
export const subjectData: Record<string, SubjectData> = {
  economics: {
    name: 'Economics',
    icon: '📈',
    papers: {
      sample: [
        { year: 1, paper1: 'econ/sample_paper/p1.pdf', paper2: 'econ/sample_paper/p2.pdf', answers: 'econ/sample_paper/answers.pdf' }
      ],
      practice: [
        { year: 1, paper1: 'econ/practice_paper/p1.pdf', paper2: 'econ/practice_paper/p2.pdf', answers: 'econ/practice_paper/answers.pdf' }
      ],
      pastPapers: economicsPapers
    }
  },
  geography: {
    name: 'Geography',
    icon: '🌍',
    papers: {
      sample: [
        { year: 1, paper1: 'Geog/Sample paper/p1.pdf', paper2: 'Geog/Sample paper/p2.pdf', answer: 'Geog/Sample paper/ans.pdf' }
      ],
      practice: [
        { year: 1, paper1: 'Geog/Practice paper/Paper1.pdf', paper2: 'Geog/Practice paper/Paper2.pdf' }
      ],
      pastPapers: geographyPapers
    },
    essays: geographyEssays
  },
  chinese: {
    name: 'Chinese',
    icon: '文',
    papers: {
      sample: [],
      practice: [],
      pastPapers: []
    },
    specialContent: {
      type: 'html',
      title: 'HKDSE 中文《論仁》互動學習',
      description: '互動學習網站，包含溫習筆記、練習題目和AI智能評卷功能',
      url: 'Chinese/revision/index.html',
      isExternal: true
    }
  },
  english: {
    name: 'English',
    icon: 'Ab',
    papers: {
      sample: [
        { year: 1, paper1: 'eng/sample_paper/p1_reading.pdf', paper2: 'eng/sample_paper/p2_writing.pdf', dataResponse: 'eng/sample_paper/p3_listening.pdf', map: 'eng/sample_paper/p4_speaking.pdf', answer: 'eng/sample_paper/answers.pdf' }
      ],
      practice: [
        { year: 1, paper1: 'eng/practice_paper/p1_reading.pdf', paper2: 'eng/practice_paper/p2_writing.pdf', dataResponse: 'eng/practice_paper/p3_listening.pdf', map: 'eng/practice_paper/p4_speaking.pdf', answer: 'eng/practice_paper/answers.pdf' }
      ],
      pastPapers: englishPapers
    }
  }
};

// Category names for geography essays
export const categoryNames = {
  rock: "Rocks & Weathering",
  river_coastal: "River & Coastal",
  plate_tectonics: "Plate Tectonics",
  industry: "Industry",
  climate: "Climate",
  population: "Population"
};

export const getSubjectData = (subjectId: string): SubjectData | null => {
  return subjectData[subjectId] || null;
};

export const getRandomEssay = (): Essay | null => {
  const essays = subjectData.geography.essays;
  if (!essays || essays.length === 0) return null;
  
  const randomIndex = Math.floor(Math.random() * essays.length);
  return essays[randomIndex];
};