jQuery(function(){
   changeHeaders();
   fillLeagues();
});

$(window).on('resize', function () {
    changeHeaders();
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

function changeHeaders() {
    if ($(window).width() > 991) {
        document.getElementById("thW").innerHTML = "Wins";
        document.getElementById("thD").innerHTML = "Draws";
        document.getElementById("thL").innerHTML = "Loses";
        document.getElementById("thGf").innerHTML = "Goals for";
        document.getElementById("thGa").innerHTML = "Goals against";
        document.getElementById("thM").innerHTML = "Matches";
    } else {
        document.getElementById("thW").innerHTML = '<abbr title="Wins" class="initialism">W</abbr>';
        document.getElementById("thD").innerHTML = '<abbr title="Draws" class="initialism">D</abbr>';
        document.getElementById("thL").innerHTML = '<abbr title="Loses" class="initialism">L</abbr>';
        document.getElementById("thGf").innerHTML = '<abbr title="Goals for" class="initialism">G+</abbr>';
        document.getElementById("thGa").innerHTML = '<abbr title="Goals against" class="initialism">G-</abbr>';
        document.getElementById("thM").innerHTML = '<abbr title="Matches" class="initialism">M</abbr>';
    }
}

function changeTab(id) {
    document.getElementById("wrongNameMessage").style.display = "none";
    document.getElementById("numberPlayersMessage").style.display = "none";

    //activeNavItem(id);
    showBody(id);
}

function activeNavItem(id) {
    var navList = document.getElementById("mainmenu").getElementsByTagName("li");
    
    for (let i = 0; i < navList.length; i++) {
        var item = navList.item(i);
        if(item.classList.contains("active")) {
            item.classList.remove("active");
        }
    }
    navList.item(id).classList.add("active");
}

function showBody(id) {
    var tabs = ['New Tournament', 'Table', 'Schedule']
    
    for (let i = 0; i < 3; i++) {
        document.getElementById("body" + i).style.display = "none";
    }
    document.getElementById("body" + id).style.display = "block";
    
    if (id == 0) {
        document.getElementById("divAddResult").style.display = "none";
        document.getElementById("divPlayAgain").style.display = "none";
    } else if (game) {
        if (game.isFinished)
            document.getElementById("divPlayAgain").style.display = "block";
        else
            document.getElementById("divAddResult").style.display = "block";
    }
}

function showCurrentMatch() {
    var current = game.agenda.currentMatch;
    
    if (current !== undefined) {
        document.getElementById("team1").innerHTML = current.player1.team + " (" + current.player1.name + ")";
        document.getElementById("team2").innerHTML = current.player2.team + " (" + current.player2.name + ")";
        document.getElementById("resultP1").value = "";
        document.getElementById("resultP2").value = "";
    } else {
        game.isFinished = true;
        document.getElementById("divAddResult").style.display = "none";
        document.getElementById("divPlayAgain").style.display = "block";
        document.getElementById("winner").innerHTML = game.agenda.getWinner().name;
    }
}

function updateTable() {
    var table = document.getElementById("table");
    
    // clear table body
    var rowCount = table.rows.length;
    while(--rowCount) 
        table.deleteRow(rowCount);
    
    var playersCopy = [];
    for (var i in players) {
        var player = Object.assign({}, players[i]);
        delete player.matches;
        delete player.resetStatistics;
        delete player.addResult;
        
        playersCopy.push(player);
    }
    
    var no = 0;
    for (let element of playersCopy) {
        ++no;
        
        let row = table.insertRow();

        let cell = row.insertCell();
        cell.appendChild(document.createTextNode(no));
                    
        for (key in element) {
            if (key == "name")
                continue;
            
            let text = undefined;
            if (key == "team")
                text = document.createTextNode(element[key] + " (" + element["name"] + ")");
            else
                text = document.createTextNode(element[key]);
            
            let cell = row.insertCell();
            cell.appendChild(text);
        }
    }
}


/*
$('#myList a').on('click', function (e) {
  e.preventDefault()
  $(this).tab('show')
})

$('#myList a[href="#profile"]').tab('show') // Select tab by name

*/

function updateSchedule() {
    var mySchedule = document.getElementById("mySchedule");
    var matches = game.agenda.matches;

    // clear list
    var childrenCount = mySchedule.childNodes.length;
    while(childrenCount)
        mySchedule.removeChild(mySchedule.childNodes[--childrenCount]);
    
    for (var i in matches) {
        var btn = document.createElement("button");
        btn.classList.add("list-group-item", "list-group-item-action");
        btn.setAttribute("data-toggle", "list");
        btn.setAttribute("role", "tab");
        btn.setAttribute("id", "btnMatch" + i);
        
        btn.onclick = function() { 
            var id = this.getAttribute('id');
            game.agenda.currentMatch = game.agenda.matches[parseInt(id.slice(8))];
            showCurrentMatch();
        };
        
        if (matches[i].isFinished) {
            btn.disabled = true;
        } else if (matches[i] == game.agenda.currentMatch) {
            btn.classList.add("active");
        }
        
        var message = matches[i].player1.team + " (" + matches[i].player1.name + ")&emsp;";
        
        if (matches[i].isFinished) {
            message += matches[i].goals1 + " : " + matches[i].goals2;
        } else {
            message += ":";
        }
        
        message += "&emsp;" + matches[i].player2.team + " (" + matches[i].player2.name + ")";
        
        btn.innerHTML = message;
        mySchedule.appendChild(btn);
    }
}

