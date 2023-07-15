import frappe
from frappe import _

@frappe.whitelist(allow_guest=True)
def get_barcode_value(item_code):
    item = frappe.get_doc('Item', item_code)
    for barcode in item.barcodes:
        return barcode.barcode