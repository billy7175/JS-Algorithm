var plants1 = ["Saturn","Earth","Uranus","Mercury","Venus","Earth","Mars","Jupiter"];
var plants2 = ["Saturn","Earth","Uranus"];
var alonePlants = [...new Set(plants1)].filter(item => plants2.includes(item));
