module.exports = {
	  title: 'Jugaad Trader',
	  description: 'Trading automation SKD',
	  host: "0.0.0.0",
	  port: "8000",
	  head: [
		  ["script", {src: "https://www.gstatic.com/firebasejs/7.13.1/firebase-app.js"}],
		  ["script", {src: "https://www.gstatic.com/firebasejs/7.13.1/firebase-analytics.js"}],
		  ["script", {src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
                    "data-ad-client": "ca-pub-9721464281558318"}],
		  ["script", {}, 
			  `  var firebaseConfig = {
		      apiKey: "AIzaSyA9nk1VG2gUqgnw6nlO7GZr07gcpBcocw8",
		      authDomain: "jugaad-trader.firebaseapp.com",
		      databaseURL: "https://jugaad-trader.firebaseio.com",
		      projectId: "jugaad-trader",
		      storageBucket: "jugaad-trader.appspot.com",
		      messagingSenderId: "1019398596086",
		      appId: "1:1019398596086:web:59116160e3ec1a0c5ed3d7",
		      measurementId: "G-9XHCCF421L"
		    };
		    // Initialize Firebase
			   firebase.initializeApp(firebaseConfig);
		     firebase.analytics();`],

		  	  ]
}
