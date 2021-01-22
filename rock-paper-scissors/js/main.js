/* 
   1.   player selects hand
   1.1. set var "score" to 0
   1.2. store player choise in var (hand--paper || hand--scissors || hand--rock)
        and store img-source in an other var
   1.3. target class "choose", set display: none
   1.4. target class "game", set display: flex

   2.   get players choise
   2.1. target class "hand--human" and add class (hand--paper || hand--scissors || hand--rock)
   2.2. target class "hand-img--human" add source

   3.   get npc's choise (random)
   3.1. target class "hand--npc" add class "wait"
   3.2. target class "hand--npc" add class (hand--paper || hand--scissors || hand--rock) and remove class "wait"
   3.3. target class "hand-img--npc" add source 

   4.   check who is winner
   4.1. target class "result" set display: flex
   4.2. target class "result__title" set innerHtml to (you win || you lose)
   4.3. target class ("hand--human" || "hand--npc" based on who wins) add class "winner"
   4.4. if player wins - increment var "score"; target class "score__number" set innerHtml = var "score"

   5.   press "result__btn"
   5.1. target class "game", set display: none
   5.2. target class "result" set display: none
   5.3. target class "choose", set display: flex
   5.1. set all changed elements to default

   6.   press "rules-btn"
   6.1. show modal "rules"
   6.2. press "rules-btn--close"
   6.3. hide modal "rules"



*/


$(document).ready(function () {





    
});