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
                        <button id="tableRegBtn" class="btn btn-primary btn-xs"><spring:message
                                code="button.reg"/></button>
                    </div>
                </div>
                <!-- /.card-header -->
                <div class="card-body">
                    <table id="dataTableInfo" class="table table-bordered table-striped">
                        <thead>
                        <tr>
                            <th><spring:message code="service.mgt.info.id"/></th>
                            <th><spring:message code="service.mgt.info.kind"/></th>
                            <th><spring:message code="service.mgt.info.desc"/></th>
                            <th><spring:message code="service.mgt.info.price"/></th>
                            <th><spring:message code="service.mgt.info.tet"/></th>
                            <th><spring:message code="service.mgt.info.state"/></th>
                            <th><spring:message code="service.mgt.info.createAT"/></th>
                            <th><spring:message code="edit"/></th>
                        </tr>
                        </thead>
                        <tfoot>
                        <tr>
                            <th><spring:message code="service.mgt.info.id"/></th>
                            <th><spring:message code="service.mgt.info.kind"/></th>
                            <th><spring:message code="service.mgt.info.desc"/></th>
                            <th><spring:message code="service.mgt.info.price"/></th>
                            <th><spring:message code="service.mgt.info.tet"/></th>
                            <th><spring:message code="service.mgt.info.state"/></th>
                            <th><spring:message code="service.mgt.info.createAT"/></th>
                            <th><spring:message code="edit"/></th>
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
        <div class="card card-primary card-outline">
            <div class="modal-header">
                <h3 class="modal-title"><i class="fas fa-edit"></i><spring:message code="service.mgt.insert"/></h3>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span></button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <div class="input-group">
                        <input name="id">
                    </div>
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">$</span>
                            <label>
                                <input name="service_kind" type="text" class="form-control">
                            </label>
                        </div>
                    </div>
                    <div class="input-group">
                        <div class="input-group-append">
                            <label>
                                <input name="service_desc" type="text" class="form-control">
                            </label>
                            <span class="input-group-text">.00</span>
                        </div>
                    </div>
                    <div class="input-group">
                        <div class="input-group-append">
                            <label>
                                <input name="service_price" type="number" class="form-control">
                            </label>
                            <span class="input-group-text">.00</span>
                        </div>
                    </div>
                    <div class="input-group">
                        <div class="input-group-append">
                            <label>
                                <input name="service_tet" type="text" class="form-control">
                            </label>
                            <span class="input-group-text">.00</span>
                        </div>
                    </div>
                    <div class="input-group">
                        <div class="input-group-append">
                            상태
                            <label>
                                <input name="service_state" type="number" class="form-control">
                            </label>
                            <span class="input-group-text">.00</span>
                        </div>
                    </div>
                    <div class="input-group">
                        <button class="btn btn-primary"><spring:message code="button.reg"/></button>
                        <button class="btn btn-info"><spring:message code="button.mod"/></button>
                        <button class="btn btn-danger"><spring:message code="button.del"/></button>
                    </div>
                </div>
            </div>
        </div>
        <%--/.modal-body--%>
    </div>
    <%--/.modal content--%>

</div>

<script src="${contextPath}/js/serviceMgt/serviceMgtInfo.js"></script>