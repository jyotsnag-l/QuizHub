// Enhanced Quiz Hub with animations and new subjects
const quizData = {
  "mathematics": [
    {
      "id": 1,
      "question": "What is the limit of (sin(x))/x as x approaches 0?",
      "options": ["0", "1", "∞", "undefined"],
      "correct": 1,
      "explanation": "This is a fundamental limit in calculus, equal to 1."
    },
    {
      "id": 2,
      "question": "In linear algebra, what is the determinant of a 2×2 matrix [[a,b],[c,d]]?",
      "options": ["a+d-b-c", "ad-bc", "ac-bd", "ab-cd"],
      "correct": 1,
      "explanation": "The determinant of a 2×2 matrix is ad-bc."
    },
    {
      "id": 3,
      "question": "What is the derivative of e^(x²)?",
      "options": ["2xe^(x²)", "e^(x²)", "2e^(x²)", "xe^(x²)"],
      "correct": 0,
      "explanation": "Using chain rule: d/dx[e^(x²)] = e^(x²) × 2x = 2xe^(x²)"
    },
    {
      "id": 4,
      "question": "In complex analysis, what is Euler's formula?",
      "options": ["e^(iθ) = cos(θ) + i sin(θ)", "e^(iθ) = sin(θ) + i cos(θ)", "e^(iθ) = cos(θ) - i sin(θ)", "e^(iθ) = i cos(θ) + sin(θ)"],
      "correct": 0,
      "explanation": "Euler's formula states that e^(iθ) = cos(θ) + i sin(θ)"
    },
    {
      "id": 5,
      "question": "What is the integral of 1/(x² + 1) dx?",
      "options": ["ln|x² + 1| + C", "arctan(x) + C", "arcsin(x) + C", "x/(x² + 1) + C"],
      "correct": 1,
      "explanation": "The integral of 1/(x² + 1) is arctan(x) + C"
    },
    {
      "id": 6,
      "question": "In graph theory, what is the chromatic number of a complete graph K_n?",
      "options": ["n", "n-1", "n+1", "2n"],
      "correct": 0,
      "explanation": "The chromatic number of a complete graph K_n is n, as each vertex must have a different color."
    },
    {
      "id": 7,
      "question": "What is the Taylor series expansion of ln(1+x) around x=0?",
      "options": ["x - x²/2 + x³/3 - x⁴/4 + ...", "1 + x + x²/2! + x³/3! + ...", "x + x²/2 + x³/3 + x⁴/4 + ...", "1 - x + x² - x³ + ..."],
      "correct": 0,
      "explanation": "The Taylor series for ln(1+x) is x - x²/2 + x³/3 - x⁴/4 + ... for |x| < 1"
    },
    {
      "id": 8,
      "question": "In differential equations, what type is dy/dx + P(x)y = Q(x)?",
      "options": ["Separable", "Linear first-order", "Homogeneous", "Exact"],
      "correct": 1,
      "explanation": "This is the standard form of a linear first-order differential equation."
    },
    {
      "id": 9,
      "question": "What is the rank of a matrix?",
      "options": ["Number of rows", "Number of columns", "Number of linearly independent rows", "Determinant value"],
      "correct": 2,
      "explanation": "The rank of a matrix is the number of linearly independent rows (or columns)."
    },
    {
      "id": 10,
      "question": "In probability theory, what does the Central Limit Theorem state?",
      "options": ["Sample means approach normal distribution", "All distributions are normal", "Variance equals mean", "Standard deviation is constant"],
      "correct": 0,
      "explanation": "The CLT states that sample means of any distribution approach a normal distribution as sample size increases."
    }
  ],
  "science": [
    {
      "id": 1,
      "question": "What is the molecular geometry of SF₆?",
      "options": ["Tetrahedral", "Octahedral", "Trigonal bipyramidal", "Square planar"],
      "correct": 1,
      "explanation": "SF₆ has 6 bonding pairs around sulfur, resulting in octahedral geometry."
    },
    {
      "id": 2,
      "question": "In quantum mechanics, what does the Schrödinger equation describe?",
      "options": ["Energy levels only", "Wave function evolution", "Particle position", "Photon emission"],
      "correct": 1,
      "explanation": "The Schrödinger equation describes how the wave function of a quantum system evolves over time."
    },
    {
      "id": 3,
      "question": "What is the first law of thermodynamics?",
      "options": ["Energy cannot be created or destroyed", "Entropy always increases", "Heat flows from hot to cold", "PV = nRT"],
      "correct": 0,
      "explanation": "The first law states that energy cannot be created or destroyed, only converted from one form to another."
    },
    {
      "id": 4,
      "question": "In organic chemistry, what is an electrophile?",
      "options": ["Electron-rich species", "Electron-poor species", "Neutral molecule", "Metal ion only"],
      "correct": 1,
      "explanation": "An electrophile is an electron-poor species that seeks electrons from nucleophiles."
    },
    {
      "id": 5,
      "question": "What is the principle behind NMR spectroscopy?",
      "options": ["Electron transitions", "Nuclear spin in magnetic field", "Molecular vibrations", "Bond breaking"],
      "correct": 1,
      "explanation": "NMR is based on the behavior of nuclear spins in a magnetic field."
    },
    {
      "id": 6,
      "question": "In biochemistry, what is the role of ATP?",
      "options": ["Protein synthesis", "DNA replication", "Energy currency", "Enzyme activation"],
      "correct": 2,
      "explanation": "ATP serves as the universal energy currency in cells."
    },
    {
      "id": 7,
      "question": "What is Heisenberg's uncertainty principle?",
      "options": ["Position and momentum cannot both be precisely known", "Energy is quantized", "Waves have particle nature", "Speed of light is constant"],
      "correct": 0,
      "explanation": "The uncertainty principle states that position and momentum cannot be simultaneously determined with perfect precision."
    },
    {
      "id": 8,
      "question": "In genetics, what is a frameshift mutation?",
      "options": ["Single base change", "Insertion/deletion changing reading frame", "Chromosome rearrangement", "Silent mutation"],
      "correct": 1,
      "explanation": "A frameshift mutation involves insertion or deletion of nucleotides that changes the reading frame."
    },
    {
      "id": 9,
      "question": "What is the photoelectric effect?",
      "options": ["Light bending around objects", "Emission of electrons by light", "Light interference", "Photon absorption only"],
      "correct": 1,
      "explanation": "The photoelectric effect is the emission of electrons from a material when light hits it."
    },
    {
      "id": 10,
      "question": "In physical chemistry, what is entropy?",
      "options": ["Total energy", "Available energy", "Measure of disorder", "Heat capacity"],
      "correct": 2,
      "explanation": "Entropy is a measure of the disorder or randomness in a system."
    }
  ],
  "history": [
    {
      "id": 1,
      "question": "What was the primary cause of the Thirty Years' War (1618-1648)?",
      "options": ["Economic disputes", "Religious conflicts", "Territorial expansion", "Colonial competition"],
      "correct": 1,
      "explanation": "The Thirty Years' War was primarily caused by religious conflicts between Catholics and Protestants in Europe."
    },
    {
      "id": 2,
      "question": "Which treaty ended the Seven Years' War in 1763?",
      "options": ["Treaty of Versailles", "Treaty of Paris", "Treaty of Utrecht", "Treaty of Westphalia"],
      "correct": 1,
      "explanation": "The Treaty of Paris (1763) ended the Seven Years' War."
    },
    {
      "id": 3,
      "question": "What was the main goal of the Congress of Vienna (1814-1815)?",
      "options": ["Punish France", "Restore balance of power", "Create new nations", "Establish democracy"],
      "correct": 1,
      "explanation": "The Congress of Vienna aimed to restore the balance of power in Europe after Napoleon's defeat."
    },
    {
      "id": 4,
      "question": "Who was the primary architect of German unification in the 19th century?",
      "options": ["Wilhelm I", "Otto von Bismarck", "Friedrich III", "Heinrich Heine"],
      "correct": 1,
      "explanation": "Otto von Bismarck was the key figure in German unification through his policy of 'blood and iron'."
    },
    {
      "id": 5,
      "question": "What was the significance of the Battle of Stalingrad (1942-1943)?",
      "options": ["First Allied victory", "Turning point on Eastern Front", "End of Holocaust", "Beginning of Cold War"],
      "correct": 1,
      "explanation": "Stalingrad marked the turning point on the Eastern Front, beginning Germany's retreat."
    },
    {
      "id": 6,
      "question": "Which empire was known as the 'Sick Man of Europe' in the 19th century?",
      "options": ["Austrian Empire", "Russian Empire", "Ottoman Empire", "Spanish Empire"],
      "correct": 2,
      "explanation": "The Ottoman Empire was called the 'Sick Man of Europe' due to its declining power."
    },
    {
      "id": 7,
      "question": "What was the Marshall Plan?",
      "options": ["Military alliance", "Economic aid to Europe", "Nuclear weapons program", "Space exploration"],
      "correct": 1,
      "explanation": "The Marshall Plan was an American economic aid program to rebuild Western Europe after WWII."
    },
    {
      "id": 8,
      "question": "Who wrote 'The Wealth of Nations' (1776)?",
      "options": ["Karl Marx", "John Stuart Mill", "Adam Smith", "David Ricardo"],
      "correct": 2,
      "explanation": "Adam Smith wrote 'The Wealth of Nations', a foundational work in economics."
    },
    {
      "id": 9,
      "question": "What was the main cause of the War of 1812?",
      "options": ["Slavery issues", "British impressment of sailors", "Territorial disputes", "Trade restrictions"],
      "correct": 1,
      "explanation": "British impressment of American sailors was a primary cause of the War of 1812."
    },
    {
      "id": 10,
      "question": "Which event marked the beginning of the French Revolution?",
      "options": ["Execution of Louis XVI", "Storming of the Bastille", "Tennis Court Oath", "Calling of Estates-General"],
      "correct": 1,
      "explanation": "The Storming of the Bastille on July 14, 1789, is traditionally considered the beginning of the French Revolution."
    }
  ],
  "english": [
    {
      "id": 1,
      "question": "Identify the type of clause: 'Although he studied hard, he failed the exam.'",
      "options": ["Adverbial clause", "Noun clause", "Relative clause", "Independent clause"],
      "correct": 0,
      "explanation": "'Although he studied hard' is an adverbial clause of concession modifying the main clause."
    },
    {
      "id": 2,
      "question": "What is the subjunctive mood used for in: 'If I were you, I would study more'?",
      "options": ["Past condition", "Hypothetical situation", "Future prediction", "Present fact"],
      "correct": 1,
      "explanation": "The subjunctive 'were' is used for hypothetical or contrary-to-fact situations."
    },
    {
      "id": 3,
      "question": "Which sentence demonstrates correct parallel structure?",
      "options": ["She likes reading, writing, and to paint", "She likes reading, writing, and painting", "She likes to read, writing, and painting", "She likes reading, to write, and painting"],
      "correct": 1,
      "explanation": "Parallel structure requires the same grammatical form: reading, writing, and painting (all gerunds)."
    },
    {
      "id": 4,
      "question": "What is the function of 'whom' in: 'The person whom you met is my professor'?",
      "options": ["Subject", "Direct object", "Indirect object", "Object of preposition"],
      "correct": 1,
      "explanation": "'Whom' is the direct object of 'met' in the relative clause."
    },
    {
      "id": 5,
      "question": "Identify the error: 'Neither the students nor the teacher were present.'",
      "options": ["Subject-verb disagreement", "Wrong pronoun", "Misplaced modifier", "No error"],
      "correct": 0,
      "explanation": "With 'neither...nor', the verb agrees with the nearer subject 'teacher' (singular), so it should be 'was'."
    },
    {
      "id": 6,
      "question": "What type of verbal is 'running' in: 'Running water is essential for life'?",
      "options": ["Gerund", "Present participle", "Past participle", "Infinitive"],
      "correct": 1,
      "explanation": "'Running' is a present participle functioning as an adjective modifying 'water'."
    },
    {
      "id": 7,
      "question": "Which sentence uses the passive voice correctly?",
      "options": ["The book was read by me", "The book was being read by me", "I was read the book", "The book read by me"],
      "correct": 1,
      "explanation": "'The book was being read by me' correctly uses past continuous passive voice."
    },
    {
      "id": 8,
      "question": "What is the rhetorical device in: 'Ask not what your country can do for you'?",
      "options": ["Metaphor", "Chiasmus", "Alliteration", "Synecdoche"],
      "correct": 1,
      "explanation": "This is chiasmus - a reversal of grammatical structures in successive phrases."
    },
    {
      "id": 9,
      "question": "In transformational grammar, what is a deep structure?",
      "options": ["Surface meaning", "Underlying syntactic representation", "Phonetic form", "Semantic interpretation"],
      "correct": 1,
      "explanation": "Deep structure refers to the underlying syntactic representation before transformational rules apply."
    },
    {
      "id": 10,
      "question": "What is the difference between 'restrictive' and 'non-restrictive' clauses?",
      "options": ["Restrictive clauses use 'that', non-restrictive use 'which'", "Restrictive limit meaning, non-restrictive add information", "Both A and B", "No difference"],
      "correct": 2,
      "explanation": "Both statements are correct: restrictive clauses limit meaning and typically use 'that', while non-restrictive add extra information and use 'which' with commas."
    }
  ],
  "c_programming": [
    {
      "id": 1,
      "question": "What is the output of this code? int x = 5; printf(\"%d\", ++x * x++);",
      "options": ["25", "30", "35", "Undefined behavior"],
      "correct": 3,
      "explanation": "This involves undefined behavior due to modifying x multiple times between sequence points."
    },
    {
      "id": 2,
      "question": "In C, what is the time complexity of searching in a hash table with good hash function?",
      "options": ["O(1) average", "O(log n)", "O(n)", "O(n²)"],
      "correct": 0,
      "explanation": "Hash tables provide O(1) average case lookup time with a good hash function and proper collision handling."
    },
    {
      "id": 3,
      "question": "What does the 'volatile' keyword in C prevent?",
      "options": ["Memory leaks", "Compiler optimizations", "Segmentation faults", "Stack overflow"],
      "correct": 1,
      "explanation": "The volatile keyword tells the compiler not to optimize code involving the variable, as its value may change unexpectedly."
    },
    {
      "id": 4,
      "question": "In a binary search tree, what is the worst-case time complexity for insertion?",
      "options": ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
      "correct": 2,
      "explanation": "In the worst case (degenerate tree), BST insertion becomes O(n) when the tree resembles a linked list."
    },
    {
      "id": 5,
      "question": "What is the purpose of the 'restrict' keyword in C99?",
      "options": ["Memory allocation", "Pointer aliasing optimization", "Access control", "Type safety"],
      "correct": 1,
      "explanation": "The restrict keyword is a hint to the compiler that the pointer is the only way to access the object, enabling optimizations."
    },
    {
      "id": 6,
      "question": "Which sorting algorithm has the best worst-case time complexity?",
      "options": ["Quick Sort", "Merge Sort", "Bubble Sort", "Selection Sort"],
      "correct": 1,
      "explanation": "Merge Sort has O(n log n) worst-case time complexity, while Quick Sort can degrade to O(n²)."
    },
    {
      "id": 7,
      "question": "What is a dangling pointer in C?",
      "options": ["Uninitialized pointer", "Pointer to freed memory", "Null pointer", "Array pointer"],
      "correct": 1,
      "explanation": "A dangling pointer points to memory that has been freed or deallocated but the pointer still holds the address."
    },
    {
      "id": 8,
      "question": "In C, what is the difference between malloc() and calloc()?",
      "options": ["No difference", "calloc initializes to zero", "malloc is faster", "calloc only for arrays"],
      "correct": 1,
      "explanation": "calloc() initializes allocated memory to zero, while malloc() leaves memory uninitialized."
    },
    {
      "id": 9,
      "question": "What is the space complexity of merge sort?",
      "options": ["O(1)", "O(log n)", "O(n)", "O(n²)"],
      "correct": 2,
      "explanation": "Merge sort requires O(n) additional space for the temporary arrays used in the merging process."
    },
    {
      "id": 10,
      "question": "Which data structure is best for implementing LRU cache?",
      "options": ["Array", "Stack", "Hash Map + Doubly Linked List", "Binary Tree"],
      "correct": 2,
      "explanation": "LRU cache requires O(1) access and update, achieved by combining hash map for lookup and doubly linked list for ordering."
    }
  ],
  "python": [
    {
      "id": 1,
      "question": "What is the output of: [x**2 for x in range(3) if x % 2]?",
      "options": ["[0, 1, 4]", "[1]", "[1, 4]", "[0, 4]"],
      "correct": 1,
      "explanation": "The condition 'x % 2' is true only for x=1 (odd numbers), so only 1² = 1 is included."
    },
    {
      "id": 2,
      "question": "What is a metaclass in Python?",
      "options": ["A class instance", "A class that creates classes", "A parent class", "An abstract class"],
      "correct": 1,
      "explanation": "A metaclass is a class whose instances are classes. It defines how classes are constructed."
    },
    {
      "id": 3,
      "question": "What does the 'yield' keyword do in Python?",
      "options": ["Returns a value", "Creates a generator", "Pauses execution", "Both B and C"],
      "correct": 3,
      "explanation": "The yield keyword creates a generator function and pauses execution, allowing the function to resume later."
    },
    {
      "id": 4,
      "question": "What is the time complexity of list.append() in Python?",
      "options": ["O(1) amortized", "O(log n)", "O(n)", "O(n²)"],
      "correct": 0,
      "explanation": "List append is O(1) amortized due to dynamic array resizing with geometric growth."
    },
    {
      "id": 5,
      "question": "What is a decorator in Python?",
      "options": ["Design pattern", "Function modifier", "Both A and B", "Class inheritance"],
      "correct": 2,
      "explanation": "Decorators are both a design pattern and a function modifier that wraps another function to extend its behavior."
    },
    {
      "id": 6,
      "question": "What is the difference between 'is' and '==' in Python?",
      "options": ["No difference", "'is' checks identity, '==' checks equality", "'is' is faster", "'==' is deprecated"],
      "correct": 1,
      "explanation": "'is' checks if two variables point to the same object in memory, while '==' checks if values are equal."
    },
    {
      "id": 7,
      "question": "What is the Global Interpreter Lock (GIL) in Python?",
      "options": ["Security feature", "Memory manager", "Thread synchronization mechanism", "Import system"],
      "correct": 2,
      "explanation": "GIL is a mutex that protects access to Python objects, preventing multiple threads from executing Python bytecode simultaneously."
    },
    {
      "id": 8,
      "question": "What is monkey patching in Python?",
      "options": ["Bug fixing", "Dynamic modification of classes/modules", "Performance optimization", "Code documentation"],
      "correct": 1,
      "explanation": "Monkey patching is dynamically modifying a class or module at runtime to change or extend its behavior."
    },
    {
      "id": 9,
      "question": "What is the purpose of __slots__ in Python?",
      "options": ["Define methods", "Restrict attributes and save memory", "Create properties", "Handle exceptions"],
      "correct": 1,
      "explanation": "__slots__ restricts the attributes that instances can have and saves memory by avoiding __dict__ creation."
    },
    {
      "id": 10,
      "question": "What is a context manager in Python?",
      "options": ["Memory manager", "Object that defines runtime context", "Thread manager", "Exception handler"],
      "correct": 1,
      "explanation": "A context manager defines the runtime context for executing a block of code, typically using 'with' statement."
    }
  ]
};

// Game state
let gameState = {
    currentScreen: 'homeScreen',
    selectedSubject: null,
    gameMode: null,
    currentQuestions: [],
    currentQuestionIndex: 0,
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    selectedAnswer: null,
    isMultiplayer: false,
    roomCode: null,
    players: [],
    multiplayerScores: {}
};

// Enhanced animation system
class AnimationController {
    static createConfetti() {
        const container = document.getElementById('confetti-container');
        if (!container) return;
        
        const colors = ['#FF6B35', '#F7941D', '#17A2B8', '#20C997'];
        
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti-piece';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 3 + 's';
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            container.appendChild(confetti);
            
            setTimeout(() => {
                if (confetti.parentNode) {
                    confetti.remove();
                }
            }, 5000);
        }
    }
    
    static showFeedbackOverlay(isCorrect) {
        const overlay = document.getElementById('feedbackMessage');
        if (!overlay) return;
        
        const icon = overlay.querySelector('.feedback-icon');
        const text = overlay.querySelector('.feedback-text');
        
        if (isCorrect) {
            icon.textContent = '🎉';
            text.textContent = 'Excellent!';
            this.createConfetti();
        } else {
            icon.textContent = '❌';
            text.textContent = 'Not quite!';
        }
        
        overlay.classList.remove('hidden');
        
        setTimeout(() => {
            overlay.classList.add('hidden');
        }, 2000);
    }
    
    static celebrateScore(percentage) {
        const scoreCircle = document.getElementById('scoreCircle');
        if (!scoreCircle) return;
        
        if (percentage >= 90) {
            scoreCircle.classList.add('celebration-high');
            this.createConfetti();
        } else if (percentage >= 70) {
            scoreCircle.classList.add('celebration-medium');
        } else {
            scoreCircle.classList.add('celebration-low');
        }
    }
    
    static getGrade(percentage) {
        if (percentage >= 97) return 'A+';
        if (percentage >= 93) return 'A';
        if (percentage >= 90) return 'A-';
        if (percentage >= 87) return 'B+';
        if (percentage >= 83) return 'B';
        if (percentage >= 80) return 'B-';
        if (percentage >= 77) return 'C+';
        if (percentage >= 73) return 'C';
        if (percentage >= 70) return 'C-';
        if (percentage >= 67) return 'D+';
        if (percentage >= 60) return 'D';
        return 'F';
    }
    
    static getAchievement(percentage) {
        if (percentage === 100) return '🏆 Perfect Score!';
        if (percentage >= 90) return '🥇 Gold Medal!';
        if (percentage >= 80) return '🥈 Silver Medal!';
        if (percentage >= 70) return '🥉 Bronze Medal!';
        return '';
    }
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing Quiz Hub...');
    initializeApp();
});

function initializeApp() {
    console.log('Initializing Quiz Hub...');
    
    // Give the DOM a moment to fully render
    setTimeout(() => {
        setupEventListeners();
        showScreen('homeScreen');
        console.log('Quiz Hub initialization complete');
    }, 100);
}

function setupEventListeners() {
    console.log('Setting up event listeners...');
    
    // Subject selection with more robust event handling
    setupSubjectSelection();
    
    // Game mode buttons with better error handling
    setupGameModeButtons();

    // Other listeners
    setupMultiplayerListeners();
    setupRoomListeners();
    setupQuizListeners();
    setupResultsListeners();
    
    console.log('All event listeners setup complete');
}

function setupSubjectSelection() {
    const subjectCards = document.querySelectorAll('.subject-card');
    console.log('Found subject cards:', subjectCards.length);
    
    subjectCards.forEach((card, index) => {
        const subject = card.getAttribute('data-subject');
        console.log(`Card ${index}: subject="${subject}"`);
        
        if (subject) {
            // Remove any existing listeners
            card.removeEventListener('click', handleSubjectClick);
            
            // Add new listener
            card.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('Subject card clicked:', subject);
                selectSubject(subject);
            });
            
            // Also add a direct reference for debugging
            card.onclick = function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('Subject card onclick:', subject);
                selectSubject(subject);
            };
        } else {
            console.warn('Subject card without data-subject attribute found:', card);
        }
    });
}

function handleSubjectClick(e) {
    e.preventDefault();
    e.stopPropagation();
    const subject = e.currentTarget.getAttribute('data-subject');
    console.log('handleSubjectClick called with subject:', subject);
    selectSubject(subject);
}

function setupGameModeButtons() {
    const singlePlayerBtn = document.getElementById('singlePlayerBtn');
    const multiplayerBtn = document.getElementById('multiplayerBtn');
    
    console.log('Single player button found:', !!singlePlayerBtn);
    console.log('Multiplayer button found:', !!multiplayerBtn);
    
    if (singlePlayerBtn) {
        // Remove existing listeners
        singlePlayerBtn.removeEventListener('click', handleSinglePlayerClick);
        
        // Add event listener
        singlePlayerBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Single player button clicked');
            handleSinglePlayerClick(e);
        });
        
        // Also add onclick as backup
        singlePlayerBtn.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Single player button onclick');
            handleSinglePlayerClick(e);
        };
    } else {
        console.error('Single player button not found!');
    }
    
    if (multiplayerBtn) {
        // Remove existing listeners
        multiplayerBtn.removeEventListener('click', handleMultiplayerClick);
        
        // Add event listener
        multiplayerBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Multiplayer button clicked');
            handleMultiplayerClick(e);
        });
        
        // Also add onclick as backup
        multiplayerBtn.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Multiplayer button onclick');
            handleMultiplayerClick(e);
        };
    } else {
        console.error('Multiplayer button not found!');
    }
}

function handleSinglePlayerClick(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log('handleSinglePlayerClick called');
    console.log('Selected subject:', gameState.selectedSubject);
    startSinglePlayer();
}

function handleMultiplayerClick(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log('handleMultiplayerClick called');
    console.log('Selected subject:', gameState.selectedSubject);
    showMultiplayerScreen();
}

function setupMultiplayerListeners() {
    const createRoomBtn = document.getElementById('createRoomBtn');
    const joinRoomBtn = document.getElementById('joinRoomBtn');
    const backToHomeBtn = document.getElementById('backToHomeBtn');
    
    if (createRoomBtn) {
        createRoomBtn.addEventListener('click', createRoom);
    }
    if (joinRoomBtn) {
        joinRoomBtn.addEventListener('click', joinRoom);
    }
    if (backToHomeBtn) {
        backToHomeBtn.addEventListener('click', () => showScreen('homeScreen'));
    }
}

function setupRoomListeners() {
    const copyLinkBtn = document.getElementById('copyLinkBtn');
    const startQuizBtn = document.getElementById('startQuizBtn');
    const leaveRoomBtn = document.getElementById('leaveRoomBtn');
    
    if (copyLinkBtn) {
        copyLinkBtn.addEventListener('click', copyRoomLink);
    }
    if (startQuizBtn) {
        startQuizBtn.addEventListener('click', startMultiplayerQuiz);
    }
    if (leaveRoomBtn) {
        leaveRoomBtn.addEventListener('click', leaveRoom);
    }
}

function setupQuizListeners() {
    const nextQuestionBtn = document.getElementById('nextQuestionBtn');
    if (nextQuestionBtn) {
        nextQuestionBtn.addEventListener('click', nextQuestion);
    }
}

function setupResultsListeners() {
    const playAgainBtn = document.getElementById('playAgainBtn');
    const returnHomeBtn = document.getElementById('returnHomeBtn');
    
    if (playAgainBtn) {
        playAgainBtn.addEventListener('click', playAgain);
    }
    if (returnHomeBtn) {
        returnHomeBtn.addEventListener('click', returnHome);
    }
}

function showScreen(screenName) {
    console.log('Attempting to show screen:', screenName);
    
    const allScreens = document.querySelectorAll('.screen');
    allScreens.forEach(screen => {
        screen.classList.remove('active');
    });
    
    const targetScreen = document.getElementById(screenName);
    if (targetScreen) {
        targetScreen.classList.add('active');
        gameState.currentScreen = screenName;
        console.log('Successfully showed screen:', screenName);
    } else {
        console.error('Screen not found:', screenName);
    }
}

function selectSubject(subject) {
    console.log('selectSubject called with:', subject);
    
    // Validate subject exists in our data
    if (!quizData[subject]) {
        console.error('Invalid subject:', subject);
        showFeedback('Invalid subject selected!', 'error');
        return;
    }
    
    // Remove previous selection
    document.querySelectorAll('.subject-card').forEach(card => {
        card.classList.remove('selected');
    });

    // Add selection to clicked card
    const selectedCard = document.querySelector(`[data-subject="${subject}"]`);
    if (selectedCard) {
        selectedCard.classList.add('selected');
        gameState.selectedSubject = subject;
        console.log('Subject selected successfully:', gameState.selectedSubject);
        showFeedback(`Selected: ${getSubjectDisplayName(subject)}`, 'success');
    } else {
        console.error('Could not find card for subject:', subject);
    }
}

function getSubjectDisplayName(subject) {
    const names = {
        'mathematics': 'Mathematics',
        'science': 'Science',
        'history': 'History',
        'english': 'English Grammar',
        'c_programming': 'C Programming',
        'python': 'Python Programming'
    };
    return names[subject] || subject;
}

function startSinglePlayer() {
    console.log('startSinglePlayer called');
    console.log('Selected subject:', gameState.selectedSubject);
    
    if (!gameState.selectedSubject) {
        console.log('No subject selected, showing error');
        showFeedback('Please select a subject first!', 'error');
        return;
    }

    if (!quizData[gameState.selectedSubject]) {
        console.log('Invalid subject data, showing error');
        showFeedback('Subject data not found!', 'error');
        return;
    }

    console.log('Starting single player mode...');
    gameState.gameMode = 'single';
    gameState.isMultiplayer = false;
    
    try {
        initializeQuiz();
    } catch (error) {
        console.error('Error initializing quiz:', error);
        showFeedback('Error starting quiz. Please try again.', 'error');
    }
}

function showMultiplayerScreen() {
    console.log('showMultiplayerScreen called');
    console.log('Selected subject:', gameState.selectedSubject);
    
    if (!gameState.selectedSubject) {
        showFeedback('Please select a subject first!', 'error');
        return;
    }

    if (!quizData[gameState.selectedSubject]) {
        showFeedback('Subject data not found!', 'error');
        return;
    }

    gameState.gameMode = 'multiplayer';
    showScreen('multiplayerScreen');
}

function createRoom() {
    showScreen('loadingScreen');
    const loadingText = document.getElementById('loadingText');
    if (loadingText) {
        loadingText.textContent = 'Creating room...';
    }

    setTimeout(() => {
        gameState.roomCode = generateRoomCode();
        gameState.isMultiplayer = true;
        gameState.players = [
            { name: 'You', score: 0, isCurrentPlayer: true },
            { name: 'Alex', score: 0, isCurrentPlayer: false },
            { name: 'Sarah', score: 0, isCurrentPlayer: false },
            { name: 'Mike', score: 0, isCurrentPlayer: false }
        ];

        setupRoomScreen();
        showScreen('roomScreen');
    }, 1500);
}

function joinRoom() {
    const roomCodeInput = document.getElementById('roomCodeInput');
    const roomCode = roomCodeInput ? roomCodeInput.value.trim() : '';
    
    if (!roomCode) {
        showFeedback('Please enter a room code!', 'error');
        return;
    }

    showScreen('loadingScreen');
    const loadingText = document.getElementById('loadingText');
    if (loadingText) {
        loadingText.textContent = 'Joining room...';
    }

    setTimeout(() => {
        gameState.roomCode = roomCode;
        gameState.isMultiplayer = true;
        gameState.players = [
            { name: 'Host', score: 0, isCurrentPlayer: false },
            { name: 'You', score: 0, isCurrentPlayer: true },
            { name: 'Emma', score: 0, isCurrentPlayer: false }
        ];

        setupRoomScreen();
        showScreen('roomScreen');
    }, 1500);
}

function setupRoomScreen() {
    const displayRoomCode = document.getElementById('displayRoomCode');
    const shareLink = document.getElementById('shareLink');
    
    if (displayRoomCode) {
        displayRoomCode.textContent = gameState.roomCode;
    }
    if (shareLink) {
        shareLink.value = `https://quiz-hub.com/room/${gameState.roomCode}`;
    }
    
    updatePlayersList();
}

function updatePlayersList() {
    const playersList = document.getElementById('playersList');
    if (!playersList) return;
    
    playersList.innerHTML = '';

    gameState.players.forEach(player => {
        const playerItem = document.createElement('div');
        playerItem.className = 'player-item';
        playerItem.innerHTML = `
            <div class="player-avatar">${player.name[0]}</div>
            <div class="player-name">${player.name}${player.isCurrentPlayer ? ' (You)' : ''}</div>
        `;
        playersList.appendChild(playerItem);
    });
}

function copyRoomLink() {
    const shareLink = document.getElementById('shareLink');
    if (shareLink) {
        shareLink.select();
        document.execCommand('copy');
        showFeedback('Room link copied!', 'success');
    }
}

function startMultiplayerQuiz() {
    initializeQuiz();
}

function leaveRoom() {
    gameState.roomCode = null;
    gameState.players = [];
    gameState.isMultiplayer = false;
    showScreen('homeScreen');
}

function initializeQuiz() {
    console.log('initializeQuiz called');
    console.log('Subject:', gameState.selectedSubject);
    console.log('Available subjects:', Object.keys(quizData));
    
    if (!gameState.selectedSubject || !quizData[gameState.selectedSubject]) {
        console.error('Invalid subject selected:', gameState.selectedSubject);
        showFeedback('Invalid subject selected!', 'error');
        return;
    }
    
    // Reset quiz state
    gameState.currentQuestions = [...quizData[gameState.selectedSubject]];
    gameState.currentQuestionIndex = 0;
    gameState.score = 0;
    gameState.correctAnswers = 0;
    gameState.wrongAnswers = 0;
    gameState.selectedAnswer = null;

    console.log('Questions loaded:', gameState.currentQuestions.length);

    // Initialize multiplayer scores
    if (gameState.isMultiplayer) {
        gameState.multiplayerScores = {};
        gameState.players.forEach(player => {
            gameState.multiplayerScores[player.name] = 0;
        });
    }

    setupQuizScreen();
    displayQuestion();
    showScreen('quizScreen');
}

function setupQuizScreen() {
    const subjectDisplay = document.getElementById('subjectDisplay');
    if (subjectDisplay) {
        subjectDisplay.textContent = getSubjectDisplayName(gameState.selectedSubject);
    }

    const multiplayerScores = document.getElementById('multiplayerScores');
    if (multiplayerScores) {
        if (gameState.isMultiplayer) {
            multiplayerScores.classList.remove('hidden');
            updateMultiplayerScores();
        } else {
            multiplayerScores.classList.add('hidden');
        }
    }

    updateQuizProgress();
    updateScoreDisplay();
}

function displayQuestion() {
    console.log('Displaying question:', gameState.currentQuestionIndex + 1);
    
    const currentQuestion = gameState.currentQuestions[gameState.currentQuestionIndex];
    const questionText = document.getElementById('questionText');
    const questionCard = document.getElementById('questionCard');
    
    // Add slide animation
    if (questionCard) {
        questionCard.classList.add('slide-in');
        setTimeout(() => questionCard.classList.remove('slide-in'), 500);
    }
    
    if (questionText) {
        questionText.textContent = currentQuestion.question;
    }
    
    const optionsContainer = document.getElementById('optionsContainer');
    if (optionsContainer) {
        optionsContainer.innerHTML = '';

        currentQuestion.options.forEach((option, index) => {
            const optionBtn = document.createElement('button');
            optionBtn.className = 'option-btn';
            optionBtn.innerHTML = `
                <span class="option-label">${String.fromCharCode(65 + index)}</span>
                <span class="option-text">${option}</span>
            `;
            
            optionBtn.addEventListener('click', () => selectAnswer(index));
            optionsContainer.appendChild(optionBtn);
        });
    }

    const nextQuestionBtn = document.getElementById('nextQuestionBtn');
    if (nextQuestionBtn) {
        nextQuestionBtn.disabled = true;
    }
    
    gameState.selectedAnswer = null;
    updateQuizProgress();
}

function selectAnswer(answerIndex) {
    console.log('Answer selected:', answerIndex);
    
    if (gameState.selectedAnswer !== null) return;

    gameState.selectedAnswer = answerIndex;
    const currentQuestion = gameState.currentQuestions[gameState.currentQuestionIndex];
    const isCorrect = answerIndex === currentQuestion.correct;

    // Update score
    if (isCorrect) {
        gameState.score += 10;
        gameState.correctAnswers++;
    } else {
        gameState.wrongAnswers++;
    }

    // Visual feedback with animations
    const optionBtns = document.querySelectorAll('.option-btn');
    const questionCard = document.getElementById('questionCard');
    
    optionBtns.forEach((btn, index) => {
        if (index === currentQuestion.correct) {
            btn.classList.add('correct');
        } else if (index === answerIndex && !isCorrect) {
            btn.classList.add('wrong');
        }
        btn.style.pointerEvents = 'none';
    });

    // Flash animation on question card
    if (questionCard) {
        if (isCorrect) {
            questionCard.classList.add('correct-flash');
            setTimeout(() => questionCard.classList.remove('correct-flash'), 500);
        } else {
            questionCard.classList.add('wrong-flash');
            setTimeout(() => questionCard.classList.remove('wrong-flash'), 500);
        }
    }

    // Show enhanced feedback overlay
    AnimationController.showFeedbackOverlay(isCorrect);

    // Update multiplayer scores
    if (gameState.isMultiplayer) {
        gameState.multiplayerScores['You'] = gameState.score;
        
        gameState.players.forEach(player => {
            if (!player.isCurrentPlayer) {
                const randomScore = Math.random() > 0.3 ? 10 : 0;
                gameState.multiplayerScores[player.name] += randomScore;
            }
        });
        
        updateMultiplayerScores();
    }

    updateScoreDisplay();
    
    const nextQuestionBtn = document.getElementById('nextQuestionBtn');
    if (nextQuestionBtn) {
        nextQuestionBtn.disabled = false;
    }

    // Play progress celebration every few questions
    if ((gameState.currentQuestionIndex + 1) % 3 === 0) {
        setTimeout(() => {
            if (isCorrect) AnimationController.createConfetti();
        }, 1000);
    }
}

function nextQuestion() {
    console.log('Moving to next question');
    
    gameState.currentQuestionIndex++;
    
    if (gameState.currentQuestionIndex >= gameState.currentQuestions.length) {
        endQuiz();
    } else {
        displayQuestion();
    }
}

function endQuiz() {
    console.log('Quiz ended');
    setupResultsScreen();
    showScreen('resultsScreen');
}

function setupResultsScreen() {
    const totalQuestions = gameState.currentQuestions.length;
    const percentage = Math.round((gameState.correctAnswers / totalQuestions) * 100);

    // Animate score counter
    const finalScorePercent = document.getElementById('finalScorePercent');
    if (finalScorePercent) {
        let currentPercent = 0;
        const increment = percentage / 30;
        const timer = setInterval(() => {
            currentPercent += increment;
            if (currentPercent >= percentage) {
                currentPercent = percentage;
                clearInterval(timer);
            }
            finalScorePercent.textContent = `${Math.round(currentPercent)}%`;
        }, 50);
    }

    const elements = {
        finalScore: document.getElementById('finalScore'),
        finalCorrect: document.getElementById('finalCorrect'),
        finalWrong: document.getElementById('finalWrong'),
        gradeDisplay: document.getElementById('gradeDisplay'),
        achievementBadge: document.getElementById('achievementBadge')
    };

    if (elements.finalScore) {
        elements.finalScore.textContent = `${gameState.correctAnswers}/${totalQuestions}`;
    }
    if (elements.finalCorrect) {
        elements.finalCorrect.textContent = gameState.correctAnswers;
    }
    if (elements.finalWrong) {
        elements.finalWrong.textContent = gameState.wrongAnswers;
    }

    // Show grade
    if (elements.gradeDisplay) {
        const grade = AnimationController.getGrade(percentage);
        elements.gradeDisplay.textContent = `Grade: ${grade}`;
        
        if (percentage >= 90) {
            elements.gradeDisplay.style.color = '#10B981';
        } else if (percentage >= 70) {
            elements.gradeDisplay.style.color = '#F7941D';
        } else {
            elements.gradeDisplay.style.color = '#EF4444';
        }
    }

    // Show achievement badge
    if (elements.achievementBadge) {
        const achievement = AnimationController.getAchievement(percentage);
        if (achievement) {
            elements.achievementBadge.textContent = achievement;
            elements.achievementBadge.classList.remove('hidden');
        }
    }

    // Celebrate based on score
    setTimeout(() => {
        AnimationController.celebrateScore(percentage);
    }, 1000);

    const multiplayerRanking = document.getElementById('multiplayerRanking');
    if (multiplayerRanking) {
        if (gameState.isMultiplayer) {
            multiplayerRanking.classList.remove('hidden');
            setupMultiplayerRanking();
        } else {
            multiplayerRanking.classList.add('hidden');
        }
    }
}

function setupMultiplayerRanking() {
    const rankingList = document.getElementById('rankingList');
    if (!rankingList) return;
    
    rankingList.innerHTML = '';

    const ranking = Object.entries(gameState.multiplayerScores)
        .map(([name, score]) => ({ name, score }))
        .sort((a, b) => b.score - a.score);

    ranking.forEach((player, index) => {
        const rankingItem = document.createElement('div');
        rankingItem.className = 'ranking-item';
        rankingItem.innerHTML = `
            <div class="ranking-position">${index + 1}</div>
            <div class="ranking-info">
                <div class="ranking-name">${player.name}${player.name === 'You' ? ' (You)' : ''}</div>
            </div>
            <div class="ranking-score">${player.score} pts</div>
        `;
        rankingList.appendChild(rankingItem);
    });
}

function updateQuizProgress() {
    const current = gameState.currentQuestionIndex + 1;
    const total = gameState.currentQuestions.length;
    
    const questionCounter = document.getElementById('questionCounter');
    if (questionCounter) {
        questionCounter.textContent = `Question ${current} of ${total}`;
    }
    
    const progressFill = document.getElementById('progressFill');
    if (progressFill) {
        const progressPercentage = (current / total) * 100;
        progressFill.style.width = `${progressPercentage}%`;
    }
}

function updateScoreDisplay() {
    const elements = {
        scoreDisplay: document.getElementById('scoreDisplay'),
        correctCount: document.getElementById('correctCount'),
        wrongCount: document.getElementById('wrongCount')
    };

    if (elements.scoreDisplay) {
        elements.scoreDisplay.textContent = `Score: ${gameState.score}`;
    }
    if (elements.correctCount) {
        elements.correctCount.textContent = `Correct: ${gameState.correctAnswers}`;
    }
    if (elements.wrongCount) {
        elements.wrongCount.textContent = `Wrong: ${gameState.wrongAnswers}`;
    }
}

function updateMultiplayerScores() {
    const multiplayerScores = document.getElementById('multiplayerScores');
    if (!multiplayerScores) return;
    
    multiplayerScores.innerHTML = '<h4>Live Scores</h4>';

    const sortedPlayers = Object.entries(gameState.multiplayerScores)
        .map(([name, score]) => ({ name, score }))
        .sort((a, b) => b.score - a.score);

    sortedPlayers.forEach(player => {
        const scoreItem = document.createElement('div');
        scoreItem.className = 'score-item';
        scoreItem.innerHTML = `
            <span>${player.name}${player.name === 'You' ? ' (You)' : ''}</span>
            <span>${player.score} pts</span>
        `;
        multiplayerScores.appendChild(scoreItem);
    });
}

function playAgain() {
    if (gameState.isMultiplayer) {
        showScreen('roomScreen');
    } else {
        initializeQuiz();
    }
}

function returnHome() {
    console.log('Returning to home');
    
    // Reset game state
    gameState = {
        currentScreen: 'homeScreen',
        selectedSubject: null,
        gameMode: null,
        currentQuestions: [],
        currentQuestionIndex: 0,
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
        selectedAnswer: null,
        isMultiplayer: false,
        roomCode: null,
        players: [],
        multiplayerScores: {}
    };

    // Clear selections
    document.querySelectorAll('.subject-card').forEach(card => {
        card.classList.remove('selected');
    });

    const roomCodeInput = document.getElementById('roomCodeInput');
    if (roomCodeInput) {
        roomCodeInput.value = '';
    }

    showScreen('homeScreen');
}

function generateRoomCode() {
    return Math.random().toString(36).substr(2, 6).toUpperCase();
}

function showFeedback(message, type) {
    console.log('Showing feedback:', message, type);
    
    const existingFeedback = document.querySelector('.feedback-message');
    if (existingFeedback) {
        existingFeedback.remove();
    }

    const feedback = document.createElement('div');
    feedback.className = `feedback-message ${type}`;
    feedback.textContent = message;
    document.body.appendChild(feedback);

    setTimeout(() => {
        if (feedback.parentNode) {
            feedback.remove();
        }
    }, 3000);
}