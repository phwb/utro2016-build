webpackJsonp([18],{94:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var i=n(95),r=o(i);e.exports=function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],n=t.id;if(!n)return!1;var o=new r["default"]({el:e,id:n});return o.render(),o}},95:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){if(!e)return!1;var t=Backbone.$,n=e.get("name"),o=e.get("timestamp"),i=e.get("date"),r=t(".schedule-detail-title");o&&(i=_.template.formatDate("dd Mm, D",new Date(1e3*o))),r.text(n+". "+i)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(2),c=n(108),d=o(c),f=n(10),b=o(f),v=n(8),h=o(v),p=function(e){function t(){return i(this,t),r(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),s(t,[{key:"toggleMySchedule",value:function(){if(!this.model)return u.logger.error("исключительная ситуация, не найдена модель расписания"),this;var e=this.model.toggle();this.$button[e?"addClass":"removeClass"]("b-button_color_cancel"),this.$button.find("span").text(e?"Убрать из моего расписания":"Добавить в мое расписание")}},{key:"initialize",value:function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=e.id;if(!t)throw new Error("чтобы посмотреть расписание, нужно передать айдишник");var n=b["default"].get(t);if(!n)throw new Error("на нашли расписание с таким айдишником "+t);this.model=n;var o=h["default"].get(n.get("dayID"));o&&l(o),this.$content=this.$el.find(".content-block-inner")}},{key:"render",value:function(){return this.model?(this.$content.html(this.template(this.model.toJSON())),this.$button=this.$el.find(".b-button"),this):this}},{key:"template",get:function(){return _.template(d["default"])}},{key:"events",get:function(){return{"click .b-button":"toggleMySchedule"}}}]),t}(Backbone.View);t["default"]=p},108:function(e,t){e.exports='<div class="b-event"><div class="b-event__header"><div class="b-event__properties"><div class="b-event__time"><%= start %>\n<% if (end) { %>   – <%= end %>\n<% } %></div><div class="b-event__location"><%= location %></div></div><div class="b-event__title"><%= name %></div></div><% if (text) { %><div class="b-event__body"><% if (type === \'text\') { %>\n  <%- text %>\n<% } else { %>\n  <%= text %>\n<% } %></div><% } %></div><div class="b-section b-txt-centered"><a class="b-button b-button_color_add <%= my ? "b-button_color_cancel" : "" %>" href="#"><svg class="b-button__icon b-button__icon_star"><use xlink:href="#icon_star"></use></svg> <span><%= my ? "Убрать из моего расписания" : "Добавить в мое расписание" %></span></a></div>'}});