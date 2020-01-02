<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

<!-- Content Header (Page header) -->
<section class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1><spring:message code="service"/> <spring:message code="mgt"/></h1>
            </div>
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="/index">Home</a></li>
                    <li class="breadcrumb-item active"><spring:message code="service"/> <spring:message code="mgt"/></li>
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
                            <button id="tableRegBtn" class="btn btn-primary btn-xs float-right"><spring:message
                                    code="reg"/></button>
                            <button id="tableCategoryRegBtn" class="btn btn-info btn-xs float-right"><spring:message
                                    code="category"/> <spring:message
                                    code="add"/></button>
                </div>
                <!-- /.card-header -->
                <div class="card-body">
                    <table id="dataTableInfo" class="table table-bordered table-striped">
                        <thead>
                        <tr>
                            <th><spring:message code="number"/></th>
                            <th><spring:message code="kind"/></th>
                            <th><spring:message code="nm"/></th>
                            <th><spring:message code="desc"/></th>
                            <th><spring:message code="price"/></th>
                            <th><spring:message code="tet"/></th>
                            <th><spring:message code="state"/></th>
                            <th><spring:message code="createAT"/></th>
                            <th><spring:message code="mod"/></th>
                        </tr>
                        </thead>
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

<%--modal--%>
<div class="modal fade" id="serviceMgtModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="color-palette-set">
            <%-- content--%>
            <div class="modal-content">
                <%--header--%>
                <div class="modal-header d-flex bg-gray-dark justify-content-center text-center">
                    <h3 class="modal-title"><i class="fas fa-edit"></i><spring:message code="service"/> <spring:message
                            code="reg"/></h3>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                            aria-hidden="true">&times;</span></button>
                </div>

                <%--modal body--%>
                <div class="modal-body">
                    <div class="form-group">
                        <div class="input-group">
                            <input type="hidden" name="id">
                            <input name="service_state" type="hidden" class="form-control">
                        </div>
                        <div class="form-group">
                            <label><spring:message code="service"/> <spring:message code="kind"/></label>
                            <select name="service_category_id" class="form-control">
                            </select>
                        </div>
                        <div class="form-group">
                            <label><spring:message code="service"/> <spring:message code="nm"/></label>
                            <input name="service_nm" type="text" class="form-control">
                        </div>
                        <div class="form-group">
                            <label><spring:message code="service"/> <spring:message code="desc"/></label>
                            <textarea name="service_desc" class="form-control" rows="3"></textarea>
                        </div>
                        <div class="form-group">
                            <label><spring:message code="service"/> <spring:message code="price"/></label>
                            <div class="input-group-prepend">
                                <input name="service_price" type="number" class="form-control">
                                <span class="input-group-text">￦</span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label><spring:message code="tet"/></label>
                            <div class="input-group-append">
                                <input name="service_tet" type="number" class="form-control">
                                <span class="input-group-text">min</span>
                            </div>
                        </div>

                    </div>
                </div>
                <%--/.modal-body--%>

                <%--footer--%>
                <div class="modal-footer flex-center">
                    <button class="btn btn-primary mr-1"><spring:message code="reg"/></button>
                    <button class="btn btn-info mr-1"><spring:message code="mod"/></button>
                    <button class="btn btn-danger"><spring:message code="del"/></button>
                </div>
            </div>
        </div>
        <%--/.modal content--%>
    </div>
</div>

<div class="modal fade" id="categoryAddModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
     aria-hidden="true">
    <div class="modal-dialog modal-sm" role="document">
        <!--Content-->
        <div class="modal-content">

            <!--Header-->
            <div class="modal-header bg-gray-dark">
            </div>
            <!--Body-->
            <div class="modal-body text-center mb-1">

                <div class="md-form ml-0 mr-0">
                    <label data-error="wrong" data-success="right" class="ml-0"><spring:message code="category"/>
                        <spring:message code="add"/></label>
                    <input type="text" name="service_category_name" class="form-control form-control-sm validate ml-0">
                </div>
                <div class="text-center mt-4">
                    <button class="btn btn-flat btn-secondary mt-1" id="categoryAddBtn"><spring:message
                            code="reg"/></button>
                </div>
            </div>

        </div>
        <!--/.Content-->
    </div>
</div>


<script src="${contextPath}/js/serviceMgt/serviceMgtInfo.js"></script>