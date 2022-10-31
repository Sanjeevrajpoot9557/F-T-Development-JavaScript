var quoteSource = [{
            quote: "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.,2 name:"
            do {
                Francis of Assisi "},{ quote: "
                Believe you can and you 're halfway there.", name: "Theodore Roosevelt" },{
                quote: "It does not matter how slowly you go as long as you do not stop.",
                    name: "Confucius"
            },
            {
                quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
                name: "Thomas A.Edison"
            },
            { quote: "The will to win, the desire to succeed, the urge to reach your full potential...these are the keys that will unlock the door to personal excellence.", name: "Confucius" }
        ];
        const quoteButton = document.getElementById('quoteButton');

        function myfunction() {
            //getting a new random number to attach to a quote and setting a limit
            var sourceLength = quoteSource.length;
            var randomNumber = Math.floor(Math.random() * sourceLength);
            //set a new quote
            var newQuoteText = quoteSource[randomNumber].quote;
            var newQuoteGenius = quoteSource[randomNumber].name;
            var quoteContainer = document.getElementById('quoteContainer');
            quoteContainer.innerHTML = `<p>${newQuoteText}</p><p
    id="quoteGenius">-${newQuoteGenius}</p> `;
        };