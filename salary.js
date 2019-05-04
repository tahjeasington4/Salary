const data = `Company,Position,Salary
EMC, Software Engineer, 90420
Mathworks, Software Engineer, 90077
IBM, Software Engineer, 88390
Wayfair, Software Engineer, 96136
Cisco, Software Engineer, 122469
Horizon International TRD, Software Engineer, 74651
TripAdvisor, Software Engineer, 110927
Fujitsu, Software Engineer, 110958
Google, Software Engineer, 129980
Oracle, Software Engineer, 111960
Wayfair, Full Stack Web Engineer, 88500
IBM, Full Stack Web Engineer, 112000
Motivis Learning Systems, Full Stack Web Engineer, 65000`;

function getAverageSalary() {
    let list = data.split('\n');
    list.shift();
    let total = 0;

    for (let i = 0; i < list.length; i++) {
        let jobData = list[i].split(',');
        let company = jobData[0];
        let position = jobData[1];
        let salary = jobData[2];
        if (position === 'Software Engineer') {
            total += Number(salary);
            numOfSoftwareEngineers += 1;
        }

    }
    console.log(total / list.length);
}

getAverageSalary();