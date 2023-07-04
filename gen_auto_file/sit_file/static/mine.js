var count = 1;

function add_new_table(){
    count++;
    $('#list_table').append('<div class="form-row" id="form_row_'+ count +'">' +
                                '<div class="form-group col-md-3">' +
                                    '<label for="order_number">Order Number</label>' +
                                    '<input type="text" class="form-control" id="order_number_' + count + '" value="'+ count +'" readonly>' +
                                '</div>' +
                                '<div class="form-group col-md-3">' +
                                    '<label for="table_name">Table Name</label>' +
                                    '<input type="text" class="form-control" id="table_name_' + count + '">' +
                                '</div>' +
                                '<div class="form-group col-md-3">' +
                                    '<label for="storage_type">Storage Type</label>' +
                                    '<select class="form-control mb-3" id="table_type_' + count + '">' +
                                        '<option selected="">truncate/insert</option>' +
                                        '<option>single snapshot</option>' +
                                        '<option>append/insert</option>' +
                                        '<option>fact append only</option>' +
                                        '<option>multi snapshot</option>' +
                                        '<option>fact upsert</option>' +
                                        '<option>scd 2</option>' +
                                        '<option>scd 4 current</option>' +
                                        '<option>scd 4 hist</option>' +
                                    '</select>' +
                                '</div>' +
                                '<div class="form-group col-md-3">' +
                                    '<label style="display: block;">Action</label>' +
                                    '<button type="button" class="btn btn-outline-danger" onclick="remove_table(\'#form_row_'+ count +'\')">Remove</button>' +
                                '</div>' +
                            '</div>');

}

function remove_table(id){
    count--
    $(id).remove()
}

function collect_data(){
    var target_file_name = $('#target_file_name').val()
    var task_summary = $('#task_summary').val()
    var assignee = $('#assignee').val()
    var jira_srs_link = $('#jira_srs_link').val()
    var jira_sit_link = $('#jira_sit_link').val()
    var user_jira = $('#user_jira').val()
    var password_jira = $('#password_jira').val()

    var array_table = []
    for (let i = 1; i <= count; i++){
        var order_number = $('#order_number_' + i).val()
        var table_name = $('#table_name_' + i).val()
        var table_type = $('#table_type_' + i).find(":selected").text();
        var temp_object = {
            "order_number": order_number,
            "table_name": table_name,
            "storage_type": table_type
        }
        array_table.push(temp_object)
    }

    var data_object = {
        "target_file_name": target_file_name,
        "task_summary": task_summary,
        "assignee": assignee,
        "jira_srs_link": jira_srs_link,
        "jira_sit_link": jira_sit_link,
        "user_jira": user_jira,
        "password_jira": password_jira,
        "list_of_tables": array_table
    }

    console.log(data_object)
    $("#inp_data").val(JSON.stringify(data_object), function(){
        console.log("heelo")
    })

    $("#gen_data").submit()
}