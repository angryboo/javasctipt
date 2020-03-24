
const MenuDelTrattoria = (function() {
  function MenuDelTrattoria() {
    this.menu = [
      { class: 'Anti-Pasto', name: 'Bruschetta', price: 9500 },
      { class: 'Anti-Pasto', name: 'Caprese', price: 11000 },
      { class: 'Anti-Pasto', name: 'Caponata', price: 8000 },
      { class: 'Primo-Piato', name: 'Vongole', price: 13000 },
      { class: 'Primo-Piato', name: 'Carbonara', price: 12000 },
      { class: 'Primo-Piato', name: 'Bolognese', price: 15000 },
      { class: 'Secondo-Piato', name: 'Bistecca', price: 25000 },
      { class: 'Secondo-Piato', name: 'Busecca', price: 19000 },
      { class: 'Dolce', name: 'Tiramisu', price: 7000 },
      { class: 'Dolce', name: 'Caffe', price: 3000 }
    ];
  }

  // 메뉴의 평균값
  MenuDelTrattoria.prototype.getPrice = function() {
    const temp = this.menu.reduce((acc, cur) => acc + cur.price, 0);
    return temp / this.menu.length;
  };
  return MenuDelTrattoria;
}());

const menuDelTrattoria = new MenuDelTrattoria();

console.log(menuDelTrattoria.getPrice());
