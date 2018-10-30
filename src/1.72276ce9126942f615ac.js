(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[1],{9:function(n,e){n.exports='# Markdown Syntax\n\n## Character Formatting\n\nYou should read this, it\'s **very important**.\nYou _might_ want to read this.\n~~Never mind~~ - it wasn\'t _that_ important.\n\nLet\'s try a few `combinations`:\n**This text is strong, ~~this text is strong with strikethrough~~, and _this text is formatted with strong emphasis_**\n***This text is formatted with strong emphasis too.***\n\n\n## Headings\n\n# Heading 1\n## Heading 2\n### Heading 3\n#### Heading 4\n##### Heading 5\n###### Heading 6\n\nHeading 1 - Alternative Syntax\n========\n\nHeading 2 - Alternative Syntax\n--------\n\n\n## Paragraphs and Line Breaks\n\nEven though this text is written on two separate lines,\nit is parsed as a single paragraph.\n\nThis paragraph is separated from the previous paragraph\nby a blank line.\n\nThis text is parsed as a single paragraph.\nThe two trailing spaces at the end of the previous line start a new line.\\\nThe backslash character also starts a new line.\n\n\n## Thematic Breaks\n\nThe underscores on the next line create a thematic break below this paragraph.\n___\nThe minus signs below must be separated from this paragraph by a blank line.\nIf not, they are parsed as a level 2 heading.\n\n----\nThree or more asterisks also create a thematic break.\n****\n\n\n\n## Block Quotes\n\n> Use block quotes to emulate reply text.\n> This line is part of the same quote.\n\nThis line is not formatted and does not belong to the quote block.\n\n> This block spans multiple paragraphs.\n>\n> The second paragraph is grouped with the previous paragraph in the same quote block.\n> Character formatting is _also_ supported inside the **quote block**.\n\n> Quote blocks can also be nested.\n>> When you start a new line with additional > characters,\n>>> it simulates a threaded conversation.\n\n\n## Indented Code Blocks\n\nStart an indented code block following a paragraph with a blank line and at least four spaces of indentation:\n\n    This is a code block.\n\n    Blank lines between indented lines do not end the code block.\n\n    Here is some HTML:\n        <div class="footer">\n            © 2009—2017 JetBrains · All rights reserved\n        </div>\nThis line of text is not indented. It ends the code block and starts a new paragraph.\n\n\n## Fenced Code Blocks\n\nThe following code block uses syntax highlighting for Python:\n``` python\n@requires_authorization\ndef somefunc(param1=\'\', param2=0):\n    \'\'\'A docstring\'\'\'\n    if param1 > param2: # interesting\n        print \'Greater\'\n    return (param2 - param1 + 1) or None\nclass SomeClass:\n    pass\n>>> message = \'\'\'interpreter\n... prompt\'\'\'\n```\n\n## Lists\n\nThe following list **must** begin with the number 1:\n1. Only lists that start with 1 are allowed to interrupt paragraphs.\n1. Subsequent numbering is irrelevant.\n0. You can start a new line with any number as long as you use the same delimiter character.\n2) This item uses a different delimiter and starts a new ordered list, starting with the number 2.\n\nThis list can start with any number:\n\n4) The empty line means that the list does not interrupt a paragraph.\n1) The ordered list continues to increment the numbering from the previous list item.\n5) Use any number fewer than ten characters. This number is parsed as the third item in the ordered list.\n\n* Start unordered lists with -, *, or +.\n+ You don\'t even have to use the same character for each list item.\n- Pro tip: * and + require the Shift key. - doesn\'t. Format faster with the minus sign.\n  * Nest unordered list items with two spaces.\n    * Unordered lists support multiple levels of nesting.\n    \n    \n    \n## Checklists\n\nTODO:\n* [x] This item is marked as complete. The checkbox is checked.\n- [ ] This item is incomplete. The checkbox is unchecked.\n+ [ ] As with unordered lists, you can start the line with an asterisk, minus sign, or plus sign.\n    - [ ] Nest checklist items with two spaces.\n        -  [ ] Checklists support multiple levels of nesting.\n        \n        \n\n\n## Tables\n\n\nKitchen Cleanup Rotation\n\n| Month    | Assignee | Backup |\n| -------- | -------- | ------ |\n| January  | Dave     | Steve  |\n| February | Gregg    | Karen  |\n| March    | Diane    | Jorge  |\n\nHere\'s the same text with additional formatting and alternative syntax.\n+ The text in the first column is flush right.\n+ The text in the second column is centered.\n+ The Markdown is stripped down to the minimum syntax that is required to render the table.\n\nMonth | Assignee | Backup\n---:|:---:| ---\n**January** | Dave | _Steve_\n**February** | Gregg | _Karen_\n**March** | Diane | _Jorge_\n\n\n\n## Links\n\n[inline link](https://www.google.com)\n[inline link with tooltip](https://www.google.com "google")\n[reference link][1]\n\n[1]: https://www.google.com\n\n\n## Images\n\nHere\'s an image link to the logo:\n\n![logo](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "logo")\n\n\n## LaTeX\n\nThe editor converts LaTeX equations in double-dollars `$$`: $$ax^2+bx+c=0$$. All equations are rendered as block equations. If you need inline ones, you can add the prefix `\\inline`: $$\\inline p={1\\over q}$$. But it is a good practice to place big equations on separate lines:\n\n$$\nx_{1,2} = {-b\\pm\\sqrt{b^2 - 4ac} \\over 2a}.\n$$\n\nIn this case the LaTeX syntax will be highlighted in the source code. You can even add equation numbers (unfortunately there is no automatic numbering and refs support):\n\n$$\n|\\vec{A}|=\\sqrt{A_x^2 + A_y^2 + A_z^2}.\n$$(1)\n\n\n## flowchart\n\n```flow\nst=>start: Start\ne=>end\nop=>operation: My Operation\ncond=>condition: Yes or No?\n\nst->op->cond\ncond(yes)->e\ncond(no)->op\n```\n\n## sequence\n\n[Documentation for sequence](https://bramp.github.io/js-sequence-diagrams/)\n\n\n```sequence\nAlice->Bob: Hello Bob, how are you?\nNote right of Bob: Bob thinks\nBob--\x3eAlice: I am good thanks!\n```\n\n```seq\nTitle: Here is a title\nA->B: Normal line\nB--\x3eC: Dashed line\nC->>D: Open arrow\nD--\x3e>A: Dashed open arrow\n```\n\n\n## G2\n\n[Documentation for G2](http://g2.alipay.com/)\n\n```g2\nconst data = [\n    { genre: \'Sports\', sold: 275 },\n    { genre: \'Strategy\', sold: 115 },\n    { genre: \'Action\', sold: 120 },\n    { genre: \'Shooter\', sold: 350 },\n    { genre: \'Other\', sold: 150 }\n];\n\nconst chart = new G2.Chart({\n    forceFit: true,\n    container: container,\n    height : 300\n});\nchart.source(data);\nchart.interval().position(\'genre*sold\').color(\'genre\')\nchart.render();\n\nreturn chart;\n```\n\n\n## Charts\n\n[Documentation for charts](http://www.chartjs.org/docs/)\n\n### Line Chart\n\n```chart\n{\n  "type": "line",\n  "data": {\n    "labels": [\n      "January",\n      "February",\n      "March",\n      "April",\n      "May",\n      "June",\n      "July"\n    ],\n    "datasets": [\n      {\n        "label": "# of bugs",\n        "fill": false,\n        "lineTension": 0.1,\n        "backgroundColor": "rgba(75,192,192,0.4)",\n        "borderColor": "rgba(75,192,192,1)",\n        "borderCapStyle": "butt",\n        "borderDash": [],\n        "borderDashOffset": 0,\n        "borderJoinStyle": "miter",\n        "pointBorderColor": "rgba(75,192,192,1)",\n        "pointBackgroundColor": "#fff",\n        "pointBorderWidth": 1,\n        "pointHoverRadius": 5,\n        "pointHoverBackgroundColor": "rgba(75,192,192,1)",\n        "pointHoverBorderColor": "rgba(220,220,220,1)",\n        "pointHoverBorderWidth": 2,\n        "pointRadius": 1,\n        "pointHitRadius": 10,\n        "data": [\n          65,\n          59,\n          80,\n          81,\n          56,\n          55,\n          40\n        ],\n        "spanGaps": false\n      }\n    ]\n  },\n  "options": {}\n}\n```\n\n\n[Documentation for Line Chart](http://www.chartjs.org/docs/#line-chart)\n\n### Bar Chart\n\n```chart\n{\n  "type": "bar",\n  "data": {\n  "labels": [\n    "Red",\n    "Blue",\n    "Yellow",\n    "Green",\n    "Purple",\n    "Orange"\n  ],\n  "datasets": [\n    {\n    "label": "# of Votes",\n    "data": [\n      12,\n      19,\n      3,\n      5,\n      2,\n      3\n    ],\n    "backgroundColor": [\n      "rgba(255, 99, 132, 0.2)",\n      "rgba(54, 162, 235, 0.2)",\n      "rgba(255, 206, 86, 0.2)",\n      "rgba(75, 192, 192, 0.2)",\n      "rgba(153, 102, 255, 0.2)",\n      "rgba(255, 159, 64, 0.2)"\n    ],\n    "borderColor": [\n      "rgba(255,99,132,1)",\n      "rgba(54, 162, 235, 1)",\n      "rgba(255, 206, 86, 1)",\n      "rgba(75, 192, 192, 1)",\n      "rgba(153, 102, 255, 1)",\n      "rgba(255, 159, 64, 1)"\n    ],\n    "borderWidth": 1\n    }\n  ]\n  },\n  "options": {}\n}\n```\n\n\n\n\n\n## mermaid\n\n[Documentation for mermaid](https://mermaidjs.github.io/)\n\n```mermaid\n\ngraph TD\n    Start --\x3e Stop\n\n```\n\n-----\n\n\n```mermaid\n\ngraph LR\n    id1[This is the text in the box]\n\n\n```\n\n-----\n\n```mermaid\n\ngraph LR\n    id1((This is the text in the circle))\n\n\n```\n\n\n-----\n\n```mermaid\n\ngraph TB\n    c1--\x3ea2\n    subgraph one\n    a1--\x3ea2\n    end\n    subgraph two\n    b1--\x3eb2\n    end\n    subgraph three\n    c1--\x3ec2\n    end\n\n```\n\n\n\n\n-----\n\n```mermaid\n\ngantt\n    title A Gantt Diagram\n    dateFormat  YYYY-MM-DD\n    section Section\n    A task           :a1, 2014-01-01, 30d\n    Another task     :after a1  , 20d\n    section Another\n    Task in sec      :2014-01-12  , 12d\n    another task      : 24d\n\n```\n\n\n\n\n\n\n\n\n\n\n\n\n'}}]);