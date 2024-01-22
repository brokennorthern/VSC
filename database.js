const polls = [
    {
        "pollId": 1,
        "pollName": "Premier League Winner",
        "question": "Who will win the Premier League?",
        "options": [
            {
                "optionId": 1,
                "optionText": "Manchester City"
            },
            {
                "optionId": 2,
                "optionText": "Arsenal"
            },
            {
                "optionId": 3,
                "optionText": "Liverpool"
            }
        ]
    },
    {
        "pollId": 2,
        "pollName": "Premier League Winner2",
        "question": "Who will win the Premier League2?",
        "options": [
            {
                "optionId": 1,
                "optionText": "Manchester City2"
            },
            {
                "optionId": 2,
                "optionText": "Arsenal2"
            },
            {
                "optionId": 3,
                "optionText": "Liverpool2"
            }
        ]
    }

]

function getPoll(id){
    return polls.find((poll) => poll.pollId === id)
}

exports.getPoll = getPoll