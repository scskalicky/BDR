const practice_stim = [{
    "s1": "Alex went to a restaurant with his girlfriend and ordered an extremely expensive dish called \"A gourmet's dream\" hoping it would be delicious.",
    "s2": "When the waiter arrived with his order, it turned out that the dish was awfully bland and cold.",
    "s3": "Alex said to his girlfriend:",
    "full_context": "Alex went to a restaurant with his girlfriend and ordered an extremely expensive dish called \"A gourmet's dream\" hoping it would be delicious.When the waiter arrived with his order, it turned out that the dish was awfully bland and cold. Alex said to his girlfriend:",
    "tf_question": "Alex thinks the dish is delicious.",
    "t1": "A gourmet's dream",
    "t2": "is an adequate name",
    "t3": "for this exquisite dish!",
    "condition": "ironic criticism",
    "list": "Practice",
    "tf_question_time": 1800,
    "edt_question_time": 1500,
    "t1_time": 1200,
    "t2_time": 1600,
    "t3_time": 1600,
    "Question": "Alex thinks the dish is delicious.",
    "CorrectResponse": "z",
    "item": "P1",
    data: {item: 'P1', condition: 'ironic criticism'}
  },
  {
    "s1": "Christie was going to take an important exam for which she was studying really hard.",
    "s2": "However, on the day of the exam she overslept and didn't manage to make it to the exam on time.",
    "s3": "Christie said to her friend:",
    "full_context": "Christie was going to take an important exam for which she was studying really hard.However, on the day of the exam she overslept and didn't manage to make it to the exam on time. Christie said to her friend:",
    "tf_question": "Christie thinks it's good that she overslept.",
    "t1": "I'm absolutely",
    "t2": "the worst sleepyhead",
    "t3": "you could imagine!",
    "condition": "literal criticism",
    "list": "Practice",
    "tf_question_time": 1800,
    "edt_question_time": 1500,
    "t1_time": 800,
    "t2_time": 1200,
    "t3_time": 1200,
    "Question": "Christie thinks it's good that she overslept.",
    "CorrectResponse": "z",
    "item": "P2",
    data: {item: 'P2', condition: 'literal criticism'}
  },
  {
    "s1": "Eddie has been working really hard upon his M.A.thesis.",
    "s2": "One day before the submission deadline, his computer broke down and all files were missing, leaving him with no back-up copy.",
    "s3": "Eddie said to his friend:",
    "full_context": "Eddie has been working really hard upon his M.A.thesis. One day before the submission deadline, his computer broke down and all files were missing, leaving him with no back-up copy.  Eddie said to his friend:",
    "tf_question": "Eddie thinks he was stupid not to make a back-up copy of the file.",
    "t1": "Only clever people like me",
    "t2": "don't make back-up copies",
    "t3": "of important files!",
    "condition": "ironic criticism",
    "list": "Practice",
    "tf_question_time": 1800,
    "edt_question_time": 1500,
    "t1_time": 2000,
    "t2_time": 1600,
    "t3_time": 1200,
    "Question": "Eddie thinks he was stupid not to make a back-up copy of the file.",
    "CorrectResponse": "{/}",
    "item": "P3",
    data: {item: 'P3', condition: 'ironic criticism'}
  },
  {
    "s1": "Frank has been known for his lack of organisational skills.",
    "s2": "However, once he was appointed as a project manager and he handled it wonderfully, leading his team to success.",
    "s3": "His friend said to him:",
    "full_context": "Frank has been known for his lack of organisational skills.However, once he was appointed as a project manager and he handled it wonderfully, leading his team to success. His friend said to him:",
    "tf_question": "Frank's friend thinks he handled the project well.",
    "t1": "You're really",
    "t2": "the worst",
    "t3": "project manager ever!",
    "condition": "ironic praise",
    "list": "Practice",
    "tf_question_time": 1800,
    "edt_question_time": 1500,
    "t1_time": 800,
    "t2_time": 800,
    "t3_time": 1200,
    "Question": "Frank's friend thinks he handled the project well.",
    "CorrectResponse": "{/}",
    "item": "P4",
    data: {item: 'P4', condition: 'ironic praise'}
  },
  {
    "s1": "Lisa, known for her lack of good taste, recommended a hairdresser to her friend, Susan.",
    "s2": "Susan expected the hairdresser to be rather untalented, but actually he made her hair look wonderfully.",
    "s3": "Susan said to Lisa:",
    "full_context": "Lisa, known for her lack of good taste, recommended a hairdresser to her friend, Susan. Susan expected the hairdresser to be rather untalented, but actually he made her hair look wonderfully. Susan said to Lisa:",
    "tf_question": "Susan was disappointed with the hairdresser.",
    "t1": "This hairdresser",
    "t2": "you recommended",
    "t3": "is a genius!",
    "condition": "literal praise",
    "list": "Practice",
    "tf_question_time": 1800,
    "edt_question_time": 1500,
    "t1_time": 800,
    "t2_time": 800,
    "t3_time": 1200,
    "Question": "Susan was disappointed with the hairdresser.",
    "CorrectResponse": "z",
    "item": "P5",
    data: {item: 'P5', condition: 'literal praise'}
  },
  {
    "s1": "Mike has never been good at maths at school.",
    "s2": "However, when he took part in the national championships in arithmetics, he won the first place.",
    "s3": "His teacher told him:",
    "full_context": "Mike has never been good at maths at school. However, when he took part in the national championships in arithmetics, he won the first place. His teacher told him:",
    "tf_question": "Mike's teacher thinks he is skilled at maths.",
    "t1": "I didn't know",
    "t2": "you were",
    "t3": "a mathematical genius!",
    "condition": "literal praise",
    "list": "Practice",
    "tf_question_time": 1800,
    "edt_question_time": 1500,
    "t1_time": 1200,
    "t2_time": 800,
    "t3_time": 1200,
    "Question": "Mike's teacher thinks he is skilled at maths.",
    "CorrectResponse": "{/}",
    "item": "P6",
    data: {item: 'P6', condition: 'literal praise'}
  },
  {
    "s1": "Rick's friend invited him to a rock concert but Rick didn't want to go saying the band is lousy.",
    "s2": "Quite unexpectedly, the band gave an amazing performance and Rick enjoyed the concert immensely.",
    "s3": "After the concert he said to his friend:",
    "full_context": "Rick's friend invited him to a rock concert but Rick didn't want to go saying the band is lousy.Quite unexpectedly, the band gave an amazing performance and Rick enjoyed the concert immensely.After the concert he said to his friend:",
    "tf_question": "Rick thinks the concert was poor.",
    "t1": "See, I told you",
    "t2": "this band",
    "t3": "was lousy.",
    "condition": "ironic praise",
    "list": "Practice",
    "tf_question_time": 1800,
    "edt_question_time": 1500,
    "t1_time": 1600,
    "t2_time": 800,
    "t3_time": 800,
    "Question": "Rick thinks the concert was poor.",
    "CorrectResponse": "z",
    "item": "P7",
    data: {item: 'P7', condition: 'ironic praise'}
  },
  {
    "s1": "Sheila was going to introduce her new boyfriend to her parents.",
    "s2": "Before they met she told them that he was an intelligent and cultural man, but when they finally met, her boyfriend just kept telling obscene stories and crude jokes at dinner.",
    "s3": "Sheila's parents said to her:",
    "full_context": "Sheila was going to introduce her new boyfriend to her parents. Before they met she told them that he was an intelligent and cultural man, but when they finally met, her boyfriend just kept telling obscene stories and crude jokes at dinner.Sheila's parents said to her:",
    "tf_question": "Sheila's parents don't like her new boyfriend.",
    "t1": "Your boyfriend",
    "t2": "is the most vulgar man",
    "t3": "we've ever met.",
    "condition": "literal criticism",
    "list": "Practice",
    "tf_question_time": 1800,
    "edt_question_time": 1500,
    "t1_time": 800,
    "t2_time": 2000,
    "t3_time": 1200,
    "Question": "Sheila's parents don't like her new boyfriend.",
    "CorrectResponse": "{/}",
    "item": "P8",
    data: {item: 'P8', condition: 'literal criticism'}
  }]