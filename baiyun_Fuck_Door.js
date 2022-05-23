var obj = JSON.parse($response.body);
if (obj.obj) {
  obj.obj=  [{
      "bluetoothMajor" : "42929",
      "status" : 0,
      "code" : "98566177",
      "sn" : "9A3CCEE3",
      "macNum" : "40:8E:A7:B1:D8:C6",
      "bluetoothUUID" : "E2C56DB5-DFFB-4848-D2B0-60D0F5A71096",
      "bluetoothMinor" : "55494",
      "companyId" : "e5f08eee82d44ddbb8ea0d28a0585299",
      "updUser" : "null",
      "limitTime" : "2023-01-1",
      "name" : "默认大门",
      "crtName" : "null",
      "updTime" : "2021-10-14 16:32:16",
      "id" : "a679c1306f1a4f2b9f9a5eb090a35cd4",
      "productKey" : "0503070104070606",
      "crtUser" : "null",
      "companyName" : "门禁系统",
      "attendanceCode" : "",
      "crtTime" : "2019-03-23 20:35:22",
      "bluetoothName" : "BYEA7B1D8C6",
      "address" : "棠景街棠溪南棠溪南天五巷9号"
    }]
 $notify(obj);
}
$notify(obj);
$done({ body: JSON.stringify(obj) });