// more API
// https://developer.github.com/v3/search/#search-users

"use strict"; // if there is a  typo, java script will be strict with it, security level will raise

// how to run non strict mode

"sloppy mode";
// just to make it easy mode to java script

// i would first create a class
// i will need a constructor
// empty object if nothing os provided by the user

class gitHhubApi {
  constructor (options = {}){
    this.options = {
        container="anyElement"
    }
Object.assign(this.options,options);
this.apiUrl = "https://api.github.com"; // this will have a different continuation each time  
this.userNAmeEndpoint = "/user/:username/repo";
this.elements = {}; // empty object - this will start the object
this.init(); // this will start widget
}
// here I will have the function
init(){
this.elements.container = document.querySelector(this.options.container);
this.elements.container.innerHTML = this.parsedInitialTemplate();
//getting al the elements
// im targeting all the elements in the container
this.elements.form = this.elements.container.querySelector(".form");
this.elements.input = this.elements.container.querySelector(".inputText");
this.elements.list = this.elements.container.querySelector(".repositories");
// events function
this.registerEvents();
}

registerEvents(){
   this.elements.form.addEventListener("submit",(e)=>{
    e.preventDefault();
    //getting the value from input field
    const userName = this.elements.init.value.trim();
    this.getRepositories(username,(repositories)=> {
    repositories = this.fitterRepositoryResults(repositories)
    const markup = this.createListTemplate(repositories);
    this.elements.list.innerHTML = markup;    
})
    
})
}
}
getRepositories(username, callback){
    const url = `${this.apiUrl}${this.userNAmeEndpoint}`.replace(":username,", encodeURIComponent(username));
    console.log(url);
    fetch(url)
    .then(response)=>{
        return response.json();
    })
    .then(data)=>
    {console.log(data);
    callback(data)})
}
    }
}

fitterRepositoryResults(repositoryData){
   const
}
}

parsed()