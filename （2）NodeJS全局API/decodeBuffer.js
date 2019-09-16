var base64Str = 'emhhbmdzYW46MTIzNDU2';
var buf1=Buffer.from(base64Str,"utf-8");
var base64=buf1.toString("base64");
console.log(base64);
