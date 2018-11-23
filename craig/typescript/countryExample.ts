interface Country {
  symbol:string,
  atStart:boolean,
  seperator:'.' | ',',
  decimalPlaces:number
}

class Currency {
  map: {[key: string]: Country} = {
    uk:{
      symbol:"£",
      atStart:true,
      seperator:".",
      decimalPlaces:2
    },
    us:{
      symbol:"$",
      atStart:true,
      seperator:".",
      decimalPlaces:2
    },
    fr:{
      symbol:"€", 
      atStart:false,
      seperator:",",
      decimalPlaces:2
    }
  }
  
  private displayValue;
  
  constructor(value:number, private countryCode:string){
    this.displayValue=value;
  }
  
  addSymbol(value) {
    if (this.map[this.countryCode].atStart) {
      return this.map[this.countryCode].symbol + value;
    }
    else {
      return value + this.map[this.countryCode].symbol;
    }
  }
  
  addDecimal(value:number, decimalPlaces:number) {
    let index:number = value.toString().length - decimalPlaces;
    let string:string = value.toString();
    let decimalSymbol = this.map[this.countryCode].seperator;
    if (index > 0) {
      return string.substr(0, index) + decimalSymbol + string.substr(index, string.length)
    } 
    else {
      return "0" + decimalSymbol + this.paddingLeft("0".repeat(decimalPlaces), string);
    }
  }

  paddingLeft(pad:string, str:string) {
    if (typeof str === 'undefined') return pad;
    return (pad + str).slice(-pad.length);
  }
  
  numberWithCommas = (number:any) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  get() {
    this.displayValue = this.addDecimal(this.displayValue, this.map[this.countryCode].decimalPlaces);
    this.displayValue = this.addSymbol(this.displayValue);
    return this.displayValue;
  }
}

let smUKPrice = new Currency(9,'uk');
console.log(smUKPrice.get());
let mdUKPrice = new Currency(99,'us');
console.log(mdUKPrice.get());
let lgUKPrice = new Currency(999,'uk');
console.log(lgUKPrice.get());
let frPrice = new Currency(999,'fr');
console.log(frPrice.get());
