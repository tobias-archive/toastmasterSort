var fs = require('fs');
var prompt = require("prompt");

fs.writeFile("membership.txt", '');

prompt.start();

prompt.message = "";
prompt.delimiter = "";


var processFile = function(file) {

	console.log(file)

	fs.readFile(file, "utf8", function( err, data ) {

		if (err) {
			console.log("No file by name file, ending script...")
			process.exit(1);
		}

		var array = data.toString().split("\n");

		array.pop()
		array.shift();

	    array.forEach(function(element) {
	  
	    	element = element.replace(/","/g, "--");

			elements = element.split('--');

			var email = elements[9];
			var name = elements[1];
			var phone = elements[10];
			var joined = elements[15];

			name = name.replace(', ACB','').replace(', CC','').replace(', CL','').replace(', ALB','')

			var name = name.split(' ');

			lastName = name.pop();
			firstName = name.shift()

			var string = firstName+','+lastName+',Member,'+email+','+phone+','+joined+'\n';

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