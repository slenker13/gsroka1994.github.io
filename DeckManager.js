var deck;
var deckID;
var numCards;
var cutCard;
var p1Hand = [];
var p2Hand = [];

function init(){
		$.ajax({
			url:'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1',
			dataType: 'json',
			async:false,
			success: function(data) {
				deck = data;
				deckID =  deck.deck_id;
                numCards = deck.remaining;
			}
		});
}

function deal(){
			$.ajax({
				url:'https://deckofcardsapi.com/api/deck/' + deckID + '/draw/?count=6',
				dataType:'json',
                async:false,
                success:function(data){
					p1Hand = data.cards;
					numCards = data.remaining;
				}
			});
			$.ajax({
                url:'https://deckofcardsapi.com/api/deck/' + deckID + '/draw/?count=6',
				dataType:'json',
				async:false,
				success:function(data){
					p2Hand = data.cards;
                    numCards = data.remaining;
                }
			});
}

function turnUpCard(){
	$.ajax({
		url:'https://deckofcardsapi.com/api/deck/' + deckID + '/draw/?count=1',
		dataType:'json',
		async:false,
		success:function(data){
			cutCard = data.cards[0];
			numCards = data.remaining;
		}
	});
}

function shuffle(){
		$.ajax({
			url:'https://deckofcardsapi.com/api/deck/' + deckID + '/shuffle/',
			dataType: 'json',
            async:false,
            success: function(data) {
				numCards = data.remaining;
			}
		});
}


