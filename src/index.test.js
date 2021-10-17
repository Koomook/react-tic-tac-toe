const rewire = require("rewire")
const index = rewire("./index")
const Game = index.__get__("Game")

const calculateWinner = index.__get__("calculateWinner")
// @ponicode
describe("jumpTo", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Jean-Philippe", "George", "Michael"], ["Pierre Edouard", "Edmond", "Edmond"], ["George", "Michael", "Jean-Philippe"]]
        inst = new Game(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.jumpTo(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.jumpTo(1.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.jumpTo(-10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.jumpTo(2.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.jumpTo(360)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.jumpTo(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("handleClick", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Michael", "Michael", "Jean-Philippe"], ["Jean-Philippe", "George", "Michael"], ["Anas", "George", "George"]]
        inst = new Game(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleClick(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.handleClick(-100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.handleClick(-5.48)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.handleClick(100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.handleClick(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.handleClick(Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("calculateWinner", () => {
    test("0", () => {
        let callFunction = () => {
            calculateWinner(["Pierre Edouard", "Michael", "Pierre Edouard"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            calculateWinner(["Anas", "Pierre Edouard", "Jean-Philippe"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            calculateWinner(["Jean-Philippe", "Edmond", "George"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            calculateWinner(["Michael", "Jean-Philippe", "Pierre Edouard"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            calculateWinner(["Anas", "George", "Michael"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            calculateWinner(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
