const studentScores = [
    {
      name: 'Neville Longbottom',
      scores: [90, 95, 100, 95, 100]
    },
    {
      name: 'Hermione Granger',
      scores: [100, 100, 100, 100, 100]
    },
    {
      name: 'Ron Weasley',
      scores: [70, 60, 45, 80, 75]
    },
    {
      name: 'Harry Potter',
      scores: [80, 75, 70, 85, 90]
    },
    {
      name: 'Draco Malfoy',
      scores: [90, 85, 70, 85, 90]
    },
    {
      name: 'Padma Patil',
      scores: [95, 100, 100, 95, 100]
    },
    {
      name: 'Terry Boot',
      scores: [95, 90, 100, 95, 100]
    },
    {
      name: 'Ernie Macmillan',
      scores: [90, 85, 100, 85, 90]
    },
    {
      name: 'Lavender Brown',
      scores: [80, 75, 70, 85, 90]
    },
    {
      name: 'Zacharias Smith',
      scores: [80, 75, 70, 85, 90]
    },
    {
      name: 'Gregory Goyle',
      scores: [0, 45, 30, 35, 20]
    },
  ];

  document.querySelector('body').innerHTML= `<ol>Professor Sprout's 90% Achiever's:</ol>`;

  function printStudents (array) {
  
    function calculateAverage (array) {
      let total = 0;
      for (let i= 0; i < array.length; i++) {
        total += array[i]
    }
  return total/array.length }

    let listOfNames = [];

    for (let i= 0; i < array.length; i++) {
      const averageScore = calculateAverage(array[i].scores);
      if (averageScore >= 90) {
        listOfNames.push(array[i].name);
      }}
      
       return listOfNames.sort();
};

const array = printStudents(studentScores)
  for (let i= 0; i < array.length; i ++)
  {
    document.querySelector('body > ol').innerHTML += `<li>${array[i]}</li>`;
  };

  
