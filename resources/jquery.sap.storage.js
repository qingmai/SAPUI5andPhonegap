/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("jquery.sap.storage",false);(function(){var s=!!(window.JSON&&JSON.parse&&JSON.stringify);var S="state.key_";var f=function(p,a){var t="unknown";var P=a||S;var o;if(!o||typeof(p)==="string"){t=p||"session";try{o=window[t+"Storage"]}catch(e){o=null}}else if(typeof(p)===Object){t=p.getType?p.getType():"unknown";o=p}var b=!!o;this.put=function(i,c){if(b&&i){try{o.setItem(P+i,s?JSON.stringify(c):c);return true}catch(e){return false}}else{return false}};this.get=function(i){if(b&&i){try{var I=o.getItem(P+i);return s?JSON.parse(I):I}catch(e){return null}}else{return null}};this.remove=function(i){if(b&&i){try{o.removeItem(P+i);return true}catch(e){return false}}else{return false}};this.clear=function(){if(b){try{o.clear();return true}catch(e){return false}}else{return false}};this.getType=function(){return t}};var m={};jQuery.sap.storage=function(o){if(!o){o=jQuery.sap.storage.Type.session}if(typeof(o)==="string"&&jQuery.sap.storage.Type[o]){return m[o]||(m[o]=new f(o))}return new f(o)};jQuery.sap.storage.Type={local:"local",session:"session",global:"global"};f.apply(jQuery.sap.storage);m[jQuery.sap.storage.Type.session]=jQuery.sap.storage}());
