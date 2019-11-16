class Placeholders {
    constructor(callback) {
        this._data = [];
        this._enable = callback;

    }

    setValue(placeholder, value) {
        this._data.push({placeholder, value});
        return this;
    }

    callback(cb) {
        this._enable = cb;
    }

    display() {
        let html = document.documentElement.innerHTML;
        this._data.forEach(p => html = html.replace(new RegExp(`{{${p.placeholder}}}`, "g"), p.value));
        document.documentElement.innerHTML = html;
        this._enable();
        return this;
    }
}

const placeholders = new Placeholders(function () {
    $(".nav-items li").on('click', function () {
        window.location.href = $(this).data('href');
    });
}).setValue('app_name', "Mysterio's Bot");
