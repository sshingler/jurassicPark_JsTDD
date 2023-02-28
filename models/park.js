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
        if(dinosaur.guestsAttractedPerDay > mostVisitors.guestsAttractedPerDay){ //compare each guestsAttractedPerDay in Dinosaur to dinosaur sdaved as mostVisitors
            mostVisitors = dinosaur;}
        }
    return mostVisitors; 
}

module.exports = Park;