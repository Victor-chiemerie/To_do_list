export default class LocalStorage {
  static getData() {
    return JSON.parse(localStorage.getItem('list'));
  }

  static saveData(list) {
    localStorage.setItem('list', JSON.stringify(list));
  }
}