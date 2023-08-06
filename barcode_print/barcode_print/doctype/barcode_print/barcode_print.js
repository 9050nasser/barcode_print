// Copyright (c) 2023, Mohammed Nasser and contributors
// For license information, please see license.txt

frappe.ui.form.on("Barcode Print", { 
	refresh: function(frm, cdt, cdn) {
	frm.add_custom_button(__('Print Barcode'), function(){
	var me = this;
	var doc = frm.doc
	var print_format = "Barcode"; // print format name
	
	var w = window.open(frappe.urllib.get_full_url("/printview?"
		+"doctype="+encodeURIComponent(cdt)
		+"&name="+encodeURIComponent(cdn)
		+"&trigger_print=1"
		+"&format=" + print_format
		+"&no_letterhead=0"
		+("ar" ? ("&_lang="+"ar") : "")));
	
		if(!w) {
			msgprint(__("Please enable pop-ups for printing.")); return;
		}
})}
});
	