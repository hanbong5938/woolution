<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

<!-- Content Header (Page header) -->
<section class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1><spring:message code="sales"/> <spring:message code="mgt"/></h1>
            </div>
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="/index">Home</a></li>
                    <li class="breadcrumb-item active"><spring:message code="sales"/> <spring:message code="info"/></li>
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
                    <div class="row">
                        <div class="col-11">
                            <h3 class="card-title"><spring:message code="welcome"/></h3>
                        </div>
                        <div class="col-1">
                            <button id="tableRegBtn" class="btn btn-primary btn-xs right"><spring:message
                                    code="reg"/></button>
                        </div>
                    </div>
                </div>
                <!-- /.card-header -->
                <div class="card-body">
                    <table id="dataTableInfo" class="table table-bordered table-striped">
                        <thead>
                        <tr>
                            <th><spring:message code="number"/></th>
                            <th><spring:message code="service"/> <spring:message code="nm"/></th>
                            <th><spring:message code="cust"/> <spring:message code="nm"/></th>
                            <th><spring:message code="price"/></th>
                            <th><spring:message code="sales"/> <spring:message code="time"/></th>
                            <th><spring:message code="sales"/> <spring:message code="number"/></th>
                            <th><spring:message code="cust"/> <spring:message code="number"/></th>
                            <th><spring:message code="edit"/></th>
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
<div class="modal fade" id="salesMgtModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="color-palette-set">
            <%-- content--%>
            <div class="modal-content">
                <%--header--%>
                <div class="modal-header d-flex bg-gray-dark justify-content-center text-center">
                    <h3 class="modal-title"><i class="fas fa-edit"></i><spring:message code="sell"/> <spring:message
                            code="reg"/></h3>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                            aria-hidden="true">&times;</span></button>
                </div>

                <%--modal body--%>
                <div class="modal-body">
                    <div class="form-group">
                        <div class="input-group">
                            <input type="hidden" name="id">
                        </div>
                        <div class="form-group">
                            <label><spring:message code="service"/> <spring:message code="nm"/></label>
                            <select name="service_id" class="form-control"></select>
                        </div>
                        <div class="form-group">
                            <label><spring:message code="cust"/> <spring:message code="nm"/></label>
                            <select name="cust_id" class="form-control"></select>
                        </div>
                        <div class="form-group">
                            <label><spring:message code="price"/></label>
                            <input name="sales_price" class="form-control">
                        </div>
                        <div class="form-group">
                            <label><spring:message code="time"/></label>
                            <input name="sales_time" type="datetime-local" class="form-control">
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

<%--modal--%>
<div class="modal fade align-content-center" id="searchModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-xl" role="document">
        <div class="color-palette-set">
            <%-- content--%>
            <div class="modal-content">
                <%--header--%>
                <div class="modal-header d-flex bg-gray-dark justify-content-center text-center">
                    <h3 class="modal-title"><i class="fas fa-edit"></i><spring:message code="detail"/> <spring:message
                            code="info"/></h3>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                            aria-hidden="true">&times;</span></button>
                </div>

                <%--modal body--%>
                <div class="modal-body justify-content-center">
                    <table id="serviceNmInfo" class="table table-bordered table-striped">
                        <thead>
                        <tr>
                            <th><spring:message code="number"/></th>
                            <th><spring:message code="kind"/></th>
                            <th><spring:message code="nm"/></th>
                            <th><spring:message code="desc"/></th>
                            <th><spring:message code="price"/></th>
                            <th><spring:message code="tet"/></th>
                            <th><spring:message code="createAT"/></th>
                        </tr>
                        </thead>
                    </table>
                    <table id="custNmInfo" class="table table-bordered table-striped">
                        <thead>
                        <tr>
                            <th><spring:message code="number"/></th>
                            <th><spring:message code="nm"/></th>
                            <th><spring:message code="species"/></th>
                            <th><spring:message code="PhoneNo"/></th>
                            <th><spring:message code="address"/></th>
                            <th><spring:message code="sex"/></th>
                            <th><spring:message code="birthDay"/></th>
                            <th><spring:message code="parentNm"/></th>
                            <th><spring:message code="memo"/></th>
                        </tr>
                        </thead>
                    </table>
                </div>

                <%--/.modal-body--%>

                <%--footer--%>
                <div class="modal-footer flex-center">
                </div>
            </div>
        </div>
        <%--/.modal content--%>
    </div>
</div>

<script src="${contextPath}/js/salesMgt/salesMgtInfo.js"></script>