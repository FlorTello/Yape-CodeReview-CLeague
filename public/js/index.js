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
    const root = $("#root");
    render(root);
});
