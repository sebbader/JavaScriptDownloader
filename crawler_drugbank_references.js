//load JQuery
var jq = document.createElement('script');
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js";

var urls = ["http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10047489",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10026282",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10036158",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10068594",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10067980",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10029312",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10026195",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10026252",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10024094",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10029540",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10051009",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10024453",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10064895",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10048009",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10049511",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10064829",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10021387",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10051426",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10070614",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10065930",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10066431",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10029548",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10051442",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10028377",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10049809",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10029535",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10037717",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10051558",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10051560",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10024458",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10063489",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10066903",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10027300",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10048323",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10036163",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10048322",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/1002129",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10024521",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10066165",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10037680",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10051606",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10047461",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10029623",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10037775",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10049785",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10029536",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10050713",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10070317",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10049310",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10037500",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10037781",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10027850",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10028924",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10037771",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10027710",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10052934",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10051566",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10025400",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10048485",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10068418",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10025942",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10067800",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10053008",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10029606",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10049708",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10037070",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10029534",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10049725",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10051405",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10069682",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10025401",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10027842",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10024882",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10024872",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10049739",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10024454",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10029531",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10023011",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10048019",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10022920",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10068513",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10048931",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10051406",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10029539",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10025684",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10051602",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10024455",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10024914",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10064713",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10049321",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10052453",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10024302",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10066796",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10022458",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10066782",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/references/10027088"];

var ws;
var text = "";
var urls_original_length = urls.length;
var missed_uris = [];

function loadTriples(i) {
	var uri = urls[i];
	var counter = 0;
	
	try {
		while (true) {
			if (ws.document.body.children[0].innerHTML == "Service Temporarily Unavailable") {
				//Server blockiert Anfrage
				ws.close();
				missed_uris.push(urls[i]);
				break;
			} else {
				//Seite ordentlich geladen
				var predicate1 = ws.document.getElementsByClassName("odd")[counter].children[0].children[0].title;				
				var object1 = ws.document.getElementsByClassName("odd")[counter].children[1].children[0].innerHTML.replace("\n", "");

        if (object1 == "&lt;") {
					object1 = ws.document.getElementsByClassName("odd")[counter].children[1].children[1].href;
				}
				
        var triple;
				if (predicate1 == "") {
					predicate1 = ws.document.getElementsByClassName("odd")[counter].children[0].children[1].href;
					triple = "<" + object1 + "> <" + predicate1 + "> <" + uri + "> .\n";
				} else {
					triple = "<" + uri + "> <" + predicate1 + "> <" + object1 + "> .\n";
				}
				//console.log(triple);
				text += triple;
				
				var predicate2 = ws.document.getElementsByClassName("even")[counter].children[0].children[0].title;				
				var object2 = ws.document.getElementsByClassName("even")[counter].children[1].children[0].innerHTML.replace("\n", "");

				if (object2 == "&lt;") {
					object2 = ws.document.getElementsByClassName("even")[counter].children[1].children[1].href;
				}
				
				if (predicate2 == "") {
					predicate2 = ws.document.getElementsByClassName("even")[counter].children[0].children[1].href;
					triple = "<" + object2 + "> <" + predicate2 + "> <" + uri + "> .\n";
				} else {
					triple = "<" + uri + "> <" + predicate2 + "> <" + object2 + "> .\n";
				}
				//console.log(triple);
				text += triple;
				counter += 1;
			}
		}
	}catch (err) {
		//console.log(err);
		//console.log(counter);
	}

	//console.log(text);
}

function load(i) {
	//console.log(urls[i]);
	console.log(i);
	ws = window.open(urls[i]);
	setTimeout(function() {loadTriples(i) }, 8000);
}

function f(iter) {
	
	
	if (iter > 0) {
		ws.close();
	}
	
	if (iter < urls.length) {
		load(iter);
		setTimeout(function() {	f(iter + 1) }, 10000);
	} else if (iter < (urls_original_length + missed_uris.lenght)) {
		urls = missed_uris;
		load(iter);
		setTimeout(function() {	f(iter + 1) }, 10000);
	} else {
		console.log(text);
	}
}
f(0);

function f(iter) {
	if (iter > 0) {
		ws.close();
	}
	
	if (iter < 4771) {
		load(iter);
		setTimeout(function() {	f(iter + 1) }, 10000);
	} else {
		console.log(text);
	}
}
f(0);