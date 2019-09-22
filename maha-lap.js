class MahaLap {
    static tamnaiWithDay(day) {
        switch (day) {
            case "อาทิตย์":
                return 1;
            case "จันทร์":
                return 2;
            case "อังคาร":
                return 3;
            case "พุธ":
                return 4;
            case "พฤหัสบดี":
                return 5;
            case "ศุกร์":
                return 6;
            case "เสาร์":
                return 7;
            case "สงกรานต์":
                return 13;
            case "ฮาโลวีน":
                return 31;
            case "คริสมาสต์":
                return 25;
            default:
                return "Not Match";
        }

    }

    static tamnaiWithStory(story) {
        const length = story.length;
        var sum = 0;
        for (var i = 1; i <= length; i++) {
            sum = sum + i;
        }
        switch (sum) {
            case 3:
                return sum;
            case 36:
                return sum;
            case 66:
                return sum;
            default:
                "Not Match"
        }

    }

    // static tamnaiWithStory(story) {
    //     const n = story.length;
    //     let sum = 0;
    //     for (let i = 1; i <= n; i++) {
    //       sum += i;
    //     }
    //     return sum % 100;
    //   }
}

module.exports = MahaLap;