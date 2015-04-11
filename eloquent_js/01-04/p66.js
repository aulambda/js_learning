var journal = [];

function addEntry(events, didITurnIntoASquirrel) {
    journal.push({
        events: events,
        squirell: didITurnIntoASquirrel
    });
}

addEntry (["work", "touched tree", "pizza", "running", "television"], false);
console.log(journal);
