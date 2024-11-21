function mysteryOperation ()
{
	const outcome = Math.random(); // Generates a random number between 0 and 1.

	if (outcome < 0.5)
	{
		console.log("The operation is completed successfully!");
	}
	else
	{
		throw new Error("The operation is failed mysteriously!");
	}
}

const missions = 20;

const daysOnSuccess = 13;

const daysOnFailure = 1;

const daysForAttendence = 3;

let daysOfVaction = 0;
for(let i = 0; i < missions; i++)
{
	try {
		mysteryOperation();
		daysOfVaction += daysOnSuccess;
	} catch (error) {
		daysOfVaction += daysOnFailure;
	}
	finally {
		daysOfVaction += daysForAttendence;
	}
}

console.log(daysOfVaction);