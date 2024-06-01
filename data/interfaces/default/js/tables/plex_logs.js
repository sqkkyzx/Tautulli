var plex_log_table_options = {
    "destroy": true,
    "serverSide": false,
    "processing": false,
    "pagingType": "full_numbers",
    "order": [ 0, 'desc'],
    "pageLength": 50,
    "stateSave": true,
    "stateSaveParams": function (settings, data) {
        data.search.search = "";
        data.start = 0;
    },
    "stateDuration": 0,
    "language": {
                "search": "搜索：",
                "lengthMenu": "显示 _MENU_ 行每页",
                "emptyTable": "没有可用的日志信息。你是否在 <a href='settings'>设置</a> 中设置了日志文件夹？",
                "info": "显示第 _START_ 行到第 _END_ 行，共 _TOTAL_ 行",
                "infoEmpty": "显示第 0 行到第 0 行，共 0 行s",
                "infoFiltered": "（从 _MAX_ 行中过滤）",
                "loadingRecords": '<i class="fa fa-refresh fa-spin"></i> 加载项目中...</div>'
    },
    "autoWidth": false,
    "scrollX": true,
    "columnDefs": [
        {
            "targets": [0],
            "width": "15%",
            "className": "no-wrap"
        },
        {
            "targets": [1],
            "width": "10%",
            "className": "no-wrap"
        },
        {
            "targets": [2],
            "width": "75%"
        }
    ],
    "drawCallback": function (settings) {
        // Jump to top of page
        //$('html,body').scrollTop(0);
        $('#ajaxMsg').fadeOut();
    },
    "preDrawCallback": function(settings) {
        var msg = "<i class='fa fa-refresh fa-spin'></i>&nbsp; 正在获取行...";
        showMsg(msg, false, false, 0)
    }
}
