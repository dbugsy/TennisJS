class TennisGame1 {
    constructor(playerOneName, playerTwoName) {
        this.playerOneScore = 0;
        this.playerTwoScore = 0;
        this.playerOneName = playerOneName;
        this.playerTwoName = playerTwoName;
    }
    wonPoint(playerName) {
        if (playerName === this.playerOneName)
            this.playerOneScore += 1;
        else
            this.playerTwoScore += 1;
    }
    getScore() {
        var score = "";
        var tempScore = 0;
        if (this.playerOneScore === this.playerTwoScore) {
            switch (this.playerOneScore) {
                case 0:
                    score = "Love-All";
                    break;
                case 1:
                    score = "Fifteen-All";
                    break;
                case 2:
                    score = "Thirty-All";
                    break;
                default:
                    score = "Deuce";
                    break;
            }
        }
        else if (this.playerOneScore >= 4 || this.playerTwoScore >= 4) {
            var minusResult = this.playerOneScore - this.playerTwoScore;
            if (minusResult === 1)
                score = "Advantage player1";
            else if (minusResult === -1)
                score = "Advantage player2";
            else if (minusResult >= 2)
                score = "Win for player1";
            else
                score = "Win for player2";
        }
        else {
            for (var i = 1; i < 3; i++) {
                if (i === 1)
                    tempScore = this.playerOneScore;
                else {
                    score += "-";
                    tempScore = this.playerTwoScore;
                }
                switch (tempScore) {
                    case 0:
                        score += "Love";
                        break;
                    case 1:
                        score += "Fifteen";
                        break;
                    case 2:
                        score += "Thirty";
                        break;
                    case 3:
                        score += "Forty";
                        break;
                }
            }
        }
        return score;
    }
}



if (typeof window === "undefined") {
    module.exports = TennisGame1;
}