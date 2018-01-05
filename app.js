/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  switch(searchType){
    case 'yes':
    // TODO: search by name
    var foundPerson = searchByName(people);
    mainMenu(foundPerson[0], people); 
    break;
    case 'no':
    // TODO: search by traits
    var foundPeople = searchByTraits(people);
    break;
    default:
    app(people); // restart app
    break;
  }
}
// function searchByName(people){
//   var age = promptFor("what is the person's age?");
// }switch(age){
//   case 'yes':
//   break;
//   case 'no':
// }

function searchByTraits(people){
  people = searchByGender(people);
  people = searchByEyeColor(people);
  people = searchByWeight(people);
  people = searchByHeight(people);
  people = searchByOccupation(people);
  people = searchByDob(people);
}

function searchByGender(people){
  var userInput = prompt("male or female");
  var foundPeople = people.filter(function(person){
    if(person.gender === userInput){
      return true;
    }
    else{
      return false;
    }
  })
  return foundPeople;
}

function searchByEyeColor(people){
  var userInput = prompt("Eye color");
  var foundPeople = people.filter(function(person){
    if(person.eyecolor === userInput){
      return true;
    }
    else{
      return false;
    }
  })
  return foundPeople;
}
function searchByWeight(people){
  var userInput = prompt("weight");
  var foundPeople = people.filter(function(person){
    if(person.weight === userInput){
      return true;
    }
    else{
      return false;
    }
  })
  return foundPeople;
}
function searchByHeight(people){
  var userInput = prompt("height");
  var foundPeople = people.filter(function(person){
    if(person.height === userInput){
      return true;
    }
    else{
      return false;
    }
  })
  return foundPeople;
}
function searchByOccupation(people){
  var userInput = prompt("occupation");
  var foundPeople = people.filter(function(person){
    if(person.occupation === userInput){
      return true;
    }
    else{
      return false;
    }
  })
  return foundPeople;
}
function searchByDob(people){
  var userInput = prompt("dob",chars);

  var foundPeople = people.filter(function(person){
    if(person.dob === userInput){
      return true;
    }
    else{
      return false;
    }
  })
  return foundPeople;
}
function searchByParents(people){
  var userInput = prompt("parents");
  var foundPeople = people.filter(function(person){
    if(person.parents === userInput){
      return true;
    }
    else{
      return false;
    }
  })
  return foundPeople;
}
function searchBycurrentSpouse(people){
  var userInput = prompt("current spouse");
  var foundPeople = people.filter(function(person){
    if(person.currentSpouse === userInput){
      return true;
    }
    else{
      return false;
    }
  })
  return foundPeople;
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  var displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");
 
  switch(displayOption){
    case "info":
    displayPerson(person);




    // TODO: get person's info use for loop
    break;
    case "family":
    

    //TODO: Make getFamily function (filter that returns an aray of family members)
    //TODO: display family names (alert)
    mainMenu(person, people)

      break;
    
    // TODO: get person's family
    
    case "descendants":

       //if var descendantName.filter(person,people); function
     return descendantName (person,people);

      
    // TODO: get person's descendants
    case "restart":    

    app(people); // restart

    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask agai
  }
}
function getFamily(person,people){
      var foundfamily = people.filter(function(person){

      })
    

    var family = getFamily(person,people)
      if (foundfamily.parents[0]===person.id){
        return true;
       }
    else{
      return false;
    }
  
  }
  

function getParents(foundperson,people){
  var parents = people.filter(function(person){
    if (foundperson.parents[0]===person.id || foundperson.parents[1]===person.id){
      return true;
    }
    else{
      return false;
    }
  })
}
function getSiblings(foundperson,people){
  var siblings = people.filter(function(person){
    if (foundperson.parents[0]===person.id || foundperson.parents[1]===person.id){
      return true;
    }
    else{
      return false;
    }
  })
}
function getSpouse(foundperson,people){
  var spouse = people.filter(function(person){
    if (foundperson.parents[0]===person.id || foundperson.parents[1]===person.id){
      return true;
    }
    else{
      return false;
    }
  })
}
function getChildren(foundperson,people){
  var children = people.filter(function(person){
    if (foundperson.parents[0]===person.id || foundperson.parents[1]===person.id){
      return true;
    }
    else{
      return false;
    }
  })
}
function descendantName (person, people){
      var foundDescendant = people.filter(function(person){
        if (person.parents === firstName && person.lastName ===lastName){ 
          return true; 
        }
        else{
          return false;
        }
})
}
function searchByName(people){
  var firstName = promptFor("What is the person's first name?", chars);
  var lastName = promptFor("What is the person's last name?", chars);


  var foundPerson = people.filter(function(person){
    if(person.firstName === firstName && person.lastName === lastName){
      return true;
    }
    else{
      return false;
    }
  })
  // TODO: find the person using the name they entered
  return foundPerson;
}

// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  var personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  personInfo += "Gender: " + person.gender + "\n";
  personInfo += "dob: " + person.dob + "\n";
  personInfo += "height: " + person.height + "\n";
  personInfo += "weight: " + person.weight + "\n";
  personInfo += "eyeColor: " + person.eyeColor + "\n";
  personInfo += "occupation: " + person.occupation + "\n";
  personInfo += "parents: " + person.parents + "\n";
  personInfo += "currentSpouse: " + person.currentSpouse + "\n";
  // TODO: finish getting the rest of the information to display
  alert(personInfo);
}

// function that prompts and validates user input
function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}



 
