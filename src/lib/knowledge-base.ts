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
];

export const kbTopics = Array.from(new Set(knowledgeBase.map((e) => e.topic)));
