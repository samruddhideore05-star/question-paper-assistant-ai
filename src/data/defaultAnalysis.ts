import { FullAgentAnalysis } from '../types/analysis';

export const DEFAULT_AGENT_ANALYSIS: FullAgentAnalysis = {
  subject: "Database Management Systems (CS8492)",
  totalPapers: 4,
  totalQuestionsExtracted: 68,
  paperNames: [
    "Nov/Dec 2021 (100 Marks)",
    "May/June 2022 (100 Marks)",
    "Nov/Dec 2023 (100 Marks)",
    "May/June 2024 (100 Marks)"
  ],
  analysisDate: "May 2025 Analysis Session",
  summary: "Comprehensive cross-year synthesis of 4 university examination papers reveals that ACID properties, Two-Phase Locking (2PL), Normalization (up to BCNF), B+ Tree indexing, and Deadlock detection appeared in 100% of analyzed question papers. Units 2 and 3 contribute over 54% of total examination marks.",
  disclaimer: "These are pattern-based study recommendations and are not guaranteed exam questions. Use this analysis alongside your official university curriculum.",

  extractedQuestions: [
    {
      id: "eq-1",
      questionNumber: "Q5 (Part A) & Q13.b (Part B)",
      questionText: "What are the ACID properties of database transactions? Explain Atomicity, Consistency, Isolation, and Durability.",
      paperName: "Nov/Dec 2021, May/June 2022, Nov/Dec 2023, May/June 2024",
      year: "2021, 2022, 2023, 2024",
      marks: 13,
      topic: "Transaction Management",
      unit: "Unit III",
      questionType: "Theory"
    },
    {
      id: "eq-2",
      questionNumber: "Q13.a (Part B)",
      questionText: "Explain Concurrency Control using Two-Phase Locking (2PL) protocol. Contrast Strict 2PL and Rigorous 2PL.",
      paperName: "Nov/Dec 2021, May/June 2022, Nov/Dec 2023, May/June 2024",
      year: "2021, 2022, 2023, 2024",
      marks: 13,
      topic: "Concurrency Control",
      unit: "Unit III",
      questionType: "Theory"
    },
    {
      id: "eq-3",
      questionNumber: "Q11.a (Part B)",
      questionText: "Explain Three-Schema Architecture of DBMS in detail with neat diagrams. Distinguish physical and logical data independence.",
      paperName: "Nov/Dec 2021, May/June 2022, Nov/Dec 2023, May/June 2024",
      year: "2021, 2022, 2023, 2024",
      marks: 13,
      topic: "DBMS Architecture",
      unit: "Unit I",
      questionType: "Design/Diagram"
    },
    {
      id: "eq-4",
      questionNumber: "Q14.a (Part B)",
      questionText: "Describe B+ Tree indexing structure. Explain search and insertion algorithms with node splitting diagrams.",
      paperName: "Nov/Dec 2021, May/June 2022, Nov/Dec 2023, May/June 2024",
      year: "2021, 2022, 2023, 2024",
      marks: 13,
      topic: "Indexing & Storage",
      unit: "Unit IV",
      questionType: "Theory"
    },
    {
      id: "eq-5",
      questionNumber: "Q15.a (Part B)",
      questionText: "What is Deadlock? Explain Deadlock prevention techniques (Wait-Die and Wound-Wait) and Deadlock detection using Wait-For Graph.",
      paperName: "Nov/Dec 2021, May/June 2022, Nov/Dec 2023, May/June 2024",
      year: "2021, 2022, 2023, 2024",
      marks: 13,
      topic: "Deadlock Handling",
      unit: "Unit III",
      questionType: "Theory"
    },
    {
      id: "eq-6",
      questionNumber: "Q12.a (Part B)",
      questionText: "Discuss 1NF, 2NF, 3NF, and BCNF normalization with suitable relational schema examples.",
      paperName: "Nov/Dec 2021, May/June 2022, Nov/Dec 2023, May/June 2024",
      year: "2021, 2022, 2023, 2024",
      marks: 13,
      topic: "Normalization",
      unit: "Unit II",
      questionType: "Theory"
    },
    {
      id: "eq-7",
      questionNumber: "Q15.b (Part B)",
      questionText: "Discuss Log-based Recovery techniques (Deferred update vs Immediate update) and Checkpoints.",
      paperName: "Nov/Dec 2021, May/June 2022, Nov/Dec 2023, May/June 2024",
      year: "2021, 2022, 2023, 2024",
      marks: 13,
      topic: "Database Recovery",
      unit: "Unit V",
      questionType: "Theory"
    },
    {
      id: "eq-8",
      questionNumber: "Q11.b (Part B)",
      questionText: "Construct an Entity-Relationship (ER) diagram with appropriate entities, attributes, relationships, and cardinalities.",
      paperName: "Nov/Dec 2021 (Hospital), May/June 2022 (University), Nov/Dec 2023 (Banking), May/June 2024 (Library)",
      year: "2021, 2022, 2023, 2024",
      marks: 13,
      topic: "ER Modeling",
      unit: "Unit I",
      questionType: "Design/Diagram"
    },
    {
      id: "eq-9",
      questionNumber: "Q3 (Part A)",
      questionText: "Define Boyce-Codd Normal Form (BCNF). Why is BCNF considered stronger than 3NF?",
      paperName: "Nov/Dec 2021, May/June 2022, Nov/Dec 2023, May/June 2024",
      year: "2021, 2022, 2023, 2024",
      marks: 2,
      topic: "Normalization",
      unit: "Unit II",
      questionType: "Definition"
    },
    {
      id: "eq-10",
      questionNumber: "Q8/Q6 (Part A)",
      questionText: "Distinguish between Dense Index and Sparse Index with diagrams.",
      paperName: "Nov/Dec 2021, Nov/Dec 2023, May/June 2024",
      year: "2021, 2023, 2024",
      marks: 2,
      topic: "Indexing",
      unit: "Unit IV",
      questionType: "Definition"
    },
    {
      id: "eq-11",
      questionNumber: "Q12.b (Part B)",
      questionText: "Given a relational schema R(A, B, C, D, E) with functional dependencies, find all candidate keys and normalize R up to 3NF.",
      paperName: "Nov/Dec 2021, Nov/Dec 2023, May/June 2024",
      year: "2021, 2023, 2024",
      marks: 13,
      topic: "Functional Dependencies",
      unit: "Unit II",
      questionType: "Numerical"
    },
    {
      id: "eq-12",
      questionNumber: "Q16.a (Part C)",
      questionText: "Write SQL queries for real-world application databases (Airline, Food delivery, E-Commerce) with aggregate functions and grouping.",
      paperName: "Nov/Dec 2021, May/June 2022, Nov/Dec 2023, May/June 2024",
      year: "2021, 2022, 2023, 2024",
      marks: 15,
      topic: "SQL & Relational Algebra",
      unit: "Unit II & Part C",
      questionType: "Numerical"
    }
  ],

  repeatedQuestions: [
    {
      id: "rq-1",
      question: "Explain the ACID properties of database transactions in detail with real-world banking examples.",
      matchType: "Exact Repeated",
      frequency: 4,
      years: ["2021", "2022", "2023", "2024"],
      topic: "Transaction Management",
      unit: "Unit III",
      priority: "HIGH",
      marks: 13,
      explanation: "Appeared verbatim in all 4 exam years in Part B (Q13.b) as well as Part A 2-mark definitions.",
      variations: [
        "2021: What is the ACID property of database transactions? (Part A, 2M) & Part B Q13.b (13M)",
        "2022: Explain ACID properties with emphasis on Atomicity and Durability. (Part A, 2M) & Part B Q13.b (13M)",
        "2023: State and briefly explain ACID properties of transactions. (Part A, 2M) & Part B Q13.b (13M)",
        "2024: What are the ACID properties of database transactions? (Part A, 2M) & Part B Q13.b (13M)"
      ]
    },
    {
      id: "rq-2",
      question: "Explain Concurrency Control using Two-Phase Locking (2PL) protocol. Contrast Strict 2PL and Rigorous 2PL.",
      matchType: "Exact Repeated",
      frequency: 4,
      years: ["2021", "2022", "2023", "2024"],
      topic: "Concurrency Control",
      unit: "Unit III",
      priority: "HIGH",
      marks: 13,
      explanation: "Present in every analyzed exam paper in Part B (Q13.a) without exception.",
      variations: [
        "2021: Explain Concurrency Control using Two-Phase Locking (2PL) protocol. Contrast Strict 2PL and Rigorous 2PL.",
        "2022: Explain Two-Phase Locking (2PL) protocol for concurrency control. Differentiate conservative 2PL and strict 2PL.",
        "2023: Explain Concurrency Control using Two-Phase Locking (2PL). Why does 2PL prevent conflict serializability violations?",
        "2024: Discuss Two-Phase Locking (2PL) Protocol in detail. Compare Basic 2PL, Strict 2PL, and Rigorous 2PL."
      ]
    },
    {
      id: "rq-3",
      question: "Explain Three-Schema Architecture of DBMS in detail with neat diagrams. Contrast physical and logical data independence.",
      matchType: "Exact Repeated",
      frequency: 4,
      years: ["2021", "2022", "2023", "2024"],
      topic: "DBMS Architecture",
      unit: "Unit I",
      priority: "HIGH",
      marks: 13,
      explanation: "Appeared in Part B (Q11.a) in all 4 years as the primary descriptive question for Unit I.",
      variations: [
        "2021: Explain Three-Schema Architecture of DBMS in detail with neat diagrams.",
        "2022: Describe the Three-Schema Architecture and explain Physical & Logical Data Independence.",
        "2023: Explain Three-Schema Architecture of DBMS in detail. How does it support data independence?",
        "2024: Describe the Three-Tier Schema Architecture of DBMS with a neat diagram. Explain physical vs logical data independence."
      ]
    },
    {
      id: "rq-4",
      question: "Describe B+ Tree indexing structure. Explain search and insertion algorithms with diagrams and node splitting.",
      matchType: "Exact Repeated",
      frequency: 4,
      years: ["2021", "2022", "2023", "2024"],
      topic: "Storage & Indexing",
      unit: "Unit IV",
      priority: "HIGH",
      marks: 13,
      explanation: "Guaranteed question in Unit IV in every paper since 2021 in Q14.a.",
      variations: [
        "2021: Explain B+ Tree indexing in detail. Show how search, insertion, and deletion operations work in B+ Trees.",
        "2022: Explain B+ Tree indexing structure. Illustrate insertion of keys [10, 20, 5, 15, 30, 25, 35] in a B+ Tree of order 3.",
        "2023: Describe B+ Tree Indexing in detail. Explain search and insertion algorithms with diagrams.",
        "2024: Explain B+ Tree index structures. Explain how search, insertion, and node splitting operate in a B+ Tree."
      ]
    },
    {
      id: "rq-5",
      question: "What is Deadlock? Explain Deadlock prevention techniques (Wait-Die and Wound-Wait) and Deadlock detection using Wait-For Graph.",
      matchType: "Similar / Rephrased",
      frequency: 4,
      years: ["2021", "2022", "2023", "2024"],
      topic: "Deadlock Handling",
      unit: "Unit III",
      priority: "HIGH",
      marks: 13,
      explanation: "Conceptually identical questions testing Wait-For Graph cycle detection and timestamp deadlock prevention.",
      variations: [
        "2021: Explain Deadlock prevention, detection, and recovery mechanisms in DBMS transactions.",
        "2022: What is Deadlock? Explain Deadlock prevention techniques (Wait-Die and Wound-Wait) and detection using Wait-For Graph.",
        "2023: Describe Deadlock Detection using Wait-For Graph (WFG) and recovery through victim selection.",
        "2024: Discuss Deadlock prevention techniques (Wait-Die and Wound-Wait) and Deadlock detection using Wait-For Graph."
      ]
    },
    {
      id: "rq-6",
      question: "Discuss Relational Normalization (1NF, 2NF, 3NF, BCNF) with concrete relational schema examples.",
      matchType: "Similar / Rephrased",
      frequency: 4,
      years: ["2021", "2022", "2023", "2024"],
      topic: "Normalization",
      unit: "Unit II",
      priority: "HIGH",
      marks: 13,
      explanation: "Asked every year in Q12(a). Focuses on anomaly removal and functional dependency conditions.",
      variations: [
        "2021: Discuss 1NF, 2NF, 3NF, and BCNF normalization with suitable relational schema examples.",
        "2022: What is Normalization? Explain 1NF, 2NF, 3NF, and BCNF with relational schemas and examples.",
        "2023: Explain the need for Normalization. Discuss 1NF, 2NF, 3NF, and BCNF with concrete table examples.",
        "2024: Explain Normalization up to BCNF (1NF, 2NF, 3NF, BCNF) with clear relational examples and explain update anomalies."
      ]
    },
    {
      id: "rq-7",
      question: "Discuss Log-Based Database Recovery (Immediate vs Deferred Database Modification) and the role of Checkpoints.",
      matchType: "Similar / Rephrased",
      frequency: 4,
      years: ["2021", "2022", "2023", "2024"],
      topic: "Database Recovery",
      unit: "Unit V",
      priority: "MEDIUM",
      marks: 13,
      explanation: "Appeared in Part B Q15(b) in 4 consecutive exam cycles.",
      variations: [
        "2021: Discuss Log-based Recovery techniques (Deferred update vs Immediate update) and Checkpoints.",
        "2022: Explain Database Recovery Techniques: Log-Based Recovery with Immediate and Deferred Database Modification, and Checkpoints.",
        "2023: Discuss Log-based Recovery with Immediate and Deferred update schemes. Role of checkpoints.",
        "2024: Explain Database Recovery Techniques using Log Records: Deferred vs Immediate database modification with checkpoints."
      ]
    },
    {
      id: "rq-8",
      question: "Define Boyce-Codd Normal Form (BCNF). State why BCNF is considered stronger than 3NF.",
      matchType: "Exact Repeated",
      frequency: 4,
      years: ["2021", "2022", "2023", "2024"],
      topic: "Normalization",
      unit: "Unit II",
      priority: "MEDIUM",
      marks: 2,
      explanation: "Repeated in Part A 2-mark definitions across 2021, 2022, 2023, and 2024.",
      variations: [
        "2021: State the purpose of Boyce-Codd Normal Form (BCNF) with an example.",
        "2022: Define Boyce-Codd Normal Form (BCNF). How does it differ from 3NF?",
        "2023: State Boyce-Codd Normal Form (BCNF) condition. Why is it stronger than 3NF?",
        "2024: Define BCNF (Boyce-Codd Normal Form) with a simple example."
      ]
    },
    {
      id: "rq-9",
      question: "Distinguish between Dense Index and Sparse Index with suitable sketches.",
      matchType: "Exact Repeated",
      frequency: 3,
      years: ["2021", "2023", "2024"],
      topic: "Indexing",
      unit: "Unit IV",
      priority: "LOW",
      marks: 2,
      explanation: "Frequent Part A 2-mark question contrasting index memory requirements and random access speeds."
    }
  ],

  importantTopics: [
    {
      topic: "Transaction Management & ACID Properties",
      unit: "Unit III",
      frequency: 14,
      years: ["2021", "2022", "2023", "2024"],
      relatedQuestionsCount: 8,
      priority: "HIGH PRIORITY",
      weightagePercentage: 24,
      subtopics: ["ACID Properties", "Transaction States", "Serializability", "Dirty Read & Lost Update"]
    },
    {
      topic: "Concurrency Control (2PL Protocol & Deadlocks)",
      unit: "Unit III",
      frequency: 12,
      years: ["2021", "2022", "2023", "2024"],
      relatedQuestionsCount: 7,
      priority: "HIGH PRIORITY",
      weightagePercentage: 21,
      subtopics: ["Strict vs Rigorous 2PL", "Wait-For Graph", "Wait-Die vs Wound-Wait", "Lock Compatibility"]
    },
    {
      topic: "Relational Normalization & Functional Dependencies",
      unit: "Unit II",
      frequency: 11,
      years: ["2021", "2022", "2023", "2024"],
      relatedQuestionsCount: 6,
      priority: "HIGH PRIORITY",
      weightagePercentage: 18,
      subtopics: ["1NF to BCNF Rules", "Candidate Key Derivation", "Lossless Join Decomposition", "Dependency Preservation"]
    },
    {
      topic: "Storage, Indexing & B+ Trees",
      unit: "Unit IV",
      frequency: 9,
      years: ["2021", "2022", "2023", "2024"],
      relatedQuestionsCount: 5,
      priority: "MEDIUM PRIORITY",
      weightagePercentage: 15,
      subtopics: ["B+ Tree Insertion & Search", "Dense vs Sparse Index", "Primary vs Secondary Index", "Query Heuristics"]
    },
    {
      topic: "Database Recovery Techniques & Checkpoints",
      unit: "Unit V",
      frequency: 8,
      years: ["2021", "2022", "2023", "2024"],
      relatedQuestionsCount: 4,
      priority: "MEDIUM PRIORITY",
      weightagePercentage: 12,
      subtopics: ["Immediate vs Deferred Modification", "Checkpoints", "Write-Ahead Logging (WAL)", "Shadow Paging"]
    },
    {
      topic: "DBMS Architecture & Conceptual ER Modeling",
      unit: "Unit I",
      frequency: 8,
      years: ["2021", "2022", "2023", "2024"],
      relatedQuestionsCount: 4,
      priority: "MEDIUM PRIORITY",
      weightagePercentage: 10,
      subtopics: ["Three-Schema Architecture", "Physical vs Logical Data Independence", "ER Diagrams with Cardinalities"]
    },
    {
      topic: "RAID & Advanced Storage Architectures",
      unit: "Unit IV",
      frequency: 2,
      years: ["2022"],
      relatedQuestionsCount: 1,
      priority: "LOW PRIORITY",
      weightagePercentage: 2,
      subtopics: ["RAID Levels 0-5", "Disk Striping", "Mirroring"]
    },
    {
      topic: "Triggers and Dynamic SQL Constraints",
      unit: "Unit II",
      frequency: 2,
      years: ["2024"],
      relatedQuestionsCount: 1,
      priority: "LOW PRIORITY",
      weightagePercentage: 2,
      subtopics: ["BEFORE / AFTER Triggers", "Row-level Triggers"]
    }
  ],

  patternAnalysis: {
    durationHours: "3 Hours",
    totalMarks: 100,
    sections: [
      {
        name: "PART - A (Short Answer Definitions)",
        marksPerQuestion: 2,
        totalQuestions: 10,
        choiceRule: "Compulsory (10 out of 10, no choice)",
        description: "Covers fundamental 2-mark definitions, distinctions (e.g. dense vs sparse index, 3NF vs BCNF), and short syntaxes."
      },
      {
        name: "PART - B (Descriptive & Analytical)",
        marksPerQuestion: 13,
        totalQuestions: 5,
        choiceRule: "Internal Choice in each question: 11(a) or 11(b), strictly mapping Unit I to V",
        description: "Core theory, architectural diagrams, numerical candidate key derivations, and algorithm explanations."
      },
      {
        name: "PART - C (Application / Case Study)",
        marksPerQuestion: 15,
        totalQuestions: 1,
        choiceRule: "Internal Choice: 16(a) or 16(b)",
        description: "Tests comprehensive real-world system design (ER modeling + complex SQL queries) or serializability schedule validation."
      }
    ],
    frequentlyAskedUnits: [
      { unit: "Unit III (Transactions & Concurrency)", percentage: 32, questionCount: 18 },
      { unit: "Unit II (Relational Model & Normalization)", percentage: 23, questionCount: 14 },
      { unit: "Unit IV (Indexing & Storage)", percentage: 18, questionCount: 11 },
      { unit: "Unit I (Architecture & ER Modeling)", percentage: 15, questionCount: 10 },
      { unit: "Unit V (Recovery & Advanced Systems)", percentage: 12, questionCount: 8 }
    ],
    frequentlyAskedTopics: [
      "ACID Properties",
      "Two-Phase Locking (2PL)",
      "Normalization (1NF-BCNF)",
      "Three-Schema Architecture",
      "B+ Tree Operations",
      "Deadlock Wait-For Graph",
      "Log-Based Recovery"
    ],
    repeatedQuestionTypes: [
      { type: "Architectural Diagram + Detailed Explanation", percentage: 40, description: "Three-Schema, Transaction States, B+ Tree node splitting" },
      { type: "Comparison / Differentiation", percentage: 25, description: "Physical vs Logical Independence, Dense vs Sparse, Strict vs Rigorous 2PL" },
      { type: "Problem Solving / Candidate Key Derivation", percentage: 20, description: "Attribute closures, normalizing relation R to 3NF/BCNF" },
      { type: "Scenario-based System Modeling (Part C)", percentage: 15, description: "ER schema design and SQL queries for e-commerce/hospitals" }
    ],
    marksDistribution: [
      { marksLabel: "13-Mark Questions (Part B)", count: 20, percentage: 65 },
      { marksLabel: "2-Mark Questions (Part A)", count: 40, percentage: 20 },
      { marksLabel: "15-Mark Questions (Part C)", count: 4, percentage: 15 }
    ],
    shortVsLongRatio: {
      shortAnswerPercent: 20,
      longAnswerPercent: 80,
      explanation: "80% of total examination marks come from descriptive and application questions (Part B and Part C). Only 20% are short 2-mark definitions."
    },
    theoryVsNumericalRatio: {
      theoryPercent: 70,
      numericalProblemPercent: 30,
      explanation: "70% of questions are concept explanations, architectures, and diagrams. 30% consist of functional dependency math, B+ tree key insertions, and SQL queries."
    },
    yearlyTrendChanges: [
      "From 2021 to 2024, Part C shifted from standard Airline databases to modern multi-tier platforms (Food delivery, E-commerce portals).",
      "Questions on Concurrency serializability checking (Conflict vs View serializability) have increased in frequency.",
      "Core questions in Unit I (Three-Schema) and Unit III (2PL, ACID) have remained 100% stable."
    ],
    consistentTopics: [
      "ACID Properties (Appeared 2021, 2022, 2023, 2024)",
      "Two-Phase Locking Protocol (Appeared 2021, 2022, 2023, 2024)",
      "Three-Schema Architecture (Appeared 2021, 2022, 2023, 2024)",
      "Normalization up to BCNF (Appeared 2021, 2022, 2023, 2024)",
      "B+ Tree Indexing (Appeared 2021, 2022, 2023, 2024)"
    ],
    rarelyAppearingTopics: [
      "RAID Level 5 and hardware striping (Appeared only once in 2022)",
      "Triggers in SQL (Appeared once in 2024)",
      "Static vs Extendible Hashing (Appeared once in 2021 Part A)"
    ],
    limitationsNotice: "Pattern analysis is strictly grounded in the 4 uploaded university papers (2021-2024). Papers from different universities or semesters may follow alternative question numbering schemes."
  },

  likelyImportantQuestions: [
    {
      id: "lq-1",
      question: "Explain the ACID properties of database transactions in detail with real-world examples. How does the DBMS guarantee each property?",
      relatedTopic: "Transaction Management",
      unit: "Unit III",
      previousFrequency: 4,
      years: ["2021", "2022", "2023", "2024"],
      priority: "HIGH PRIORITY",
      reasonForPriority: "Appeared in 4 out of 4 previous papers across both Part A and Part B with 100% historical recurrence.",
      expectedMarks: 13,
      keyPointsToCover: [
        "State definition of Transaction and the ACID acronym",
        "Atomicity: All-or-nothing execution, maintained via Transaction Log / Undo",
        "Consistency: Database transitions from one valid state to another",
        "Isolation: Concurrent execution without interference (maintained via 2PL)",
        "Durability: Committed updates persist across hardware/system crashes"
      ],
      simpleExplanation: "Think of an ATM withdrawal. If money is deducted from your balance, you must get the cash. If the ATM runs out of cash midway, your balance is restored (Atomicity)."
    },
    {
      id: "lq-2",
      question: "Explain Concurrency Control using Two-Phase Locking (2PL) Protocol. Differentiate Basic 2PL, Strict 2PL, and Rigorous 2PL.",
      relatedTopic: "Concurrency Control",
      unit: "Unit III",
      previousFrequency: 4,
      years: ["2021", "2022", "2023", "2024"],
      priority: "HIGH PRIORITY",
      reasonForPriority: "Core question for Unit III in Part B Q13(a) in every examined university paper.",
      expectedMarks: 13,
      keyPointsToCover: [
        "Explain Growing Phase (acquiring locks, none released) and Shrinking Phase (releasing locks)",
        "Lock Point definition",
        "Strict 2PL: All exclusive (write) locks held until transaction completes",
        "Rigorous 2PL: All shared and exclusive locks held until commit",
        "Note limitations: 2PL guarantees serializability but does NOT prevent deadlocks"
      ],
      simpleExplanation: "In the first phase, you borrow all books you need without returning any. In the second phase, once you return your first book, you cannot borrow any new ones."
    },
    {
      id: "lq-3",
      question: "Discuss Database Normalization from 1NF to BCNF with relational schema examples. Explain how normalization eliminates update anomalies.",
      relatedTopic: "Normalization",
      unit: "Unit II",
      previousFrequency: 4,
      years: ["2021", "2022", "2023", "2024"],
      priority: "HIGH PRIORITY",
      reasonForPriority: "Appeared in all 4 analyzed papers in Q12(a). Essential 13-mark question.",
      expectedMarks: 13,
      keyPointsToCover: [
        "Define Normalization & the 3 anomalies (Insert, Delete, Update)",
        "1NF: Atomic values, eliminate repeating groups",
        "2NF: In 1NF + No partial functional dependency",
        "3NF: In 2NF + No transitive functional dependency",
        "BCNF: Strict form where for every FD X->Y, X MUST be a super key",
        "Contrast table between 3NF and BCNF"
      ],
      simpleExplanation: "Normalization organizes messy spreadsheets into clean, linked tables so deleting an enrolled course doesn't accidentally erase the professor's entire record."
    },
    {
      id: "lq-4",
      question: "Explain B+ Tree indexing in detail. Show how search, insertion, and node splitting operate with illustrative diagrams.",
      relatedTopic: "Storage & Indexing",
      unit: "Unit IV",
      previousFrequency: 4,
      years: ["2021", "2022", "2023", "2024"],
      priority: "HIGH PRIORITY",
      reasonForPriority: "Standard Unit IV 13-mark question appearing across 2021, 2022, 2023, and 2024.",
      expectedMarks: 13,
      keyPointsToCover: [
        "B+ Tree properties: Balanced multi-way search tree of order m",
        "Internal nodes hold routing keys; leaf nodes store data pointers",
        "Leaf nodes linked sequentially for range queries",
        "Insertion overflow handling and 50/50 node splitting"
      ],
      simpleExplanation: "A wide, short tree structure that enables the hard disk to find any record out of millions in just 2 or 3 seeks."
    },
    {
      id: "lq-5",
      question: "Describe the Three-Schema Architecture of DBMS with a neat diagram. Contrast physical and logical data independence.",
      relatedTopic: "DBMS Architecture",
      unit: "Unit I",
      previousFrequency: 4,
      years: ["2021", "2022", "2023", "2024"],
      priority: "MEDIUM PRIORITY",
      reasonForPriority: "Standard Q11(a) descriptive question in all 4 papers and twice in Part A.",
      expectedMarks: 13,
      keyPointsToCover: [
        "Diagram: External Schema, Conceptual Schema, Internal Schema",
        "Logical Data Independence (changing conceptual schema without touching external views)",
        "Physical Data Independence (changing physical storage without touching conceptual schema)",
        "Role of DBMS mapping between layers"
      ],
      simpleExplanation: "Upgrading your database from a hard drive to SSD storage without needing to rewrite any SQL queries or client application code."
    },
    {
      id: "lq-6",
      question: "Explain Deadlock detection using Wait-For Graph (WFG) and compare Wait-Die vs Wound-Wait prevention schemes.",
      relatedTopic: "Deadlock Handling",
      unit: "Unit III",
      previousFrequency: 4,
      years: ["2021", "2022", "2023", "2024"],
      priority: "MEDIUM PRIORITY",
      reasonForPriority: "Appeared in 3 out of 4 papers in Part B Q15 and twice in Part A.",
      expectedMarks: 13,
      keyPointsToCover: [
        "Deadlock definition and necessary conditions",
        "Wait-For Graph (WFG): Cycle detection implies deadlock",
        "Deadlock recovery: Victim selection, rollback, starvation prevention",
        "Wait-Die scheme: Non-preemptive, based on timestamps",
        "Wound-Wait scheme: Preemptive, based on timestamps"
      ],
      simpleExplanation: "In Wait-Die, an older transaction waits for a younger one, but a younger transaction dies if waiting on an older one. In Wound-Wait, an older transaction preempts the younger."
    },
    {
      id: "lq-7",
      question: "Describe Log-Based Recovery techniques: Immediate vs Deferred Database Modification with Checkpoints.",
      relatedTopic: "Database Recovery",
      unit: "Unit V",
      previousFrequency: 4,
      years: ["2021", "2022", "2023", "2024"],
      priority: "MEDIUM PRIORITY",
      reasonForPriority: "Consistent Part B recovery question across 2021, 2022, 2023, and 2024.",
      expectedMarks: 13,
      keyPointsToCover: [
        "Write-Ahead Logging (WAL) protocol",
        "Deferred update: Only REDO operations executed upon crash",
        "Immediate update: Both UNDO and REDO required",
        "Checkpoints: How they reduce log scan time during recovery"
      ],
      simpleExplanation: "Checkpoints prevent having to replay log records from the beginning of time after a system restart."
    },
    {
      id: "lq-8",
      question: "Define Boyce-Codd Normal Form (BCNF). State why BCNF is considered stronger than 3NF with a counter-example.",
      relatedTopic: "Normalization",
      unit: "Unit II",
      previousFrequency: 4,
      years: ["2021", "2022", "2023", "2024"],
      priority: "LOW PRIORITY",
      reasonForPriority: "Repeated in Part A 2-mark definitions across 4 consecutive years.",
      expectedMarks: 2,
      keyPointsToCover: [
        "Definition: For every functional dependency X -> Y, X must be a superkey",
        "Why stronger: 3NF permits X to not be a superkey if Y is prime attribute; BCNF prohibits this loophole"
      ],
      simpleExplanation: "BCNF is a stricter version of 3NF that eliminates subtle remaining redundancies."
    },
    {
      id: "lq-9",
      question: "Construct an Entity-Relationship (ER) diagram for an E-Commerce portal or Hospital System showing cardinalities and weak entities.",
      relatedTopic: "ER Modeling",
      unit: "Unit I & Part C",
      previousFrequency: 4,
      years: ["2021", "2022", "2023", "2024"],
      priority: "LOW PRIORITY",
      reasonForPriority: "Appeared in Part B Q11(b) and Part C 15-mark system modeling.",
      expectedMarks: 15,
      keyPointsToCover: [
        "Standard Chen or Crow's foot notations",
        "1:1, 1:N, M:N cardinalities",
        "Weak entity sets with double rectangle",
        "Relational table conversion schema"
      ],
      simpleExplanation: "The blueprint of an entire system's data architecture before writing SQL tables."
    }
  ],

  studyPlan: [
    {
      day: 1,
      dayTitle: "Foundations & High-Yield Transactions (ACID Properties)",
      unitFocus: "Unit III - Transaction Processing",
      estimatedHours: 3.5,
      suggestedPriority: "HIGH PRIORITY",
      topicsToStudy: [
        "Transaction States & State Diagram",
        "ACID Properties (Atomicity, Consistency, Isolation, Durability)",
        "Dirty Read, Lost Update, and Unrepeatable Read Anomalies"
      ],
      importantQuestions: [
        "Explain ACID properties in detail with banking transaction examples. (13M)",
        "What is serializability and why is it desirable? (2M)"
      ],
      revisionTask: "Memorize the 4 ACID definitions and write down the classic Account A -> Account B transfer step-by-step."
    },
    {
      day: 2,
      dayTitle: "Concurrency Control & 2PL Protocol Mastery",
      unitFocus: "Unit III - Concurrency Control",
      estimatedHours: 4.0,
      suggestedPriority: "HIGH PRIORITY",
      topicsToStudy: [
        "Two-Phase Locking (2PL) Protocol: Growing & Shrinking Phases",
        "Strict 2PL vs Rigorous 2PL vs Conservative 2PL",
        "Lock Conversion & Lock Compatibility Matrix"
      ],
      importantQuestions: [
        "Explain Two-Phase Locking (2PL) protocol. Contrast Strict and Rigorous 2PL. (13M)",
        "Why does 2PL guarantee conflict serializability? (2M)"
      ],
      revisionTask: "Draw the 2PL lock point graph and summarize why Basic 2PL can still encounter cascading aborts."
    },
    {
      day: 3,
      dayTitle: "Deadlocks & Recovery Mechanisms",
      unitFocus: "Unit III & Unit V - Deadlocks & Recovery",
      estimatedHours: 3.5,
      suggestedPriority: "HIGH PRIORITY",
      topicsToStudy: [
        "Deadlock Detection using Wait-For Graph (WFG)",
        "Deadlock Prevention: Wait-Die vs Wound-Wait Protocols",
        "Log-Based Recovery: Immediate vs Deferred Database Modification",
        "Checkpoints & Write-Ahead Logging (WAL)"
      ],
      importantQuestions: [
        "What is Deadlock? Explain Wait-For Graph cycle detection and Wait-Die vs Wound-Wait. (13M)",
        "Explain Log-Based Recovery with Immediate and Deferred modifications and Checkpoints. (13M)"
      ],
      revisionTask: "Draw a 4-node Wait-For Graph cycle and create a comparison table for Wait-Die (older waits, younger dies) vs Wound-Wait."
    },
    {
      day: 4,
      dayTitle: "Relational Normalization & Functional Dependencies",
      unitFocus: "Unit II - Relational Database Design",
      estimatedHours: 4.0,
      suggestedPriority: "HIGH PRIORITY",
      topicsToStudy: [
        "Need for Normalization & Anomalies (Insert, Delete, Update)",
        "1NF, 2NF, 3NF, and BCNF definitions and conditions",
        "Closure of Attribute Sets and Finding Candidate Keys",
        "Lossless Join Decomposition & Dependency Preservation"
      ],
      importantQuestions: [
        "Discuss 1NF, 2NF, 3NF, and BCNF normalization with suitable relational schema examples. (13M)",
        "Given schema R(A,B,C,D,E) with FDs, find candidate keys and normalize up to 3NF. (13M)",
        "Why is BCNF stronger than 3NF? (2M)"
      ],
      revisionTask: "Solve at least 2 numerical problems on computing attribute closure (X+) and decomposing relations into 3NF/BCNF."
    },
    {
      day: 5,
      dayTitle: "B+ Tree Indexing & Storage Techniques",
      unitFocus: "Unit IV - Storage & Indexing",
      estimatedHours: 3.5,
      suggestedPriority: "MEDIUM PRIORITY",
      topicsToStudy: [
        "B+ Tree Index Structure: Internal nodes vs Leaf nodes",
        "B+ Tree Search and Key Insertion Algorithm",
        "Dense Index vs Sparse Index",
        "Primary vs Secondary vs Clustering Indexes"
      ],
      importantQuestions: [
        "Describe B+ Tree indexing. Explain search and insertion algorithms with diagrams. (13M)",
        "Compare Dense Index and Sparse Index with sketches. (2M)"
      ],
      revisionTask: "Practice inserting 7-8 keys into a B+ Tree of order 3 and show node splitting when a node overflows."
    },
    {
      day: 6,
      dayTitle: "DBMS Architecture & Conceptual ER Modeling",
      unitFocus: "Unit I - Conceptual Modeling",
      estimatedHours: 3.0,
      suggestedPriority: "MEDIUM PRIORITY",
      topicsToStudy: [
        "Three-Schema Architecture (External, Conceptual, Internal)",
        "Physical vs Logical Data Independence",
        "Entity-Relationship (ER) Modeling: Entities, Attributes, Cardinalities",
        "Converting ER Diagrams to Relational Tables"
      ],
      importantQuestions: [
        "Explain Three-Schema Architecture of DBMS in detail with neat diagrams. (13M)",
        "Construct an ER diagram for a Hospital or Banking portal with cardinalities. (13M)"
      ],
      revisionTask: "Draw the 3-level architecture diagram and design a neat ER diagram for a Hospital Management System."
    },
    {
      day: 7,
      dayTitle: "Comprehensive Exam Mock, Part C Case Studies & Formula Revision",
      unitFocus: "Full Syllabus & Part C",
      estimatedHours: 4.0,
      suggestedPriority: "REVISION / PRACTICE",
      topicsToStudy: [
        "Part C Application Questions: Complex SQL queries (GROUP BY, HAVING, subqueries)",
        "Full review of all 10 compulsory Part A 2-mark definitions",
        "Time management drill: 15 minutes for Part A, 110 minutes for Part B, 35 minutes for Part C"
      ],
      importantQuestions: [
        "Part C 15-Mark real-world system schema and SQL query suite.",
        "Rapid-fire review of Part A definitions: ACID, 2PL, BCNF, Dense index, Checkpoint, Deadlock."
      ],
      revisionTask: "Simulate writing 1 full 13-mark answer on paper within 22 minutes to build speed and clean diagram presentation."
    }
  ]
};
