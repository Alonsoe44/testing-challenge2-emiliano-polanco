const strictEquals = (a, b) => {
    if (
        (Object.is(a, -0) && Object.is(b, 0)) ||
        (Object.is(b, -0) && Object.is(a, 0))
    ) {
        return true;
    }
    if (Number.isNaN(a) && Number.isNaN(b)) {
        return false;
    }
    return Object.is(a, b);
};

console.log(strictEquals(-0, -0));

describe("Given a strictEquals function", () => {
    describe("When it receives a 1 as the first parameter and a 1 as the second with melons and apples", () => {
        test("Then it should return true", () => {
            // Arrange
            const valueOne = 1;
            const valueTwo = 1;
            const expectedBoolean = true;
            // Act
            const answerStrictEqual = strictEquals(valueOne, valueTwo);
            // Assert
            expect(answerStrictEqual).toBe(expectedBoolean);
        });
    });

    describe("When it receives a NaN as the first parameter and another NaN as the second", () => {
        test("Then it should return false", () => {
            // Arrange
            const valueOne = NaN;
            const valueTwo = NaN;
            const expectedBoolean = false;
            // Act
            const answerStrictEqual = strictEquals(valueOne, valueTwo);
            // Assert
            expect(answerStrictEqual).toBe(expectedBoolean);
        });
    });

    describe("When it receives a 0 as the first parameter and a -0 as the second", () => {
        test("Then it should return true", () => {
            // Arrange
            const valueOne = 0;
            const valueTwo = -0;
            const expectedBoolean = true;
            // Act
            const answerStrictEqual = strictEquals(valueOne, valueTwo);
            // Assert
            expect(answerStrictEqual).toBe(expectedBoolean);
        });
    });

    describe("When it receives a -0 as the first parameter and a 0 as the second", () => {
        test("Then it should return true", () => {
            // Arrange
            const valueOne = -0;
            const valueTwo = 0;
            const expectedBoolean = true;
            // Act
            const answerStrictEqual = strictEquals(valueOne, valueTwo);
            // Assert
            expect(answerStrictEqual).toBe(expectedBoolean);
        });
    });

    describe("When it receives a 1 as the first parameter and a -1 as the second", () => {
        test("Then it should return false", () => {
            // Arrange
            const valueOne = 1;
            const valueTwo = "1";
            const expectedBoolean = false;
            // Act
            const answerStrictEqual = strictEquals(valueOne, valueTwo);
            // Assert
            expect(answerStrictEqual).toBe(expectedBoolean);
        });
    });
    describe("When it receives a true as the first parameter and a false as the second", () => {
        test("Then it should return false", () => {
            // Arrange
            const valueOne = true;
            const valueTwo = false;
            const expectedBoolean = false;
            // Act
            const answerStrictEqual = strictEquals(valueOne, valueTwo);
            // Assert
            expect(answerStrictEqual).toBe(expectedBoolean);
        });
    });

    describe("When it receives a false as the first parameter and a false as the second", () => {
        test("Then it should return false", () => {
            // Arrange
            const valueOne = false;
            const valueTwo = false;
            const expectedBoolean = true;
            // Act
            const answerStrictEqual = strictEquals(valueOne, valueTwo);
            // Assert
            expect(answerStrictEqual).toBe(expectedBoolean);
        });
    });

    describe("When it receives a string 'water' as the first parameter and a string 'oil' as the second", () => {
        test("Then it should return false", () => {
            // Arrange
            const valueOne = "water";
            const valueTwo = "oil";
            const expectedBoolean = false;
            // Act
            const answerStrictEqual = strictEquals(valueOne, valueTwo);
            // Assert
            expect(answerStrictEqual).toBe(expectedBoolean);
        });
    });
});
