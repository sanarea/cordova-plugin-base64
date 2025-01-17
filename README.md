Image Base64 plugin for Cordova / PhoneGap
======================================================

This Plugin is used to encode base64 of any image, it uses js code for iOS, but in case of android it uses native code to handle android versions lower than v.3

## Usage

Example Usage:

```js
//filePath is the absolute path to the file(/mnt/sdcard/...)
window.Base64.encodeFile(filePath, function(base64){
 			console.log('file base64 encoding: ' + base64);
 		});
```

## Installation


for Cordova >= 5.0.0

cordova plugin add cordova-plugin-base64
cordova plugin add https://github.com/sanarea/cordova-plugin-base64.git

This has been successfully tested on Cordova 4.0

## MIT Licence

Copyright 2013 Monday Consulting GmbH

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
