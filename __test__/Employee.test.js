const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("should return a name when I pass a name to employee", () => {
        //arange
        let employeeName = "Keona"
        //act
        let newEmployee = new Employee(employeeName);

      
        expect(newEmployee.name).toBe("Keona");
    });
})

