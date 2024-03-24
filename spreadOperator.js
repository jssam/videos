let a = [1,2,3,4]
let d = [6,7]
let b = {...a}
//{"1":1,"2":2,"3":3,"4":4}
let c = [...a]
//c = [1,2,3,4]
let m = [...a,...d]

var foo = {
    english: 'hello',
    french: 'bonjour',
    japanese: 'konnichiwa'
  };
  var bar = {...foo};

  var foo = {
    english: 'hello',
    french: 'bonjour',
    japanese: 'konnichiwa'
  };
  var bar = {
    german: 'gutentag',
    esperanto: 'saluton'
  };
  const baz = {...foo, ...bar};
  
  console.log(baz);
