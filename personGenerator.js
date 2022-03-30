const personGenerator = {
    month: `{
        "count": 12,
        "list": {
            "id_1": "Января",
            "id_2": "Февраля",
            "id_3": "Марта",
            "id_4": "Апреля",
            "id_5": "Мая",
            "id_6": "Июня",
            "id_7": "Июля",
            "id_8": "Августа",
            "id_9": "Сентября",
            "id_10": "Октября",
            "id_11": "Ноября",
            "id_12": "Декабря"
        }
    }`,
    work: `{
        "count": 15,
        "list": {
            "id_1": "Врач",
            "id_2": "Инженер",
            "id_3": "Учитель",
            "id_4": "Методист",
            "id_5": "Менеджер по продажам",
            "id_6": "Системный администратор",
            "id_7": "Продавец",
            "id_8": "Маркетолог",
            "id_9": "Бухгалтер",
            "id_10": "Курьер",
            "id_11": "Водитель",
            "id_12": "Юрист",
            "id_13": "Лаборант",
            "id_14": "Повар",
            "id_15": "Дизайнер"
        }
    }`,
    surnameJson: `{  
        "count": 16,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Губанов",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 21,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Даниил",
            "id_6": "Егор",
            "id_7": "Фёдор",
            "id_8": "Семён",
            "id_9": "Вячеслав",
            "id_10": "Степан",
            "id_11": "Семён",
            "id_12": "Вячеслав",
            "id_13": "Степан",
            "id_14": "Дмитрий",
            "id_15": "Андрей",
            "id_16": "Николай",
            "id_17": "Никита",
            "id_18": "Михаил",
            "id_19": "Василий",
            "id_20": "Пётр",
            "id_21": "Павел"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Оксана",
            "id_2": "Ирина",
            "id_3": "Анастасия",
            "id_4": "Вероника",
            "id_5": "Элина",
            "id_6": "Олеся",
            "id_7": "Татьяна",
            "id_8": "Елена",
            "id_9": "Дарья",
            "id_10": "Евгения"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),
    randomIntNumber2: (max = 31, min = 1) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;
        return obj.list[prop];
    },


    randomGender: function () {
        gender = this.randomIntNumber(1, 0) === 0 ? this.GENDER_MALE : this.GENDER_FEMALE;
        return gender;
    },


    randomFirstName: function () { // Генерация имени

        if (this.person.gender === this.GENDER_MALE) {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },


    randomSurname: function () { // Генерация фамилии

        if (this.person.gender === this.GENDER_MALE) {
            return this.randomValue(this.surnameJson);
        } else {
            return this.randomValue(this.surnameJson) + "а";
        }
    },


    nameToMiddleName: function (name) { // Генерация отчества
        if (this.person.gender === this.GENDER_MALE) {
            switch (name) {
                case "Александр":
                case "Максим":
                case "Иван":
                case "Артём":
                case "Даниил":
                case "Егор":
                case "Фёдор":
                case "Семён":
                case "Вячеслав":
                case "Степан":
                    return name + 'ович';
                case "Дмитрий":
                case "Андрей":
                case "Николай":
                    return name.slice(0, -1) + 'евич';
                case "Никита":
                    return name.slice(0, -1) + 'ич';
                case "Михаил":
                    return name.slice(0, -2) + 'йлович';
                case "Василий":
                    return name.slice(0, -2) + 'ьевич';
                case "Пётр":
                    return name.slice(0, -3) + 'етрович';
                case "Павел":
                    return name.slice(0, -2) + 'лович';
            }
        } else {
            switch (name) {
                case "Александр":
                case "Максим":
                case "Иван":
                case "Артём":
                case "Даниил":
                case "Егор":
                case "Фёдор":
                case "Семён":
                case "Вячеслав":
                case "Степан":
                    return name + 'овна';
                case "Дмитрий":
                case "Андрей":
                case "Николай":
                    return name.slice(0, -1) + 'евна';
                case "Никита":
                    return name.slice(0, -1) + 'ична';
                case "Михаил":
                    return name.slice(0, -2) + 'йловна';
                case "Василий":
                    return name.slice(0, -2) + 'ьевна';
                case "Пётр":
                    return name.slice(0, -3) + 'етровна';
                case "Павел":
                    return name.slice(0, -2) + 'ловна';
            }
        }
    },


    randomMiddleName: function () { // Генерация отчества
        let middleName = this.randomValue(this.firstNameMaleJson);
        return this.nameToMiddleName(middleName);
    },


    birth: function (month) { // Генерация даты рождения
        let day = this.randomIntNumber2();
        if (day <= 31) {
            switch (month) {
                case "Января":
                case "Марта":
                case "Мая":
                case "Июля":
                case "Августа":
                case "Октября":
                case "Декабря":
                    return day;
            }
        } else if (day <= 28) {
            switch (month) {
                case "Февраля":
                    return day;
            }
        }
        if (day <= 30) {
            switch (day <= 30) {
                case "Апреля":
                case "Июня":
                case "Сентября":
                case "Ноября":
                    return day;
            }
            max_2 = 1970;
            min_2 = 1999;
            year = Math.floor(Math.random() * (max_2 - min_2 + 1) + min_2);
            return day + " " + this.randomValue(this.month) + " " + year;
        }
    },

    randomWork: function () { // Генерация работы

        return this.randomValue(this.work);

    },


    getPerson: function () { // Составление личности
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.middleName = this.randomMiddleName();
        this.person.birth = this.birth();
        this.person.work = this.randomWork();
        return this.person;
    }
}