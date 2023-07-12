import csv
import json
# import xmltodict
import xml.etree.ElementTree as ET
from inventory_report.reports.simple_report import SimpleReport
from inventory_report.reports.complete_report import CompleteReport


class Inventory:
    def import_data_json(path):
        with open(path) as f:
            content = f.read()
            json_file = json.loads(content)
            return json_file

    def import_data_csv(path):
        with open(path, 'r') as f:
            content = csv.reader(f, delimiter=",", quotechar='"')
            header, *data = content
            return [dict(zip(header, row)) for row in data]

    # def import_data_xml(path):
    #     with open(path, 'r') as f:
    #         content = f.read()
    #         parsed_data = xmltodict.parse(content)
    #         return parsed_data['dataset']['record']

    def import_data_xml(path):
        tree = ET.parse(path)
        root = tree.getroot()
        keys_set = set()
        xml_dict = dict()
        xml_list = list()
        for child in root.findall('record'):
            keys_set = {elem.tag for elem in root.iter()}
            keys_set.remove('record')
            keys_set.remove('dataset')
            values = [child.find(key).text for key in keys_set]
            xml_dict = dict(zip(keys_set, values))
            xml_list.append(xml_dict)

        return xml_list

    def generate_data(path, file_extension):
        if file_extension == "csv":
            return Inventory.import_data_csv(path)

        if file_extension == "json":
            return Inventory.import_data_json(path)

        if file_extension == "xml":
            return Inventory.import_data_xml(path)

    def import_data(path, type):
        file_path = path.split(".")

        if type == "simples":
            file = Inventory.generate_data(path, file_path[1])
            return SimpleReport.generate(file)

        if type == "completo":
            file = Inventory.generate_data(path, file_path[1])
            return CompleteReport.generate(file)
