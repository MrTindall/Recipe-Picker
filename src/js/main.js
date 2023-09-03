import { recipes } from "src/js/data/recipe.js";

$(function(){
 
    let $gridContiner = $('.grid-container');
    for(let i = 0; i < recipes.length; i++)
    {

        $gridContiner.append( `
        <div class="recipeCard">
            <div class="recipeCard-Wrapper">
                <p class="recipeName">${recipes[i].recipeName}</p>
                <img src='${recipes[i].image}'>
            </div>
            <div class="toggle">
                <p class="hide">${recipes[i].uid}</p>
                <p>${recipes[i].category}</p>
                <p>${recipes[i].description}</p>
                <p>${recipes[i].ingredients}</p>
                <p>${recipes[i].completionTime}</p>
            </div>
        </div>

        `
        )
    }


    $('.recipeCard').on('click', function(e) {
        let $card = $(e.target).closest('.recipeCard');
        $card.find('.toggle').slideToggle();

    });

})