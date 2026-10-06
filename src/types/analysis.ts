export interface UploadedPaper {
  id: string;
  name: string;
  year: string;
  subject: string;
  fileBase64?: string;
  fileType?: string;
  text?: string;
  size?: number;
  uploadDate?: string;
  status?: 'ready' | 'uploaded' | 'processing' | 'error';
  errorMessage?: string;
}

export interface ExtractedQuestion {
  id: string;
  questionNumber: string;
  questionText: string;
  paperName: string;
  year: string;
  marks?: number;
  topic?: string;
  unit?: string;
  questionType?: 'Theory' | 'Numerical' | 'Definition' | 'Design/Diagram';
}

export interface Appearance {
  year: string;
  paperName: string;
  marks: number;
  section: string;
  wording?: string;
}

export interface RepeatedQuestionItem {
  id: string;
  question: string;
  matchType: 'Exact Repeated' | 'Similar / Rephrased';
  frequency: number;
  years: string[];
  topic: string;
  unit: string;
  priority: 'HIGH' | 'MEDIUM' | 'LOW';
  marks?: number;
  explanation?: string;
  variations?: string[];
}

export interface TopicItem {
  topic: string;
  unit: string;
  frequency: number;
  years: string[];
  relatedQuestionsCount: number;
  priority: 'HIGH PRIORITY' | 'MEDIUM PRIORITY' | 'LOW PRIORITY';
  weightagePercentage: number;
  subtopics: string[];
}

export interface DetailedPatternAnalysis {
  durationHours: string;
  totalMarks: number;
  sections: {
    name: string;
    marksPerQuestion: number;
    totalQuestions: number;
    choiceRule: string;
    description: string;
  }[];
  frequentlyAskedUnits: { unit: string; percentage: number; questionCount: number }[];
  frequentlyAskedTopics: string[];
  repeatedQuestionTypes: { type: string; percentage: number; description: string }[];
  marksDistribution: { marksLabel: string; count: number; percentage: number }[];
  shortVsLongRatio: { shortAnswerPercent: number; longAnswerPercent: number; explanation: string };
  theoryVsNumericalRatio: { theoryPercent: number; numericalProblemPercent: number; explanation: string };
  yearlyTrendChanges: string[];
  consistentTopics: string[];
  rarelyAppearingTopics: string[];
  limitationsNotice?: string;
}

export interface LikelyQuestionItem {
  id: string;
  question: string;
  relatedTopic: string;
  unit: string;
  previousFrequency: number;
  years: string[];
  priority: 'HIGH PRIORITY' | 'MEDIUM PRIORITY' | 'LOW PRIORITY';
  reasonForPriority: string;
  expectedMarks: number;
  keyPointsToCover: string[];
  simpleExplanation: string;
}

export interface StudyPlanDay {
  day: number;
  dayTitle: string;
  topicsToStudy: string[];
  importantQuestions: string[];
  revisionTask: string;
  suggestedPriority: 'HIGH PRIORITY' | 'MEDIUM PRIORITY' | 'REVISION / PRACTICE';
  estimatedHours: number;
  unitFocus: string;
}

export interface FullAgentAnalysis {
  subject: string;
  totalPapers: number;
  totalQuestionsExtracted: number;
  paperNames: string[];
  summary: string;
  extractedQuestions: ExtractedQuestion[];
  repeatedQuestions: RepeatedQuestionItem[];
  importantTopics: TopicItem[];
  patternAnalysis: DetailedPatternAnalysis;
  likelyImportantQuestions: LikelyQuestionItem[];
  studyPlan: StudyPlanDay[];
  disclaimer: string;
  analysisDate: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  citations?: string[];
  suggestedFollowUps?: string[];
}
