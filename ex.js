function BreakInDetected(){
alert('Security Violation')
return false
}
function NetscapeBrowser(e){
if (document.layers||
document.getElementById&&!document.all)
{
if (e.which==2||e.which==3){
BreakInDetected()
return false
}
}
}
function InternetExploreBrowser(){
if (event.button==2){
BreakInDetected()
return false
}
}
if (document.layers){
document.captureEvents(Event.MOUSEDOWN)
document.onmousedown=NetscapeBrowser()
}
else if (document.all&&!document.getElementById){
document.onmousedown=InternetExploreBrowser()
}
document.oncontextmenu=new Function(
"BreakInDetected();return false")
