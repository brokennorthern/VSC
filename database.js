let polls = [
    {
        "pollId": 1,
        "pollName": "Premier League Winner",
        "question": "Who will win the Premier League?",
        "options": [
            {
                "optionId": 1,
                "optionText": "Manchester City",
                "votes": 128
            },
            {
                "optionId": 2,
                "optionText": "Arsenal",
                "votes": 422
            },
            {
                "optionId": 3,
                "optionText": "Liverpool",
                "votes": 532
            }
        ],
        "votes": 134
    },
    {
        "pollId": 2,
        "pollName": "Premier League Winner",
        "question": "Who will win the Premier League?",
        "options": [
            {
                "optionId": 1,
                "optionText": "Manchester City",
                "votes": 28
            },
            {
                "optionId": 1,
                "optionText": "Manchester City",
                "votes": 28
            },
            {
                "optionId": 2,
                "optionText": "Arsenal",
                "votes": 74
            },
            {
                "optionId": 3,
                "optionText": "Liverpool",
                "votes": 32
            }
        ],
        "votes": 134
    },
    {
        "pollId": 3,
        "pollName": "Premier League Winner",
        "question": "Who will win the Premier League?",
        "options": [
            {
                "optionId": 1,
                "optionText": "Manchester City",
                "votes": 28
            },
            {
                "optionId": 2,
                "optionText": "Arsenal",
                "votes": 74
            },
            {
                "optionId": 3,
                "optionText": "Liverpool",
                "votes": 32
            },
            {
                "optionId": 1,
                "optionText": "Manchester City",
                "votes": 28
            },
            {
                "optionId": 1,
                "optionText": "Manchester City",
                "votes": 28
            }
        ],
        "votes": 134
    },
    {
        "pollId": 4,
        "pollName": "Premier League Winner",
        "question": "Who will win the Premier League?",
        "options": [
            {
                "optionId": 1,
                "optionText": "Manchester City",
                "votes": 28
            },
            {
                "optionId": 2,
                "optionText": "Arsenal",
                "votes": 74
            },
            {
                "optionId": 3,
                "optionText": "Liverpool",
                "votes": 32
            }
        ],
        "votes": 134
    },
    {
        "pollId": 5,
        "pollName": "Love the Game?",
        "question": "Do you Love Football?",
        "options": [
            {
                "optionId": 1,
                "optionText": "Yes",
                "votes": 121
            },
            {
                "optionId": 2,
                "optionText": "No",
                "votes": 3
            }
        ],
        "votes": 124
    }

]

function getPoll(id){
    return polls.find((poll) => poll.pollId === id)
}

function votePoll(poll){
    
    const id = +poll.pollID
    const vote = +poll.voteID

    polls[id - 1].options[vote].votes++
    polls[id - 1].votes++

}

exports.getPoll = getPoll;
exports.votePoll = votePoll;