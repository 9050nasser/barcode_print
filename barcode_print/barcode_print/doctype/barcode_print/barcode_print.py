# Copyright (c) 2023, Mohammed Nasser and contributors
# For license information, please see license.txt

import frappe
from frappe import _
from frappe.model.document import Document


@frappe.whitelist()
class BarcodePrint(Document):
	def validate(self):
		doc = frappe.get_doc('Item', self.item)

		for row in doc.barcodes:

			self.barcode = row.barcode

		return
					
		