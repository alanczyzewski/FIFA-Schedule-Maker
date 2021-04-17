function startGame(gameMode) {
    if (players.length < 3) {
        message = document.getElementById("numberPlayersMessage");
        message.innerHTML = "Number of players must be at least 3";
        message.style.display = "block";
    } else if (players.length > 8) {
        message = document.getElementById("numberPlayersMessage");
        message.innerHTML = "Number of players must be less than 9";
        message.style.display = "block";
    } else {
        var numberMatches;
        if (document.getElementById("checkboxRematch").checked)
            numberMatches = numbersMatches.TWO;
        else
            numberMatches = numbersMatches.ONE;
        
        for (var i in players)
            players[i].resetStatistics();
        
        game = new Game(players, gameMode, numberMatches);
        
        if (gameMode == gameModes.LEAGUE) {
            showCurrentMatch();
            
            updateTable();
            updateSchedule();
            
            changeTab(1);    
        }
        
        document.getElementById("divPlayAgain").style.display = "none";
    }
}

function resetGame() {
    document.getElementById("divPlayAgain").style.display = "none";
    changeTab(0);
}

function Match() {
    this.player1;
    this.player2;
    this.winner;
    this.goals1 = 0;
    this.goals2 = 0;
    this.isFinished = false;
    this.matchType;
    
    this.finishMatch=function(goals1, goals2) {
        this.goals1 = goals1;
        this.goals2 = goals2;
        this.isFinished = true;
        if (goals1 > goals2)
            this.winner = this.player1;
        else if (goals1 < goals2)
            this.winner = this.player2;
        this.player1.addResult(this);
        this.player2.addResult(this);
    };
    
    //TODO
    //this.editResult=function(goals1, goals2) {};
}

// can do it anonymously
function Game(players, mode, numberMatches) {
    this.players = players;
    this.mode = mode;
    this.numberMatches = numberMatches;
    this.agenda;
    this.isFinished = false;
    
    this.createAgenda=function() {
        if (this.mode == gameModes.LEAGUE)
            this.agenda = new AgendaLeague(players, numberMatches);
        else
            this.agenda = new AgendaTournament(players, numberMatches);
    };
    /*
    this.resetGame=function() {
        for (var i in this.players)
            this.players[i].resetStatistics();
        this.createAgenda();
    };*/
    
    this.addResult=function(goals1, goals2) {
        this.agenda.addResult(goals1, goals2);
        if (this.mode == gameModes.LEAGUE) {
            // sort players
            players.sort(function(p1, p2) {
                
                var points = p2.points - p1.points;
                if (points != 0)
                    return points;
                    
                var balances = p2.goalFor - p2.goalAgainst - p1.goalFor + p1.goalAgainst;
                if (balances != 0)
                    return balances;
                
                var goalsFor = p2.goalFor - p1.goalFor;
                if (goalsFor != 0)
                    return goalsFor;
                
                if (p1.name > p2.name)
                    return 1;
                
                return -1;
            });
        }
    };
    
    this.createAgenda();
}

function addResult() {
    var goals1 = Math.floor(document.getElementById("resultP1").value);
    var goals2 = Math.floor(document.getElementById("resultP2").value);
    game.addResult(goals1, goals2);
    
    showCurrentMatch();
    
    updateTable();
    updateSchedule();
}

const gameModes = {
    LEAGUE: 0,
    TOURNAMENT: 1
};

const numbersMatches = {
    ONE: 1,
    TWO: 2
};

const tournamentPhases = {
    ROUND_OF_64: 5,
    ROUND_OF_32: 4,
    ROUND_OF_16: 3,
    QUARTER_FINAL: 2,
    SEMI_FINAL: 1,
    FINAL: 0
};

game = undefined;

/*
let matchType = tournamentPhases.ROUND_OF_64;

switch(matchType) {
    case tournamentPhases.ROUND_OF_64:
        console.log("64");
        break;
    case tournamentPhases.ROUND_OF_32:
        console.log("32");
        break;
    case tournamentPhases.ROUND_OF_16:
        console.log("16");
}

matchType -= 1;
*/

