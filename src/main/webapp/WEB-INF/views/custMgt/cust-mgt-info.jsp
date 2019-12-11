<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

<!-- Content Header (Page header) -->
<section class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1><spring:message code="cust"/> <spring:message code="mgt"/></h1>
            </div>
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="/index">Home</a></li>
                    <li class="breadcrumb-item active"><spring:message code="cust"/> <spring:message code="info"/></li>
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
                        <div class="col-10">
                            <h3 class="card-title"><spring:message code="welcome"/></h3>
                        </div>
                        <div class="col-2">
                            <button id="tableRegBtn" class="btn btn-primary btn-xs right"><spring:message
                                    code="reg"/></button>
                            <button id="tableCategoryRegBtn" class="btn btn-info btn-xs right"><spring:message
                                    code="category"/> <spring:message
                                    code="add"/></button>
                        </div>
                    </div>
                </div>
                <!-- /.card-header -->
                <div class="card-body">
                    <table id="dataTableInfo" class="table table-bordered table-striped">
                        <thead>
                        <tr>
                            <th><spring:message code="number"/></th>
                            <th><spring:message code="nm"/></th>
                            <th><spring:message code="species"/></th>
                            <th><spring:message code="PhoneNo"/></th>
                            <th><spring:message code="address"/></th>
                            <th><spring:message code="sex"/></th>
                            <th><spring:message code="birthDay"/></th>
                            <th><spring:message code="createAT"/></th>
                            <th><spring:message code="parentNm"/></th>
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
<div class="modal fade" id="custMgtModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="color-palette-set">
            <%-- content--%>
            <div class="modal-content">
                <%--header--%>
                <div class="modal-header d-flex bg-gray-dark justify-content-center text-center">
                    <h3 class="modal-title"><i class="fas fa-edit"></i><spring:message code="cust"/> <spring:message
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
                            <label><spring:message code="species"/></label>
                            <select name="puppy_species_id" class="form-control"></select>
                        </div>
                        <div class="form-group">
                            <label><spring:message code="nm"/></label>
                            <input name="cust_nm" type="text" class="form-control">
                        </div>
                        <div class="form-group">
                            <label><spring:message code="PhoneNo"/></label>
                            <input name="cust_no" type="tel" class="form-control">
                        </div>
                        <div class="form-group">
                            <label><spring:message code="address"/></label>
                            <input name="cust_address" type="text" class="form-control">
                        </div>
                        <div class="form-group">
                            <label><spring:message code="parentNm"/></label>
                            <input name="cust_parent_nm" type="text" class="form-control">
                        </div>
                        <div class="col-12 row">
                            <div class="form-group col-9">
                                <label><spring:message code="birthDay"/></label>
                                <input name="cust_birthDay" type="date" class="form-control">
                            </div>
                            <div class="form-group col-3">
                                <label><spring:message code="sex"/></label>
                                <select name="cust_sex" class="form-control">
                                    <option value="남">♂</option>
                                    <option value="">♀</option>
                                </select>
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

<div class="modal fade" id="categoryAddModal" tabindex="-1" role="dialog" aria-hidden="true">
    <!--Modal: Login with Avatar Form-->
    <div class="modal-dialog modal-sm" role="document">
        <!--Content-->
        <div class="modal-content">

            <!--Header-->
            <div class="modal-header bg-gray-dark">
            </div>
            <!--Body-->
            <div class="modal-body text-center mb-1">
                <div class="md-form ml-0 mr-0">
                    <label data-error="wrong" data-success="right" class="ml-0"><spring:message code="species"/>
                        <spring:message code="add"/></label>
                    <input type="text" name="puppy_species_nm" class="form-control form-control-sm validate ml-0">
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
<!--Modal: Login with Avatar Form-->


<script src="${contextPath}/js/custMgt/custMgtInfo.js"></script>