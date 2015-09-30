
var wait = 2000;
var limit = 10000;

function getTriple(counter) {
	var triple = "";
	if (document.getElementsByClassName("icd10code")[0] != null && document.getElementsByClassName("idclass").item(0) != null) {
				var uri = document.getElementsByClassName("idclass").item(0).innerHTML;
				uri = "<" + uri.split(": ")[1].replace(/\s/g, '') + ">";

				var icd10 = document.getElementsByClassName("icd10code")[0].childNodes[1].innerHTML;
				icd10 = "\"" + icd10.split(" : ")[1].replace(/\s/g, '') + "\"";

				triple = uri + " <http://dbpedia.org/ontology/icd11> " + icd10 + ".\n";
				console.log(triple);
				
				icd11to10mapping += triple;
			}
	if (counter == limit) {
		console.log("---------------------");
		console.log(icd11to10mapping);
		console.log("---------------------");
	}
}

function f(counter) {
	if (counter <= limit) {
		try {
			// bekomme den Pfeil
			var x = document.getElementById("ygtvt" + counter);
			
			//bekomme das Label
			var element = x.nextSibling.firstChild.nextSibling
			
//            console.log("ygtvlabel: " + counter);
			
			// öffne den Baum
			x.click();
			
			// lade die Seite
			element.click();
			
			window.setTimeout(function() {getTriple(counter); }, wait);
			
		} catch (err) {
			console.log("X");
		}
		window.setTimeout(function() { f(counter + 1)}, wait);
	} else {
		
	}
}

var icd11to10mapping = "";
f(2);

