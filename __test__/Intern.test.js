const Intern = require("../lib/Intern");

describe("Intern", () => {

    it("should return a name when I pass a name to intern", () => {
        //arrange
        let internName = "Jazmine"
        //act
        
        let newIntern = new Intern(internName);

      //assert
        expect(newIntern.name).toBe("Jazmine");
    });

    it("should return an id when I pass an id to intern", () => {
        //arrange
        let internId = "3"
        //act
        let newInternId = new Intern("",internId);

      //assert
        expect(newInternId.id).toBe("3");
    });

    it("should return an email when I pass an email to Intern", () => {
        //arrange
        let internEmail = "name2@email.com"
        //act
        let newInternEmail = new Intern("","",internEmail);

      //assert
        expect(newInternEmail.email).toBe("name2@email.com");
    });

    it("should return school when I pass school to intern", () => {
        //arrange
        let internSchool = "UNT"
        //act
        let newInternSchool = new Intern("","","", internSchool);

      //assert
        expect(newInternSchool.school).toBe("UNT");
    });

    it("should return a role when I pass a role to Intern", () => {
       
        //act
        let newInternRole = new Intern("","","","");

      //assert
     
        expect(newInternRole.getRole()).toBe("Intern");
    });
})
