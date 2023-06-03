import frappe
from frappe import _
from jinja2 import template

def get_barcode_value(item_code):
    item = frappe.get_doc('Item', item_code)

    for barcode in item.item_barcodes:
        return barcode.barcode