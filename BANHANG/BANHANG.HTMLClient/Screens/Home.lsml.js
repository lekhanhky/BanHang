﻿/// <reference path="~/GeneratedArtifacts/viewModel.js" />
/// <reference path="../Scripts/c1ls-4.0.20142.37.js" />

if (typeof c1ls === "undefined") {
    window.location.href = "http://bit.ly/c1ls-nuget";
}

myapp.Home.ScreenContent_render = function (element, contentItem) {

    var ul = "<ul class='msls-tile-list ui-listview' data-role='listview' data-inset='true'>";
    var liClass = "ui-li ui-btn ui-btn-up-a";
    var divClass = "msls-presenter msls-list-child msls-ctl-group-custom-control msls-vauto msls-hstretch msls-compact-padding msls-presenter-content msls-hscroll";
    var border = "border-left-width:1px; border-right-width:1px; border-top-width:1px; border-bottom-width:1px;";
    var width = "width:254px;";

    var items = [];
    var excluded = ["Screen", "AddEditMónItem1", "BrowseBàn", "AddEditBànItem1", "ViewBànItem1", "AddEditKhu_VựcItem1", "BrowseKhuVuc", "ViewKhu_VựcItem1", "ViewMónItem1", "AddEditNhóm_MónItem", "BrowseNhóm_Món", "ViewNhóm_MónItem", "AddEditChonMonChiTiet1", "BrowseChonMonChiTiets", "ViewChonMonChiTiet1", "AddEditChonMon11", "ViewChonMon11", "vDoanh_Thu_Ngày_Theo_Khách_HàngBrowse", "vDoanh_Thu_Ngày_Theo_Sản_PhẩmBrowse", "vDoanh_Thu_NgàyBrowse", "vLời_Lỗ_Ngày_Theo_Khách_HàngBrowse", "vLời_Lỗ_Ngày_Theo_Sản_PhẩmBrowse", "vLời_Lỗ_NgàyBrowse", "vTồn_Công_Nợ_Phải_Thu_Khách_HàngBrowse", "vTồn_Công_Nợ_Phải_Trả_Nhà_Cung_CấpBrowse", "vTồn_Quỹ_Tiền_MặtBrowse","BrowseChonMons","ChonMonsBrowse"];
    //var excluded = ["Screen", "AddEditMónItem1", "AddEditBànItem1", "ViewBànItem1", "AddEditKhu_VựcItem1", "ViewKhu_VựcItem1", "AddEditMónItem1", "ViewMónItem1", "AddEditNhóm_MónItem", "ViewNhóm_MónItem", "BrowseChonMons", "AddEditChọn_MónItem","BrowseChọn_Món","ViewChọn_MónItem"];
    excluded.push(contentItem.screen.details.getModel().name);

    $.each(myapp, function (key, value) {
        if (key.slice(0, 4) === "show") {
            var name = key.substring(4);

            if (excluded.indexOf(name) < 0) {
                myapp[name].prototype.constructor([], undefined);
                var model = myapp[name].prototype.details.getModel();
                var display = model.displayName;
                var tap = " onclick=myapp." + key + "()";
                var li = "<li title='" + display + "' class='" + liClass + "' data-msls='true' style='" + width + border + "'" + tap + ">";
                var div = "<div class='" + divClass + "'><span>" + display + "</span></div>" + "</li>";
                items.push(li + div);
            }
        }
    });

    items.sort();
    ul = ul + items.join("\r\n") + "</ul>";
    $(ul).appendTo($(element));

};