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
      "my code says indentation error",
      "my program crashes with an error message",
      "how do i read a traceback",
      "why is my python code not working",
      "what does syntax error mean",
      "unexpected indent",
      "list index out of range",
      "key error in dictionary",
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
  {
    id: "virtual-envs",
    topic: "Virtual environments and pip",
    questions: [
      "how do i install a package in python",
      "what is pip",
      "what is a virtual environment",
      "how do i keep project dependencies separate",
      "what is requirements txt",
      "how to use venv",
    ],
    answer:
      "pip installs packages from PyPI, and a virtual environment keeps each project's packages separate from the system Python. Create one with python -m venv, activate it, install what you need, then freeze the list into requirements.txt.",
    code: "python -m venv .venv\nsource .venv/bin/activate   # Windows: .venv\\Scripts\\activate\npip install requests\npip freeze > requirements.txt",
  },
  {
    id: "dates-time",
    topic: "Dates and times",
    questions: [
      "how do i format a date in python",
      "how to get todays date",
      "how do i measure how long code takes",
      "how to convert a string to a date",
    ],
    answer:
      "Use datetime for calendar work: datetime.now() for the current moment, strftime to format, strptime to parse, and timedelta for arithmetic. For timing code, use time.perf_counter().",
    code: 'from datetime import datetime, timedelta\n\nnow = datetime.now()\nprint(now.strftime("%Y-%m-%d %H:%M"))\nprint(datetime.strptime("2026-01-31", "%Y-%m-%d"))\nprint(now + timedelta(days=7))',
  },
  {
    id: "sorting-searching",
    topic: "Sorting and searching",
    questions: [
      "how do i sort a list in python",
      "how to sort a dictionary by value",
      "how do i sort by a key",
      "how do i find the largest item",
      "how to reverse a list",
    ],
    answer:
      "sorted() returns a new sorted list and list.sort() sorts in place; both take key= and reverse=. max/min accept the same key argument, and slicing with [::-1] reverses a sequence.",
    code: 'people = [{"name": "Ada", "age": 36}, {"name": "Bo", "age": 24}]\nprint(sorted(people, key=lambda p: p["age"]))\n\nscores = {"a": 3, "b": 9}\nprint(sorted(scores.items(), key=lambda kv: kv[1], reverse=True))',
  },
  {
    id: "string-formatting",
    topic: "String formatting",
    questions: [
      "how do i combine text and variables in python",
      "what is an f string",
      "how do i round a number in output",
      "how to print with two decimal places",
    ],
    answer:
      "f-strings are the modern way to build text: put an f before the quotes and drop expressions inside braces. Format specifiers after a colon control decimals, padding and thousands separators.",
    code: 'name, total = "Ada", 1234.5678\nprint(f"{name} owes {total:,.2f}")\nprint(f"{42:>5}")  # right aligned in 5 columns',
  },
  {
    id: "numbers-math",
    topic: "Numbers and maths",
    questions: [
      "how do i round a number in python",
      "what is integer division",
      "how do i get a remainder",
      "why is 0.1 + 0.2 not 0.3",
      "how to do square root in python",
    ],
    answer:
      "// is floor division, % is the remainder, ** is a power, and math.sqrt (or ** 0.5) gives square roots. Floats are binary approximations, so use round() for display and the decimal module when exact money maths matters.",
    code: "import math\nprint(7 // 2, 7 % 2, 2 ** 10)\nprint(math.sqrt(16), round(3.14159, 2))\nprint(0.1 + 0.2)  # 0.30000000000000004",
  },
  {
    id: "type-conversion",
    topic: "Type conversion",
    questions: [
      "how do i convert a string to a number",
      "how to turn a number into text",
      "why does input give me a string",
      "how do i cast types in python",
    ],
    answer:
      "Convert explicitly with int(), float(), str(), list() and dict(). input() always returns a string, so wrap it in int() or float() before doing maths, and guard with try/except in case the text is not numeric.",
    code: 'age = int(input("Age: "))\nprint(str(age) + " years")\nprint(float("3.5"), list("abc"))',
  },
  {
    id: "web-scraping-requests",
    topic: "Working with APIs and the web",
    questions: [
      "how do i call an api in python",
      "how to make an http request",
      "how do i scrape a website with python",
      "how to download a file in python",
    ],
    answer:
      "requests is the usual choice for HTTP: requests.get(url).json() fetches and parses an API response. For scraping HTML, pair it with BeautifulSoup, and always check the site's terms and rate limits.",
    code: 'import requests\n\nres = requests.get("https://api.github.com/users/python")\nres.raise_for_status()\nprint(res.json()["public_repos"])',
  },
  {
    id: "data-science",
    topic: "Data analysis with Python",
    questions: [
      "how do i analyse data in python",
      "what is pandas used for",
      "how to read a csv file in python",
      "how do i plot a graph in python",
      "is python good for data science",
    ],
    answer:
      "pandas is the workhorse for tabular data: read_csv loads a file into a DataFrame, and you filter, group and aggregate from there. numpy handles fast numeric arrays and matplotlib draws the charts.",
    code: 'import pandas as pd\n\ndf = pd.read_csv("sales.csv")\nprint(df.head())\nprint(df.groupby("region")["amount"].sum())',
  },
  {
    id: "web-frameworks",
    topic: "Web development with Python",
    questions: [
      "can i build a website with python",
      "what is django",
      "flask or django which is better",
      "how do i make an api with python",
    ],
    answer:
      "Yes. Django is a batteries-included framework with an ORM and admin, ideal for full sites. Flask and FastAPI are lighter; FastAPI is a strong pick for JSON APIs thanks to type hints and automatic docs.",
    code: 'from fastapi import FastAPI\n\napp = FastAPI()\n\n@app.get("/hello")\ndef hello():\n    return {"message": "hi"}',
  },
  {
    id: "automation",
    topic: "Automation and scripting",
    questions: [
      "what can i automate with python",
      "how do i rename many files at once",
      "can python send emails",
      "how do i schedule a python script",
    ],
    answer:
      "Python shines at glue work: pathlib and os for bulk file renaming and cleanup, openpyxl for spreadsheets, smtplib for email, and cron or Task Scheduler to run a script on a timetable.",
    code: 'from pathlib import Path\n\nfor i, p in enumerate(Path("photos").glob("*.jpg"), 1):\n    p.rename(p.with_name(f"holiday_{i:03}.jpg"))',
  },
  {
    id: "learning-path",
    topic: "Learning Python",
    questions: [
      "how long does it take to learn python",
      "how should i start learning python",
      "what should i learn after the basics",
      "do i need maths to learn python",
      "what projects should a beginner build",
    ],
    answer:
      "Most learners get comfortable with the basics in a few weeks of daily practice. Work through syntax, lists and dictionaries, functions, then files and errors, and build small projects — a calculator, a to-do list, a file organiser — before moving to a framework. Heavy maths is only needed for data science.",
  },
  {
    id: "python2-vs-3",
    topic: "Python versions",
    questions: [
      "python 2 or python 3",
      "which version of python should i use",
      "what is new in the latest python",
      "how do i check my python version",
    ],
    answer:
      "Always use Python 3 — Python 2 reached end of life in 2020. Install the latest stable 3.x release; check what you have with python --version.",
    code: "python --version\nimport sys; print(sys.version_info)",
  },
  {
    id: "type-hints",
    topic: "Type hints",
    questions: [
      "what are type hints in python",
      "how do i annotate function arguments",
      "is python statically typed",
      "what is mypy",
    ],
    answer:
      "Type hints are optional annotations that document what a function expects and returns. Python does not enforce them at runtime, but tools like mypy or your editor use them to catch mistakes early.",
    code: "def greet(name: str, times: int = 1) -> str:\n    return (f\"Hi {name}! \" * times).strip()",
  },
  {
    id: "async",
    topic: "Async and concurrency",
    questions: [
      "what is async await in python",
      "how do i speed up many network calls",
      "how to make many requests at the same time",
      "how do i use multithreading",
      "how to make python code run concurrently",
      "how do i run things in parallel in python",
      "what is the gil",
      "threads or processes in python",
    ],
    answer:
      "asyncio suits IO-bound work such as many network calls: mark functions async and await them. The GIL limits threads for CPU-heavy work, so use multiprocessing when you need real parallel computation.",
    code: 'import asyncio\n\nasync def main():\n    await asyncio.sleep(1)\n    print("done")\n\nasyncio.run(main())',
  },
  {
    id: "databases",
    topic: "Databases with Python",
    questions: [
      "how do i connect python to a database",
      "how to use sqlite in python",
      "can python talk to mysql or postgres",
      "what is an orm",
    ],
    answer:
      "sqlite3 ships with Python and needs no server, which makes it perfect for small apps. For MySQL or PostgreSQL use a driver such as psycopg or mysql-connector, or an ORM like SQLAlchemy to work with objects instead of raw SQL.",
    code: 'import sqlite3\n\ncon = sqlite3.connect("app.db")\ncon.execute("CREATE TABLE IF NOT EXISTS todo(task TEXT)")\ncon.execute("INSERT INTO todo VALUES (?)", ("learn python",))\ncon.commit()',
  },
  {
    id: "dunder-main",
    topic: "Scripts and __main__",
    questions: [
      "what does if __name__ == '__main__' mean",
      "how do i run a python file",
      "how do i pass arguments to a script",
      "what is the difference between a script and a module",
    ],
    answer:
      "A file run directly gets __name__ set to \"__main__\", so that guard keeps setup code from firing when the file is imported. Command-line arguments arrive in sys.argv, or use argparse for a friendly interface.",
    code: 'import sys\n\ndef main():\n    print("args:", sys.argv[1:])\n\nif __name__ == "__main__":\n    main()',
  },
  {
    id: "decorators",
    topic: "Decorators",
    questions: [
      "what is a decorator in python",
      "how do decorators work",
      "how do i add logging or timing to a function without changing it",
      "what does the @ symbol mean above a function",
      "how do i write my own decorator",
      "what is functools.wraps",
    ],
    answer:
      "A decorator is a function that takes a function and returns a new one, letting you wrap extra behaviour (timing, logging, caching, access checks) around code without editing it. The @name line above a def is shorthand for func = name(func). Use functools.wraps so the wrapped function keeps its name and docstring.",
    code: "import functools, time\n\ndef timed(fn):\n    @functools.wraps(fn)\n    def wrapper(*args, **kwargs):\n        start = time.perf_counter()\n        result = fn(*args, **kwargs)\n        print(f\"{fn.__name__} took {time.perf_counter() - start:.4f}s\")\n        return result\n    return wrapper\n\n@timed\ndef slow():\n    time.sleep(0.5)",
  },
  {
    id: "decorators-advanced",
    topic: "Advanced decorators",
    questions: [
      "how do i write a decorator that takes arguments",
      "what is a class decorator",
      "how do i cache results of a function",
      "what is lru_cache",
      "how do i retry a function automatically",
    ],
    answer:
      "A decorator with arguments is a function returning a decorator — three nested levels. Classes can be decorators too by implementing __call__. For caching use functools.lru_cache or functools.cache; for retries wrap the call in a loop inside the wrapper.",
    code: "import functools\n\ndef repeat(times):\n    def deco(fn):\n        @functools.wraps(fn)\n        def wrapper(*a, **k):\n            for _ in range(times):\n                result = fn(*a, **k)\n            return result\n        return wrapper\n    return deco\n\n@functools.lru_cache(maxsize=None)\ndef fib(n):\n    return n if n < 2 else fib(n - 1) + fib(n - 2)",
  },
  {
    id: "generators-advanced",
    topic: "Generators and yield",
    questions: [
      "what is a generator in python",
      "what does yield do",
      "how is yield different from return",
      "how do i read a huge file without loading it into memory",
      "what is a generator expression",
      "what is yield from",
      "how do i make an infinite sequence lazily",
    ],
    answer:
      "A generator function uses yield to produce values one at a time and pauses between them, so it uses almost no memory no matter how long the sequence is. Calling it returns a generator object you iterate; return ends it. yield from delegates to another iterable, and (x for x in data) is a generator expression.",
    code: "def read_lines(path):\n    with open(path) as f:\n        for line in f:\n            yield line.rstrip()\n\ndef counter(start=0):\n    while True:\n        yield start\n        start += 1\n\nbig_total = sum(len(l) for l in read_lines(\"data.txt\"))",
  },
  {
    id: "coroutines-send",
    topic: "Coroutines and generator pipelines",
    questions: [
      "what is generator.send",
      "how do i build a data pipeline with generators",
      "what is a coroutine in python",
      "how do i chain generators together",
    ],
    answer:
      "Generators can also receive values with .send(), which turns them into simple coroutines. Chaining generators makes streaming pipelines: each stage takes an iterable and yields transformed items, so data flows through lazily without intermediate lists.",
    code: "def numbers(n):\n    yield from range(n)\n\ndef squared(source):\n    for x in source:\n        yield x * x\n\ndef only_even(source):\n    for x in source:\n        if x % 2 == 0:\n            yield x\n\nprint(list(only_even(squared(numbers(10)))))",
  },
  {
    id: "metaclasses",
    topic: "Metaclasses",
    questions: [
      "what is a metaclass in python",
      "how do metaclasses work",
      "what is type() with three arguments",
      "when should i use a metaclass",
      "how do i register subclasses automatically",
      "what is __init_subclass__",
    ],
    answer:
      "A metaclass is the class of a class: it controls how classes themselves are created. type is the default metaclass, and type(name, bases, namespace) builds a class at runtime. Use a metaclass for framework-level tricks like auto-registering subclasses or validating class definitions — for most cases __init_subclass__ or a class decorator is simpler and clearer.",
    code: "class RegistryMeta(type):\n    registry = {}\n    def __new__(mcls, name, bases, ns):\n        cls = super().__new__(mcls, name, bases, ns)\n        if bases:\n            RegistryMeta.registry[name.lower()] = cls\n        return cls\n\nclass Plugin(metaclass=RegistryMeta):\n    pass\n\nclass CsvPlugin(Plugin):\n    pass\n\nprint(RegistryMeta.registry)  # {\"csvplugin\": <class CsvPlugin>}",
  },
  {
    id: "descriptors-properties",
    topic: "Descriptors and properties",
    questions: [
      "what is a property in python",
      "how do i make a getter and setter",
      "what is a descriptor",
      "what does @property do",
      "how do i validate an attribute when it is set",
      "what is __get__ and __set__",
    ],
    answer:
      "@property turns a method into a read-only attribute, and @x.setter adds validation on assignment — no need for Java-style getters. Under the hood properties are descriptors: objects defining __get__/__set__ that control attribute access, which is how properties, methods and classmethods all work.",
    code: "class Account:\n    def __init__(self, balance):\n        self._balance = balance\n\n    @property\n    def balance(self):\n        return self._balance\n\n    @balance.setter\n    def balance(self, value):\n        if value < 0:\n            raise ValueError(\"balance cannot be negative\")\n        self._balance = value",
  },
  {
    id: "dunder-methods",
    topic: "Magic (dunder) methods",
    questions: [
      "what are dunder methods",
      "what is __str__ vs __repr__",
      "how do i make my class support + or ==",
      "how do i make an object iterable",
      "what is __enter__ and __exit__",
      "how do i write a context manager",
      "how do i make len() work on my class",
    ],
    answer:
      "Dunder methods let your objects behave like built-ins: __repr__/__str__ for printing, __eq__ and __hash__ for comparison, __add__ for +, __len__ for len(), __iter__ for loops, and __enter__/__exit__ for with-blocks. contextlib.contextmanager gives you a context manager from a single generator.",
    code: "from contextlib import contextmanager\n\nclass Money:\n    def __init__(self, amount): self.amount = amount\n    def __repr__(self): return f\"Money({self.amount})\"\n    def __add__(self, other): return Money(self.amount + other.amount)\n    def __eq__(self, other): return self.amount == other.amount\n\n@contextmanager\ndef timer():\n    import time; start = time.perf_counter()\n    yield\n    print(time.perf_counter() - start)",
  },
  {
    id: "dataclasses",
    topic: "Dataclasses and modern classes",
    questions: [
      "what is a dataclass",
      "how do i avoid writing __init__ for every class",
      "what is the difference between dataclass and namedtuple",
      "what is frozen=True",
      "how do i make an immutable class",
      "what is pydantic used for",
    ],
    answer:
      "@dataclass generates __init__, __repr__ and __eq__ from annotated fields, cutting boilerplate. frozen=True makes instances immutable and hashable, and field(default_factory=list) avoids the mutable-default trap. NamedTuple is lighter and tuple-like; pydantic adds runtime validation and parsing on top.",
    code: "from dataclasses import dataclass, field\n\n@dataclass(frozen=True)\nclass Point:\n    x: float\n    y: float\n\n@dataclass\nclass Cart:\n    items: list[str] = field(default_factory=list)",
  },
  {
    id: "design-patterns",
    topic: "Design patterns in Python",
    questions: [
      "what design patterns are used in python",
      "how do i implement a singleton in python",
      "what is dependency injection in python",
      "what is the factory pattern",
      "how should i structure a large python project",
      "what is the strategy pattern",
    ],
    answer:
      "Python's first-class functions make many classic patterns lightweight: strategy is just passing a function, factory is a function returning objects, and singleton is usually a module-level instance. Structure larger projects as a package with clear layers — entry point, services/business logic, data access, and tests — and pass dependencies in rather than importing globals.",
    code: "# strategy as a plain function\ndef by_price(item): return item[\"price\"]\n\ndef sort_items(items, key=by_price):\n    return sorted(items, key=key)\n\n# factory\ndef make_storage(kind):\n    return {\"file\": FileStore, \"memory\": MemoryStore}[kind]()",
  },
  {
    id: "testing",
    topic: "Testing and pytest",
    questions: [
      "how do i test python code",
      "what is pytest",
      "how do i write unit tests",
      "what is a fixture in pytest",
      "how do i mock an api call in tests",
      "what is test coverage",
      "what is tdd",
    ],
    answer:
      "pytest is the standard choice: plain functions named test_* with assert statements. Fixtures supply reusable setup, parametrize runs one test over many inputs, and unittest.mock patches external calls so tests stay fast and offline. Run pytest --cov to see which lines your tests touch.",
    code: "import pytest\nfrom unittest.mock import patch\n\n@pytest.fixture\ndef cart():\n    return {\"items\": []}\n\n@pytest.mark.parametrize(\"value,expected\", [(2, 4), (3, 9)])\ndef test_square(value, expected):\n    assert value ** 2 == expected\n\ndef test_api():\n    with patch(\"requests.get\") as get:\n        get.return_value.json.return_value = {\"ok\": True}",
  },
  {
    id: "performance",
    topic: "Performance and optimisation",
    questions: [
      "how do i make python faster",
      "why is python slow",
      "how do i profile python code",
      "what is the gil",
      "when should i use numpy instead of loops",
      "how do i find a bottleneck in my code",
      "what is caching",
    ],
    answer:
      "Measure before optimising: cProfile or timeit shows where time actually goes. Common wins are choosing better data structures (set lookups over list scans), vectorising with NumPy, caching with functools.cache, and avoiding work inside loops. The GIL means threads don't speed up CPU-bound work — use multiprocessing for that.",
    code: "import cProfile, timeit\n\ncProfile.run(\"main()\")\nprint(timeit.timeit(\"sum(range(1000))\", number=10000))\n\n# set membership is O(1) vs list O(n)\nallowed = {\"a\", \"b\", \"c\"}\nif \"a\" in allowed:\n    pass",
  },
  {
    id: "packaging-distribution",
    topic: "Packaging and publishing",
    questions: [
      "how do i publish a python package",
      "what is pyproject.toml",
      "how do i make my script installable",
      "what is a wheel",
      "how do i upload to pypi",
      "what is poetry or uv",
    ],
    answer:
      "Modern packaging uses a pyproject.toml describing name, version and dependencies. Build with python -m build to produce a wheel and sdist, then upload with twine to PyPI. Tools like Poetry, Hatch or uv wrap the whole workflow, and a [project.scripts] entry turns a function into a command-line program.",
    code: "# pyproject.toml\n[project]\nname = \"mytool\"\nversion = \"0.1.0\"\ndependencies = [\"requests\"]\n\n[project.scripts]\nmytool = \"mytool.cli:main\"",
  },
  {
    id: "project-cli",
    topic: "Real project: CLI tool",
    questions: [
      "what python project should i build",
      "give me a beginner python project idea",
      "how do i build a command line tool in python",
      "what are good portfolio projects in python",
      "how do i build a to do list app in python",
    ],
    answer:
      "A command-line tool is the best first real project: a to-do manager, expense tracker or file organiser. Use argparse for commands, json or sqlite3 for storage, and split the code into cli.py and core.py so the logic is testable. It shows off argument parsing, persistence, error handling and tests in one small repo.",
    code: "import argparse, json, pathlib\n\nDB = pathlib.Path(\"todo.json\")\n\ndef add(task):\n    items = json.loads(DB.read_text()) if DB.exists() else []\n    items.append({\"task\": task, \"done\": False})\n    DB.write_text(json.dumps(items, indent=2))\n\np = argparse.ArgumentParser()\np.add_argument(\"task\")\nadd(p.parse_args().task)",
  },
  {
    id: "project-api",
    topic: "Real project: web API",
    questions: [
      "how do i build a rest api in python",
      "how do i build a web app with fastapi",
      "what is a good intermediate python project",
      "how do i connect a python api to a database",
      "how do i deploy a python api",
    ],
    answer:
      "Build a small REST API with FastAPI: define pydantic models, write path operations, and store data in SQLite via SQLAlchemy. You get automatic docs at /docs and validation for free. Deploy with uvicorn behind a host like Render, Fly.io or a container — great portfolio material because it covers routing, validation, persistence and deployment.",
    code: "from fastapi import FastAPI\nfrom pydantic import BaseModel\n\napp = FastAPI()\n\nclass Task(BaseModel):\n    title: str\n    done: bool = False\n\ntasks: list[Task] = []\n\n@app.post(\"/tasks\")\ndef create(task: Task):\n    tasks.append(task)\n    return task",
  },
  {
    id: "project-data",
    topic: "Real project: data analysis",
    questions: [
      "how do i build a data analysis project",
      "what can i build with pandas",
      "how do i analyse a csv file in python",
      "how do i make charts in python",
      "what is a good data science portfolio project",
    ],
    answer:
      "Pick a public CSV dataset, load it with pandas, clean missing values, group and aggregate to answer two or three concrete questions, then chart the results with matplotlib and write up findings in a notebook. That end-to-end story — question, cleaning, analysis, visual, conclusion — is what reviewers look for.",
    code: "import pandas as pd\nimport matplotlib.pyplot as plt\n\ndf = pd.read_csv(\"sales.csv\").dropna(subset=[\"amount\"])\nmonthly = df.groupby(df[\"date\"].str[:7])[\"amount\"].sum()\nmonthly.plot(kind=\"bar\")\nplt.show()",
  },
  {
    id: "project-automation-bot",
    topic: "Real project: automation and bots",
    questions: [
      "how do i automate boring tasks with python",
      "how do i build a discord or telegram bot",
      "how do i scrape a website and save results",
      "how do i schedule a python script to run daily",
      "how do i send emails with python",
    ],
    answer:
      "Automation projects are quick wins: rename and sort files, scrape a page with requests plus BeautifulSoup into a CSV, email a daily report with smtplib, or run a chat bot with discord.py. Schedule them with cron on Linux/macOS, Task Scheduler on Windows, or a hosted scheduler.",
    code: "import requests, csv\nfrom bs4 import BeautifulSoup\n\nhtml = requests.get(\"https://example.com\").text\nsoup = BeautifulSoup(html, \"html.parser\")\nrows = [(h.text.strip(),) for h in soup.select(\"h2\")]\n\nwith open(\"out.csv\", \"w\", newline=\"\") as f:\n    csv.writer(f).writerows(rows)",
  },
  {
    id: "concurrency-advanced",
    topic: "Threads, processes and async",
    questions: [
      "what is the difference between threading and multiprocessing",
      "when should i use asyncio",
      "how do i run tasks in parallel in python",
      "what is concurrent.futures",
      "how do i speed up many api calls",
    ],
    answer:
      "Use asyncio or threads for I/O-bound work (network, files) and multiprocessing for CPU-bound work, because the GIL stops threads from running Python bytecode in parallel. concurrent.futures gives one simple API for both pools, and asyncio.gather fires many awaits at once.",
    code: "import asyncio, httpx\nfrom concurrent.futures import ThreadPoolExecutor\n\nasync def fetch_all(urls):\n    async with httpx.AsyncClient() as client:\n        return await asyncio.gather(*(client.get(u) for u in urls))\n\nwith ThreadPoolExecutor() as pool:\n    results = list(pool.map(str.upper, [\"a\", \"b\"]))",
  },
  {
    id: "advanced-typing",
    topic: "Advanced typing",
    questions: [
      "what are generics in python typing",
      "what is typevar",
      "what is a protocol in typing",
      "how do i type check my code",
      "what is mypy",
      "what is optional and union typing",
    ],
    answer:
      "typing lets you express intent precisely: TypeVar and Generic for reusable containers, Protocol for structural (duck) typing, Literal and TypedDict for exact shapes, and X | None for optional values. Run mypy or pyright to catch mismatches before runtime — types are hints, never enforced by Python itself.",
    code: "from typing import Protocol, TypeVar, Generic\n\nT = TypeVar(\"T\")\n\nclass Repo(Generic[T]):\n    def __init__(self) -> None:\n        self.items: list[T] = []\n\nclass Closeable(Protocol):\n    def close(self) -> None: ...",
  },
  {
    id: "memory-internals",
    topic: "Python internals and memory",
    questions: [
      "how does python manage memory",
      "what is garbage collection in python",
      "what is reference counting",
      "what is the difference between is and ==",
      "what are cpython bytecode and the interpreter",
      "what is a weak reference",
    ],
    answer:
      "CPython frees objects by reference counting, with a cycle collector for objects that reference each other. is compares identity (same object), == compares value. Source is compiled to bytecode run by the interpreter; the dis module lets you inspect it, and __slots__ or generators cut memory in hot paths.",
    code: "import sys, dis\n\nx = [1, 2, 3]\nprint(sys.getrefcount(x))\ndis.dis(\"a = 1 + 2\")\n\nclass Point:\n    __slots__ = (\"x\", \"y\")",
  },
  {
    id: "security-best-practices",
    topic: "Secure and production-ready Python",
    questions: [
      "how do i keep api keys safe in python",
      "how do i handle secrets and environment variables",
      "how do i log properly in python",
      "what are python best practices for production",
      "how do i validate user input safely",
      "why is eval dangerous",
    ],
    answer:
      "Keep secrets in environment variables (os.environ) or a .env file that is gitignored, never in source. Use the logging module instead of print, validate input with pydantic or explicit checks, use parameterised SQL queries, and avoid eval/exec on untrusted data. Pin dependencies and scan them with pip-audit.",
    code: "import os, logging\n\nlogging.basicConfig(level=logging.INFO)\nlog = logging.getLogger(__name__)\n\nAPI_KEY = os.environ[\"API_KEY\"]  # fails loudly if missing\nlog.info(\"starting up\")\n\ncur.execute(\"SELECT * FROM users WHERE id = ?\", (user_id,))  # never f-strings",
  },
  {
    id: "args-kwargs",
    topic: "*args and **kwargs",
    questions: [
      "what is *args and **kwargs",
      "how do i accept any number of arguments",
      "what does the star mean in a function definition",
      "how do i unpack arguments into a function",
      "what are variable length arguments",
      "difference between args and kwargs",
    ],
    answer:
      "*args collects extra positional arguments into a tuple and **kwargs collects extra keyword arguments into a dict. The same stars unpack a list or dict back into a call. Use them for flexible wrappers and pass-through functions.",
    code: "def report(title, *args, **kwargs):\n    print(title, args, kwargs)\n\nreport(\"totals\", 1, 2, 3, unit=\"kg\")\n\nvalues = [1, 2, 3]\noptions = {\"unit\": \"kg\"}\nreport(\"totals\", *values, **options)",
  },
  {
    id: "polymorphism",
    topic: "Polymorphism and duck typing",
    questions: [
      "what is polymorphism",
      "what is duck typing in python",
      "how does method overriding work",
      "can python do method overloading",
      "what is an abstract base class",
      "how do different classes share the same interface",
    ],
    answer:
      "Polymorphism means different objects respond to the same method call in their own way. Python leans on duck typing: if an object has the method, it works, no shared base class required. Override a method in a subclass to change behaviour, and use abc.ABC to declare a required interface. Python has no true overloading; use default args or functools.singledispatch.",
    code: "from abc import ABC, abstractmethod\n\nclass Shape(ABC):\n    @abstractmethod\n    def area(self): ...\n\nclass Square(Shape):\n    def __init__(self, s): self.s = s\n    def area(self): return self.s ** 2\n\nfor shape in [Square(2), Square(3)]:\n    print(shape.area())",
  },
  {
    id: "regex",
    topic: "Regular expressions",
    questions: [
      "how to use regex in python",
      "what is the re module",
      "how do i match a pattern in a string",
      "how do i extract emails or numbers from text",
      "how do i use findall and sub",
      "how do i search text with a pattern",
    ],
    answer:
      "The re module handles patterns: re.search finds the first match, re.findall returns all matches, re.sub replaces them, and re.match anchors at the start. Use raw strings (r\"...\") for patterns and groups () to capture parts. Compile a pattern with re.compile when reusing it.",
    code: "import re\n\ntext = \"call 555-1234 or 555-9876\"\nprint(re.findall(r\"\\d{3}-\\d{4}\", text))\nprint(re.sub(r\"\\d\", \"#\", text))\n\nm = re.search(r\"(\\w+)@(\\w+)\\.com\", \"me@example.com\")\nif m:\n    print(m.group(1), m.group(2))",
  },
  {
    id: "docstrings",
    topic: "Docstrings and documentation",
    questions: [
      "what is a docstring",
      "how do i document a function in python",
      "how does help() work",
      "what is __doc__",
      "what docstring style should i use",
      "how do i add comments and documentation",
    ],
    answer:
      "A docstring is a string literal placed as the first statement in a module, class, or function; it is stored in __doc__ and shown by help(). Use triple quotes, a one-line summary, then details about arguments and return value. Google or NumPy style are common, and tools like Sphinx and pydoc build docs from them.",
    code: "def area(width: float, height: float) -> float:\n    \"\"\"Return the area of a rectangle.\n\n    Args:\n        width: Width in metres.\n        height: Height in metres.\n    Returns:\n        The area in square metres.\n    \"\"\"\n    return width * height\n\nhelp(area)",
  },
  {
    id: "pickle-serialization",
    topic: "Pickle and serialisation",
    questions: [
      "what is pickle",
      "how do i save a python object to a file",
      "how do i serialise data in python",
      "pickle vs json which should i use",
      "how do i load a saved object back",
      "is pickle safe",
    ],
    answer:
      "pickle converts Python objects to bytes and back, so you can save almost any object to disk. Use pickle.dump/load with binary file modes. Prefer json for data shared with other languages or untrusted sources — never unpickle data you did not create, since it can execute arbitrary code.",
    code: "import pickle\n\ndata = {\"scores\": [1, 2, 3], \"name\": \"deck\"}\nwith open(\"data.pkl\", \"wb\") as f:\n    pickle.dump(data, f)\n\nwith open(\"data.pkl\", \"rb\") as f:\n    print(pickle.load(f))",
  },
  {
    id: "enumerate-zip",
    topic: "enumerate, zip and looping helpers",
    questions: [
      "what is enumerate",
      "how does zip work",
      "how do i get the index while looping",
      "how do i loop over two lists at once",
      "how do i unzip a list of pairs",
      "what are useful builtins for loops",
    ],
    answer:
      "enumerate(iterable, start=0) yields (index, item) pairs so you don't track a counter. zip(a, b) pairs items from several iterables and stops at the shortest; zip(*pairs) unzips them again. Combine with reversed(), sorted() and itertools for most looping needs.",
    code: "names = [\"ana\", \"bo\"]\nscores = [91, 84]\n\nfor i, name in enumerate(names, start=1):\n    print(i, name)\n\nfor name, score in zip(names, scores):\n    print(name, score)\n\npairs = list(zip(names, scores))\nback_names, back_scores = zip(*pairs)",
  },
  {
    id: "none-truthiness",
    topic: "None, truthiness and equality",
    questions: [
      "what is none in python",
      "how do i check for none",
      "what is the difference between none false and 0",
      "what values are falsy in python",
      "why use is none instead of == none",
      "what does a function return by default",
    ],
    answer:
      "None is Python's single 'no value' object and is what a function returns when it has no return statement. Check it with `is None` / `is not None` because identity is exact. Falsy values include None, False, 0, 0.0, \"\", [], {}, set() — everything else is truthy, so None, False and 0 are distinct even though all are falsy.",
    code: "def find(items, target):\n    for item in items:\n        if item == target:\n            return item\n    return None  # implicit anyway\n\nresult = find([], 1)\nif result is None:\n    print(\"not found\")\n\nprint(bool(0), bool(\"\"), bool([]), bool(\"0\"))",
  },
  {
    id: "shallow-deep-copy",
    topic: "Copying objects",
    questions: [
      "what is a shallow copy",
      "what is the difference between shallow and deep copy",
      "how do i copy a list properly",
      "why does changing one list change another",
      "how do i use copy.deepcopy",
      "how do i clone a nested dictionary",
    ],
    answer:
      "Assignment only makes another name for the same object. A shallow copy (list(x), x[:], copy.copy) makes a new outer container but shares the inner objects, so nested changes show in both. copy.deepcopy recursively copies everything, which is safer but slower.",
    code: "import copy\n\nrows = [[1, 2], [3, 4]]\nshallow = copy.copy(rows)\ndeep = copy.deepcopy(rows)\n\nrows[0][0] = 99\nprint(shallow[0][0])  # 99 — shared inner list\nprint(deep[0][0])     # 1  — fully independent",
  },
  {
    id: "append-extend-insert",
    topic: "Adding and removing list items",
    questions: [
      "what is the difference between append and extend",
      "how do i add items to a list",
      "when should i use insert",
      "how do i remove an item from a list",
      "what is the difference between pop remove and del",
      "how do i join two lists",
    ],
    answer:
      "append adds one item (a list appended stays nested); extend adds every item of an iterable; insert(i, x) places an item at a position. To remove: remove(value) deletes the first match, pop(i) removes and returns by index, del removes by index or slice, and clear() empties the list. a + b makes a new joined list.",
    code: "a = [1, 2]\na.append([3, 4])   # [1, 2, [3, 4]]\na.pop()\na.extend([3, 4])   # [1, 2, 3, 4]\na.insert(0, 0)     # [0, 1, 2, 3, 4]\na.remove(3)\ndel a[0]\nprint(a + [9])",
  },
  {
    id: "global-nonlocal",
    topic: "global and nonlocal keywords",
    questions: [
      "what is the global keyword",
      "what does nonlocal do",
      "how do i modify a variable outside a function",
      "why do i get unboundlocalerror",
      "what is the legb rule",
      "should i use global variables",
    ],
    answer:
      "Python resolves names Local → Enclosing → Global → Builtin (LEGB). Assigning to a name inside a function makes it local, which is why reading it first raises UnboundLocalError. `global x` rebinds a module-level name and `nonlocal x` rebinds one in an enclosing function. Prefer returning values or using a class over global state.",
    code: "count = 0\n\ndef bump():\n    global count\n    count += 1\n\ndef outer():\n    total = 0\n    def inner():\n        nonlocal total\n        total += 1\n    inner()\n    return total",
  },
  {
    id: "timing-code",
    topic: "Timing and measuring code",
    questions: [
      "how do i measure execution time",
      "how long does my function take to run",
      "how do i use timeit",
      "how do i benchmark python code",
      "how do i time a block of code",
      "what is perf_counter",
    ],
    answer:
      "For a quick wall-clock measurement use time.perf_counter() around the block. For small snippets use timeit, which runs them many times and reports the best result. For whole programs, profile with cProfile to find where the time actually goes before optimising.",
    code: "import time, timeit\n\nstart = time.perf_counter()\nsum(range(1_000_000))\nprint(f\"{time.perf_counter() - start:.4f}s\")\n\nprint(timeit.timeit(\"sum(range(1000))\", number=10_000))",
  },
  {
    id: "merge-dicts",
    topic: "Merging and updating dictionaries",
    questions: [
      "how do i merge two dictionaries",
      "how do i combine dicts in python",
      "what does the pipe operator do with dicts",
      "how do i update a dictionary with another",
      "how do i add default values to a dict",
      "what is setdefault and defaultdict",
    ],
    answer:
      "In Python 3.9+ use a | b to merge into a new dict (right side wins) and a |= b to merge in place; {**a, **b} works on older versions. a.update(b) mutates a. Use setdefault or collections.defaultdict when you want a value created automatically for missing keys.",
    code: "a = {\"x\": 1, \"y\": 2}\nb = {\"y\": 9, \"z\": 3}\n\nprint(a | b)        # {'x': 1, 'y': 9, 'z': 3}\nprint({**a, **b})\na.update(b)\n\nfrom collections import defaultdict\ncounts = defaultdict(int)\ncounts[\"hits\"] += 1",
  },
];

export const kbTopics = Array.from(new Set(knowledgeBase.map((e) => e.topic)));

