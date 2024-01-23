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
        "votes": 1082
    },
    {
        "pollId": 2,
        "pollName": "Frequency",
        "question": "When did you last Watch Football?",
        "options": [
            {
                "optionId": 1,
                "optionText": "<1 Month Ago",
                "votes": 77
            },
            {
                "optionId": 2,
                "optionText": "1-3 Months Ago",
                "votes": 33
            },
            {
                "optionId": 3,
                "optionText": "3-6 Months Ago",
                "votes": 22
            },
            {
                "optionId": 4,
                "optionText": "More than 6 Months",
                "votes": 11
            }
        ],
        "votes": 144
    },
    {
        "pollId": 3,
        "pollName": "Greatest of all Time",
        "question": "Who is the Best Footballer?",
        "options": [
            {
                "optionId": 1,
                "optionText": "Pele",
                "votes": 228
            },
            {
                "optionId": 2,
                "optionText": "Lionel Messi",
                "votes": 744
            },
            {
                "optionId": 3,
                "optionText": "Cristiano Ronaldo",
                "votes": 332
            },
            {
                "optionId": 4,
                "optionText": "You",
                "votes": 218
            },
            {
                "optionId": 5,
                "optionText": "David Beckham",
                "votes": 28
            }
        ],
        "votes": 1578
    },
    {
        "pollId": 4,
        "pollName": "Location",
        "question": "Where do you most Enjoy Football?",
        "options": [
            {
                "optionId": 1,
                "optionText": "Television",
                "votes": 281
            },
            {
                "optionId": 2,
                "optionText": "Internet Streaming",
                "votes": 741
            },
            {
                "optionId": 3,
                "optionText": "In Person",
                "votes": 321
            }
        ],
        "votes": 1343
    },
    {
        "pollId": 5,
        "pollName": "And Finally",
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