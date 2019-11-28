const StaffCategory = {
    DEV: "Developer",
    MANAGEMENT: "Management",
    MODERATORS: "Moderator",
    DONATORS: "Donator",
    PREMIUM_GUILD: "Premium Guild",
    JACKASS: "Jackass"
};

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
                        <div class="staff-icon"><img src="${card.icon}" onerror="this.onerror=null;this.src='./images/logo.png';"  alt="${card.name}"></div>
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
            "MY5TERIO",
            "https://cdn.discordapp.com/avatars/329452869897945088/a_4afbd51b9d125165a677cfd6b8369518.gif?size=2048",
            "Developer for MysterioBot",
            [StaffCategory.DEV])
        .add(
            "Jack",
            "https://cdn.discordapp.com/avatars/266315409735548928/fd2623aaddad05e08d8c8ed1b0cd9adc.png?size=2048",
            "Website Developer! I made this. You don't like it? BANNED!",
            [StaffCategory.DEV])
        .add("LyLinx",
            "https://cdn.discordapp.com/attachments/484103296693436428/645949289754787850/Jack-and-George.png?size=2048",
            "I am the destroyer of servers!",
            [StaffCategory.MANAGEMENT])
        .add("BlazinVapin",
            "https://cdn.discordapp.com/avatars/517073820113436675/9eca2d5b68a993444e180ea15e1531ca.png?size=2048",
            "I'm a furry",
            [StaffCategory.MODERATORS])
        .add("MooseGaming",
            "https://cdn.discordapp.com/avatars/423560070303842305/77a280984c320d7b5df7f5b37ed5392c.png?size=2048",
            "Spoof",
            [StaffCategory.MODERATORS])
        .add("vvall",
            "https://cdn.discordapp.com/avatars/260503960329256967/fd43bacca186eb04926007dcc72f9d1c.png?size=2048",
            "Bruh",
            [StaffCategory.MODERATORS, StaffCategory.DONATORS])
        .add("leolph",
            "https://discordapp.com/assets/dd4dbc0016779df1378e7812eabaa04d.png?size=2048",
            "Why are you reading this? Go away, nothing to see here!",
            [StaffCategory.MODERATORS, StaffCategory.DONATORS])
        .add("Dākugamī",
            "https://cdn.discordapp.com/avatars/385222054649004042/c15e627cf20b33bbc12e7ae1a40a3a31.png?size=2048",
            "It does not matter how many times you fall, aslong as you rise back up.",
            [StaffCategory.DONATORS])
        .add("BoricSole53",
            "https://cdn.discordapp.com/avatars/260451614421286921/a30506d39bc063e3ff0711af78301a2f.png?size=2048",
            "You're a sunflower. I think your love would be too much.",
            [StaffCategory.DONATORS])
        .add("HorrifyingMonkey",
            "https://cdn.discordapp.com/avatars/280697097341239296/5ff9dca8056d1e1210dff36f3f641c04.png?size=2048",
            "What am I doing here again?",
            [StaffCategory.DONATORS])
        .add("TheVale",
            "https://cdn.discordapp.com/avatars/270987134352097281/9efe1d4c263106fbe292d06a399732de.png?size=2048",
            "Time is a blessing, use it wisely.",
            [StaffCategory.DONATORS])
        .add("AncientWonder",
            "https://cdn.discordapp.com/avatars/241285799440678912/68405a889c7546751f4b07a439bf2abe.png?size=2048",
            "Uhm, I forgot what I'm doing again.",
            [StaffCategory.DONATORS])
        .add("pettyGamingHD",
            "https://cdn.discordapp.com/avatars/111161304756015104/cbdc174d5d00944279219bffa7f04edc.png?size=2048",
            "It is still christmas right?",
            [StaffCategory.DONATORS])
        .add("AbbodabboJnr",
            "https://cdn.discordapp.com/avatars/243465159249494017/db16ce41b34b6b64872e6e7c4f60a0f4.png?size=2048",
            "Hello *says in some random irish accent*",
            [StaffCategory.DONATORS])
        .add("Scotboy04",
        "https://cdn.discordapp.com/avatars/319926271385796619/a4f6066228a6249437ac15beb12d85c1.png?size=2048",
        ". . .",
        [StaffCategory.DONATORS])
        .add("Robert",
        "https://cdn.discordapp.com/avatars/210508892143091712/b21bc2787827d1c889c60a815da76304.png?size=2048",
        "Want to code something eh?",
        [StaffCategory.DONATORS])
        .add("PaulTA2",
        "https://cdn.discordapp.com/avatars/297636982723444736/23dc2b50585536196edaef043dbb7fc0.png?size=2048",
        "I don't know what to put here",
        [StaffCategory.DONATORS])
        .add("iPlay G",
            "https://cdn.discordapp.com/avatars/146151306216734720/eeeff7ae442729e69850a23c8f0330ab.png?size=128 ",
            "Resident Jackass",
             [Staff.Category.JACKASS]) 
        .display();
    placeholders.display()
})();
