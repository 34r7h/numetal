"use strict";angular.module("numetal",["ngAnimate","ngAria","ngResource","ngSanitize","ngTouch","ui.router","ngFabForm","firebase"]),angular.module("numetal").directive("admin",function(){return{templateUrl:"scripts/admin/admin-d.html",restrict:"EA",controller:["$scope","$attrs",function(e,t){e.$parent.admin.s.type=t.type,e.$parent.admin.s.section=t.section}]}}),angular.module("numetal").directive("connect",function(){return{templateUrl:"scripts/connect/connect-d.html",restrict:"EA",link:function(e,t,n){},controller:["$scope",function(e){}]}}),angular.module("numetal").directive("content",function(){return{templateUrl:"scripts/content/content-d.html",restrict:"EA",controller:["$scope","$attrs",function(e,t){e.$parent.metal.s.type=t.type}]}}),angular.module("numetal").directive("contentSingle",["$state",function(e){return{templateUrl:"scripts/content-single/content-single-d.html",restrict:"EA",controller:["$scope","$attrs",function(t,n){t.$parent.metal.s.type=n.type,t.$parent.metal.s.params=e.params[t.$parent.metal.s.type]}]}}]),angular.module("numetal").directive("gallery",function(){return{templateUrl:"scripts/gallery/gallery-d.html",restrict:"EA",link:function(e,t,n){},controller:["$scope",function(e){}]}}),angular.module("numetal").directive("layout",function(){return{templateUrl:"scripts/layout/layout-d.html",restrict:"EA",link:function(e,t,n){},controller:["$scope",function(e){}]}}),angular.module("numetal").factory("Api",["$http","$state","Data","$firebaseObject","$timeout","State",function(e,t,n,o,a,s){var c={copy:function(e){return angular.copy(e)},get:function(t){var n={};return e.get(t).then(function(e){n.data=e}),n},go:function(e,n){t.go(e,n),t.reload(e)},add:function(e,t){function o(){t.updated=Date.now(),n.object[e]?null:n.object[e]={},n.array[e].$add(t).then(function(o){n.object.index?null:n.object.index={},n.object.posts?null:n.object.posts={},n.object.index[e]?null:n.object.index[e]={},t.section?n.object.index.sections?null:n.object.index.sections={}:null,t.section?n.object.index.sections[t.section]?n.object.index.sections[t.section][o.key()]=!0:(n.object.index.sections[t.section]={},n.object.index.sections[t.section][o.key()]=!0):null,n.object.index[e][o.key()]=!0;var a=[];t.tags?angular.forEach(t.tags,function(e){-1===a.indexOf(e)?a.push(e):null,n.object.index.tags?null:n.object.index.tags={},n.object.index.tags[e]?n.object.index.tags[e][o.key()]=!0:(n.object.index.tags[e]={},n.object.index.tags[e][o.key()]=!0)}):null,t.tags=a,n.object.posts[o.key()]=e,n.object.$save()})}function a(){console.error("New entries must have a name")}t.name?o():a()},rm:function(e,t){function a(){var a={bucket:"forgingtechnologies.com",access_key:"AKIAIYGVTJVFY77MNYCQ",secret_key:"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"};AWS.config.update({accessKeyId:a.access_key,secretAccessKey:a.secret_key}),AWS.config.region="us-west-2";var s=new AWS.S3,c={Bucket:a.bucket,Key:n.object[e][t].name};s.deleteObject(c,function(e,t){t||console.log("Check if you have sufficient permissions : "+e)}),n.media=o(n.refs.media).$loaded().then(function(o){o[n.object[e][t].name.replace(".","`")]=null,n.object[e][t]=null,n.object.posts[t]=null,n.object.index.media[t]=null,n.object.$save(),o.$save()})}function s(){angular.forEach(n.object.content[t].tags,function(e){n.object.index.tags[e][t]=null}),n.object.index.sections[n.object.content[t].section][t]=null,n.object[e][t]=null,n.object.index[e][t]=null,n.object.posts[t]=null,n.object.$save()}"media"===e?a():null,"media"!==e?s():null},save:function(e,t,o,s){function i(){console.log("checking tags",s.tags,o.tags);var e=[];angular.forEach(o.tags,function(a){-1===e.indexOf(a)?e.push(a):null,n.object.index.tags[a]?null:n.object.index.tags[a]={},n.object.index.tags[a][t]=!0,angular.forEach(s.tags,function(e){console.log(a,e),o.tags.indexOf(e)<0?n.object.index.tags[e][t]=null:null})}),o.tags=e}c.msg(arguments),i(),o.section!==s.section?(n.object.index.sections[s.section][t]=null,n.object.index.sections[o.section][t]=!0):null,n.object[e][t]=o,a(function(){n.object.$save()},2e3)},msg:function(e){var t=performance.now();console.log(performance.now()-t,e)}};return c}]),angular.module("numetal").factory("Data",["$firebaseObject","$firebaseArray","$firebaseAuth",function(e,t,n){for(var o="https://sizzling-fire-2548.firebaseio.com/data",a="https://sizzling-fire-2548.firebaseio.com/media",s=new Firebase(o),c=new Firebase(a),i=e(s),r=["content","site","media"],l={},u=r.length-1;u>=0;u--)l[r[u]]=t(s.child(r[u]));var d={object:{},array:[],refs:{media:c,fb:s}};return i.$loaded().then(function(e){d.object=e,d.array=l}),d}]),angular.module("numetal").factory("Facts",["Api","Data","State","Ux",function(e,t,n,o){for(;!(e&&t&&n&&o);)console.log("Awaiting DI");var a={api:e,data:t,state:n,ux:o};return a}]),angular.module("numetal").factory("State",["$state",function(e){var t={params:e.params,current:e.current,data:{}};return t}]),angular.module("numetal").factory("Ux",["$window",function(e){var t={xy:function(){return[e.innerWidth,e.innerHeight]}};return t}]),angular.module("numetal").directive("posts",function(){return{templateUrl:"scripts/posts/posts-d.html",restrict:"EA",link:function(e,t,n){},controller:["$scope",function(e){}]}}),angular.module("numetal").directive("postsSingle",function(){return{templateUrl:"scripts/posts-single/posts-single-d.html",restrict:"EA",link:function(e,t,n){},controller:["$scope",function(e){}]}}),angular.module("numetal").config(["$stateProvider","$urlRouterProvider","$locationProvider",function(e,t,n){n.hashPrefix("!"),t.otherwise("/"),e.state("metal",{url:"",template:"<layout></layout>","abstract":!0,controller:["Facts",function(e){var t=this;t.a=e.api,t.d=e.data,t.s=e.state,t.u=e.ux}],controllerAs:"metal"}).state("metal.home",{url:"/",template:"<posts></posts>"}).state("metal.about",{url:"/about",template:'<content-single type="about"></content-single>'}).state("metal.services",{url:"/services",template:'<content type="services" section="services"></content>'}).state("metal.services.services",{url:"/:services",template:'<content-single type="services" section="services"></content-single>'}).state("metal.clients",{url:"/clients",template:'<content type="clients" section="clients"></content>'}).state("metal.clients.clients",{url:"/:clients",template:'<content-single type="clients" section="clients"></content-single>'}).state("metal.posts",{url:"/posts",template:'<content section="posts" type="posts"></content>'}).state("metal.posts.posts",{url:"/:posts",template:'<content-single section="posts" type="posts"></content-single>'}).state("admin",{url:"/admin",template:"<ui-view></ui-view>",controller:["Facts",function(e){var t=this;t.a=e.api,t.d=e.data,t.s=e.state,t.u=e.ux}],controllerAs:"admin"}).state("admin.about",{url:"/about",template:'<admin type="about"></admin>'}).state("admin.services",{url:"/services",template:'<admin type="services"></admin>'}).state("admin.clients",{url:"/clients",template:'<admin type="clients"></admin>'}).state("admin.posts",{url:"/posts",template:'<admin type="posts"></admin>'}).state("admin.media",{url:"/media",template:'<admin type="media"></admin>',onEnter:["State",function(e){e.showMedia=!0}],onExit:["State",function(e){e.showMedia=!1}]})}]);var AWS=AWS;angular.module("numetal").directive("uploader",function(){return{restrict:"AE",templateUrl:"scripts/uploader/uploader-d.html",scope:{file:"@"},controller:["$scope","Api","$firebaseObject","Data","$timeout",function(e,t,n,o,a){e.uploadS3=function(){var s;console.info("Begin Uploading to S3",s=performance.now()),AWS.config.update({accessKeyId:e.creds.access_key,secretAccessKey:e.creds.secret_key}),AWS.config.region="us-west-2";var c=new AWS.S3({params:{Bucket:e.creds.bucket}}),i=Date.now(),r=[],l=n(o.refs.media);if(e.files.length)for(var u=[],d=[],m=[],p=e.files.length-1;p>=0;p--){d[p]=i+"-"+e.files[p].name,u[p]=e.files[p].type;var f={Key:d[p],ContentType:u[p],Body:e.files[p],ServerSideEncryption:"AES256"};c.putObject(f,function(t,n){return t?(console.error(t.message,t.code),!1):void setTimeout(function(){e.uploadProgress=0,e.$digest()},4e3)}).on("httpUploadProgress",function(t){e.uploadProgress=Math.round(t.loaded/t.total*100),e.$digest()}),m[p]=new FileReader,m[p].onload=function(e,t){return m[t].readAsDataURL(e),function(e){!function(n){var o=document.createElement("canvas"),s=o.getContext("2d"),c=n,i=new Image;i.src=c;var u=160,m=i.width/u;return o.width=u,o.height=i.height/m,s.drawImage(i,0,0,o.width,o.height),r[t]=o.toDataURL("image/jpeg",.81),l.$loaded().then(function(e){e[d[t].replace(".","`")]=r[t],a(e.$save(),5e3)}),e.target.result}(e.target.result)}}(e.files[p],p),t.add("media",{src:"https://s3-us-west-2.amazonaws.com/forgingtechnologies.com/"+d[p],type:u[p],name:d[p]})}else console.error("Please select a file to upload");console.info("End Upload to S3",performance.now()-s)}}],link:function(e,t,n){e.creds={bucket:"forgingtechnologies.com",access_key:"AKIAIYGVTJVFY77MNYCQ",secret_key:"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"},t.bind("change",function(t){var n=t.target.files,o=n[0];e.files=n,e.file=o,e.$parent.file=o,e.$apply()})}}});