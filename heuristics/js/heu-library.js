const heuristics = {
    "Recognition heuristic": {
        "text": "If you recognize one of two alternatives, you will be likely to infer that the recognized option has the higher value on the criterion."
    },
    "Fluency heuristic": {
        "text": "If one alternative is recognized faster than another, infer that it has the higher value on the criterion."
    },
    "Take the best": {
        "text": "Infer which of two alternatives has the higher value by (a) searching through cues in order of validity, (b) stopping the search as soon as a cue discriminates, (c) choosing the alternative this cue favors."
    },
    "Tallying": {
        "text": "To estimate a criterion, do not estimate weights but simply count the number of favoring cues."
    },
    "Satisficing": {
        "text": "Search through alternatives, and choose the first one that exceeds your aspiration level."
    },
    "Equality heuristic": {
        "text": "Allocate resources equally to each of N alternatives."
    },
    "Default heuristic": {
        "text": "If there is a default, do nothing about it."
    },
    "Tit-for-tat": {
        "text": "Cooperate first, keep a memory of Size 1, and then imitate your partner's last behavior."
    },
    "Imitate the majority": {
        "text": "Look at a majority of people in your peer group, and imitate their behavior."
    },
    "Imitate success": {
        "text": "Look for the most successful person and imitate his or her behavior."
    },
    "Affective heuristic": {
        "text": "People make decisions that are heavily influenced by their current emotions."
    }
};  

const question = {
    "No1": {
        "Prompt": "Which is a more likely cause of death in the United States: being killed by falling airplane parts or by a shark?",
        "A1": "Falling airplane parts",
        "A2": "Shark attack",
        "Cor": "A1",
        "Exp": "Falling airplane parts is the more logical answer!\nAlthough most people think shark attacks are more probable than death from falling airplane parts, the chances of dying from falling airplane parts are 30 times greater than the chances of being killed by a shark. However, shark attacks certainly receive more publicity than do deaths from falling airplane parts, and they are far easier to imagine. In this case, availability is a misleading indicator of frequency.",
        "link": "quiz-mc.html?Num=2",
    },
    "No2": {
        "Prompt": "Sunny is a vegan who graduated from Berkeley. She adopted two orphan children from Mexico, who she raised on her kale farm in Northern California - both of whom joined the peace corps after college. Sunny attends a Donald Trump rally. There are 10 protestors and 1000 Trump supporters at the rally. What are the odds that Sunny is a Trump supporter? (Representativeness heuristics)",
        "A1": "Sunny is likely to be a Trump supporter.",
        "A2": "Sunny is not likely to be a Trump supporte.",
        "Cor": "A1",
        "Exp": "The representativeness heuristic is a mental shortcut that we use when estimating probabilities. When we're trying to assess how likely a certain event is, we often make our decision by assessing how similar it is to an existing mental prototype. Here, according to probability theory, it's highly likely that Sunny is going to be a Trump supporter.",
        "link": "quiz-mc.html?Num=3",
    },
    "No3": {
        "Prompt": "Which city has the larger population?",
        "A1": "Albuquerque",
        "A2": "Atlanta",
        "Cor": "A1",
        "Exp": "If you have no idea where Albuquerque is and chose Atlanta, it is likely that you used the recognition heuristic, which means that if you recognize one of two alternatives, you will be likely to infer that the recognized option has the higher value on the criterion. In this case, because you know Atlanta, you would choose it.",
        "link": "quiz-mc.html?Num=4",
    },
    "No4": {
        "Prompt": "A certain town has one larger hospital (in which 45 babies are born each day) and one smaller hospital (in which 15 babies are born each day). For a period of 1 year, each hospital recorded the days on which more than 60% of the babies born were boys. Which hospital recorded more such days?",
        "A1": "The larger hospital",
        "A2": "The smaller hospital",
        "Cor": "A2",
        "Exp": "If you are familiar with the effect of sample size in sampling distributions, then you would know that as the sample size gets larger, there will be less variation at the end and there the distribution will be closer to a normal distribution. Therefore, the smaller hospital has a higher chance of having more days with 60% boys.",
        "link": "quiz-mc.html?Num=5",
    },
    "No5": {
        "Prompt": "Quick question: A bat and a ball together cost $1.10. The bat costs $1.00 more than the ball. How much does the ball cost? No pen or paper allowed.",
        "entry": "1.05",
        "Exp": "The answer should be $1.05 for the bat and $0.05 for the ball, but when people are using system 2 (where most of the heuristics are processed) to process questions like this, it's easy to say $1 and $0.1.",
        "link": "quiz-mc.html?Num=6",
    },
    "No6": {
        "Prompt": "Here is a list of names for stocks. Just by looking at the names, please predict and rank the performance of each stock. What best describes your ranking (top > least)? \nBarnings\nCreaumy\nYoalumnix\nVander\nHillard\nXagibdan",
        "A1": "Vander/Hillard/Barnings > Creaumy/Yoalumnix/Xagibdan",
        "A2": "Creaumy/Yoalumnix/Xagibdan > Vander/Hillard/Barnings",
        "Cor": "A1",
        "Exp": "You might notice that the names are either very complicated or relatively simple, and the fluency heuristics tells that people like to prefer things that are easily pronounceable and fluent. Therefore, you would process the names that are more fluent.",
        "link": "over",
    },
}