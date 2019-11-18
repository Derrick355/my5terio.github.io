const StaffCategory = {DEV: "Developer", WEB_DEV: "Web Developer", MANAGEMENT: "Management"};

class Staff {
    constructor() {
        this._data = [];
    }

    add(name, icon, desc, category) {
        this._data.push({name, icon, desc, category});
        return this;
    }

    display() {
        $("#staff-category").html(null);
        Object.values(StaffCategory).forEach(cat => {
            $("#staff-category").append(`<h1 class="staff-title">${cat}</h1>`);
            this._data.filter(card => card.category.includes(cat)).forEach(card => {
                $("#staff-category").append(`
                    <div class="staff-card">
                        <div class="staff-icon"><img src="${card.icon}"  alt="${card.name}"></div>
                        <h2 class="staff-name">${card.name}</h2>
                        <p class="staff-desc">${card.desc}</p>
                    </div>
                `);
            });
        });
        return this;
    }
}

placeholders.setValue('page', "Staff");
(function () {
    new Staff()
        .add(
            "Jack",
            "https://cdn.discordapp.com/avatars/266315409735548928/fd2623aaddad05e08d8c8ed1b0cd9adc.png?size=2048",
            "Hey... I made this... do you like it? If not you'll get banned!",
            [StaffCategory.WEB_DEV, StaffCategory.DEV]
        )
        .add(
            "MY5TERIO",
            "https://cdn.discordapp.com/avatars/329452869897945088/a_4afbd51b9d125165a677cfd6b8369518.gif?size=2048",
            "Developer for MysterioBot",
            [StaffCategory.DEV]
        )
        .add("LyLinx",
             "https://cdn.discordapp.com/attachments/484103296693436428/645949289754787850/Jack-and-George.png?size=2048",
             "I am the destroyer of servers!",
             [StaffCategory.MANAGEMENT]
             )
        .display();
    placeholders.display()
})();
