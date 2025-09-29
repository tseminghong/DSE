export interface Subject {
  id: string;
  name: string;
  icon: string;
  href: string;
  active: boolean;
  gradient?: {
    start: string;
    end: string;
  };
}

export interface Paper {
  year: number;
  paper1?: string;
  paper2?: string;
  dataResponse?: string;
  map?: string;
  answer?: string;
  performance?: string;
  answers?: string; // Alternative naming for some subjects
}

export interface Essay {
  id: string;
  year: number;
  paper: string;
  questionNumber: number;
  marks: number;
  category: string;
  question: string;
  answerPath?: string;
}

export interface SubjectData {
  name: string;
  icon: string;
  papers: {
    sample: Paper[];
    practice: Paper[];
    pastPapers: Paper[];
  };
  essays?: Essay[]; // For geography surprise feature
  specialContent?: {
    type: 'html' | 'iframe' | 'external';
    title: string;
    description: string;
    url: string;
    isExternal?: boolean;
  };
}

export interface TabItem {
  id: string;
  label: string;
  content: string;
}

export type PaperType = 'sample' | 'practice' | 'past';

export interface DownloadButtonProps {
  href?: string;
  label?: string;
  unavailable?: boolean;
}

export interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export interface HeaderProps {
  title?: string;
  backLink?: string;
}