  
import { play } from "./rps";

// describe what we are testing
describe("Test the play logic", () => {
  // a given test
  it("should return `Hello World`", () => {

    // actuall test, expect method to fulfill condition
    expect(
      play()
    ).toEqual(
      "Hello World!"
      );
  });

  // Scissors vs Rock player 2 wins
  // Paper vs Rock player 1 wins
  // Paper vs Scissors player 2 wins
  // Rock vs Paper player 2 wins
  // Rock vs Scissors player 1 wins
  // Scissors vs Paper player 1 wins
  // Rock vs Rock players tie
  // Scissors vs Scissors  players tie
  // Paper vs Paper  players tie
});