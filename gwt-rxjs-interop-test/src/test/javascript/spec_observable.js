/* global testsContainer, expect */

describe("Observables", function() {
    beforeEach(function(done) {
        var check = function() {
            if (!!testsContainer) {
                done();
            } else {
                setTimeout(check, 200);
            }
        };
        setTimeout(check, 200);
    });

    it("must provide plain notification", function(done) {
        expect(testsContainer.plain()).toBeTruthy();
        done();
    });
    
    it("must provide plain from notification", function(done) {
        expect(testsContainer.plainFrom()).toBe("7");
        done();
    });

    it("must provide value mappings", function(done) {
        expect(testsContainer.map()).toBeFalsy();
        done();
    });

    it("must provide value filtering mappings", function(done) {
        expect(testsContainer.filter()).toBeFalsy();
        done();
    });

    it("must provide merging", function(done) {
        expect(testsContainer.merge()).toBe("12");
        done();
    });

    it("must provide racing", function(done) {
        expect(testsContainer.race()).toBe("1");
        done();
    });

    it("must provide \"do\" side effects", function(done) {
        expect(testsContainer.do()).toBe("1");
        done();
    });

    it("must provide \"elementAt\" functionality ", function(done) {
        expect(testsContainer.elementAt()).toBe("3");
        done();
    });

    it("must provide \"elementAtDefault\" functionality ", function(done) {
        expect(testsContainer.elementAtDefault()).toBe("-1");
        done();
    });

    it("must provide \"every\" functionality ", function(done) {
        expect(testsContainer.every()).toBeTruthy();
        done();
    });

    it("must provide \"exhaust\" functionality ", function(done) {
        expect(testsContainer.exhaust()).toBe("123");
        done();
    });

    it("must provide \"exhaustMap\" functionality ", function(done) {
        expect(testsContainer.exhaustMap()).toBe("102030");
        done();
    });

    it("must provide \"take\" functionality ", function(done) {
        expect(testsContainer.take()).toBe("12");
        done();
    });

    it("must provide \"expand\" functionality ", function(done) {
        expect(testsContainer.expand()).toBe("110100");
        done();
    });

    it("must provide \"finally\" functionality ", function(done) {
        expect(testsContainer.finally()).toBe("finally");
        done();
    });

    it("must provide \"find\" functionality ", function(done) {
        expect(testsContainer.find()).toBe("1");
        done();
    });
    
    it("must provide \"findIndex\" functionality ", function(done) {
        expect(testsContainer.findIndex()).toBe("1");
        done();
    });
    
    it("must provide \"first\" functionality", function(done) {
        expect(testsContainer.first()).toBe("2");
        done();
    });
    
    it("must provide \"groupBy\" functionality", function(done) {
        expect(testsContainer.groupBy()).toBe("312");
        done();
    });
    
    it("must provide \"ignoreElements\" functionality", function(done) {
        expect(testsContainer.ignoreElements()).toBe("");
        done();
    });
    
    it("must provide \"last\" functionality", function(done) {
        expect(testsContainer.last()).toBe("1");
        done();
    });
    
    it("must provide \"mapTo\" functionality", function(done) {
        expect(testsContainer.mapTo()).toBe("55555");
        done();
    });
    
    it("must provide \"max\" functionality", function(done) {
        expect(testsContainer.max()).toBe("8");
        done();
    });
    
    it("must provide \"maxComparer\" functionality", function(done) {
        expect(testsContainer.maxComparer()).toBe("12");
        done();
    });
    
    it("must provide \"mergeAll\" functionality", function(done) {
        expect(testsContainer.mergeAll()).toBe("13");
        done();
    });
    
    it("must provide \"pairwise\" functionality", function(done) {
        expect(testsContainer.pairwise()).toBe("13");
        done();
    });
    
    it("must provide \"partition\" functionality", function(done) {
        expect(testsContainer.partition()).toBe("1");
        done();
    });
});