App = Ember.Application.create();

App.Router.map(function() {
	this.resource('articulo1');
	this.resource('articulo2');
	this.resource('articulo3');
	this.resource('articulo4');
	this.resource('articulo5');
	this.resource('articulo6');
	this.resource('articulo7');
	this.resource('articulo8');
	this.resource('articulo9');
	this.resource('articulo10');
	this.resource('articulo11');
});


$(document).on('ready', function(){
    $('#menu-icon').on('click', function(){
        $('#menu-list').toggleClass('active');
    });

    $('#menu-list a').on('click', function(){
        $('#menu-list').toggleClass('active');
        $(document).scrollTop(0);
    });
})