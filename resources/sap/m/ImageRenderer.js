/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.ImageRenderer");sap.m.ImageRenderer={};
sap.m.ImageRenderer.render=function(r,i){if(!i.getVisible()){return}r.write("<img");r.writeAttributeEscaped("src",i._getDensityAwareSrc());r.writeControlData(i);r.addClass("sapMImg");r.writeClasses();var t=i.getTooltip_AsString();if(t){r.writeAttributeEscaped("title",t)}var u=i.getUseMap();if(u){if(!(jQuery.sap.startsWith(u,"#"))){u="#"+u}r.writeAttributeEscaped("useMap",u)}var m=0;if((i.getDecorative()&&(!u))){m=-1;r.writeAttribute("role","presentation");r.write(" alt=''")}else{if(i.getAlt()){r.writeAttributeEscaped("alt",i.getAlt()||t)}else if(t){r.writeAttributeEscaped("alt",t)}}r.writeAttribute("tabIndex",m);if(i.getWidth()&&i.getWidth()!=''){r.addStyle("width",i.getWidth())}if(i.getHeight()&&i.getHeight()!=''){r.addStyle("height",i.getHeight())}r.writeStyles();r.write(" />")};
