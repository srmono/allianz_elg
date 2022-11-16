//JavaScript Object Notation

//String, Number, Array, Object 

var person = {
    name: "Venkat",
    exp: 18,
    skills: ["Frontend", "Backend"],
    address: {
        city: "bangalore",
        geo: {
            lat: "",
            lan:""
        }
    }
}

console.log(person.name) 
console.log(
    person.address.geo
)

//js object to json (stringified)

JSON.stringify(person)

//DATA  -->  DSL -> JSON


//POST /ftq_accounts/_search
var x = {
  "query": {
    "intervals": {
      "address": { 
        "match": {
            "query":"171 Avenue",
            "max_gaps": 10,
            "filter": {
                "not_containing": {
                    "match": {
                        "query": "salty"
                    }
                }
            }
        }
       }
    }
  }
}