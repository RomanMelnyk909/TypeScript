interface ISkills {
  speed: number;
  technique: number;
  hp: number;
}

class Player {
  constructor(
    private name: string,
    private position: string,
    private age: number,
    private price: number,
    private skills: ISkills,
    private status: string
  ) {
    this.name = name;
    this.age = age;
    this.position = position;
    this.price = price;
    this.skills = skills;
    this.status = status;
  }

  showPlayer(): void {
    console.log(`Name: ${this.name}\nPosition ${this.position}`);
  }
}

class Team {
  private players: Player[] = [];

  constructor(
    private teamName: string,
    private coach: string,
    private country: string
  ) {}

  getTeamName(): string {
    return this.teamName;
  }

  showTeam(): void {
    if (this.players.length === 0) {
      console.log(`Team name: ${this.teamName}\tCoach: ${this.coach}`);
      console.log("No Players");
    } else {
      console.log(`Title: ${this.country}\tCoach: ${this.coach}`);
      this.players.forEach((player) => {
        player.showPlayer();
      });
    }
  }
  addPlayer(player: Player): void {
    this.players.push(player);
  }
}

class League {
  teams: Team[] = [];
  showTeams(): void {
    if (this.teams.length === 0) {
      console.log(`No teams`);
    } else {
      this.teams.forEach((team) => {
        team.showTeam();
      });
    }
  }
  addTeam(team: Team): void {
    this.teams.push(team);
  }

  getTeamByName(nameTeam: string): void {
    const searchedTeam = this.teams.filter(
      (team) => team.getTeamName() === nameTeam
    );
    if (searchedTeam.length === 0) {
      console.log("Team not Found");
    } else {
      searchedTeam[0].showTeam();
    }
  }
}

// Create Teams

let shakhtar = new Team("Shachtar", "Roberto Dzerbi", "UA");

// Create Players

let kryvtcov = new Player(
  "Kryvtkov",
  "Defender",
  25,
  1000,
  { speed: 40, technique: 45, hp: 80 },
  "active"
);
shakhtar.addPlayer(kryvtcov);

// Lague
let championLeague = new League();

championLeague.addTeam(shakhtar);

// championLeague.showTeams();

championLeague.getTeamByName("Shachtar");
