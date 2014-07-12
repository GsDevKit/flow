define("app/MiniMapless-Tests", ["amber/boot", "amber_core/SUnit", "app/MiniMapless"], function($boot){
var smalltalk=$boot.vm,nil=$boot.nil,_st=$boot.asReceiver,globals=$boot.globals;
smalltalk.addPackage('MiniMapless-Tests');
smalltalk.packages["MiniMapless-Tests"].transport = {"type":"amd","amdNamespace":"app"};

smalltalk.addClass('MaplessTest', globals.TestCase, [], 'MiniMapless-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "testLocalFresh",
protocol: 'tests',
fn: function (){
var self=this;
var createdOne,loadedOne;
function $Thing(){return globals.Thing||(typeof Thing=="undefined"?nil:Thing)}
function $Mapless(){return globals.Mapless||(typeof Mapless=="undefined"?nil:Mapless)}
function $Error(){return globals.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$4,$3;
createdOne=_st($Thing())._new();
_st(createdOne)._remember_((42));
$ctx1.sendIdx["remember:"]=1;
_st(createdOne)._localSave();
self._shouldnt_raise_((function(){
return smalltalk.withContext(function($ctx2) {
loadedOne=_st($Mapless())._localFindId_(_st(createdOne)._id());
loadedOne;
_st(loadedOne)._remember_("something");
$2=_st(loadedOne)._remember();
$ctx2.sendIdx["remember"]=1;
$1=_st($2).__eq("something");
$ctx2.sendIdx["="]=1;
self._assert_($1);
$ctx2.sendIdx["assert:"]=1;
_st(loadedOne)._localFresh();
$4=_st(loadedOne)._remember();
$ctx2.sendIdx["remember"]=2;
$3=_st($4).__eq("something");
$ctx2.sendIdx["="]=2;
self._deny_($3);
return self._assert_(_st(_st(loadedOne)._remember()).__eq((42)));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),$Error());
return self}, function($ctx1) {$ctx1.fill(self,"testLocalFresh",{createdOne:createdOne,loadedOne:loadedOne},globals.MaplessTest)})},
args: [],
source: "testLocalFresh\x0a\x0a\x09| createdOne loadedOne |\x0a\x09\x0a\x09createdOne := Thing new.\x0a\x09\x0a\x09createdOne remember: 42.\x0a\x09createdOne localSave.\x0a\x09\x0a\x09self shouldnt: [\x0a\x09\x09\x09loadedOne := Mapless localFindId: createdOne id.\x0a\x09\x09\x09loadedOne remember: 'something'.\x0a\x09\x09\x09self assert: loadedOne remember = 'something'.\x0a\x09\x09\x09loadedOne localFresh.\x0a\x09\x09\x09self deny: loadedOne remember = 'something'.\x0a\x09\x09\x09self assert: loadedOne remember = 42.\x0a\x09\x09] raise: Error\x0a\x0a\x0a\x09",
messageSends: ["new", "remember:", "localSave", "shouldnt:raise:", "localFindId:", "id", "assert:", "=", "remember", "localFresh", "deny:"],
referencedClasses: ["Thing", "Mapless", "Error"]
}),
globals.MaplessTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testLocalSaveAndDelete",
protocol: 'tests',
fn: function (){
var self=this;
var createdOne,loadedOne;
function $Thing(){return globals.Thing||(typeof Thing=="undefined"?nil:Thing)}
function $Mapless(){return globals.Mapless||(typeof Mapless=="undefined"?nil:Mapless)}
function $Error(){return globals.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
var $3,$4,$2,$1,$7,$8,$6,$5,$9,$12,$13,$11,$10;
createdOne=_st($Thing())._new();
_st(createdOne)._remember_("something");
$3=_st(window)._localStorage();
$ctx1.sendIdx["localStorage"]=1;
$4=_st(createdOne)._id();
$ctx1.sendIdx["id"]=1;
$2=_st($3)._getItem_($4);
$ctx1.sendIdx["getItem:"]=1;
$1=_st($2)._notNil();
$ctx1.sendIdx["notNil"]=1;
self._deny_($1);
_st(createdOne)._localSave();
self._shouldnt_raise_((function(){
return smalltalk.withContext(function($ctx2) {
$7=_st(window)._localStorage();
$ctx2.sendIdx["localStorage"]=2;
$8=_st(createdOne)._id();
$ctx2.sendIdx["id"]=2;
$6=_st($7)._getItem_($8);
$ctx2.sendIdx["getItem:"]=2;
$5=_st($6)._notNil();
self._assert_($5);
$ctx2.sendIdx["assert:"]=1;
$9=_st(createdOne)._id();
$ctx2.sendIdx["id"]=3;
loadedOne=_st($Mapless())._localFindId_($9);
$ctx2.sendIdx["localFindId:"]=1;
loadedOne;
self._assert_(_st(_st(loadedOne)._remember()).__eq("something"));
$ctx2.sendIdx["assert:"]=2;
_st(loadedOne)._localDelete();
$12=_st(window)._localStorage();
$13=_st(createdOne)._id();
$ctx2.sendIdx["id"]=4;
$11=_st($12)._getItem_($13);
$10=_st($11)._isNil();
$ctx2.sendIdx["isNil"]=1;
self._assert_($10);
$ctx2.sendIdx["assert:"]=3;
return self._assert_(_st(_st($Mapless())._localFindId_(_st(createdOne)._id()))._isNil());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),$Error());
return self}, function($ctx1) {$ctx1.fill(self,"testLocalSaveAndDelete",{createdOne:createdOne,loadedOne:loadedOne},globals.MaplessTest)})},
args: [],
source: "testLocalSaveAndDelete\x0a\x0a\x09| createdOne loadedOne |\x0a\x09\x0a\x09createdOne := Thing new.\x0a\x09\x0a\x09createdOne remember: 'something'.\x0a\x09\x0a\x09self deny: (window localStorage getItem: createdOne id) notNil.\x0a\x09\x0a\x09createdOne localSave.\x0a\x0a\x09self shouldnt: [\x0a\x09\x09self assert: (window localStorage getItem: createdOne id) notNil.\x0a\x09\x09loadedOne := Mapless localFindId: createdOne id.\x0a\x09\x09self assert: loadedOne remember = 'something'.\x0a\x09\x09\x0a\x09\x09loadedOne localDelete.\x0a\x09\x09self assert: (window localStorage getItem: createdOne id) isNil.\x0a\x09\x09self assert: (Mapless localFindId: createdOne id) isNil.\x0a\x09\x09] raise: Error\x0a\x0a\x09",
messageSends: ["new", "remember:", "deny:", "notNil", "getItem:", "localStorage", "id", "localSave", "shouldnt:raise:", "assert:", "localFindId:", "=", "remember", "localDelete", "isNil"],
referencedClasses: ["Thing", "Mapless", "Error"]
}),
globals.MaplessTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testLocalSaveAndFindOne",
protocol: 'tests',
fn: function (){
var self=this;
var createdOne,loadedOne;
function $Thing(){return globals.Thing||(typeof Thing=="undefined"?nil:Thing)}
function $Mapless(){return globals.Mapless||(typeof Mapless=="undefined"?nil:Mapless)}
function $Error(){return globals.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
var $3,$4,$2,$1,$7,$8,$6,$5,$9,$10,$12,$11;
createdOne=_st($Thing())._new();
_st(createdOne)._remember_("something");
$3=_st(window)._localStorage();
$ctx1.sendIdx["localStorage"]=1;
$4=_st(createdOne)._id();
$ctx1.sendIdx["id"]=1;
$2=_st($3)._getItem_($4);
$ctx1.sendIdx["getItem:"]=1;
$1=_st($2)._notNil();
$ctx1.sendIdx["notNil"]=1;
self._deny_($1);
_st(createdOne)._localSave();
$7=_st(window)._localStorage();
$8=_st(createdOne)._id();
$ctx1.sendIdx["id"]=2;
$6=_st($7)._getItem_($8);
$5=_st($6)._notNil();
self._assert_($5);
$ctx1.sendIdx["assert:"]=1;
self._shouldnt_raise_((function(){
return smalltalk.withContext(function($ctx2) {
$9=_st(createdOne)._id();
$ctx2.sendIdx["id"]=3;
loadedOne=_st($Mapless())._localFindId_($9);
loadedOne;
$10=_st(_st(loadedOne)._class()).__eq($Thing());
$ctx2.sendIdx["="]=1;
self._assert_($10);
$ctx2.sendIdx["assert:"]=2;
$12=_st(loadedOne)._id();
$ctx2.sendIdx["id"]=4;
$11=_st($12).__eq(_st(createdOne)._id());
$ctx2.sendIdx["="]=2;
self._assert_($11);
$ctx2.sendIdx["assert:"]=3;
return self._assert_(_st(_st(loadedOne)._remember()).__eq("something"));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),$Error());
return self}, function($ctx1) {$ctx1.fill(self,"testLocalSaveAndFindOne",{createdOne:createdOne,loadedOne:loadedOne},globals.MaplessTest)})},
args: [],
source: "testLocalSaveAndFindOne\x0a\x0a\x09| createdOne loadedOne |\x0a\x09\x0a\x09createdOne := Thing new.\x0a\x09\x0a\x09createdOne remember: 'something'.\x0a\x09\x0a\x09self deny: (window localStorage getItem: createdOne id) notNil.\x0a\x09\x0a\x09createdOne localSave.\x0a\x0a\x09self assert: (window localStorage getItem: createdOne id) notNil.\x0a\x0a\x09self shouldnt: [\x0a\x09\x09\x09loadedOne := Mapless localFindId: createdOne id.\x0a\x09\x09\x09self assert: loadedOne class = Thing.\x0a\x09\x09\x09self assert: loadedOne id = createdOne id.\x0a\x09\x09\x09self assert: loadedOne remember = 'something'.\x0a\x09\x09] raise: Error\x0a\x0a\x09",
messageSends: ["new", "remember:", "deny:", "notNil", "getItem:", "localStorage", "id", "localSave", "assert:", "shouldnt:raise:", "localFindId:", "=", "class", "remember"],
referencedClasses: ["Thing", "Mapless", "Error"]
}),
globals.MaplessTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testLocalUpdate",
protocol: 'tests',
fn: function (){
var self=this;
var createdOne,loadedOne;
function $Thing(){return globals.Thing||(typeof Thing=="undefined"?nil:Thing)}
function $Mapless(){return globals.Mapless||(typeof Mapless=="undefined"?nil:Mapless)}
function $Error(){return globals.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
var $3,$4,$2,$1,$7,$8,$6,$5,$9,$10,$12,$13,$11,$15,$14,$17,$16,$19,$18,$21,$20;
createdOne=_st($Thing())._new();
_st(createdOne)._remember_("something");
$ctx1.sendIdx["remember:"]=1;
$3=_st(window)._localStorage();
$ctx1.sendIdx["localStorage"]=1;
$4=_st(createdOne)._id();
$ctx1.sendIdx["id"]=1;
$2=_st($3)._getItem_($4);
$ctx1.sendIdx["getItem:"]=1;
$1=_st($2)._notNil();
$ctx1.sendIdx["notNil"]=1;
self._deny_($1);
$ctx1.sendIdx["deny:"]=1;
_st(createdOne)._localSave();
$ctx1.sendIdx["localSave"]=1;
$7=_st(window)._localStorage();
$8=_st(createdOne)._id();
$ctx1.sendIdx["id"]=2;
$6=_st($7)._getItem_($8);
$5=_st($6)._notNil();
self._assert_($5);
$ctx1.sendIdx["assert:"]=1;
self._shouldnt_raise_((function(){
return smalltalk.withContext(function($ctx2) {
$9=_st(createdOne)._id();
$ctx2.sendIdx["id"]=3;
loadedOne=_st($Mapless())._localFindId_($9);
$ctx2.sendIdx["localFindId:"]=1;
loadedOne;
$10=_st(_st(loadedOne)._class()).__eq($Thing());
$ctx2.sendIdx["="]=1;
self._assert_($10);
$ctx2.sendIdx["assert:"]=2;
$12=_st(loadedOne)._id();
$ctx2.sendIdx["id"]=4;
$13=_st(createdOne)._id();
$ctx2.sendIdx["id"]=5;
$11=_st($12).__eq($13);
$ctx2.sendIdx["="]=2;
self._assert_($11);
$ctx2.sendIdx["assert:"]=3;
$15=_st(loadedOne)._remember();
$ctx2.sendIdx["remember"]=1;
$14=_st($15).__eq("something");
$ctx2.sendIdx["="]=3;
self._assert_($14);
$ctx2.sendIdx["assert:"]=4;
$17=_st(loadedOne)._remember();
$ctx2.sendIdx["remember"]=2;
$16=_st($17).__eq("else");
$ctx2.sendIdx["="]=4;
self._deny_($16);
$ctx2.sendIdx["deny:"]=2;
_st(loadedOne)._remember_("else");
$19=_st(loadedOne)._remember();
$ctx2.sendIdx["remember"]=3;
$18=_st($19).__eq("else");
$ctx2.sendIdx["="]=5;
self._assert_($18);
$ctx2.sendIdx["assert:"]=5;
_st(loadedOne)._localSave();
loadedOne=_st($Mapless())._localFindId_(_st(createdOne)._id());
loadedOne;
$21=_st(loadedOne)._remember();
$ctx2.sendIdx["remember"]=4;
$20=_st($21).__eq("something");
$ctx2.sendIdx["="]=6;
self._deny_($20);
return self._assert_(_st(_st(loadedOne)._remember()).__eq("else"));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),$Error());
return self}, function($ctx1) {$ctx1.fill(self,"testLocalUpdate",{createdOne:createdOne,loadedOne:loadedOne},globals.MaplessTest)})},
args: [],
source: "testLocalUpdate\x0a\x0a\x09| createdOne loadedOne |\x0a\x09\x0a\x09createdOne := Thing new.\x0a\x09\x0a\x09createdOne remember: 'something'.\x0a\x09\x0a\x09self deny: (window localStorage getItem: createdOne id) notNil.\x0a\x09\x0a\x09createdOne localSave.\x0a\x0a\x09self assert: (window localStorage getItem: createdOne id) notNil.\x0a\x0a\x09self shouldnt: [\x0a\x09\x09\x09loadedOne := Mapless localFindId: createdOne id.\x0a\x09\x09\x09\x0a\x09\x09\x09self assert: loadedOne class = Thing.\x0a\x09\x09\x09self assert: loadedOne id = createdOne id.\x0a\x09\x09\x09self assert: loadedOne remember = 'something'.\x0a\x09\x09\x09self deny: loadedOne remember = 'else'.\x0a\x09\x09\x09loadedOne remember: 'else'.\x0a\x09\x09\x09self assert: loadedOne remember = 'else'.\x0a\x09\x09\x09loadedOne localSave.\x0a\x09\x09\x09loadedOne := Mapless localFindId: createdOne id.\x0a\x09\x09\x09self deny: loadedOne remember = 'something'.\x0a\x09\x09\x09self assert: loadedOne remember = 'else'.\x0a\x09\x09] raise: Error\x0a\x0a\x09",
messageSends: ["new", "remember:", "deny:", "notNil", "getItem:", "localStorage", "id", "localSave", "assert:", "shouldnt:raise:", "localFindId:", "=", "class", "remember"],
referencedClasses: ["Thing", "Mapless", "Error"]
}),
globals.MaplessTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testPath",
protocol: 'tests',
fn: function (){
var self=this;
function $Thing(){return globals.Thing||(typeof Thing=="undefined"?nil:Thing)}
function $Stuff(){return globals.Stuff||(typeof Stuff=="undefined"?nil:Stuff)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$4,$3;
$2=_st($Thing())._path();
$ctx1.sendIdx["path"]=1;
$1=_st($2).__eq("api/1.0/thing");
$ctx1.sendIdx["="]=1;
self._deny_($1);
$4=_st($Thing())._path();
$ctx1.sendIdx["path"]=2;
$3=_st($4).__eq("api/1.0/things");
$ctx1.sendIdx["="]=2;
self._assert_($3);
$ctx1.sendIdx["assert:"]=1;
self._assert_(_st(_st($Stuff())._path()).__eq("api/1.0/stuff"));
return self}, function($ctx1) {$ctx1.fill(self,"testPath",{},globals.MaplessTest)})},
args: [],
source: "testPath\x0a\x0a\x09self deny: Thing path = 'api/1.0/thing'.\x0a\x09self assert: Thing path = 'api/1.0/things'.\x0a\x0a\x09\x22ok, but what about irregulars?\x22\x0a\x09self assert: Stuff path = 'api/1.0/stuff'.\x0a\x09\x0a\x09",
messageSends: ["deny:", "=", "path", "assert:"],
referencedClasses: ["Thing", "Stuff"]
}),
globals.MaplessTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRemoteCreate",
protocol: 'tests',
fn: function (){
var self=this;
var createdOne,loadedOne;
function $Thing(){return globals.Thing||(typeof Thing=="undefined"?nil:Thing)}
function $MaplessCreateError(){return globals.MaplessCreateError||(typeof MaplessCreateError=="undefined"?nil:MaplessCreateError)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
createdOne=_st($Thing())._new();
_st(createdOne)._remember_("something");
_st(createdOne)._createDo_((function(res){
return smalltalk.withContext(function($ctx2) {
self._shouldnt_raise_((function(){
return smalltalk.withContext(function($ctx3) {
_st(createdOne)._onAfterCreated_(res);
$ctx3.sendIdx["onAfterCreated:"]=1;
$2=_st(res)._status();
$ctx3.sendIdx["status"]=1;
$1=_st($2).__eq((201));
$ctx3.sendIdx["="]=1;
return self._assert_($1);
$ctx3.sendIdx["assert:"]=1;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}),$MaplessCreateError());
return _st(createdOne)._createDo_((function(resp){
return smalltalk.withContext(function($ctx3) {
return _st((function(){
return smalltalk.withContext(function($ctx4) {
return _st(createdOne)._onAfterCreated_(resp);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)})}))._on_do_($MaplessCreateError(),(function(x){
return smalltalk.withContext(function($ctx4) {
return self._assert_(_st(_st(resp)._status()).__eq((409)));
}, function($ctx4) {$ctx4.fillBlock({x:x},$ctx3,5)})}));
}, function($ctx3) {$ctx3.fillBlock({resp:resp},$ctx2,3)})}));
}, function($ctx2) {$ctx2.fillBlock({res:res},$ctx1,1)})}));
$ctx1.sendIdx["createDo:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"testRemoteCreate",{createdOne:createdOne,loadedOne:loadedOne},globals.MaplessTest)})},
args: [],
source: "testRemoteCreate\x0a\x0a\x09| createdOne loadedOne |\x0a\x09\x0a\x09createdOne := Thing new.\x0a\x09\x0a\x09createdOne remember: 'something'.\x0a\x09\x09\x0a\x09createdOne createDo:[ :res |\x0a\x09\x09self shouldnt: [\x0a\x09\x09\x09\x09createdOne onAfterCreated: res.\x0a\x09\x09\x09\x09self assert: res status = 201 ]\x0a\x09\x09\x09raise: MaplessCreateError. \x0a\x0a\x09\x09createdOne createDo:[ :resp |\x0a\x09\x09[ createdOne onAfterCreated: resp ]\x0a\x09\x09\x09on: MaplessCreateError\x0a\x09\x09\x09do:[ :x | self assert: resp status = 409 ] ]\x0a\x09].",
messageSends: ["new", "remember:", "createDo:", "shouldnt:raise:", "onAfterCreated:", "assert:", "=", "status", "on:do:"],
referencedClasses: ["Thing", "MaplessCreateError"]
}),
globals.MaplessTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRemoteDelete",
protocol: 'tests',
fn: function (){
var self=this;
var createdOne,loadedOne;
function $Thing(){return globals.Thing||(typeof Thing=="undefined"?nil:Thing)}
return smalltalk.withContext(function($ctx1) { 
createdOne=_st($Thing())._new();
_st(createdOne)._remember_("something");
return self}, function($ctx1) {$ctx1.fill(self,"testRemoteDelete",{createdOne:createdOne,loadedOne:loadedOne},globals.MaplessTest)})},
args: [],
source: "testRemoteDelete\x0a\x0a\x09| createdOne loadedOne |\x0a\x09\x0a\x09createdOne := Thing new.\x0a\x09\x0a\x09createdOne remember: 'something'.\x0a\x09\x09\x0a\x09\x22createdOne saveDo:[\x0a\x0a\x09\x09self shouldnt: [\x0a\x09\x09\x09self assert: false.\x0a\x09\x09] raise: Error\x0a\x09].\x22\x0a\x0a\x0a\x09",
messageSends: ["new", "remember:"],
referencedClasses: ["Thing"]
}),
globals.MaplessTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRemoteRead",
protocol: 'tests',
fn: function (){
var self=this;
var createdOne,loadedOne;
function $Thing(){return globals.Thing||(typeof Thing=="undefined"?nil:Thing)}
return smalltalk.withContext(function($ctx1) { 
createdOne=_st($Thing())._new();
_st(createdOne)._remember_("something");
return self}, function($ctx1) {$ctx1.fill(self,"testRemoteRead",{createdOne:createdOne,loadedOne:loadedOne},globals.MaplessTest)})},
args: [],
source: "testRemoteRead\x0a\x0a\x09| createdOne loadedOne |\x0a\x09\x0a\x09createdOne := Thing new.\x0a\x09\x0a\x09createdOne remember: 'something'.\x0a\x09\x09\x0a\x09\x22createdOne saveDo:[\x0a\x0a\x09\x09self shouldnt: [\x0a\x09\x09\x09self assert: false.\x0a\x09\x09] raise: Error\x0a\x09].\x0a\x0a\x22\x0a\x09",
messageSends: ["new", "remember:"],
referencedClasses: ["Thing"]
}),
globals.MaplessTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRemoteSave",
protocol: 'tests',
fn: function (){
var self=this;
var createdOne,loadedOne;
function $Thing(){return globals.Thing||(typeof Thing=="undefined"?nil:Thing)}
return smalltalk.withContext(function($ctx1) { 
createdOne=_st($Thing())._new();
_st(createdOne)._remember_("something");
return self}, function($ctx1) {$ctx1.fill(self,"testRemoteSave",{createdOne:createdOne,loadedOne:loadedOne},globals.MaplessTest)})},
args: [],
source: "testRemoteSave\x0a\x0a\x09| createdOne loadedOne |\x0a\x09\x0a\x09createdOne := Thing new.\x0a\x09\x0a\x09createdOne remember: 'something'.\x0a\x09\x09\x0a\x09\x22createdOne saveDo:[\x0a\x0a\x09\x09self shouldnt: [\x0a\x09\x09\x09self assert: false.\x0a\x09\x09] raise: Error\x0a\x09].\x0a\x22\x0a\x0a\x09",
messageSends: ["new", "remember:"],
referencedClasses: ["Thing"]
}),
globals.MaplessTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRemoteUpdate",
protocol: 'tests',
fn: function (){
var self=this;
var createdOne,loadedOne;
function $Thing(){return globals.Thing||(typeof Thing=="undefined"?nil:Thing)}
return smalltalk.withContext(function($ctx1) { 
createdOne=_st($Thing())._new();
_st(createdOne)._remember_("something");
return self}, function($ctx1) {$ctx1.fill(self,"testRemoteUpdate",{createdOne:createdOne,loadedOne:loadedOne},globals.MaplessTest)})},
args: [],
source: "testRemoteUpdate\x0a\x0a\x09| createdOne loadedOne |\x0a\x09\x0a\x09createdOne := Thing new.\x0a\x09\x0a\x09createdOne remember: 'something'.\x0a\x09\x09\x0a\x09\x22createdOne saveDo:[\x0a\x0a\x09\x09self shouldnt: [\x0a\x09\x09\x09self assert: false.\x0a\x09\x09] raise: Error\x0a\x09].\x0a\x22\x0a\x0a\x09",
messageSends: ["new", "remember:"],
referencedClasses: ["Thing"]
}),
globals.MaplessTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testURI",
protocol: 'tests',
fn: function (){
var self=this;
var thing;
function $Thing(){return globals.Thing||(typeof Thing=="undefined"?nil:Thing)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
thing=_st($Thing())._new();
$2=_st(thing)._id();
$ctx1.sendIdx["id"]=1;
$1=_st($2)._notNil();
self._assert_($1);
$ctx1.sendIdx["assert:"]=1;
self._assert_(_st(_st(thing)._uri()).__eq("api/1.0/things/".__comma(_st(thing)._id())));
return self}, function($ctx1) {$ctx1.fill(self,"testURI",{thing:thing},globals.MaplessTest)})},
args: [],
source: "testURI\x0a\x09| thing |\x0a\x09\x0a\x09thing := Thing new.\x0a\x09\x0a\x09self assert: thing id notNil.\x0a\x09\x0a\x09self assert: thing uri = ('api/1.0/things/', thing id)",
messageSends: ["new", "assert:", "notNil", "id", "=", "uri", ","],
referencedClasses: ["Thing"]
}),
globals.MaplessTest);



smalltalk.addClass('Stuff', globals.Mapless, [], 'MiniMapless-Tests');

smalltalk.addMethod(
smalltalk.method({
selector: "pluralName",
protocol: 'accessing',
fn: function (){
var self=this;
return "stuff";
},
args: [],
source: "pluralName\x0a\x0a\x09^ 'stuff'",
messageSends: [],
referencedClasses: []
}),
globals.Stuff.klass);


smalltalk.addClass('Thing', globals.Mapless, [], 'MiniMapless-Tests');

});
