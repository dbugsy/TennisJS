const ScoreNames = {
    0: "Love",
    1: "Fifteen",
    2: "Thirty",
    3: "Forty"
}

class TennisGame1 {
    static get SCORENAMES() { return ScoreNames; }

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
        if (this._isScoreEqual())
            return this._getEqualScoreResult();
        if (this._isWon())
            return this._getWinningPlayerResult();
        if (this._isAdvantagePoint())
            return this._getAdvantageResult();
        else {
            return this._getRegularScoreResult();
        }
    }

    _getRegularScoreResult() {
        return this._nameForScore(this.playerOneScore) + "-" + this._nameForScore(this.playerTwoScore);
    }

    _nameForScore(score) {
        return TennisGame1.SCORENAMES[score];
    }

    _getWinningPlayerResult() {
        return "Win for " + this._highestScoringPlayer();
    }

    _isWon() {
        return this._isEndGamePhase() && this._scoreDifference() >= 2;
    }

    _getAdvantageResult() {
        return "Advantage " + this._highestScoringPlayer();
    }

    _isAdvantagePoint() {
        return this._isEndGamePhase() && this._scoreDifference() === 1;
    }

    _scoreDifference() {
        return Math.abs(this.playerOneScore - this.playerTwoScore);
    }

    _isEndGamePhase() {
        return this.playerOneScore >= 4 || this.playerTwoScore >= 4;
    }

    _getEqualScoreResult() {
        if(this.playerOneScore >= 3) return "Deuce";
        return this._nameForScore(this.playerOneScore) + "-All";
    }

    _isScoreEqual() {
        return this.playerOneScore === this.playerTwoScore;
    }

    _highestScoringPlayer() {
        if(this.playerOneScore > this.playerTwoScore)
            return this.playerOneName;
        return this.playerTwoName;
    }
}



if (typeof window === "undefined") {
    module.exports = TennisGame1;
}