<<<<<<< HEAD
<<<<<<< HEAD
$(function() {
  var layer = layui.layer

  initArtCateList()

  // 获取文章分类的列表
=======
$(function () {
  initArtCateList()
  //获取文章分类列表
>>>>>>> article
=======
$(function () {
  initArtCateList()
  //获取文章分类列表
>>>>>>> article
  function initArtCateList() {
    $.ajax({
      method: 'GET',
      url: '/my/article/cates',
<<<<<<< HEAD
<<<<<<< HEAD
      success: function(res) {
        var htmlStr = template('tpl-table', res)
        $('tbody').html(htmlStr)
      }
    })
  }

  // 为添加类别按钮绑定点击事件
  var indexAdd = null
  $('#btnAddCate').on('click', function() {
    indexAdd = layer.open({
      type: 1,
      area: ['500px', '250px'],
      title: '添加文章分类',
      content: $('#dialog-add').html()
    })
  })

  // 通过代理的形式，为 form-add 表单绑定 submit 事件
  $('body').on('submit', '#form-add', function(e) {
    e.preventDefault()
=======
=======
>>>>>>> article
      success(res) {
        const htmlStr = template('tpl-table', res);
        $('tbody').html(htmlStr);
      }
    })
  }
  // 为添加类别按钮绑定点击事件
  var indexAdd = null;
  $('#btnAddCate').on('click', function () {
    indexAdd = layui.layer.open({
      type: 1,
      area: ['500px', '250px'],
      title: '添加文章分类',
      content: $('#dialog-add').html(),
    })
  })
  // 通过代理的形式，为 form-add 表单绑定 submit 事件
  $('body').on('submit', '#form-add', function (e) {
    e.preventDefault();
<<<<<<< HEAD
>>>>>>> article
=======
>>>>>>> article
    $.ajax({
      method: 'POST',
      url: '/my/article/addcates',
      data: $(this).serialize(),
<<<<<<< HEAD
<<<<<<< HEAD
      success: function(res) {
        if (res.status !== 0) {
          return layer.msg('新增分类失败！')
        }
        initArtCateList()
        layer.msg('新增分类成功！')
        // 根据索引，关闭对应的弹出层
        layer.close(indexAdd)
      }
    })
  })
=======
=======
>>>>>>> article
      success(res) {
        if (res.status !== 0) {
          return layui.layer.msg('新增分类失败！');
        }
        initArtCateList();
        layui.layer.msg('新增分类成功！');
        // 根据索引，关闭对应的弹出层
        layui.layer.close(indexAdd);
      }
    })
  })
  //通过 **事件委派** 的形式，为 `btn-edit` 按钮绑定点击事件
  var indexEdit = null;
  $('tbody').on('click', '.btn-edit', function () {
    // 弹出一个修改文章分类信息的层
    indexEdit = layui.layer.open({
      type: 1,
      area: ['500px', '250px'],
      title: '修改文章分类',
      content: $('#dialog-edit').html(),
    })
    var id = $(this).attr('data-id');
    //发起请求获取对应分类的数据
    $.ajax({
      method: 'GET',
      url: `/my/article/cates/${id}`,
      success(res) {
        console.log(res);
        layui.form.val('form-edit', res.data)
      }
    })
  })
  //通过 事件委派 的方式，给修改按钮绑定点击事件
  $('body').on('submit', '#form-edit', function (e) {
    e.preventDefault();
    $.ajax({
      method: 'POST',
      url: '/my/article/updatecate',
      data: $(this).serialize(),
      success(res) {
        if (res.status !== 0) {
          return layui.layer.msg('更新分类数据失败');
        }
        layui.layer.msg('更新分类数据成功！');
        // 根据索引，关闭对应的弹出层
        layui.layer.close(indexEdit);
        initArtCateList()
      }
    })
  })
  //通过代理的形式，为删除按钮绑定点击事件
  $('tbody').on('click', '.btn-delete', function (e) {
    var id = $(this).attr('data-id');
    // 提示用户是否要删除
    layer.confirm('确认删除?', { icon: 3, title: '提示' }, function (index) {
      $.ajax({
        method: 'GET',
        url: `/my/article/deletecate/${id}`,
        success(res) {
          if (res.status !== 0) {
            return layui.layer.msg('删除分类失败！')
          }
          layui.layer.msg('删除分类成功！');
          layer.close(index);
          initArtCateList();
        }
      })
    })
  })
<<<<<<< HEAD
>>>>>>> article
=======
>>>>>>> article
})
