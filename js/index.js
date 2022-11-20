import QuakesController from './QuakesController.js';

let quakeController = new QuakesController();
window.addEventListener('DOMContentLoaded', () => {
    quakeController.init(document.getElementById('quakeList'));
});
