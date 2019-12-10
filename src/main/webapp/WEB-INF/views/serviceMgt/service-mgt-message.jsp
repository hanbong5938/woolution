<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

<!-- Content Header (Page header) -->
<section class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1><spring:message code="sampleTable"/></h1>
            </div>
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item active">DataTables</li>
                </ol>
            </div>
        </div>
    </div><!-- /.container-fluid -->
</section>

<!-- Main content -->
<section class="content">
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <div class="col-8">
                        <h3 class="card-title">DataTable with default features</h3>
                    </div>
                    <div class="col-4">
                        <button id="tableRegButton" class="btn btn-primary btn-xs"><spring:message code="reg"/></button>
                    </div>
                </div>
                <!-- /.card-header -->
                <div class="card-body">
                    <table id="sample" class="table table-bordered table-striped">
                        <thead>
                        <tr>
                            <th>id</th>
                            <th>comment</th>
                            <th>sample</th>
                            <th>edit</th>
                        </tr>
                        </thead>
                        <tbody id="sampleTbody">
                        </tbody>
                        <tfoot>
                        <tr>
                            <th>id</th>
                            <th>comment</th>
                            <th>sample</th>
                            <th>edit</th>
                        </tr>
                        </tfoot>
                    </table>
                </div>
                <!-- /.card-body -->
            </div>
            <!-- /.card -->
        </div>
        <!-- /.col -->
    </div>
    <!-- /.row -->
</section>
<!-- /.content -->


<div class="modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-content">
        <!-- Input addon -->
        <div class="modal-header">
            <h3 class="modal-title">Input Addon</h3>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                    aria-hidden="true">&times;</span></button>
        </div>
        <div class="modal-body">
            <div class="form-group">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">$</span>
                        <input name="comment" type="text" class="form-control">
                    </div>
                </div>
                <div class="input-group">
                    <div class="input-group-append">
                        <input name="price" type="number" class="form-control">
                        <span class="input-group-text">.00</span>
                    </div>
                </div>
                <div class="input-group">
                    <button class="btn btn-primary"><spring:message code="reg"/></button>
                </div>
            </div>
        </div>
        <%--/.modal-body--%>
    </div>
    <%--/.modal content--%>
</div>


