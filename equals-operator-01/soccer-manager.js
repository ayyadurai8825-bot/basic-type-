function getPlayingStyle() {
    // First team formation
    let firstTeam = [3, 3, 1, 3];

    // Second team points to the same array
    let secondTeam = firstTeam;

    // Change first team's formation
    firstTeam[0] = 4;
    firstTeam[1] = 1;
    firstTeam[2] = 4;
    firstTeam[3] = 1;

    // Return second team
    return secondTeam;
}

// Check the result
console.log(getPlayingStyle());