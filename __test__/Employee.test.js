const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("should return a name when I pass a name to employee", () => {
        //arrange
        let employeeName = "Keona"
        //act
        let newEmployee = new Employee(employeeName);

      //assert
        expect(newEmployee.name).toBe("Keona");
    });

    it("should return an id when I pass an id to employee", () => {
        //arrange
        let employeeId = "1"
        //act
        let newEmployeeId = new Employee(employeeId);

      //assert
        expect(newEmployeeId.id).toBe("1");
    });

    it("should return an email when I pass an email to employee", () => {
        //arrange
        let employeeEmail = "name@email.com"
        //act
        let newEmployeeEmail = new Employee(employeeEmail);

      //assert
        expect(newEmployeEmail.email).toBe("name@email.com");
    });

    it("should return a role when I pass a role to employee", () => {
        //arrange
        let employeeName = "Keona"
        //act
        let newEmployeeRole = new Employee(employeeName);

      //assert
        expect(newEmployeeRole.getRole()).toBe("Employee");
    });
})

