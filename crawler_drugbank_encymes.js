//load JQuery
var jq = document.createElement('script');
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js";

var urls = ["http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/enzymes/36",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/enzymes/46",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/enzymes/2",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/enzymes/26",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/enzymes/22",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/enzymes/43",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/enzymes/12",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/enzymes/16",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/enzymes/6",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/enzymes/19",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/enzymes/49",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/enzymes/35",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/enzymes/20",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/enzymes/45",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/enzymes/39",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/enzymes/30",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/enzymes/29",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/enzymes/25",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/enzymes/1",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/enzymes/50",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/enzymes/21",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/enzymes/44",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/enzymes/11",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/enzymes/9",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/enzymes/40",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/enzymes/5",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/enzymes/15",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/enzymes/18",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/enzymes/38",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/enzymes/48",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/enzymes/34",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/enzymes/31",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/enzymes/51",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/enzymes/28",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/enzymes/41",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/enzymes/14",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/enzymes/4",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/enzymes/55",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/enzymes/8",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/enzymes/24",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/enzymes/10",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/enzymes/7",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/enzymes/17",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/enzymes/37",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/enzymes/32",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/enzymes/47",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/enzymes/33",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/enzymes/42",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/enzymes/52",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/enzymes/23",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/enzymes/27",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/enzymes/13",
"http://wifo5-04.informatik.uni-mannheim.de/drugbank/resource/enzymes/3"];

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