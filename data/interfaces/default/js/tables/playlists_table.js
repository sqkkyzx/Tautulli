playlists_table_options = {
    "destroy": true,
    "language": {
        "search": "搜索：",
        "lengthMenu": "每页显示 _MENU_ 条",
        "info": "显示 _START_ 到 _END_ 的 _TOTAL_ 个播放列表",
        "infoEmpty": "显示第 0 条到第 0 条，共 0 条记录",
        "infoFiltered": "<span class='hidden-md hidden-sm hidden-xs'>（从 _MAX_ 条中过滤）</span>",
        "emptyTable": "表中无数据",
        "loadingRecords": '<i class="fa fa-refresh fa-spin"></i> 加载项目中...</div>'
    },
    "pagingType": "full_numbers",
    "stateSave": true,
    "stateSaveParams": function (settings, data) {
        data.search.search = "";
        data.start = 0;
    },
    "stateDuration": 0,
    "processing": false,
    "serverSide": true,
    "pageLength": 25,
    "order": [0, 'asc'],
    "autoWidth": false,
    "scrollX": true,
    "columnDefs": [
        {
            "targets": [0],
            "data": "title",
            "createdCell": function (td, cellData, rowData, row, col) {
                if (cellData !== '') {
                    var smart = '<i class="fa fa-blank fa-fw"></i>';
                    if (rowData['smart']) {
                        smart = '<span class="media-type-tooltip" data-toggle="tooltip" title="智能播放列表"><i class="fa fa-cog fa-fw"></i></span>&nbsp;'
                    }
                    var breadcrumb = '';
                    if (rowData['userID']) {
                        breadcrumb = '&user_id=' + rowData['userID'];
                    } else if (rowData['librarySectionID']) {
                        breadcrumb = '&section_id=' + rowData['librarySectionID'];
                    }
                    var thumb_popover = '<span class="thumb-tooltip" data-toggle="popover" data-img="' + page('pms_image_proxy', rowData['composite'], rowData['ratingKey'], 300, 300, null, null, null, 'cover') + '" data-height="80" data-width="80">' + cellData + '</span>';
                    $(td).html(smart + '<a href="' + page('info', rowData['ratingKey']) + breadcrumb +'">' + thumb_popover + '</a>');
                }
            },
            "width": "60%",
            "className": "no-wrap"
        },
        {
            "targets": [1],
            "data": "leafCount",
            "createdCell": function (td, cellData, rowData, row, col) {
                if (cellData !== '') {
                    var type = MEDIA_TYPE_HEADERS[rowData['playlistType']] || '';
                    if (rowData['leafCount'] === 1) {
                        type = type.slice(0, -1);
                    }
                    $(td).html(cellData + ' ' + type);
                }
            },
            "width": "20%",
            "className": "no-wrap"
        },
        {
            "targets": [2],
            "data": "duration",
            "createdCell": function (td, cellData, rowData, row, col) {
                if (cellData !== '') {
                    $(td).html(humanDuration(cellData, 'dhm'));
                }
            },
            "width": "20%",
            "className": "no-wrap"
        }
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
        $('body').popover({
            selector: '[data-toggle="popover"]',
            html: true,
            sanitize: false,
            container: 'body',
            trigger: 'hover',
            placement: 'right',
            template: '<div class="popover history-thumbnail-popover" role="tooltip"><div class="arrow" style="top: 50%;"></div><div class="popover-content"></div></div>',
            content: function () {
                return '<div class="history-thumbnail" style="background-image: url(' + $(this).data('img') + '); height: ' + $(this).data('height') + 'px; width: ' + $(this).data('width') + 'px;" />';
            }
        });
    },
    "preDrawCallback": function(settings) {
        var msg = "<i class='fa fa-refresh fa-spin'></i>&nbsp; 正在获取行...";
        showMsg(msg, false, false, 0);
        $('[data-toggle="tooltip"]').tooltip('destroy');
    },
    "rowCallback": function (row, rowData, rowIndex) {
    }
};