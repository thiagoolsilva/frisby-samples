var frisby = require('frisby');

/*
COMMAND:
      jasmine-node --matchall [folder of file]
*/


/*
========================
      1 TEST - simple object
========================
*/
frisby.create('/GET /user')
	.get('http://localhost:3000/user/')
	.expectStatus(200)
	.expectHeaderContains('Content-Type', 'application/json')
      .inspectJSON() //show the json when the tests has been finished
      .expectJSON({
            name: 'thiagos l silva',
		age: 29,
		gender: "male"}
      )
.toss();

/*
========================
      2 TEST - simple object with params
========================
*/
frisby.create('/GET /user/:id')
	.get('http://localhost:3000/user/1')
	.expectStatus(200)
	.expectHeaderContains('Content-Type', 'application/json')
      .inspectJSON() //show the json when the tests has been finished
      .expectJSON({
            name: 'name2',
            age: 2, 
            gender: 'male' 
      })
.toss();

/*
========================
      3 TEST - Complex object
========================
*/
frisby.create('/GET /user/:ID')
	.get('http://localhost:3000/user/1/complex/1')
	.expectStatus(200)
	.expectHeaderContains('Content-Type', 'application/json')
      .inspectJSON() //show the json when the tests has been finished
      .expectJSON({
            name: "name1",
            age: 1, 
            gender: 'male',
            user_rule: {
                  admin: true
            } 
      })
      .expectJSONTypes({
            age: Number,
            gender: String,
            user_rule: {
                  admin: Boolean
            }
      })
.toss();
