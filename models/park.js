const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
}

Park.prototype.numberOfDinosaurs = function () {
    return this.dinosaurs.length;
}

Park.prototype.addDinosaur = function (dinosaur) {
    this.dinosaurs.push(dinosaur);
}

Park.prototype.removeDinosaur = function (dinosaur) {
    const indexOfDinosaur = this.dinosaurs.indexOf(dinosaur);
    this.dinosaurs.splice(indexOfDinosaur, 1);
}

Park.prototype.mostVisitors = function() {
    let mostVisitors = this.dinosaurs[0]; //assign first dinosaur to 'mostVisitors'
    for (dinosaur of this.dinosaurs){     //loop over dinosaurs in collection
        if(dinosaur.guestsAttractedPerDay > mostVisitors.guestsAttractedPerDay){ //compare each guestsAttractedPerDay in Dinosaur to dinosaur saved as mostVisitors
            mostVisitors = dinosaur;}            //if above line true, replace mostVisitors with current dinosaur 
        }
    return mostVisitors; 
}

Park.prototype.countSpecies = function(species){
    let speciesCount = [];
    for (dinosaur of this.dinosaurs){
        if(dinosaur.species === species){
            speciesCount.push(dinosaur);
        }
    }
    return speciesCount;
}

Park.prototype.countVisits = function(){
    let visitCount = 0;
    for (dinosaur of this.dinosaurs){
        visitCount += dinosaur.guestsAttractedPerDay
    }
    return visitCount;
}

Park.prototype.countVisitsPerYear = function (){
    let visitCount = 0;
    for (dinosaur of this.dinosaurs){
        visitCount += dinosaur.guestsAttractedPerDay
    }
    let visitCountPerYear = visitCount * 365;
    return visitCountPerYear;
}

Park.prototype.revenuePerYear = function () {
    let visitCount = 0;
    for (dinosaur of this.dinosaurs){
        visitCount += dinosaur.guestsAttractedPerDay
    }
    let visitCountPerYear = visitCount * 365;
    let annualRevenue = visitCountPerYear * this.ticketPrice;
    return annualRevenue;
}

module.exports = Park;