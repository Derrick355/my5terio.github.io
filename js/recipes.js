const RecipeCategory = {
    EXTRAEASY: "Supa Easy",
    EASY: "Easy",
};

class Recipe {
    constructor() {
        this._data = [];
    }

    add(name, icon, desc, category) {
        this._data.push({name, icon, desc, category});
        return this;
    }

    display() {
        $("#recipe-category").html(null);
        Object.values(RecipeCategory).forEach(cat => {
            $("#recipe-category").append(`<h1 class="recipe-title">${cat}</h1>`);
            this._data.filter(card => card.category.includes(cat)).forEach(card => {
                $("#recipe-category").append(`
                    <div class="recipe-card">
                        <div class="recipe-icon"><img src="${card.icon}"  alt="${card.name}"></div>
                        <h2 class="recipe-name">${card.name}</h2>
                        <p class="recipe-desc">${card.desc}</p>
                    </div>
                `);
            });
        });
        return this;
    }
}

placeholders.setValue('page', "Recipes");
(function () {
    new Recipe()
        .add(
            "Cat",
            "http://www.tapgamers.com/wp-content/uploads/2012/09/Arrows-Icon.png",
            "Dont be afraid, he dont bite!!!",
            [RecipeCategory.EASY]
        )
        .add(
            "Dog",
            "https://oyster.ignimgs.com/widgets/portals/minecraft/images/259.png?width=200&quality=20&dpr=0.05",
            "Be afraid cuz he bites your pp!!!",
            [RecipeCategory.EASY, RecipeCategory.EXTRAEASY]
        )
        .display();
    placeholders.display()
})();
