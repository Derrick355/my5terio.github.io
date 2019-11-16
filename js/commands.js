const Categories = {ALL: "All", MUSIC: "Music", MODERATION: "Moderation"};
const SortType = {NAME: 1, CATEGORY: 2, NONE: -1};

class Commands {
    constructor() {
        this._data = [];
        this._data_backup = [];
    }

    add(name, desc, usage, category) {
        this._data.push({name, desc, usage, category});
        this._data_backup.push({name, desc, usage, category});
        return this;
    }

    sort(type = SortType.NAME) {
        this._data = this._data_backup;
        switch (type) {
            default:
            case SortType.NAME:
                this._data = this._data.sort(function (a, b) {
                    if (a.name < b.name) return -1;
                    if (a.name > b.name) return 1;
                    return 0;
                });
                break;
            case SortType.CATEGORY:
                this._data = this._data.sort(function (a, b) {
                    if (a.category < b.category) return -1;
                    if (a.category > b.category) return 1;
                    return 0;
                });
                break;
        }
        return this;
    }

    filter(type, string) {
        this._data = this._data_backup;
        if (string === Categories.ALL) return this;
        switch (type) {
            default:
            case SortType.NONE:
                this._data = this._data_backup;
                break;
            case SortType.NAME:
                this._data = this._data.filter(cmd => cmd.name.includes(string));
                break;
            case SortType.CATEGORY:
                this._data = this._data.filter(cmd => cmd.category.includes(string));
                break;
        }
        return this;
    }

    displayCategories() {
        $("#category_bar").html(null);
        Object.values(Categories).forEach(category => {
            $("#category_bar").append(`<a href="?category=${category}" class="category_btn ${category === "All" ? "active" : ""}">${category}</a>`)
        });
        return this;
    }

    displayCommands() {
        $("#commands_cards").html(null);
        this._data.forEach(cmd => {
            $("#commands_cards").append(`
            <div class="command_card" data-category="${cmd.category}">
                <div class="command_title">${cmd.name}</div>
                <div class="command_body">
                    ${cmd.desc}
                </div>
                <div class="command_footer">
                    <div>${cmd.usage}</div>
                    <div>${cmd.category}</div>
                </div>
            </div>
        `)
        });
        return this;
    }
}

placeholders.setValue('page', "Commands");
(function () {
    const commands = new Commands()
        .add("Mute", "Mute a user for not behaving", "+mute {user} {reason}", Categories.MODERATION)
        .add("Play", "Wanna play some gucci gang???", "+play {song/url}", Categories.MUSIC)
        .sort()
        .displayCategories()
        .displayCommands();

    placeholders.callback(function () {
        $(".nav-items li").on('click', function () {
            window.location.href = $(this).data('href');
        });
        $(".category_btn").on('click', function (e) {
            e.preventDefault();
            commands.filter(SortType.CATEGORY, $(this).text()).displayCommands();
            $(".category_btn").removeClass("active");
            $(this).addClass("active");
        });
    });
    placeholders.display()
})();