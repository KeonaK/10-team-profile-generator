const Manager = require("../lib/Manager");

describe("Manager", () => {

    it("should return a name when I pass a name to Manager", () => {
        //arrange
        let managerName = "Janice"
        //act
        
        let newManager = new Manager(managerName);

      //assert
        expect(newManager.name).toBe("Janice");
    });

    it("should return an id when I pass an id to Manager", () => {
        //arrange
        let managerId = "3"
        //act
        let newManagerId = new Manager("",managerId);

      //assert
        expect(newManagerId.id).toBe("3");
    });

    it("should return an email when I pass an email to Manager", () => {
        //arrange
        let managerEmail = "name3@email.com"
        //act
        let newManagerEmail = new Manager("","",managerEmail);

      //assert
        expect(newManagerEmail.email).toBe("name3@email.com");
    });

    it("should return officeNumber when I pass officeNumber to Manager", () => {
        //arrange
        let officeNumber = "770"
        //act
        let newOfficeNumber = new Manager("","","", officeNumber);

      //assert
        expect(newOfficeNumber.officeNumber).toBe("770");
    });

    it("should return a role when I pass a role to Manager", () => {
       
        //act
        let newManagerRole = new Manager("","","","");

      //assert
     
        expect(newManagerRole.getRole()).toBe("Manager");
    });
})
