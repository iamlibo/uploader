/*!build time : 2014-03-27 6:08:38 PM*/
KISSY.add("gallery/uploader/1.5/theme",function(a,b,c){function d(a){var b=this;d.superclass.constructor.call(b,a)}var e="",f=b.all,g={BUTTON:"-button",QUEUE:"-queue"},h="text/uploader-theme";return a.extend(d,c,{render:function(){var a=this,b=a.get("uploader");b.set("theme",a),a._addThemeCssName(),a._tplFormHtml(),a._bind()},_selectHandler:function(){},_addHandler:function(){},_removeHandler:function(){},_waitingHandler:function(){},_startHandler:function(){},_progressHandler:function(){},_successHandler:function(){},_errorHandler:function(){},_restore:function(){var b=this,c=b.get("uploader"),d=c.getPlugin("urlsInput");if(!d)return!1;var e=d.get("autoRestore");if(!e)return!1;var f=c.get("queue"),g=f.get("files");return g.length?(a.each(g,function(a,d){a.status="success",c.fire("add",{file:a,index:d}),b._renderHandler("_successHandler",{file:a,result:a.result}),b._hideStatusDiv(a)}),b):!1},_addThemeCssName:function(){var b=this,c=b.get("name"),d=b.get("queueTarget"),f=b.get("uploader"),h=f.get("target");return d.length?c==e?!1:(d.length&&d.addClass("ks-uploader-queue "+c+g.QUEUE),h.addClass(c+g.BUTTON),b):(a.log("\u4e0d\u5b58\u5728\u5bb9\u5668\u76ee\u6807\uff01"),!1)},_bind:function(){var b=this,c=b.get("uploader"),d=["add","remove","select","start","progress","success","error","complete"];c.on(d[0],function(a){var d=b._appendFileDom(a.file),e=c.get("queue");e.updateFile(a.index,{target:d})}),c.on(d[1],function(a){b._removeFileDom(a.file)}),a.each(d,function(a){c.on(a,function(a){var c="_"+a.type+"Handler";b._renderHandler(c,a)})})},_renderHandler:function(a,b){var c=this,d=c[a];c._setStatusVisibility(b.file),d&&d.call(c,b)},_setStatusVisibility:function(b){var c=this;if(!a.isObject(b)||a.isEmptyObject(b))return c;c._hideStatusDiv(b);var d=b.status,e=b.target;if(!e.length)return!1;var f=e.all("."+d+"-status");f.length&&f.show();var g=["waiting","start","uploading","progress","error","success"];return a.each(g,function(a){e.removeClass(a)}),e.addClass(d),c},_hideStatusDiv:function(b){if(!a.isObject(b))return!1;var c=b.target;c&&c.length&&c.all(".status").hide()},_appendFileDom:function(b){var c,d=this,e=d.get("fileTpl"),g=f(d.get("queueTarget"));return g.length?(c=a.substitute(e,b),f(c).hide().appendTo(g).fadeIn(.4).data("data-file",b)):!1},_removeFileDom:function(b){if(!a.isObject(b))return!1;var c=b.target;return c&&c.length?(c.fadeOut(.4,function(){c.remove()}),void 0):!1},_tplFormHtml:function(){var a=this,b=a.get("fileTpl"),c=f(a.get("queueTarget")),d=!1;if(!c.length)return!1;var e=c.all("script");return e.each(function(c){c.attr("type")==h&&(d=!0,b=c.html(),a.set("fileTpl",b))}),b}},{ATTRS:{name:{value:e},use:{value:e},fileTpl:{value:e},authMsg:{value:{}},queueTarget:{value:e,getter:function(a){return f(a)}},queue:{value:e},uploader:{value:e}}}),d},{requires:["node","base"]}),KISSY.add("gallery/uploader/1.5/themes/editorMultipleUploader/index",function(a,b,c){function d(a){var b=this;d.superclass.constructor.call(b,a)}var e=b.all;return a.extend(d,c,{_addHandler:function(a){var b=this,c=a.file,d=c.id,f=e(".J_Del_"+d);f.data("data-file",c),f.on("click",b._delHandler,b)},_startHandler:function(){},_progressHandler:function(){},_successHandler:function(a){var b=this,c=a.file,d=c.id,e=b.get("uploader"),f=e.getPlugin("proBars");if(!f){var g=c.target;if(!g)return!1;g.all(".J_ProgressBar_"+d).hide()}},_errorHandler:function(b){var c=b.msg||b.result.msg,d=b.file;if(!d)return!1;var f=b.file.id;e(".J_ErrorMsg_"+f).html(c),a.log(c)},_delHandler:function(a){var b=this,c=b.get("uploader"),d=c.get("queue"),f=e(a.target).data("data-file"),g=d.getFileIndex(f.id),h=f.status;("start"==h||"progress"==h)&&c.cancel(g),d.remove(g)}},{ATTRS:{name:{value:"editorMultipleUploader"},fileTpl:{value:'<tr id="queue-file-{id}" data-name="{name}"><td class="ks-editor-upload-filename">{name}</td><td class="ks-editor-upload-filesize">{textSize}</td><td class="ks-editor-upload-progress"><div class="status-wrapper"><div class="status waiting-status start-status progress-status success-status"><div class="J_ProgressBar_{id} ks-editor-progressbar"></div><span class="ks-editor-progressbar-title J_ProgressCount_{id}">0%</span></div><div class="status error-status"><p class="J_ErrorMsg_{id}">\u670d\u52a1\u5668\u6545\u969c\uff0c\u8bf7\u7a0d\u5019\u518d\u8bd5\uff01</p></div></div></td><td><a href="#" class="ks-editor-upload-delete J_Del_{id} del-pic">\u5220\u9664</a></td></tr>'},allowExts:{value:"jpg,png,gif,jpeg"},authMsg:{value:{max:"\u6bcf\u6b21\u6700\u591a\u4e0a\u4f20{max}\u4e2a\u56fe\u7247\uff01",maxSize:"\u56fe\u7247\u8d85\u8fc7{maxSize}\uff01",required:"\u81f3\u5c11\u4e0a\u4f20\u4e00\u5f20\u56fe\u7247\uff01",allowExts:"\u4e0d\u652f\u6301{ext}\u683c\u5f0f\uff01",allowRepeat:"\u8be5\u56fe\u7247\u5df2\u7ecf\u5b58\u5728\uff01",widthHeight:"\u56fe\u7247\u5c3a\u5bf8\u4e0d\u7b26\u5408\u8981\u6c42\uff01"}}}}),d},{requires:["node","../../theme"]});