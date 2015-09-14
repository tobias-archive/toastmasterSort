var fs = require('fs');
var prompt = require("prompt");

fs.writeFile("membership.txt", '');

prompt.start();

prompt.message = "";
prompt.delimiter = "";


var processFile = function(file) {

	fs.readFile('Membership(1).csv', "utf8", function( err, data ) {

		if (err) {
			console.log("No file by name file, ending script...")
			process.exit(1);
		}

		// console.log(data)

		var array = data.toString().split("%%%^^%");

		// array.pop()
		array.shift();

	    array.forEach(function(element, i) {
	  
	    	// element = element.replace(/","/g, "--");

			elements = element.split(',');



			var email = elements[27];
			var fname = elements[13];
			var lname = elements[12]
			var phone = elements[26];
			var joined = elements[8];

			console.log(elements[27])

			// name = name.replace(', ACB','').replace(', CC','').replace(', CL','').replace(', ALB','')

			// var name = name.split(' ');

			// lastName = name.pop();
			// firstName = name.shift()

			var string = fname+','+lname+',Member,'+email+','+phone+','+joined+'\n';

			fs.appendFile("membership.txt", string)

	    });
	});
}

prompt.get({
    properties: {
      name: {
        description: "Filename:".magenta
      },
    }
  }, function (err, result) {
	processFile(result.name);
    console.log('  File:' + result.name + ' has been process and saved as membership.txt');
  });