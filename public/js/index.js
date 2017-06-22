'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  if(state.page == 4){
    wrapper.append(RegiterUser(_=>{render(root)}));
  }else  if(state.page == 5){
    wrapper.append(CheckRegister(_=>{render(root)}));
  }

  root.append(wrapper);
}
const state = {
  page: 4,
  user: {},
};

$( _ => {
    state.card.cardNumber="1123456789234562";
    const root = $("#root");
    render(root);
    $('.carousel').carousel({fullWidth: true});
    $('.carousel.carousel-slider').carousel({fullWidth: true});
});
