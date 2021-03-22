
class userClass {
    constructor(firstName, lastName) {
      this.name = firstName
      this.lastName = lastName
    }
    getFullName(){
        return 'Hello, I am ' + this.name + this.lastName + '.'
   }
}
   

const obj = new userClass('Sara', ' Hansen')
console.log(obj.getFullName());

//#2


class usersJob {
    constructor(jobName, firstName ) {
      this.job = jobName;
      this.name = firstName
    }
} 

const userInfo = new usersJob('teacher', 'John')
console.log(userInfo.job);
console.log(userInfo.name);


// Cv classes

class Job {
    constructor(id, title, description, startDate, endDate){
        this.id = id;
        this.title = title;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
    }

}

class Education {
    constructor(id, title, description, startDate, endDate){
        this.id = id;
        this.title = title;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}

class Cv {
    constructor(email) {
      this.jobs = [];
      this.educations = [];
      this.email = email
    }
  
    addJob(job) {
        this.jobs.push(job); 
        
    }
  
    removeJob(job) {
        this.jobs = this.jobs.filter(arrJob => job.id != arrJob.id);
    }
  
    addEducation(education) {
        this.jobs.push(education);
    }
  
    removeEducation(education) {
      // add functionality here
    }
}

const myCv = new Cv("my email");

const myJob = new Job(1, "job1", "some description", "2021-03-21", "2019-03-21");
const myJob2 = new Job(2, "job2", "some description", "2021-03-21", "2019-03-21");

const myEducation = new Education(1, "Education1", "some description", "2021-03-21", "2019-03-21");

myCv.addJob(myJob);
myCv.addJob(myJob2);
myCv.addEducation(myEducation);

myCv.removeJob(myJob);

console.log(myCv);



