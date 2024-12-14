import PopOverComponent from './PopOverComponent';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('#ComponentContainer');
  const widget = new PopOverComponent(container, {
    title: 'Заголовок',
    text: 'Текст',
  });
  widget.bindToDOM();
  // console.log('Component started!');
});
