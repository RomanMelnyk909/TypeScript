"use strict";
exports.__esModule = true;
var faker_1 = require("faker");
var name = faker_1["default"].name.firstName();
console.log(name);
var Player = /** @class */ (function () {
    function Player(name, position, age, price, skills, status) {
        this.name = name;
        this.position = position;
        this.age = age;
        this.price = price;
        this.skills = skills;
        this.status = status;
        this.name = name;
        this.age = age;
        this.position = position;
        this.price = price;
        this.skills = skills;
        this.status = status;
    }
    Player.prototype.showPlayer = function () {
        console.log("Name: " + this.name + "\nPosition " + this.position);
    };
    return Player;
}());
var Team = /** @class */ (function () {
    function Team(teamName, coach, country) {
        this.teamName = teamName;
        this.coach = coach;
        this.country = country;
        this.players = [];
    }
    Team.prototype.getTeamName = function () {
        return this.teamName;
    };
    Team.prototype.showTeam = function () {
        if (this.players.length === 0) {
            console.log("Team name: " + this.teamName + "\tCoach: " + this.coach);
            console.log("No Players");
        }
        else {
            console.log("Title: " + this.country + "\tCoach: " + this.coach);
            this.players.forEach(function (player) {
                player.showPlayer();
            });
        }
    };
    Team.prototype.addPlayer = function (player) {
        this.players.push(player);
    };
    return Team;
}());
var League = /** @class */ (function () {
    function League() {
        this.teams = [];
    }
    League.prototype.showTeams = function () {
        if (this.teams.length === 0) {
            console.log("No teams");
        }
        else {
            this.teams.forEach(function (team) {
                team.showTeam();
            });
        }
    };
    League.prototype.addTeam = function (team) {
        this.teams.push(team);
    };
    League.prototype.getTeamByName = function (nameTeam) {
        var searchedTeam = this.teams.filter(function (team) { return team.getTeamName() === nameTeam; });
        if (searchedTeam.length === 0) {
            console.log("Team not Found");
        }
        else {
            searchedTeam[0].showTeam();
        }
    };
    return League;
}());
// Create Teams
var shakhtar = new Team("Shachtar", "Roberto Dzerbi", "UA");
// Create Players
var kryvtcov = new Player("Kryvtkov", "Defender", 25, 1000, { speed: 40, technique: 45, hp: 80 }, "active");
shakhtar.addPlayer(kryvtcov);
// Lague
var championLeague = new League();
championLeague.addTeam(shakhtar);
// championLeague.showTeams();
championLeague.getTeamByName("Shachtar");
function createRandomUser(countUsers) {
    var randomUsers;
    for (var i = 0; i < countUsers; i++) {
        var newUser = new Player("asd", Math.random().toString(), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), { speed: 40, technique: 45, hp: 80 }, Math.random().toString());
        console.log(newUser);
    }
}
createRandomUser(10);
