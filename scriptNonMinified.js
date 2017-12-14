		$(document).ready(function(event){
			klikvaak = 0;
            $('#counter').html(klikvaak);
			tienen = 0;
			$('#tienen').html(tienen);
			enen = 0;
			$('#enen').html(enen);
		    var windowWidth = $(window).width();
		    var windowHeight = $(window).height();
			if(windowWidth < 800){
	    		$('#navUnits').attr('data-toggle', 'collapse');
		        $('#navBarHeader').attr('data-target', '#bs-example-navbar-collapse-1');
	    		$('#navBarHeader').attr('data-toggle', 'collapse');
		        $('#navUnits').attr('data-target', '#bs-example-navbar-collapse-1');
			}
			else{
				$('#navUnits').removeProp('data-toggle');
				$('#navBarHeader').removeProp('data-toggle');
				$('#navUnits').removeProp('data-target');
				$('#navBarHeader').removeProp('data-target');
			}
        });

        $(window).on('resize', function(event){
        	$('#informatie').removeClass('invis');
        	$('#pre-info').addClass('invis');
    		var windowWidth = $(window).width();
			if(windowWidth < 800){
	    		$('#navUnits').attr('data-toggle', 'collapse');
		        $('#navBarHeader').attr('data-target', '#bs-example-navbar-collapse-1');
	    		$('#navBarHeader').attr('data-toggle', 'collapse');
		        $('#navUnits').attr('data-target', '#bs-example-navbar-collapse-1');
			}
			else{
				$('#navUnits').removeProp('data-toggle');
				$('#navBarHeader').removeProp('data-toggle');
				$('#navUnits').removeProp('data-target');
				$('#navBarHeader').removeProp('data-target');
			}
		});

        klik = function(){
        	if(klikvaak == 24){
        		document.location = './stap2.html'
        	}
        	else{
        		klikvaak++;
                $('#counter').html(klikvaak);
        	}
        }

        passwordCheck = function(){
        	if(document.getElementById('password').value=='b25ftw'){
				document.location = './stap3.html'
			}
        }
        geldCheck = function(){
        	if(document.getElementById('geldproblemen').value=='36'){
				document.location = './stap4.html'
			}
        }

        heerlijk = function(){
        	if(document.getElementById('heerlijk').value=='heerlijk'){
        		document.location='./stap5.html'
        	}
        }

        odz = function(){
        	if(document.getElementById('odz').value=='We gaan ons best doen!'){
        		document.location='./stap6.html'
        	}
        }

        tienenPlus = function(){
        	tienen++;
        	$('#tienen').html(tienen);
        	if(tienen==2 && enen==5){
        		$('#gehaald').removeClass('invis')
        	}else if(tienen==2 && enen==6){
                $('#b26').removeClass('invis');
                $('#gehaald').addClass('invis');
            }else{
                $('#gehaald').addClass('invis')
            }
        }

        enenPlus = function(){
        	enen++;
        	$('#enen').html(enen);
        	if(tienen==2 && enen==5){
        		$('#gehaald').removeClass('invis')
        	}else if(tienen==2 && enen==6){
                $('#b26').removeClass('invis');
                $('#gehaald').addClass('invis');
            }
            else{
                $('#gehaald').addClass('invis')
            }
        }