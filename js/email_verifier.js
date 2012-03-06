/**
 * @author Craig Kaminsky
 * 
 */
function setup( elem_id, elem_error )
{
	
	$elem = $( '#' + elem_id );
	$elem.after( '<div id="' + elem_id + '_error"></div>' );
	
	if( elem_error == null )
	{
		$elemError = $( '#' + elem_id + '_error' );	
		map = {
			'border' : 'thin #CCC',
			'background-color' : '#FCFCFC',
			'color' : '#FF3300',
			'font-size' : '.8em'
		};
	}
	else
	{
		$elemError = $( '#' + elem_error );
		map = {}
	}
	
	$elemError.css( map );
	
	$elem.blur(
		function(){		
			/*
			 * make a call to the server-side script
			 * first setup a map with the email address as key/value pair
			 */ 
			form_data = {
				email_address : $elem.val()
			}
			// clear out the element's error box before getting the JSON
			$elemError.html( '' );
			$elemError.css( 'height', '1' );
			// add the loading icon
			$elemError.html( 'Verifying Email <img src="images/verifying.gif" border="0" alt="Verifying Email" style="padding-left:10px" />' );
			// get the JSON data (verify the email address)
			$.getJSON( 'EmailVerifier.cfc?method=ajaxVerifyEmail&returnformat=json', form_data, 
				function( data, status )
				{
					$elemError.html( data.MESSAGE );
					$elemError.css( 'height', '32' );
					options = {};
					$elemError.effect( 'highlight', options, 1600 );
					
				} 
			);			
		}
	);
	
}