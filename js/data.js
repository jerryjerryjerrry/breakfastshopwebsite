// Simplified Menu Data for Online Ordering
const menuData = {
    "burger-series": {
        name: "好堡堡系列",
        basePrice: 25,
        description: "鬆軟漢堡包，搭配現煎荷包蛋與各種精選主食，是開啟活力的最佳選擇。",
        image: "images/pork_burger.jpg",
        flavors: [
            { name: "原味蛋堡", price: 25 },
            { name: "豬肉滿福堡", price: 40 },
            { name: "薯餅蛋堡", price: 40 },
            { name: "雞排蛋堡", price: 40 },
            { name: "鮪魚蛋堡", price: 40 },
            { name: "培根蛋堡", price: 40 },
            { name: "豬排蛋堡", price: 45 },
            { name: "牛肉蛋堡", price: 45 },
            { name: "雞柳蛋堡", price: 45 },
            { name: "香檸雞柳蛋堡", price: 45 },
            { name: "燻雞蛋堡", price: 50 },
            { name: "鱈魚蛋堡", price: 55 },
            { name: "香煎雞腿蛋堡", price: 55 },
            { name: "燒烤雞腿蛋堡", price: 55 },
            { name: "藍帶豬排蛋堡", price: 55 },
            { name: "藍帶雞排蛋堡", price: 55 },
            { name: "咔啦雞腿蛋堡", price: 55 }
        ]
    },
    "toast-series": {
        name: "現烤吐司系列",
        basePrice: 15,
        description: "酥烤鮮奶吐司，提供甜味果醬與豐富鹹食多種選擇。",
        image: "images/Bacon_and_Egg_Toast.jpg",
        flavors: [
            { name: "草莓果醬", price: 15 },
            { name: "花生的果醬", price: 15 },
            { name: "藍莓果醬", price: 15 },
            { name: "煉乳", price: 15 },
            { name: "奶酥", price: 15 },
            { name: "蒜味", price: 15 },
            { name: "巧克力果醬", price: 15 },
            { name: "夾蛋", price: 25 },
            { name: "肉鬆蛋", price: 35 },
            { name: "玉米蛋", price: 35 },
            { name: "蔬菜蛋", price: 35 },
            { name: "火腿蛋", price: 35 },
            { name: "培根蛋", price: 35 },
            { name: "鮪魚蛋", price: 40 },
            { name: "豬肉蛋", price: 40 },
            { name: "雞排蛋", price: 40 },
            { name: "豬排蛋", price: 45 },
            { name: "雞柳蛋", price: 45 },
            { name: "豬柳蛋", price: 45 },
            { name: "香檸雞柳蛋", price: 45 },
            { name: "燻雞蛋", price: 50 },
            { name: "總匯三明治", price: 50 },
            { name: "鱈魚蛋", price: 55 },
            { name: "雞腿蛋", price: 55 },
            { name: "藍帶豬排蛋", price: 55 },
            { name: "咔啦雞腿蛋", price: 55 }
        ]
    },
    "eggpancake-series": {
        name: "Q蛋餅系列",
        basePrice: 25,
        description: "南興城特製手工Q彈餅皮，外酥內軟，經典台式美味。",
        image: "images/Pork_Chop_Egg_Pancake.jpg",
        flavors: [
            { name: "原味", price: 25 },
            { name: "玉米", price: 35 },
            { name: "火腿", price: 35 },
            { name: "肉鬆", price: 35 },
            { name: "蔬菜", price: 35 },
            { name: "起士", price: 35 },
            { name: "培根", price: 35 },
            { name: "熱狗", price: 35 },
            { name: "鮪魚", price: 40 },
            { name: "薯餅", price: 40 },
            { name: "豬排", price: 45 },
            { name: "豬柳", price: 45 }
        ]
    },
    "bagel-series": {
        name: "三明治系列",
        basePrice: 30,
        description: "多層豐富食材夾入鬆軟麵包，口口滿足，美味不將就。",
        image: "images/sandwich.jpg",
        flavors: [
            { name: "草莓果醬三明治", price: 30 },
            { name: "花生果醬三明治", price: 30 },
            { name: "藍莓果醬三明治", price: 30 },
            { name: "煉乳三明治", price: 30 },
            { name: "奶酥三明治", price: 30 },
            { name: "巧克力果醬三明治", price: 30 },
            { name: "火腿蛋三明治", price: 45 },
            { name: "培根蛋三明治", price: 45 },
            { name: "起士蛋三明治", price: 45 },
            { name: "鮪魚蛋三明治", price: 50 },
            { name: "豬排蛋三明治", price: 55 }
        ]
    },
    "noodles-series": {
        name: "麵麵俱到",
        basePrice: 35,
        description: "鐵板高溫快炒或鍋燒慢熬，飽足感滿分的早午餐。",
        image: "images/Black_pepper_teppanyaki_noodles.jpg",
        flavors: [
            { name: "蘑菇鐵板麵", price: 35 },
            { name: "黑胡椒鐵板麵", price: 35 },
            { name: "麻油雞炒麵", price: 45 },
            { name: "鍋燒冬粉", price: 65 },
            { name: "鍋燒意麵", price: 65 },
            { name: "鍋燒雞絲麵", price: 65 },
            { name: "鍋燒烏龍麵", price: 65 }
        ]
    },
    "drinks-series": {
        name: "冷熱飲 (中/大杯)",
        basePrice: 10,
        description: "特調各式飲品，搭配早餐最對味。價格為中/大杯。",
        image: "images/breakfast_drinks.png",
        flavors: [
            { name: "紅茶", sizes: [{ label: "中", price: 10 }, { label: "大", price: 15 }] },
            { name: "綠茶", sizes: [{ label: "中", price: 10 }, { label: "大", price: 15 }] },
            { name: "豆漿", sizes: [{ label: "中", price: 10 }, { label: "大", price: 15 }] },
            { name: "奶茶", sizes: [{ label: "中", price: 15 }, { label: "大", price: 20 }] },
            { name: "奶綠", sizes: [{ label: "中", price: 15 }, { label: "大", price: 20 }] },
            { name: "可樂", sizes: [{ label: "中", price: 20 }, { label: "大", price: 25 }] },
            { name: "雪碧", sizes: [{ label: "中", price: 20 }, { label: "大", price: 25 }] },
            { name: "水果茶", sizes: [{ label: "中", price: 20 }, { label: "大", price: 25 }] },
            { name: "檸檬紅茶", sizes: [{ label: "中", price: 20 }, { label: "大", price: 25 }] },
            { name: "綠茶多酚", sizes: [{ label: "中", price: 25 }, { label: "大", price: 30 }] },
            { name: "柳橙汁", sizes: [{ label: "中", price: 25 }, { label: "大", price: 30 }] },
            { name: "薏仁漿", sizes: [{ label: "中", price: 25 }, { label: "大", price: 30 }] },
            { name: "玉米濃湯", sizes: [{ label: "中", price: 20 }, { label: "大", price: 30 }] },
            { name: "咖啡", sizes: [{ label: "中", price: 20 }, { label: "大", price: 30 }] },
            { name: "鮮奶茶", sizes: [{ label: "中", price: 25 }, { label: "大", price: 30 }] },
            { name: "鮮奶綠", sizes: [{ label: "中", price: 25 }, { label: "大", price: 30 }] },
            { name: "巧克力牛奶", sizes: [{ label: "中", price: 25 }, { label: "大", price: 30 }] },
            { name: "鮮奶咖啡", sizes: [{ label: "中", price: 30 }, { label: "大", price: 35 }] }
        ]
    },
    "snacks-series": {
        name: "FUN點心",
        basePrice: 15,
        description: "各式炸物與小點，解饞的好選擇。",
        image: "images/Fried_food1.jpg",
        flavors: [
            { name: "荷包蛋", price: 15 },
            { name: "熱狗", price: 15 },
            { name: "煎餃", price: 25 },
            { name: "鍋貼", price: 25 },
            { name: "一口餃", price: 25 },
            { name: "雞塊", price: 25 },
            { name: "雞米花", price: 25 },
            { name: "薯條", price: 25 },
            { name: "小肉豆", price: 25 },
            { name: "地瓜薯", price: 25 },
            { name: "脆薯", price: 30 },
            { name: "薯餅(2塊)", price: 30 },
            { name: "洋蔥圈", price: 30 },
            { name: "港式蘿蔔糕", price: 30 },
            { name: "咔啦一口雞塊", price: 30 },
            { name: "蔥抓餅加蛋", price: 35 },
            { name: "翡翠抓餅加蛋", price: 35 },
            { name: "香檸雞柳條", price: 35 }
        ]
    }
};

function getDishData(id) {
    if (menuData[id]) {
        return menuData[id];
    }

    // Legacy support for single items
    const decodedId = decodeURIComponent(id).replace(/-/g, ' ');
    return {
        name: decodedId || "美味餐點",
        price: "請參考菜單",
        description: "南興城用心製作每一份餐點，選用新鮮食材，為您帶來美好的一天。",
        image: "images/placeholder_food.png"
    };
}
