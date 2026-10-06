export interface SamplePaper {
  id: string;
  name: string;
  year: string;
  subject: string;
  semester: string;
  totalMarks: number;
  duration: string;
  text: string;
}

export const SAMPLE_DBMS_PAPERS: SamplePaper[] = [
  {
    id: "dbms-2021",
    name: "DBMS_Nov_Dec_2021.pdf",
    year: "2021",
    subject: "Database Management Systems",
    semester: "Semester V - CSE / IT",
    totalMarks: 100,
    duration: "3 Hours",
    text: `UNIVERSITY EXAMINATION - NOVEMBER/DECEMBER 2021
BRANCH: COMPUTER SCIENCE & ENGINEERING
COURSE: DATABASE MANAGEMENT SYSTEMS (CS8492)
Time: 3 Hours                                                Max Marks: 100

PART - A (10 x 2 = 20 Marks) - Answer all questions
1. Define Data Independence. Distinguish between physical and logical data independence.
2. What are the key components of a DBMS architecture?
3. State the purpose of Boyce-Codd Normal Form (BCNF) with an example.
4. Define foreign key constraint with SQL syntax.
5. What is the ACID property of database transactions?
6. Explain the difference between primary index and secondary index.
7. What is a Deadlock? How is it detected in DBMS?
8. Define Functional Dependency and give an example.
9. What is Two-Phase Locking (2PL) protocol?
10. Differentiate between static hashing and extendible hashing.

PART - B (5 x 13 = 65 Marks) - Answer either (a) or (b) from each question
11. (a) Explain Three-Schema Architecture of DBMS in detail with neat diagrams.
    OR
    (b) Construct an Entity-Relationship (ER) diagram for a Hospital Management System with appropriate entities, attributes, relationships, and cardinalities.

12. (a) Discuss 1NF, 2NF, 3NF, and BCNF normalization with suitable relational schema examples.
    OR
    (b) Given a relational schema R(A, B, C, D, E) with FDs {A->BC, CD->E, B->D, E->A}, find all candidate keys and normalize R up to 3NF.

13. (a) Explain Concurrency Control using Two-Phase Locking (2PL) protocol. Contrast Strict 2PL and Rigorous 2PL.
    OR
    (b) Describe Transaction States and explain ACID properties in detail with banking transaction examples.

14. (a) Explain B+ Tree indexing in detail. Show how search, insertion, and deletion operations work in B+ Trees.
    OR
    (b) Compare Dense Index and Sparse Index. Explain Query Processing phases and query optimization steps.

15. (a) Explain Deadlock prevention, detection, and recovery mechanisms in DBMS transactions.
    OR
    (b) Discuss Log-based Recovery techniques (Deferred update vs Immediate update) and Checkpoints.

PART - C (1 x 15 = 15 Marks) - Application/Problem Solving
16. (a) Consider an Airline Reservation Database. Write SQL queries for:
        i) Finding all flights departing from Mumbai to Delhi on a specific date.
        ii) Listing passengers who booked tickets in Business class.
        iii) Calculating total revenue per flight route.
    OR
    (b) Design an ER diagram and convert it to Relational tables for an E-Commerce portal (Amazon/Flipkart). Include order processing, payment, and inventory management.`
  },
  {
    id: "dbms-2022",
    name: "DBMS_May_June_2022.pdf",
    year: "2022",
    subject: "Database Management Systems",
    semester: "Semester V - CSE / IT",
    totalMarks: 100,
    duration: "3 Hours",
    text: `UNIVERSITY EXAMINATION - MAY/JUNE 2022
BRANCH: COMPUTER SCIENCE & ENGINEERING
COURSE: DATABASE MANAGEMENT SYSTEMS (CS8492)
Time: 3 Hours                                                Max Marks: 100

PART - A (10 x 2 = 20 Marks)
1. What is Data Abstraction? List the three levels of data abstraction.
2. Draw the symbols used in ER modeling for weak entity and multivalued attribute.
3. Define Boyce-Codd Normal Form (BCNF). How does it differ from 3NF?
4. What are aggregate functions in SQL? Give two examples.
5. Explain ACID properties with emphasis on Atomicity and Durability.
6. What is a candidate key? How does it differ from a super key?
7. Explain the concept of Serializability in transaction management.
8. What is B+ Tree? Why is B+ Tree preferred over B Tree for disk storage?
9. What is Two-Phase Locking (2PL)? Why does it guarantee serializability?
10. Define RAID and state its primary objective.

PART - B (5 x 13 = 65 Marks)
11. (a) Describe the Three-Schema Architecture and explain Physical & Logical Data Independence.
    OR
    (b) Design an ER schema for a University Examination and Grading System showing all entity types, weak entities, and constraints.

12. (a) What is Normalization? Explain 1NF, 2NF, 3NF, and BCNF with relational schemas and examples.
    OR
    (b) State Armstrong's Axioms. Explain closure of attribute sets and minimal cover computation with an example.

13. (a) Explain Two-Phase Locking (2PL) protocol for concurrency control. Differentiate conservative 2PL and strict 2PL.
    OR
    (b) What are ACID properties? Explain how transaction management ensures consistency and isolation during concurrent executions.

14. (a) Explain B+ Tree indexing structure. Illustrate insertion of keys [10, 20, 5, 15, 30, 25, 35] in a B+ Tree of order 3.
    OR
    (b) What are index structures? Compare primary, secondary, and clustered index with illustrative sketches.

15. (a) What is Deadlock? Explain Deadlock prevention techniques (Wait-Die and Wound-Wait) and Deadlock detection using Wait-For Graph.
    OR
    (b) Explain Database Recovery Techniques: Log-Based Recovery with Immediate and Deferred Database Modification, and Checkpoints.

PART - C (1 x 15 = 15 Marks)
16. (a) Consider the schema: Student(rollNo, sname, dept), Course(cId, cname, credits), Enrolled(rollNo, cId, grade).
        Write SQL queries and equivalent Relational Algebra expressions for:
        i) Students enrolled in 'DBMS' course.
        ii) Courses taken by student 'Aditi' with grade 'A'.
        iii) Department with maximum number of students enrolled.
    OR
    (b) Analyze concurrency anomalies (Dirty Read, Lost Update, Unrepeatable Read) and illustrate how serializability prevents them.`
  },
  {
    id: "dbms-2023",
    name: "DBMS_Nov_Dec_2023.pdf",
    year: "2023",
    subject: "Database Management Systems",
    semester: "Semester V - CSE / IT",
    totalMarks: 100,
    duration: "3 Hours",
    text: `UNIVERSITY EXAMINATION - NOVEMBER/DECEMBER 2023
BRANCH: COMPUTER SCIENCE & ENGINEERING
COURSE: DATABASE MANAGEMENT SYSTEMS (CS8492)
Time: 3 Hours                                                Max Marks: 100

PART - A (10 x 2 = 20 Marks)
1. Differentiate physical data independence and logical data independence.
2. What is an ER diagram? List three primary components.
3. State Boyce-Codd Normal Form (BCNF) condition. Why is it stronger than 3NF?
4. What is lossless join decomposition?
5. State and briefly explain ACID properties of transactions.
6. What is a Deadlock? Give one example scenario.
7. Explain Two-Phase Locking (2PL) and its phases.
8. Distinguish between Dense and Sparse indexing.
9. What is a Checkpoint in database recovery?
10. Define Relational Algebra operators: Selection and Projection.

PART - B (5 x 13 = 65 Marks)
11. (a) Explain Three-Schema Architecture of DBMS in detail. How does it support data independence?
    OR
    (b) Draw an ER diagram for a Banking System covering Customer, Account, Loan, and Branch entities with cardinality ratios.

12. (a) Explain the need for Normalization. Discuss 1NF, 2NF, 3NF, and BCNF with concrete table examples.
    OR
    (b) Given schema R(A, B, C, D) and FDs {A->B, B->C, C->D, D->A}, verify whether decomposition into R1(A,B) and R2(B,C,D) is lossless and dependency preserving.

13. (a) Explain Concurrency Control using Two-Phase Locking (2PL). Explain why 2PL prevents conflict serializability violations but cannot prevent deadlocks.
    OR
    (b) Discuss ACID properties in detail. Explain how Shadow Paging and Write-Ahead Logging (WAL) maintain Atomicity and Durability.

14. (a) Describe B+ Tree Indexing in detail. Explain search and insertion algorithms with diagrams.
    OR
    (b) Explain Query Optimization and evaluation process. How are heuristic optimization rules applied to relational algebra trees?

15. (a) Describe Deadlock Detection using Wait-For Graph (WFG) and recovery through victim selection and rollback.
    OR
    (b) Discuss Log-based Recovery with Immediate and Deferred update schemes. Explain the role of checkpoints in reducing recovery time.

PART - C (1 x 15 = 15 Marks)
16. (a) A real-estate company requires a database for properties, clients, agents, and transactions.
        i) Design relational schema with primary and foreign keys.
        ii) Write SQL queries to find top-earning agents and unsold properties older than 90 days.
    OR
    (b) Compare Two-Phase Locking (2PL), Timestamp Ordering protocol, and Validation-based protocol for concurrency control in distributed and centralized databases.`
  },
  {
    id: "dbms-2024",
    name: "DBMS_May_June_2024.pdf",
    year: "2024",
    subject: "Database Management Systems",
    semester: "Semester V - CSE / IT",
    totalMarks: 100,
    duration: "3 Hours",
    text: `UNIVERSITY EXAMINATION - MAY/JUNE 2024
BRANCH: COMPUTER SCIENCE & ENGINEERING
COURSE: DATABASE MANAGEMENT SYSTEMS (CS8492)
Time: 3 Hours                                                Max Marks: 100

PART - A (10 x 2 = 20 Marks)
1. Explain the difference between Schema and Instance in DBMS.
2. What is Data Independence? Explain why it is important.
3. Define BCNF (Boyce-Codd Normal Form) with a simple example.
4. What is Functional Dependency? Give trivial and non-trivial examples.
5. What are the ACID properties of database transactions?
6. What is a Deadlock? How does Wait-For Graph detect deadlock?
7. What is Two-Phase Locking protocol (2PL)?
8. What is the difference between B-Tree and B+ Tree?
9. Define Checkpoint. Why is it used during database recovery?
10. What is a Trigger in SQL? Give syntax.

PART - B (5 x 13 = 65 Marks)
11. (a) Describe the Three-Tier Schema Architecture of DBMS with a neat diagram. Explain physical vs logical data independence.
    OR
    (b) Model an ER Diagram for a Smart Campus Library Management System. Specify cardinalities, participation constraints, and key attributes.

12. (a) Explain Normalization up to BCNF (1NF, 2NF, 3NF, BCNF) with clear relational examples and explain update anomalies.
    OR
    (b) Explain lossy vs lossless decomposition and dependency preservation with suitable numerical problems.

13. (a) Discuss Two-Phase Locking (2PL) Protocol in detail. Compare Basic 2PL, Strict 2PL, and Rigorous 2PL.
    OR
    (b) Explain ACID properties of transactions. How are Atomicity and Durability guaranteed by log-based recovery?

14. (a) Explain B+ Tree index structures. Explain how search, insertion, and node splitting operate in a B+ Tree.
    OR
    (b) Compare primary index, secondary index, and clustering index with diagrams. Explain cost models in query optimization.

15. (a) Discuss Deadlock prevention techniques (Wait-Die and Wound-Wait) and Deadlock detection using Wait-For Graph.
    OR
    (b) Explain Database Recovery Techniques using Log Records: Deferred database modification vs Immediate database modification with checkpoint recovery.

PART - C (1 x 15 = 15 Marks)
16. (a) Consider an Online Food Delivery Platform (Zomato/Swiggy).
        Design the ER diagram and write SQL queries for:
        i) Top 5 restaurants by customer rating in a city.
        ii) Customer orders placed in the last 24 hours.
        iii) Delivery agent with highest delivered orders.
    OR
    (b) Critically examine Conflict Serializability and View Serializability. Test if schedule S: r1(X); r2(Y); w1(X); r2(X); w2(Y) is conflict serializable.`
  }
];

export const SAMPLE_OS_PAPERS: SamplePaper[] = [
  {
    id: "os-2021",
    name: "OS_Nov_Dec_2021.pdf",
    year: "2021",
    subject: "Operating Systems",
    semester: "Semester IV - CSE",
    totalMarks: 100,
    duration: "3 Hours",
    text: `UNIVERSITY EXAMINATION - NOV/DEC 2021
COURSE: OPERATING SYSTEMS (CS8493)
PART - A (10 x 2 = 20 Marks)
1. What is a System Call?
2. Differentiate Process and Thread.
3. What is Critical Section Problem?
4. Define Semaphores.
5. What are the four conditions for Deadlock?
6. Explain Banker's Algorithm purpose.
7. What is Virtual Memory and Paging?
8. What is Page Fault?
9. Explain Disk Scheduling: FCFS vs SCAN.
10. What is Inode in Unix?

PART - B (5 x 13 = 65 Marks)
11. (a) Explain CPU Scheduling algorithms: FCFS, SJF, Round Robin with Gantt charts.
12. (a) Explain Peterson's solution and Semaphores for process synchronization.
13. (a) Explain Banker's Algorithm for Deadlock Avoidance with a numerical example.
14. (a) Discuss Page Replacement algorithms: FIFO, LRU, Optimal with page reference string.
15. (a) Explain File System allocation methods: Contiguous, Linked, and Indexed.`
  },
  {
    id: "os-2022",
    name: "OS_May_June_2022.pdf",
    year: "2022",
    subject: "Operating Systems",
    semester: "Semester IV - CSE",
    totalMarks: 100,
    duration: "3 Hours",
    text: `UNIVERSITY EXAMINATION - MAY/JUNE 2022
COURSE: OPERATING SYSTEMS (CS8493)
PART - A (10 x 2 = 20 Marks)
1. What is Dual Mode operation in OS?
2. Define Context Switching.
3. What is Race Condition?
4. What is a Semaphore? Give wait() and signal() definitions.
5. State four Coffman conditions for Deadlock.
6. What is Safe State in Banker's algorithm?
7. Define Thrashing in Virtual Memory.
8. Compare Paging and Segmentation.
9. What is Belady's Anomaly?
10. Explain SSTF disk scheduling.

PART - B (5 x 13 = 65 Marks)
11. (a) Explain Preemptive and Non-Preemptive CPU Scheduling: Round Robin & Priority.
12. (a) Solve the Producer-Consumer problem using Semaphores.
13. (a) Solve a Deadlock avoidance problem using Banker's Algorithm with 5 processes and 3 resources.
14. (a) Compare FIFO, LRU, and Optimal page replacement algorithms with page string.
15. (a) Explain Disk scheduling algorithms: SSTF, SCAN, and C-SCAN with seek distance comparison.`
  }
];
