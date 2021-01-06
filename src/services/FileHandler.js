import * as XLSX from 'xlsx';


export const excelFileReader = (file) => {
    if(!file) return;
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);
    return new Promise((resolve, reject) => {
        fileReader.onload = (e) => {
            const arrayBuffer = fileReader.result;
            const data = new Uint8Array(arrayBuffer);
            const arr = [];
            for (let i = 0; i !== data.length; ++i) {
                arr[i] = String.fromCharCode(data[i]);
            }
            const bstr = arr.join('');
            const workbook = XLSX.read(bstr, {type: 'binary'});
            const first_sheet_name = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[first_sheet_name];
            const users = XLSX.utils.sheet_to_json(worksheet, {raw: true});
            resolve(users);
        };
    })


};

