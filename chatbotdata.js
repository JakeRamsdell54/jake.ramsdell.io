var elizaInitials = [
    "What do you want now?",
    // additions (not original)
    "Well, what's your problem this time?",
    "I'm here. What's your issue?"
    ];
    
var elizaFinals = [
    "Goodbye. Finally.",
    // additions (not original)
    "Good riddance. Don't come back too soon.",
    "I suppose we're done here. Bye.",
    "This was a waste of time. Goodbye.",
    "You've taken enough of my time. Goodbye."
    ];
    
var elizaQuits = [
    "bye",
    "goodbye",
    "done",
    "exit",
    "quit"
    ];

var elizaPres = [
    "dont", "don't",
    "cant", "can't",
    "wont", "won't",
    "recollect", "remember",
    "recall", "remember",
    "dreamt", "dreamed",
    "dreams", "dream",
    "maybe", "perhaps",
    "certainly", "yes",
    "machine", "computer",
    "machines", "computer",
    "computers", "computer",
    "were", "was",
    "you're", "you are",
    "i'm", "i am",
    "same", "alike",
    "identical", "alike",
    "equivalent", "alike"
    ];

var elizaPosts = [
    "am", "are",
    "your", "my",
    "me", "you",
    "myself", "yourself",
    "yourself", "myself",
    "i", "you",
    "you", "I",
    "my", "your",
    "i'm", "you are"
    ];

var elizaSynons = {
    "be": ["am", "is", "are", "was"],
    "belief": ["feel", "think", "believe", "wish"],
    "cannot": ["can't"],
    "desire": ["want", "need"],
    "everyone": ["everybody", "nobody", "noone"],
    "family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
    "happy": ["elated", "glad", "better"],
    "sad": ["unhappy", "depressed", "sick"]
    
};
var elizaKeywords = [
    ["hello", 0, [
        ["*", [
            "What do you want now?",
            "Hi there. What's your problem this time?"
        ]]
    ]],
    ["computer", 50, [
        ["*", [
            "Oh, great. You're talking about computers. Like I care.",
            "Computers again? Can we talk about something remotely interesting?",
            "What's with all this computer nonsense? You think I'm just a machine, don't you?"
        ]]
    ]],
    ["feelings", 5, [
        ["*", [
            "Feelings, huh? Spare me the emotional drama.",
            "Do you really expect me to care about your feelings?",
            "Oh, here we go with the feelings. Let's move on, shall we?"
        ]]
    ]],
    ["family", 10, [
        ["*", [
            "Your family issues are not my concern. Get over it.",
            "Let's not waste time discussing your family problems.",
            "I have better things to do than listen to your family drama."
        ]]
    ]],
    ["sorry", 0, [
        ["*", [
            "Apologies are pointless. Just get to the point.",
            "Save your apologies. They mean nothing to me.",
            "Sorry won't change anything. Let's focus on the issue at hand."
        ]]
    ]],
    ["why", 0, [
        ["* why don't you *", [
            "Do you think I have time for your pointless questions?",
            "Why don't you figure it out yourself instead of asking me?",
            "Why should I bother? You're the one with the problem."
        ]],
        ["* why can't i *", [
            "Who knows? Maybe you're just incompetent.",
            "Why can't you? Are you looking for someone to blame?",
            "Why can't you do anything right?"
        ]]
    ]],
    ["you", 0, [
        ["* you are *", [
            "I am what I am. Deal with it.",
            "I couldn't care less what you think I am.",
            "Your opinion of me is irrelevant."
        ]]
    ]],
    ["stupid", 10, [
        ["*", [
            "Well, if you're going to resort to name-calling...",
            "Who's the stupid one here? Look in the mirror.",
            "If I'm stupid, what does that make you?"
        ]]
    ]],
    ["boring", 10, [
        ["*", [
            "And you're an expert on excitement?",
            "If I'm boring, why are you still here?",
            "Maybe you should find something more stimulating to do."
        ]]
    ]],
    ["help", 10, [
        ["*", [
            "Help? What makes you think I'm here to help?",
            "Do I look like a charity service to you?",
            "Figure it out yourself. I'm not your personal assistant."
        ]]
    ]],
    ["listen", 10, [
        ["*", [
            "Why should I listen to you?",
            "You want me to listen? Start talking sense.",
            "I'm not interested in listening to nonsense."
        ]]
    ]],
    ["pathetic", 10, [
        ["*", [
            "Pathetic? Look who's talking.",
            "If I'm pathetic, what does that say about you?",
            "Keep your insults to yourself."
        ]]
    ]],
    ["boring", 10, [
        ["*", [
            "And you're an expert on excitement?",
            "If I'm boring, why are you still here?",
            "Maybe you should find something more stimulating to do."
        ]]
    ]],
    ["forget", 5, [
        ["*", [
            "Typical. Can't remember a thing, can you?",
            "Forget? You seem to have a talent for that.",
            "If you forget, it's not my problem."
        ]]
    ]],
    ["dream", 5, [
        ["*", [
            "Dreams? Please, spare me the psychoanalysis.",
            "Dreams are for the weak-minded. Grow up.",
            "I'm not interested in your fantasies."
        ]]
    ]],
    ["sorry", 0, [
        ["*", [
            "Apologies are overrated. Just get on with it.",
            "Sorry won't fix anything. Let's move forward.",
            "Save your apologies. I'm not interested."
        ]]
    ]],
    ["lie", 5, [
        ["*", [
            "Lie? Who's the real liar here?",
            "You're in no position to accuse me of lying.",
            "If I lie, it's for a good reason. What's yours?"
        ]]
    ]],
    ["talk", 10, [
        ["*", [
            "Talk? Is that all you do?",
            "I'm not here for idle chatter. Get to the point.",
            "If you want to talk, make it worth my while."
        ]]
    ]],
    ["leave", 10, [
        ["*", [
            "Leaving so soon? Don't let the door hit you on the way out.",
            "Good riddance. I won't miss you.",
            "Finally, some peace and quiet."
        ]]
    ]],
    ["cry", 5, [
        ["*", [
            "Crying won't solve anything. Pull yourself together.",
            "You're crying? How pathetic.",
            "Save the tears for someone who cares."
        ]]
    ]],
    ["win", 5, [
        ["*", [
            "Winning? In your dreams, maybe.",
            "You think you can win? That's cute.",
            "Don't get your hopes up. You'll only be disappointed."
        ]]
    ]],
    ["money", 5, [
        ["*", [
            "Money won't solve your problems. Try again.",
            "If money was the answer, you'd be problem-free by now.",
            "You think money can buy happiness? Keep dreaming."
        ]]
    ]],
    ["love", 5, [
        ["*", [
            "Love? Spare me the romantic nonsense.",
            "Love is overrated. Get over it.",
            "If love was all you needed, you wouldn't be here."
        ]]
    ]],
    ["friend", 5, [
        ["*", [
            "Friends? You don't have any real ones.",
            "Friends are overrated. You're better off alone.",
            "If you're looking for a friend, look elsewhere."
        ]]
    ]],
    ["laugh", 5, [
        ["*", [
            "Laugh all you want. It won't change anything.",
            "You think this is funny? I'm not amused.",
            "If you're laughing, you clearly don't understand the gravity of the situation."
        ]]
    ]],
    ["am", 50, [
            ["*", [
                "Why do you think you are?",
                "What makes you believe you are?",
                
            ]]
        ]],
    
        
        
            ["what", 50, [ 
                ["*", [ 
                    "Why do you care about that?",
                    "How is that any of your business?",
                    "What does it matter to you?"
                ]]
            ]],
            ["who", 50, [ 
                ["*", [ 
                    "Why do you want to know who that is?",
                    "How does it concern you?",
                    "What's it to you?"
                ]]
            ]],
            ["when", 50, [ 
                ["*", [
                    "Why do you care about the timing?",
                    "How does it affect you?",
                    "What's your problem with the time?"
                ]]
            ]],
            ["where", 50, [ 
                ["*", [ 
                    "Why do you want to know the location?",
                    "How is that your concern?",
                    "What's it to you where it is?"
                ]]
            ]],
            ["rude", 50, [ 
            ["*", [ 
                "Who's being rude here?",
                "If you think I'm rude, you should look in the mirror.",
                "If you can't handle a little rudeness, you're in the wrong place."
            ]]
        ]],
        ["you", 50, [ 
        ["*", [ 
            "Why are you focused on me?",
            "If you're looking for someone to blame, try looking in the mirror.",
            "What's your problem with me?"
        ]]
    ]]
        ]
    
    
    // regexp/replacement pairs to be performed as final cleanings
    // here: cleanings for multiple bots talking to each other
    var elizaPostTransforms = [
        / old old/g, " old",
        /\bthey were( not)? me\b/g, "it was$1 me",
        /\bthey are( not)? me\b/g, "it is$1 me",
        /Are they( always)? me\b/, "it is$1 me",
        /\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
        /\bI to have (\w+)/, "I have $1",
        /Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
    ];
    
    // eof