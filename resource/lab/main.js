String.prototype.hasString=function(source){
    if(typeof source == 'object'){
        for(var i= 0,j=source.length;i<j;i++)
            if(!this.hasString(source[i])) return !1;
        return !0;
    }
    if(this.indexOf(source) != -1) return !0;
};

var main=angular.module('ui',['ui.router','ui.buttons','ui.checkbox','ui.transition','ui.modal','ui.dialogs',
    'ui.position','ui.dropdown','ui.select','pascalprecht.translate','ui.datepicker','ui.timepicker','ui.grid','ui.inputSelect']);

