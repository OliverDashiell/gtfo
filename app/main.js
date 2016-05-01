import Vue from "vue";
import dirs_component from "app/components/directions/main";

var app = new Vue({
    el: '#Main',
    data: {
        message: 'Hello Vue.js!'
    },
    components: {
        directions: dirs_components
    }
});

window.app = app;
