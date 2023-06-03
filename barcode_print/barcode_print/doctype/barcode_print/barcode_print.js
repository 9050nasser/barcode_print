// Copyright (c) 2023, Mohammed Nasser and contributors
// For license information, please see license.txt

frappe.ui.form.on('Barcode Print', {
	refresh: function(frm) {
		frm.add_custom_button(__('Print Barcode'), function(){
			
			cur_frm.print_doc();			
		})
	}
});
