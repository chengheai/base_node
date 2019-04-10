let nowSelected_id = ''

//数据操作核心

// http://skipper.fun/pb
// http://skipper.fun/pb/getAllContact
{
    var add = (name, email, phoneNumber, tel, company, address,callback) => {
        $.ajax({
            type: 'get',
            url: 'http://skipper.fun/pb/addContact',
            data: {
                name: name,
                email: email,
                phoneNumber: phoneNumber,
                tel: tel,
                company: company,
                address: address
            },
            success: function (e) {
                console.log(e)
                callback(e)
            }
        })
    }
    var getAllContact = function(callback){
        $.ajax({
            type: 'get',
            url: 'http://skipper.fun/pb/getAllContact',
            data: {},
            success: function (e) {
                callback(e)
            }
        })
    }
    var remove = function(_id,callback){
        $.ajax({
            type: 'get',
            url: 'http://skipper.fun/pb/getAllContact',
            data: {
                _id : _id
            },
            success: function (e) {
                console.log('删除成功')
                callback(e)
            }
        })
    }
}

//我们能不能把数据放到别的地方？ ajax
/** 
{
    class Contact {
        constructor(name, email, phoneNumber, tel, company, address) {
            this.name = name
            this.email = email
            this.phoneNumber = phoneNumber
            this.tel = tel
            this.company = company
            this.address = address
            this._id = Math.random().toString()
        }
    }
    //把联系人添加到联系人列表里
    var add = (name, email, phoneNumber, tel, company, address) => {
        var c = new Contact(name, email, phoneNumber, tel, company, address)
        contactList.push(c)
        return true
    }
    //再列表里把这个联系人删除
    var remove = (_id) => {
        for (let i = 0; i < contactList.length; i++) {
            if (contactList[i]._id == _id) {
                contactList.splice(i, 1)
                return true
            }
        }
        return false
    }
    //搜索符合搜索条件的联系人
    var search = (key) => {
        let result = []
        contactList.forEach(e => {
            if (e.name.indexOf(key) > -1 ||
                e.email.indexOf(key) > -1 ||
                e.phoneNumber.indexOf(key) > -1 ||
                e.tel.indexOf(key) > -1 ||
                e.company.indexOf(key) > -1 ||
                e.address.indexOf(key) > -1
            ) {
                result.push(e)
            }
        })
        return result
    }
    //修改某一联系人
    var revise = (_id, property, newValue) => {
        debugger
        if (property == 'name' ||
            property == 'email' ||
            property == 'phoneNumber' ||
            property == 'tel' ||
            property == 'company' ||
            property == 'address'
        ) {

        } else {
            return false
        }
        for (let i = 0; i < contactList.length; i++) {
            if (contactList[i]._id == _id) {
                //修改
                contactList[i][property] = newValue
                return true
            }
        }
        return false
    }

    // add('孙东100', 'sundong666@qq.com', '13713713737', '6666666', '哈尔滨冬天做冰雕有限公司（被雕部门）', '中央大街桥洞第三块到第六快地砖')
}
*/

//界面
{
    let contactWrap = $('#contact-wrap')
    let addEventListener = function () {
        $('.delete-contact-button').on('click', function () {
            let result = confirm('你确定要删除吗？')
            if (result) {
                remove($(this).attr('data-_id') , function(e){
                    getAllContact(function(e){
                        fillData(e)
                    })
                })
            }
        })
        $('.revise-contact-button').on('click', function () {
            $('#reviseContact').modal('show')
            nowSelected_id = $(this).attr('data-_id')
        })
    }
    //把联系人数组渲染到页面中
    let fillData = (arr) => {
        let html = ``
        arr.forEach(e => {
            html += `
        <div class="col-lg-4 col-md-6 col-xs-12">
            <div class="panel panel-primary">
                <div class="panel-heading text-center">
                    <h4>
                        <strong>${e.name}</strong>
                    </h4>
                </div>
            <div class="panel-body">
                <ul class="list-group">
                    <li class="list-group-item">
                        <strong>手机号码：</strong> ${e.phoneNumber}</li>
                    <li class="list-group-item">
                        <strong>邮箱：</strong> ${e.email}</li>
                    <li class="list-group-item">
                        <strong>固定电话：</strong> ${e.tel}</li>
                    <li class="list-group-item">
                        <strong>公司：</strong> ${e.company}</li>
                    <li class="list-group-item">
                        <strong>地址：</strong> ${e.address}</li>
                </ul>
                <div class="btn-group btn-group-xs" role="group" aria-label="...">
                    <a type="button" class="btn btn-primary" href="tel:${e.phoneNumber}">
                        <i class="glyphicon glyphicon-earphone"></i> 拨打电话</a>
                    <button type="button" class="btn btn-primary">
                        <i class="glyphicon glyphicon-comment"></i> 发送短信</button>
                    <button type="button" class="btn btn-success">
                        <i class="glyphicon glyphicon-heart"></i> 添加收藏</button>
                    <button type="button" class="btn btn-info revise-contact-button" data-_id="${e._id}">
                        <i class="glyphicon glyphicon-heart"></i> 修改</button>
                    <button type="button" class="btn btn-danger delete-contact-button" data-_id="${e._id}">
                        <i class="glyphicon glyphicon-trash"></i> 删除</button>
                </div>
            </div>
        </div>
    </div>`
        })
        contactWrap.html(html)
        addEventListener()
    }
    getAllContact(function(e){
        fillData(e)
    })
    // 添加联系人
    let addSubmitButton = $('#add-submit')
    addSubmitButton.on('click', function () {
        add(
            $('#name-input').val(),
            $('#phoneNumber-input').val(),
            $('#emal-input').val(),
            $('#tel-input').val(),
            $('#company-input').val(),
            $('#address-input').val(),
            function(e){
                getAllContact(function(e){
                    fillData(e)
                })
            }
        )
        $('#addContactModal').modal('hide')
    })
    // 修改联系人
    // let reviseSubmitButton = $('#revise-submit')
    // let revisePropertytInput = $('#revise-propertyt-input')
    // let reviseValueInput = $('#revise-value-input')
    // reviseSubmitButton.on('click', function () {
    //     var property = revisePropertytInput.val()
    //     var newValue = reviseValueInput.val()

    //     var result = revise(nowSelected_id, property, newValue)
    //     if (result) {
    //         fillData(contactList)
    //         $('#reviseContact').modal('hide')
    //         revisePropertytInput.val('')
    //         reviseValueInput.val('')
    //     }
    // })
}