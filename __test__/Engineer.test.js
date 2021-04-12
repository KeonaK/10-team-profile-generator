const Engineer = require("../lib/Engineer");

describe("Engineer", () => {

    it("should return a name when I pass a name to engineer", () => {
        //arrange
        let engineerName = "Erin"
        //act
        
        let newEngineer = new Engineer(engineerName);

      //assert
        expect(newEngineer.name).toBe("Erin");
    });

    it("should return an id when I pass an id to engineer", () => {
        //arrange
        let engineerId = "2"
        //act
        let newEngineerId = new Engineer("",engineerId);

      //assert
        expect(newEngineerId.id).toBe("2");
    });

    it("should return an email when I pass an email to engineer", () => {
        //arrange
        let engineerEmail = "name1@email.com"
        //act
        let newEngineerEmail = new Engineer("","",engineerEmail);

      //assert
        expect(newEngineerEmail.email).toBe("name1@email.com");
    });

    it("should return github when I pass github to engineer", () => {
        //arrange
        let engineerGithub = "erinAGit"
        //act
        let newEngineerGithub = new Engineer("","","", engineerGithub);

      //assert
        expect(newEngineerGithub.github).toBe("erinAGit");
    });

    it("should return a role when I pass a role to engineer", () => {
       
        //act
        let newEngineerRole = new Engineer("","","","");

      //assert
     
        expect(newEngineerRole.getRole()).toBe("Engineer");
    });
})
