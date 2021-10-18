/// <reference types = "cypress" />

it('Equality', ()=>{
    const a = 1;

    expect(a).equal(1);
    expect(a, 'Deveria ser 1').equal(1);

    expect(a).to.be.equal(1);
    expect(a).not.be.equal('b');

})

it('Truthy', () => {

    const a = true;
    const b = null;
    var c;

    expect(a).to.be.equal(true)
    expect(a).not.equal(false)

    expect(b).to.be.null;
    expect(a).not.be.null;
    expect(c).to.be.undefined;

})

it('Object Equality', () => {

    const object = {
        a: 1,
        b: 2
    }

    expect(object).to.be.equal(object)
    expect(object).to.be.deep.equal({a:1, b:2})
    expect(object).eql({a:1, b:2})
    expect(object).include({a:1})
    expect(object).not.include({a:2})
    expect(object).to.have.property('a', 1)
    expect(object).to.have.property('b', 2)
    expect(object).not.be.empty

})

it('Arrays', ()=>{
    const array = [1, 2, 3];

    expect(array).to.be.have.members([1, 2, 3])
    expect(array).to.be.include.members([1])
    expect(array).not.to.be.include.members([4])
    expect(array).not.be.empty

})

it('Types', ()=>{
    const number = 1;
    const str = "String";

    expect(number).to.be.a('number')
    expect(str).to.be.a('string')
    expect({}).to.be.an('object')
    expect([]).to.be.an('array')

})

it('String', ()=>{
    const str = "Matheus Caldas";

    expect(str).to.be.equal('Matheus Caldas')
    expect(str).to.be.length(14)
    expect(str).to.be.contain('Matheus')
    expect(str).to.match(/Caldas/)
    expect(str).to.match(/^Matheus/)
    expect(str).to.match(/Caldas$/)
    expect(str).to.match(/.{14}/)
    expect(str).to.match(/\w+/) // Apenas Letras
    expect(str).to.match(/\D+/) // Não contém números

})

it('Numbers', ()=>{
    const number = 1
    const floatNumber = 12.3

    expect(number).to.be.eql(1)
    expect(number).to.be.above(0) // Acime de...
    expect(number).to.be.below(2) // Abaixo de...

    expect(floatNumber).to.be.eql(12.3)
    expect(floatNumber).to.be.above(10) // Acime de...
    expect(floatNumber).to.be.below(12.4) // Abaixo de...
    expect(floatNumber).to.be.closeTo(12.3, 0.1)

})