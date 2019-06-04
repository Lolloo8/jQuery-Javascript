jQuery(function() {
	function $(id) {
		return document.getElementById(id);
	}

	dragula([$('drag-elements'), $('drop-target')], {
		revertOnSpill: true
	}).on('drop', function(el) {
		if ($('drop-target').children.length > 0 && $('drop-target').children.length <= 3 ) {
			$('translate').innerHTML = $('drop-target').innerHTML;
		} else {
			
		}
	});
});