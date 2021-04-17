function fillLeagues() {
    var selectLeagues = document.getElementById("leagues")
    selectLeagues.innerHTML = "";

    for (var i in listLeagues) {
        var leagueOption = document.createElement("option");
        leagueOption.value = leagueOption.text = listLeagues[i].name;
        selectLeagues.add(leagueOption);
    }
    
    selectLeagues.value = listLeagues[0].name;
    
    fillTeams(listLeagues[0]);
}

function fillTeams(league) {
    var selectTeams = document.getElementById("teams")
    selectTeams.innerHTML = "";
    
    var teams = league.teams;
    for (var i in teams) {
        var teamOption = document.createElement("option");
        teamOption.value = teamOption.text = teams[i];
        selectTeams.add(teamOption);
    }
}

function changeLeague(select) {
    const league = listLeagues.find(element => element.name == select.value);
    fillTeams(league);
}

function League(name, teams) {
    this.name = name;
    this.teams = teams;
}

listLeagues = [
new League("ARGENTINA - LIGA PROFESIONAL DE FÚTBOL", ["Aldosivi","Argentinos Jrs.","Arsenal","Atlético Tucumán","Banfield","Buenos Aires","Central Córdoba","Colón","Defensa","Estudiantes","Gimnasia","Godoy Cruz","Huracán","Independiente","Lanús","Newell's","Núñez","Patronato","Racing Club","Rosario Central","San Lorenzo","Talleres","Unión","Vélez Sarsfield"]),
new League("AUSTRALIA - A-LEAGUE", ["Adelaide United","Brisbane Roar","Central Coast","Macarthur FC","Melb. Victory","Melbourne City","Newcastle Jets","Perth Glory","Sydney FC","Well. Phoenix","Western United","WS Wanderers"]),
new League("AUSTRIA - Ö. BUNDESLIGA", ["Admira Wacker","FK Austria Wien","LASK","RB Salzburg","SCR Altach","SK Rapid Wien","SK Sturm Graz","SKN St. Pölten","SV Ried","TSV Hartberg","Wolfsberger AC","WSG Tirol"]),
new League("BELGIUM - 1A PRO LEAGUE", ["K Beerschot VA","Cercle Brugge","Club Brugge","Excel Mouscron","KAA Gent","KAS Eupen","KRC Genk","KV Kortrijk","KV Mechelen","KV Oostende","OH Leuven","Royal Antwerp FC","RSC Anderlecht","Sint-Truiden","Sp. Charleroi","Standard Liège","Waasl. Beveren","Zulte Waregem"]),
new League("BRAZIL - LIGA DO BRASIL", ["Athletico-PR","Atlético Mineiro","Atlético-GO","Bahia","Botafogo","Ceará SC","Coritiba","Fluminense","Fortaleza","Goiás","Grêmio","Internacional","Oceânico FC","Santos"]),
new League("CHINA - CSL", ["Beijing Guoan","Chongqing SWM","Dalian Pro","Guangzhou","Guangzhou R&F","Hebei CFFC","Henan Jianye","Jiangsu Suning","Qingdao Huanghai","Shandong Luneng","Shanghai Shenhua","Shanghai SIPG","Shenzhen Kaisa","Shijiazhuang","Tianjin TEDA","Wuhan Zall"]),
new League("CONMEBOL LIBERTADORES", ["Alianza Lima","América de Cali","Athletico-PR","Barcelona SC","Binacional","Boca Juniors","Bolívar","Caracas F.C.","Colo-Colo","Defensa","Delfín S.C.","Est. de Mérida","Flamengo","Grêmio","Guaraní","Indep. Medellín","Independiente","Internacional","Junior","LDU Quito","Libertad","Nacional","Olimpia","Palmeiras","Peñarol","Racing Club","River Plate","Santos","São Paulo","Tigre","Uni. Católica","Wilstermann"]),
new League("CONMEBOL SUDAMERICANA", ["Always Ready","Aragua FC","Argentinos Jrs.","Atl. Nacional","Atlético Grau","Atlético Mineiro","Aucas","Audax Italiano","Bahia","Blooming","Club Nacional","Coquimbo Unido","CS Emelec","Cusco FC","Deportivo Cali","Deportivo Pasto","El Nacional","FBC Melgar","Fénix","Fluminense","Fortaleza","Goiás","Huachipato FC","Huracán","Independiente","Lanús","Liverpool","Llaneros","Luqueño","Millonarios","Mineros","Nacional Potosí","O. Petrolero","Plaza Colonia","River Plate","Sol de América","Sport Huancayo","U. Católica","Unión","Unión La Calera","Vasco da Gama","Vélez Sarsfield","Zamora FC"]),
new League("DENMARK - 3F SUPERLIGA", ["Aalborg BK","Aarhus AGF","AC Horsens","Brøndby IF","FC København","FC Midtjylland","FC Nordsjælland","Lyngby BK","Odense BK","Randers FC","SønderjyskE","Vejle Boldklub"]),
new League("ENGLAND - PREMIER LEAGUE", ["Arsenal","Aston Villa","Brighton","Burnley","Chelsea","Crystal Palace","Everton","Fulham","Leeds United","Leicester City","Liverpool","Manchester City","Manchester Utd","Newcastle Utd","Sheffield Utd","Southampton","Spurs","West Brom","West Ham","Wolves"]),
new League("ENGLAND - EFL CHAMPIONSHIP", ["AFC Bournemouth","Barnsley","Birmingham City","Blackburn Rovers","Brentford","Bristol City","Cardiff City","Coventry City","Derby County","Huddersfield","Luton Town","Middlesbrough","Millwall","Norwich","Nott'm Forest","Preston","QPR","Reading","Rotherham Utd","Sheffield Wed","Stoke City","Swansea City","Watford","Wycombe"]),
new League("ENGLAND - EFL LEAGUE ONE", ["Accrington","AFC Wimbledon","Blackpool","Bristol Rovers","Burton Albion","Charlton Ath","Crewe Alexandra","Doncaster","Fleetwood Town","Gillingham","Hull City","Ipswich","Lincoln City","MK Dons","Northampton","Oxford United","Peterborough","Plymouth Argyle","Portsmouth","Rochdale","Shrewsbury","Sunderland","Swindon Town","Wigan Athletic"]),
new League("ENGLAND - EFL LEAGUE TWO", ["Barrow","Bolton","Bradford City","Cambridge Utd","Carlisle United","Cheltenham Town","Colchester","Crawley Town","Exeter City","Forest Green","Grimsby Town","Harrogate Town","Leyton Orient","Mansfield Town","Morecambe","Newport County","Oldham Athletic","Port Vale","Salford City","Scunthorpe Utd","Southend United","Stevenage","Tranmere Rovers","Walsall"]),
new League("FRANCE - LIGUE 1 UBER EATS", ["Angers SCO","AS Monaco","AS Saint-Étienne","Dijon FCO","FC Metz","FC Nantes","Girondins de Bordeaux","FC Lorient","LOSC Lille","Montpellier HSC","Nîmes Olympique","OGC Nice","Olympique de Marseille","Olympique Lyonnais","Paris Saint-Germain","Racing Club de Lens","RC Strasbourg Alsace","Stade Brestois 29","Stade de Reims","Stade Rennais FC"]),
new League("FRANCE - LIGUE 2 BKT", ["AC Ajaccio","Amiens SC","Auxerre","Chambly Oise","Chamois Niortais FC","Clermont Foot","En Avant Guingamp","ESTAC Troyes","FC Sochaux","Grenoble Foot 38","Havre AC","La Berrichonne","Nancy","Paris FC","Pau FC","Rodez Averyron","SM Caen","Toulouse FC","USL Dunkerque","Valenciennes"]),
new League("GERMANY - BUNDESLIGA", ["1. FC Köln","1899 Hoffenheim","Arminia Bielefeld","Bayer Leverkusen","Bayern Munich","Borussia Dortmund","Borussia Mönchengladbach","Eintracht Frankfurt","FC Augsburg","Hertha BSC","Mainz 05","RB Leipzig","SC Freiburg","Schalke 04","Union Berlin","VfB Stuttgart","VfL Wolfsburg","Werder Bremen"]),
new League("GERMANY - BUNDESLIGA 2", ["1. FC Heidenheim","1. FC Nürnberg","Darmstadt 98","Eintracht Braunschweig","Erzgebirge Aue","FC St. Pauli","Fortuna Düsseldorf","Greuther Fürth","Hamburger SV","Hannover 96","Holstein Kiel","Jahn Regensburg","Karlsruher SC","SC Paderborn","SV Sandhausen","VfL Bochum","VfL Osnabrück","Würzburger Kickers"]),
new League("GERMANY - 3. LIGA", ["1. FC Kaiserslautern","1. FC Magdeburg","1. FC Saarbrücken","FC Bayern München II","Dynamo Dresden","FC Ingolstadt 04","FC Viktoria Köln","FSV Zwickau","Hallescher FC","Hansa Rostock","KFC Uerdingen 05","MSV Duisburg","SC Verl","SpVgg Unterhaching","SV Meppen","SV VfB Lübeck","SV Waldhof Mannheim","Türkgücü München","Wehen Wiesbaden","TSV 1860 München"]),
new League("IRELAND - SSE AIRTRICITY LGE", ["Bohemian FC","Cork City","Derry City","Dundalk","Finn Harps","Shamrock Rovers","Shelbourne","Sligo Rovers","St. Pats","Waterford FC"]),
new League("ITALY - SERIE A TIM", ["Atalanta","Benevento","Bologna","Cagliari","Crotone","Fiorentina","Genoa","Hellas Verona","Inter","La Spezia","Lazio","Milan","Napoli","Parma","Piemonte Calcio","Roma FC","Sampdoria","Sassuolo","Torino","Udinese"]),
new League("JAPAN - MEIJI YASUDA J1", ["Cerezo Osaka","F.C. Tokyo","Gamba Osaka","H.Consa.Sapporo","Kashima Antlers","Kashima Reysol","Kawasaki-F","Nagoya Grampus","Oita Trinita","S-Hiroshima","Sagan Tosu","Shimizu S-Pulse","Shonan Bellmare","Urawa Reds","Vegalta Sendai","Vissel Kobe","Yokohama F･M","Yokohama FC"]),
new League("KOREA REPUBLIC - K LEAGUE 1", ["Busan IPark","Daegu FC","FC Seoul","Gangwon FC","GwangJu FC","Incheon United","Jeonbuk Hyundai","Pohang Steelers","Sangju Sangmu","Seongnam FC","Suwon Samsung","Ulsan Hyundai"]),
new League("MEN'S NATIONAL", ["Argentina","Australia","Austria","Belgium","Bolivia","Brazil","Bulgaria","Cameroon","Canada","Chile","China PR","Colombia","Côte d'Ivoire","Czech Republic","Denmark","Ecuador","Egypt","England","Finland","France","Germany","Greece","Hungary","Iceland","India","Ireland","Italy","Mexico","Netherlands","New Zealand","Northern Ireland","Norway","Paraguay","Peru","Poland","Portugal","Romania","Russia","Scotland","Slovenia","South Africa","Spain","Sweden","Switzerland","Turkey","United States","Uruguay","Venezuela","Wales"]),
new League("MEXICO - LIGA BBVA MX", ["América","Atlas","Atlético de San Luis","Cruz Azul","FC Juárez","Guadalajara","León","Mazatlán FC","Necaxa","Pachuca","Puebla","Pumas","Querétaro","Rayados","Santos Laguna","Tigres","Tijuana","Toluca"]),
new League("NETHERLANDS - EREDIVISIE", ["ADO Den Haag","Ajax","AZ","FC Emmen","FC Groningen","FC Twente","FC Utrecht","Feyenoord","Fortuna Sittard","Heracles Almelo","PEC Zwolle","PSV","RKC Waalwijk","SC Heerenveen","Sparta Rotterdam","Vitesse","VVV-Venlo","Willem II"]),
new League("NORWAY - ELITESERIEN", ["Aalesunds FK","FK Bodø/Glimt","FK Haugesund","IK Start","Kristiansund","Mjøndalen IF","Molde FK","Odds BK","Rosenborg BK","Sandefjord","Sarpsborg 08","SK Brann","Stabæk Fotball","Strømsgodset IF","Vålerenga Fotball","Viking FK"]),
new League("POLAND - PKO EKSTRAKLASA", ["Cracovia","Górnik Zabrze","Jagiellonia","Lech Poznań","Lechia Gdańsk","Legia Warszawa","PGE Stal Mielec","Piast Gliwice","Podbeskidzie","Pogoń Szczecin","Raków Częstochowa","Śląsk Wrocław","Warta Poznań","Wisła Kraków","Wisła Płock","Zagłębie Lubin"]),
new League("PORTUGAL - LIGA NOS", ["Belenenses","Boavista FC","CD Tondela","Farense","FC Famalicão","FC Porto","Gil Vicente","Marítimo","Moreirense FC","Nacional","Paços Ferreira","Portimonense SC","Rio Ave FC","Santa Clara","SC Braga","SL Benfica","Sporting CP","V. Guimarães"]),
new League("REST OF WORLD", ["AC Monza","AEK Athens","Al Ain FC","Brescia","Chievo Verona","CSKA Moscow","Dinamo Zagreb","Dynamo Kyiv","Empoli","HJK Helsinki","Kaizer Chiefs","Lecce","Lokomotiv Moscow","Olympiacos CFP","Orlando Pirates","Panathinaikos","PAOK","Shakhtar Donetsk","Slavia Praha","Sparta Praha","Spartak Moscow","SPAL","Viktoria Plzeň","Soccer Aid","adidas All-Star","MLS All Stars"]),
new League("ROMANIA - LIGA I", ["Academica","Astra Giurgiu","CFR 1907 Cluj","Chindia","FC Argeș","FC Botoşani","FC Dinamo 1948","FC Hermannstadt","FC Viitorul","FC Voluntari","FCSB","Gaz Metan Mediaș","Politehnica Iaşi","Sepsi OSK","Univ. Craiova","UTA Arad"]),
new League("SAUDI ARABIA - MBS PRO LEAGUE", ["Abha Club","Al Adalah","Al Ahli","Al Faisaly","Al Fateh","Al Fayha","Al Hazem","Al Hilal","Al Ittihad","Al Nassr","Al Raed","Al Shabab","Al Taawoun","Al Wehda","Damac FC","Ettifaq FC"]),
new League("SCOTLAND - SCOTTISH PREM", ["Aberdeen","Celtic","Dundee United","Hamilton","Hibernian","Kilmarnock","Livingston","Motherwell","Rangers","Ross County","St. Johnstone","St. Mirren"]),
new League("SPAIN - LALIGA SANTANDER", ["Athletic Club","Atlético de Madrid","CA Osasuna","Cádiz CF","D. Alavés","Elche CF","FC Barcelona","Getafe CF","Granada CF","Levante UD","R. Valladolid CF","RC Celta","Real Betis","Real Madrid","Real Sociedad","SD Eibar","SD Huesca","Sevilla FC","Valencia CF","Villarreal CF"]),
new League("SPAIN - LALIGA SMARTBANK", ["AD Alcorcón","Albacete BP","CD Castellón","CD Leganés","CD Lugo","CD Mirandés","CD Tenerife","CE Sabadell","CF Fuenlabrada","FC Cartagena","Girona FC","Málaga CF","R. Oviedo","R. Sporting","R. Zaragoza","Rayo Vallecano","RCD Espanyol","RCD Mallorca","SD Ponferradina","UD Almería","UD Las Palmas","UD Logroñés"]),
new League("SWEDEN - ALLSVENSKAN", ["AIK","BK Häcken","Djurgårdens IF","Falkenbergs FF","Hammarby IF","Helsingborgs IF","IF Elfsborg","IFK Göteborg","IFK Norrköping","IK Sirius","Kalmar FF","Malmö FF","Mjällby AIF","Örebro SK","Östersunds FK","Varbergs BoIS"]),
new League("SWITZERLAND - RSL", ["BSC Young Boys","FC Basel 1893","FC Lugano","FC Luzern","FC Sion","FC St. Gallen","FC Vaduz","FC Zürich","Lausanne-Sport","Servette FC"]),
new League("TURKEY - SÜPER LIG", ["Alanyaspor","Antalyaspor","Başakşehir","BB Erzurumspor","Beşiktaş","Çaykur Rizespor","Denizlispor","Fenerbahçe","Galatasaray","Gaziantep","Gençlerbirliği","Göztepe","Hatayspor","Karagümrük SK","Kasimpaşa","Kayserispor","Konyaspor","MKE Ankaragücü","Sivasspor","Trabzonspor","Yeni Malatyaspor"]),
new League("USA/CANADA - MLS", ["Atlanta United","Chicago Fire","Colorado Rapids","Columbus Crew SC","D.C. United","FC Cincinnati","FC Dallas","Houston Dynamo","Impact Montréal","Inter Miami CF","LA Galaxy","LAFC","Minnesota United","Nashville SC","New England","New York City FC","NY Red Bulls","Orlando City","Philadelphia","Portland Timbers","Real Salt Lake","Seattle Sounders","SJ Earthquakes","Sporting KC","Toronto FC","Whitecaps FC"]),
new League("WOMEN'S NATIONAL", ["Australia","Brazil","Canada","China PR","England","France","Germany","Japan","Mexico","Netherlands","New Zealand","Norway","Scotland","Spain","Sweden","United States"])
];

