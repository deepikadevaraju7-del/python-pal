export type KbEntry = {
  id: string;
  topic: string;
  questions: string[];
  answer: string;
  code?: string;
};

export const knowledgeBase: KbEntry[] = [
  {
    id: "basics",
    topic: "Python basics",
    questions: [
      "what is python",
      "why use python",
      "is python easy to learn",
      "what is python used for",
    ],
    answer:
      "Python is a high-level, interpreted programming language known for readable syntax and a huge standard library. It is widely used for scripting, web backends, data analysis, automation and machine learning.",
    code: 'print("Hello, world!")',
  },
  {
    id: "variables",
    topic: "Variables",
    questions: [
      "what is a variable in python",
      "how do i declare a variable",
      "how to assign a value to a variable",
      "do i need to declare types in python",
    ],
    answer:
      "A variable is a name bound to a value. You do not declare a type — Python infers it at assignment, and the same name can later point to a different type.",
    code: 'name = "Ada"\nage = 36\nage = "thirty six"  # allowed: names are not typed',
  },
  {
    id: "data-types",
    topic: "Data types",
    questions: [
      "what are the data types in python",
      "what is int str float bool",
      "how do i check the type of a value",
      "how to convert a string to an integer",
    ],
    answer:
      "Core built-in types are int, float, str, bool, list, tuple, dict and set. Use type() to inspect a value and the type constructors to convert between them.",
    code: 'x = "42"\nprint(type(x))     # <class \'str\'>\nn = int(x)         # 42\nf = float(n)       # 42.0',
  },
  {
    id: "lists",
    topic: "Lists",
    questions: [
      "what is a list in python",
      "how do i add an item to a list",
      "how to remove an item from a list",
      "how do i sort a list",
      "how to loop over a list",
    ],
    answer:
      "A list is an ordered, mutable collection written with square brackets. Use append() or insert() to add, remove() or pop() to delete, and sort() to order it in place.",
    code: "nums = [3, 1, 2]\nnums.append(4)     # [3, 1, 2, 4]\nnums.pop(0)        # removes 3\nnums.sort()        # [1, 2, 4]",
  },
  {
    id: "tuples",
    topic: "Tuples",
    questions: [
      "what is a tuple",
      "difference between list and tuple",
      "when should i use a tuple",
      "are tuples immutable",
    ],
    answer:
      "A tuple is an ordered but immutable collection written with parentheses. Use one for a fixed group of values that should never change — it can also be used as a dictionary key, unlike a list.",
    code: "point = (1, 2)\nx, y = point       # unpacking\npoint[0] = 5       # TypeError: does not support item assignment",
  },
  {
    id: "dictionaries",
    topic: "Dictionaries",
    questions: [
      "what is a dictionary in python",
      "how do i add a key to a dict",
      "how to handle a missing key",
      "how do i loop over a dictionary",
      "what is keyerror",
    ],
    answer:
      "A dictionary stores key/value pairs with fast lookup by key. Use get() with a default to avoid a KeyError, and items() to iterate over pairs.",
    code: 'user = {"name": "Ada"}\nuser["role"] = "engineer"\ntimeout = user.get("timeout", 30)\nfor key, value in user.items():\n    print(key, value)',
  },
  {
    id: "sets",
    topic: "Sets",
    questions: [
      "what is a set in python",
      "how do i remove duplicates from a list",
      "set union and intersection",
      "difference between set and list",
    ],
    answer:
      "A set is an unordered collection of unique values. It is ideal for de-duplicating data and for fast membership tests and set algebra.",
    code: "unique = set([1, 2, 2, 3])   # {1, 2, 3}\na, b = {1, 2}, {2, 3}\na | b   # union       -> {1, 2, 3}\na & b   # intersection -> {2}",
  },
  {
    id: "conditionals",
    topic: "Conditionals",
    questions: [
      "how do if statements work",
      "what is elif",
      "how to write if else in python",
      "difference between == and is",
    ],
    answer:
      "Use if / elif / else with an indented block. Note that == compares values while is compares identity — use == for normal comparisons and is only with None.",
    code: 'score = 72\nif score >= 90:\n    grade = "A"\nelif score >= 70:\n    grade = "B"\nelse:\n    grade = "C"',
  },
  {
    id: "loops",
    topic: "Loops",
    questions: [
      "how does a for loop work",
      "what is a while loop",
      "how do i use range",
      "what do break and continue do",
      "how to loop with an index",
    ],
    answer:
      "A for loop iterates over any iterable, while a while loop repeats until its condition is false. Use range() for counting, enumerate() when you also need the index, break to exit and continue to skip an iteration.",
    code: 'for i in range(3):\n    print(i)          # 0 1 2\n\nfor i, item in enumerate(["a", "b"]):\n    print(i, item)',
  },
  {
    id: "functions",
    topic: "Functions",
    questions: [
      "how do functions work in python",
      "how do i define a function",
      "what are default arguments",
      "how do args and kwargs work",
      "what does return do",
    ],
    answer:
      "Define a function with def, give it parameters, and return a value with return. *args collects extra positional arguments into a tuple and **kwargs collects extra keyword arguments into a dict.",
    code: 'def greet(name, greeting="Hi", *args, **kwargs):\n    return f"{greeting}, {name}!"\n\nprint(greet("Ada"))   # Hi, Ada!',
  },
  {
    id: "oop",
    topic: "OOP basics",
    questions: [
      "what is a class in python",
      "how does oop work in python",
      "what is self",
      "what is __init__",
      "how does inheritance work",
    ],
    answer:
      "A class is a blueprint for objects. __init__ runs when an instance is created and self refers to that instance. A subclass inherits behaviour from its parent and can override methods.",
    code: 'class Animal:\n    def __init__(self, name):\n        self.name = name\n    def speak(self):\n        return "..."\n\nclass Dog(Animal):\n    def speak(self):\n        return "Woof"',
  },
  {
    id: "modules",
    topic: "Modules and imports",
    questions: [
      "how do imports work in python",
      "what is a module",
      "how do i import a function from a file",
      "what is pip",
      "what does if __name__ == main mean",
    ],
    answer:
      "A module is any .py file. Import it with import module or pull specific names with from module import name. Third-party packages are installed with pip, and the __name__ check lets a file act as both a script and an importable module.",
    code: 'import math\nfrom datetime import datetime\n\nif __name__ == "__main__":\n    print(math.sqrt(16))',
  },
  {
    id: "exceptions",
    topic: "Exception handling",
    questions: [
      "how do i handle errors in python",
      "what is try except",
      "how to catch an exception",
      "what does finally do",
      "how do i raise an error",
    ],
    answer:
      "Wrap risky code in try and handle failures in except, catching specific exception types where possible. else runs when nothing failed, finally always runs, and raise triggers an error yourself.",
    code: 'try:\n    value = int("abc")\nexcept ValueError as err:\n    print("Bad input:", err)\nfinally:\n    print("done")',
  },
  {
    id: "files",
    topic: "File handling",
    questions: [
      "how do i read a file in python",
      "how to write to a file",
      "what does with open do",
      "how to read a file line by line",
    ],
    answer:
      "Use open() inside a with block so the file closes automatically. Mode 'r' reads, 'w' overwrites and 'a' appends. Iterating over the file object gives you one line at a time.",
    code: 'with open("notes.txt", "r") as f:\n    for line in f:\n        print(line.strip())\n\nwith open("notes.txt", "a") as f:\n    f.write("new line\\n")',
  },
  {
    id: "comprehensions",
    topic: "Comprehensions",
    questions: [
      "what is a list comprehension",
      "how do comprehensions work",
      "dict comprehension example",
      "how to filter a list in one line",
    ],
    answer:
      "A comprehension builds a new list, dict or set from an iterable in a single expression, with an optional filter clause. It is usually clearer and faster than an equivalent append loop.",
    code: "nums = [1, 2, 3, 4]\nevens = [n for n in nums if n % 2 == 0]     # [2, 4]\nsquares = {n: n * n for n in nums}          # {1: 1, 2: 4, ...}",
  },
  {
    id: "strings",
    topic: "Strings",
    questions: [
      "how do i format strings in python",
      "what is an f string",
      "how to split and join strings",
      "how do i make a string uppercase",
    ],
    answer:
      "f-strings interpolate expressions directly inside the literal. Strings are immutable, so methods like upper(), strip(), split() and join() return new strings.",
    code: 'name = "ada"\nprint(f"Hello {name.title()}")\nparts = "a,b,c".split(",")    # [\'a\', \'b\', \'c\']\njoined = "-".join(parts)      # \'a-b-c\'',
  },
  {
    id: "errors",
    topic: "Common errors",
    questions: [
      "what is an indentationerror",
      "why do i get a typeerror",
      "what does nameerror mean",
      "what is an indexerror",
      "common python errors for beginners",
    ],
    answer:
      "IndentationError means your block spacing is inconsistent. NameError means the name was never defined. TypeError means an operation got the wrong type. IndexError means a sequence index is out of range, and KeyError means a dict key is missing.",
    code: 'nums = [1, 2]\nnums[5]        # IndexError: list index out of range\n"a" + 1        # TypeError: can only concatenate str to str',
  },
  {
    id: "operators",
    topic: "Operators",
    questions: [
      "what operators does python have",
      "what does // do in python",
      "what is the modulo operator",
      "how does the power operator work",
    ],
    answer:
      "Beyond the usual + - * /, Python has // for floor division, % for the remainder and ** for exponentiation. Comparison and logical operators (and, or, not) return booleans.",
    code: "7 / 2    # 3.5\n7 // 2   # 3\n7 % 2    # 1\n2 ** 10  # 1024",
  },
  {
    id: "why-python-beginners",
    topic: "Choosing Python",
    questions: [
      "which is the best programming language for beginners",
      "what language should i learn first",
      "which coding language is easiest to start with",
      "is python good for beginners",
      "should i learn python or java first",
      "what is a good first language for a student",
      "recommend a language for someone new to coding",
      "which programming language should i pick",
    ],
    answer:
      "Python is the usual recommendation for beginners. Its syntax reads close to English, it needs no compiler setup or type declarations, errors are readable, and the same language carries you from first script into web, data and automation work.",
    code: '# a complete, runnable Python program\nname = input("Your name? ")\nprint(f"Welcome, {name}!")',
  },
  {
    id: "python-vs-others",
    topic: "Python vs other languages",
    questions: [
      "python vs java",
      "difference between python and c",
      "is python faster than javascript",
      "why is python slower than c",
      "python or r for data science",
      "should i use python or javascript for web",
    ],
    answer:
      "Python trades raw speed for developer speed: it is interpreted and dynamically typed, so it runs slower than C or Java but takes far less code to write. For data work its library ecosystem (NumPy, pandas) beats R for general use; for the browser, JavaScript is required, while Python owns the server side.",
  },
  {
    id: "install-run",
    topic: "Installing and running Python",
    questions: [
      "how do i install python",
      "how to run a python file",
      "what is the python interpreter",
      "how do i start writing python",
      "which editor should i use for python",
      "what is a virtual environment",
    ],
    answer:
      "Install Python from python.org (or your package manager), save code in a .py file and run it with `python file.py`. VS Code or PyCharm are the common editors. Create a virtual environment per project so packages stay isolated.",
    code: "python -m venv .venv\nsource .venv/bin/activate   # Windows: .venv\\Scripts\\activate\npip install requests\npython main.py",
  },
  {
    id: "career",
    topic: "Python careers and uses",
    questions: [
      "what jobs can i get with python",
      "is python worth learning in 2026",
      "can i get a job knowing only python",
      "what can i build with python",
      "is python used in ai and machine learning",
      "how long does it take to learn python",
    ],
    answer:
      "Python is used for backend web development, data analysis, machine learning, automation, testing and scripting. Basics take a few weeks; comfortable working ability usually takes a few months of regular practice plus small projects.",
  },
  {
    id: "slicing",
    topic: "Slicing and indexing",
    questions: [
      "how does slicing work in python",
      "how do i get part of a list",
      "what does list[::-1] do",
      "how to reverse a string",
      "negative index meaning",
    ],
    answer:
      "Slicing takes sequence[start:stop:step]; stop is excluded, negative indexes count from the end and a step of -1 reverses. It works on lists, strings and tuples alike.",
    code: 'items = [0, 1, 2, 3, 4]\nitems[1:3]     # [1, 2]\nitems[-2:]     # [3, 4]\n"hello"[::-1]  # \'olleh\'',
  },
  {
    id: "input-output",
    topic: "Input and output",
    questions: [
      "how do i take user input in python",
      "what does print do",
      "how to read a number from the user",
      "how do i print multiple values",
    ],
    answer:
      "input() always returns a string, so convert it with int() or float() when you need a number. print() accepts multiple values and supports sep and end to control formatting.",
    code: 'age = int(input("Age: "))\nprint("Next year you are", age + 1, sep=" ", end="\\n")',
  },
  {
    id: "libraries",
    topic: "Popular libraries",
    questions: [
      "which libraries should i learn in python",
      "what is numpy used for",
      "what is pandas",
      "best python framework for web",
      "how do i make an api in python",
      "what library is used for machine learning",
    ],
    answer:
      "Common picks: requests for HTTP, pandas and NumPy for data, matplotlib for charts, Django or FastAPI for web APIs, pytest for tests, and scikit-learn or PyTorch for machine learning. Install any of them with pip.",
    code: "pip install pandas requests fastapi\n\nimport pandas as pd\ndf = pd.read_csv('data.csv')\nprint(df.head())",
  },
  {
    id: "recursion",
    topic: "Recursion",
    questions: [
      "what is recursion",
      "how do recursive functions work",
      "recursion vs loop",
      "what is a base case",
      "why do i get recursionerror",
    ],
    answer:
      "A recursive function calls itself on a smaller input and stops at a base case. Without a base case Python hits its recursion limit and raises RecursionError; loops are usually faster for simple repetition.",
    code: "def factorial(n):\n    if n <= 1:      # base case\n        return 1\n    return n * factorial(n - 1)",
  },
  {
    id: "lambda-functional",
    topic: "Lambda and functional tools",
    questions: [
      "what is a lambda function",
      "how do map and filter work",
      "what does sorted key do",
      "anonymous function in python",
      "what is reduce",
    ],
    answer:
      "A lambda is a one-expression anonymous function, handy as a key or callback. map() applies a function to every item, filter() keeps items where it returns True, and sorted(key=...) sorts by a computed value.",
    code: 'words = ["pear", "fig", "apple"]\nsorted(words, key=lambda w: len(w))   # [\'fig\', \'pear\', \'apple\']\nlist(map(str.upper, words))\nlist(filter(lambda w: "p" in w, words))',
  },
  {
    id: "mutability-copying",
    topic: "Mutability and copying",
    questions: [
      "why did my list change unexpectedly",
      "difference between copy and deepcopy",
      "what is a mutable default argument",
      "are strings mutable in python",
      "how do i copy a list properly",
    ],
    answer:
      "Assigning a list gives another name for the same object, so edits show through both names. Use list(x) or copy.deepcopy for nested data, and never use a mutable default like def f(items=[]) — it is shared across calls.",
    code: "a = [1, 2]\nb = a          # same object\nc = a.copy()   # independent\n\ndef f(items=None):\n    items = items or []",
  },
  {
    id: "scope",
    topic: "Scope and namespaces",
    questions: [
      "what is variable scope in python",
      "what does global mean",
      "why is my variable not defined inside a function",
      "local vs global variable",
    ],
    answer:
      "Names assigned inside a function are local to it. Reading an outer name works, but rebinding one needs global (module level) or nonlocal (enclosing function).",
    code: "count = 0\n\ndef bump():\n    global count\n    count += 1",
  },
  {
    id: "iterators-generators",
    topic: "Iterators and generators",
    questions: [
      "what is a generator in python",
      "what does yield do",
      "difference between iterator and iterable",
      "how do i save memory when looping",
    ],
    answer:
      "A generator function uses yield to produce values one at a time instead of building a whole list, which keeps memory flat over large data. Any object with __iter__ is iterable; the iterator is what next() advances.",
    code: "def squares(n):\n    for i in range(n):\n        yield i * i\n\nfor value in squares(1_000_000):\n    ...",
  },
  {
    id: "datetime-random-math",
    topic: "Useful standard modules",
    questions: [
      "how do i get the current date in python",
      "how to generate a random number",
      "how do i work with json in python",
      "how to pause a program in python",
    ],
    answer:
      "The standard library covers most of this: datetime for dates, random for random values, json for parsing and dumping JSON, time.sleep to pause, and os/pathlib for files and paths.",
    code: 'from datetime import datetime\nimport random, json, time\n\nprint(datetime.now())\nprint(random.randint(1, 6))\nprint(json.loads(\'{"a": 1}\'))\ntime.sleep(1)',
  },
  {
    id: "debugging-best-practices",
    topic: "Debugging and best practices",
    questions: [
      "how do i debug python code",
      "what is pep8",
      "how should i structure a python project",
      "how do i write tests in python",
      "how to make my python code faster",
    ],
    answer:
      "Print or use breakpoint() to inspect state, read the last line of the traceback first, follow PEP 8 style, keep functions small, and write tests with pytest. For speed, favour built-ins and comprehensions before reaching for optimisation.",
    code: "def add(a, b):\n    return a + b\n\ndef test_add():\n    assert add(2, 3) == 5   # run with: pytest",
  },
];

export const kbTopics = Array.from(new Set(knowledgeBase.map((e) => e.topic)));

