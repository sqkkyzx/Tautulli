notification_log_table_options = {
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
                "search":"搜索：",
                "lengthMenu": "显示 _MENU_ 行每页",
                "emptyTable": "没有日志信息可用",
                "info" :"显示第 _START_ 行到第 _END_ 行，共 _TOTAL_ 行",
                "infoEmpty": "显示第 0 行到第 0 行，共 0 行",
                "infoFiltered": "（从 _MAX_ 条记录中过滤）",
                "loadingRecords": '<i class="fa fa-refresh fa-spin"></i> 加载项目中...</div>'
    },
    "autoWidth": false,
    "scrollX": true,
    "columnDefs": [
        {
            "targets": [0],
            "data": "timestamp",
            "createdCell": function (td, cellData, rowData, row, col) {
                if (cellData !== '') {
                    $(td).html(moment(cellData, "X").format('YYYY-MM-DD HH:mm:ss'));
                }
            },
            "width": "10%",
            "className": "no-wrap"
        },
        {
            "targets": [1],
            "data": "notifier_id",
            "createdCell": function (td, cellData, rowData, row, col) {
                if (cellData !== '') {
                    $(td).html(cellData);
                }
            },
            "width": "5%",
            "className": "no-wrap"
        },
        {
            "targets": [2],
            "data": "agent_name",
            "createdCell": function (td, cellData, rowData, row, col) {
                if (cellData !== '') {
                    $(td).html(cellData);
                }
            },
            "width": "5%",
            "className": "no-wrap"
        },
        {
            "targets": [3],
            "data": "notify_action",
            "createdCell": function (td, cellData, rowData, row, col) {
                if (cellData !== '') {
                    $(td).html(cellData);
                }
            },
            "width": "5%",
            "className": "no-wrap"
        },
        {
            "targets": [4],
            "data": "subject_text",
            "createdCell": function (td, cellData, rowData, row, col) {
                if (cellData !== '') {
                    $(td).html(cellData);
                }
            },
            "width": "25%"
        },
        {
            "targets": [5],
            "data": "body_text",
            "createdCell": function (td, cellData, rowData, row, col) {
                if (cellData !== '') {
                    $(td).html(cellData);
                }
            },
            "width": "48%"
        },
        {
            "targets": [6],
            "data": "success",
            "createdCell": function (td, cellData, rowData, row, col) {
                if (cellData === 1) {
                    $(td).html('<span class="success-tooltip" data-toggle="tooltip" title="Notification Sent"><i class="fa fa-lg fa-fw fa-check"></i></span>');
                } else {
                    $(td).html('<span class="success-tooltip" data-toggle="tooltip" title="Notification Failed"><i class="fa fa-lg fa-fw fa-times"></i></span>');
                }
            },
            "searchable": false,
            "orderable": false,
            "className": "no-wrap",
            "width": "2%"
        },
    ],
    "drawCallback": function (settings) {
        // Jump to top of page
        //$('html,body').scrollTop(0);
        $('#ajaxMsg').fadeOut();

        // Create the tooltips.
        $('body').tooltip({
            selector: '[data-toggle="tooltip"]',
            container: 'body'
        });
    },
    "preDrawCallback": function(settings) {
        var msg = "<i class='fa fa-refresh fa-spin'></i>&nbsp; 正在获取行...";
        showMsg(msg, false, false, 0)
    }
};
