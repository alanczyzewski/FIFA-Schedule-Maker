function addTeam() {
    var name = document.getElementById("nameInput").value;
    
    if (!name) {
        var wrongNameMessage = document.getElementById("wrongNameMessage");
        wrongNameMessage.innerHTML = "Player's name can't be empty";
        wrongNameMessage.style.display = "block";        
    } else if (players.find(player => player.name === name)) {
        var wrongNameMessage = document.getElementById("wrongNameMessage");
        wrongNameMessage.innerHTML = "There is already a player with that name";
        wrongNameMessage.style.display = "block";
    } else {
        document.getElementById("wrongNameMessage").style.display = "none";
        document.getElementById("numberPlayersMessage").style.display = "none";
        
        document.getElementById("nameInput").value = "";
        
        var team = document.getElementById("teams").value;
        var ul = document.getElementById("selectedTeams");
        var li = document.createElement("li");
        
        li.appendChild(document.createTextNode(team + " (" + name + ")"));
        ul.appendChild(li);
        
        document.getElementById("resetTeamsDiv").style.display = "block";
        
        players.push(new Player(name, team));
    }
}

function resetTeams() {
    players.length = 0;
    
    document.getElementById("wrongNameMessage").style.display = "none";
    document.getElementById("numberPlayersMessage").style.display = "none";
    
    document.getElementById("selectedTeams").innerHTML = "";
    document.getElementById("resetTeamsDiv").style.display = "none";
}

function Player(name, team) {
    this.team = team;
    this.name = name;
    this.points = 0;
    this.wins = 0;
    this.draws = 0;
    this.loses = 0;
    this.goalFor = 0;
    this.goalAgainst = 0;
    this.playedMatches = 0;
    this.matches = [];
    
    this.resetStatistics=function() {
        this.playedMatches = 0;
        this.points = 0;
        this.wins = 0;
        this.draws = 0;
        this.loses = 0;
        this.goalFor = 0;
        this.goalAgainst = 0;
    };
    
    this.addResult=function(match) {
        this.playedMatches++;
        
        if (match.player1 == this) {
            this.goalFor += match.goals1;
            this.goalAgainst += match.goals2;
        }
        else {
            this.goalFor += match.goals2;
            this.goalAgainst += match.goals1;
        }
        
        if (match.winner == this) {
            this.points += 3;
            this.wins++;
        }
        else if (match.winner === undefined) {
            this.points++;
            this.draws++;
        }
        else
            this.loses++;
    };
    
    //TODO
    //this.changeResult=function(match, goals1, goals2){};
}

players = [];

