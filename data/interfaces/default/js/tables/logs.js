var log_table_options = {
    "destroy": true,
    "serverSide": true,
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
                "lengthMenu": "每页显示 _MENU_ 行",
                "emptyTable": "没有日志信息可用",
                "info": "显示第 _START_ 行到第 _END_ 行，共 _TOTAL_ 行",
                "infoEmpty": "显示第 0 行到第 0 行，共 0 行",
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
