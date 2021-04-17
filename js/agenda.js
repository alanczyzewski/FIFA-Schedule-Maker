function Agenda(players, numberMatches) {
    this.players = players;
    this.numberMatches = numberMatches;
    this.matches = [];
    this.draws = [];
    this.currentMatch;
    this.winner;
    
    this.getNextMatch=function() {
        for (var i in this.matches) {
            if (!(this.matches[i].isFinished))
                return this.matches[i];
        }
        return undefined;
    };
    
    this.addResult=function(goals1, goals2) {
        if (this.currentMatch !== undefined) {
            this.currentMatch.finishMatch(goals1, goals2);
            this.currentMatch = this.getNextMatch();
        }
    };
    
    this.getWinner=function() {
        this.winner = players[0];
        return this.winner;
    }
    
    //shuffle players
    for (let i = players.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [players[i], players[j]] = [players[j], players[i]];
    }
    
    for (var i in players) {
        this.draws.push(players[i]);
    } 
}

function AgendaLeague(players, numberMatches) {
    Agenda.call(this, players, numberMatches);
    
    var pairs;
    
    if (players.length == 3)
        pairs =  [[1, 2], [3, 1], [2, 3]];
    else if (players.length == 4)
        pairs = [[1, 2], [3, 4], [1, 3], [2, 4], [2, 3], [4, 1]];
    else if (players.length == 5)
        pairs = [[2, 5], [3, 4], [5, 3], [1, 2], [3, 1], [4, 5], [1, 4], [2, 3], [4, 2], [5, 1]];
    else if (players.length == 6)
        pairs = [[1, 6], [2, 5], [3, 4], [4, 6], [5, 3], [1, 2], [2, 6], [3, 1], [4, 5], [5, 6], [1, 4], [2, 3], [3, 6], [4, 2], [5, 1]];
    else if (players.length == 7)
        pairs = [[2, 7], [3, 6], [4, 5], [6, 4], [7, 3], [1, 2], [3, 1], [4, 7], [5, 6], [7, 5], [1, 4], [2, 3], [4, 2], [5, 1], [6, 7], [1, 6], [2, 5], [3, 4], [5, 3], [6, 2], [7, 1]];
    else if (players.length == 8)
        pairs = [[1, 8], [2, 7], [3, 6], [4, 5], [5, 8], [6, 4], [7, 3], [1, 2], [2, 8], [3, 1], [4, 7], [5, 6], [6, 8], [7, 5], [1, 4], [2, 3], [3, 8], [4, 2], [5, 1], [6, 7], [7, 8], [1, 6], [2, 5], [3, 4], [4, 8], [5, 3], [6, 2], [7, 1]];
    else
        return;
        
    for (var i in pairs) {
        var match = new Match();
        match.player1 = this.draws[pairs[i][0] - 1];
        match.player2 = this.draws[pairs[i][1] - 1];
        this.matches.push(match);
    }
    
    if (numberMatches == numbersMatches.TWO) {
        for (var i in pairs) {
            var match = new Match();
            match.player1 = this.draws[pairs[i][1] - 1];
            match.player2 = this.draws[pairs[i][0] - 1];
            this.matches.push(match);
        }
    }
    
    this.currentMatch = this.matches[0];
}

function AgendaTournament(players, numberMatches) {
    Agenda.call(this, players, numberMatches);  
    // TODO
}

