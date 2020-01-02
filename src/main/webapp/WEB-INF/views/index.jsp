<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>


<%@ include file="./includes/header.jsp" %>

<%@ include file="./navbar/headerNavbar.jsp" %>

<%@ include file="./navbar/sideNavbar.jsp" %>

<div id="content-wrapper" class="content-wrapper">

    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item active"><a href="/index">Home</a></li>
                    </ol>
                </div><!-- /.col -->
            </div><!-- /.row -->
        </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-6">
                    <div class="card">
                        <div class="card-header border-0">
                            <div class="d-flex justify-content-between">
                                <h3 class="card-title"><spring:message code="visit"/> <spring:message code="count"/></h3>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="d-flex">
                                <p class="d-flex flex-column">
                                    <span class="text-bold text-lg" id = "weekVisitCnt">0</span>
                                    <span><spring:message code="visitorOverTime"/></span>
                                </p>
                                <p class="ml-auto d-flex flex-column text-right">
                    <span id="weekVisitPer">
                      <i class="fas fa-arrow-up"></i> 0%
                    </span>
                                    <span class="text-muted"><spring:message code="sinceLastWeek"/></span>
                                </p>
                            </div>
                            <!-- /.d-flex -->

                            <div class="position-relative mb-4">
                                <canvas id="visitors-chart" height="200"></canvas>
                            </div>

                            <div class="d-flex flex-row justify-content-end">
                  <span class="mr-2">
                    <i class="fas fa-square text-primary"></i> <spring:message code="thisWeek"/>
                  </span>

                                <span>
                    <i class="fas fa-square text-gray"></i> <spring:message code="lastWeek"/>
                  </span>
                            </div>
                        </div>
                    </div>
                    <!-- /.card -->

                    <div class="card">
                        <div class="card-header border-0">
                            <h3 class="card-title"><spring:message code="service"/></h3>
                        </div>
                        <div class="card-body table-responsive p-0">
                            <table id="dashboardTable" class="table table-striped table-valign-middle">
                                <thead>
                                <tr>
                                    <th><spring:message code="service"/></th>
                                    <th><spring:message code="price"/></th>
                                    <th><spring:message code="sell"/></th>
                                </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <!-- /.card -->
                </div>
                <!-- /.col-md-6 -->
                <div class="col-lg-6">
                    <div class="card">
                        <div class="card-header border-0">
                            <div class="d-flex justify-content-between">
                                <h3 class="card-title"><spring:message code="sales"/></h3>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="d-flex">
                                <p class="d-flex flex-column">
                                    <span class="text-bold text-lg" id="salesSumLast">￦ 0</span>
                                    <span><spring:message code="salesOverTime"/></span>
                                </p>
                                <p class="ml-auto d-flex flex-column text-right">
                                    <span id = "analSumPer">
                                        <i class="fas fa-arrow-up"></i> 0%
                                    </span>

                                    <span class="text-muted"><spring:message code="sinceLastMonth"/></span>
                                </p>
                            </div>
                            <!-- /.d-flex -->

                            <div class="position-relative mb-4">
                                <canvas id="sales-chart" height="200"></canvas>
                            </div>

                            <div class="d-flex flex-row justify-content-end">
                  <span class="mr-2">
                    <i class="fas fa-square text-primary"></i> <spring:message code="thisYear"/>
                  </span>

                                <span>
                    <i class="fas fa-square text-gray"></i> <spring:message code="lastYear"/>
                  </span>
                            </div>
                        </div>
                    </div>
                    <!-- /.card -->

                    <div class="card">
                        <div class="card-header border-0">
                            <h3 class="card-title"><spring:message code="overview"/></h3>
                        </div>
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center border-bottom mb-3">
                                <p class="text-success text-xl">
                                    <i class="ion ion-ios-refresh-empty"></i>
                                </p>
                                <p class="d-flex flex-column text-right">
                    <span id="visitIcon" class="font-weight-bold">
                    </span>
                                    <span class="text-muted"><spring:message code="visit"/></span>
                                </p>
                            </div>
                            <!-- /.d-flex -->
                            <div class="d-flex justify-content-between align-items-center border-bottom mb-3">
                                <p class="text-warning text-xl">
                                    <i class="ion ion-ios-cart-outline"></i>
                                </p>
                                <p class="d-flex flex-column text-right">
                    <span id = "salesIcon" class="font-weight-bold">
                    </span>
                                    <span class="text-muted"><spring:message code="revenue"/></span>
                                </p>
                            </div>
                            <!-- /.d-flex -->
                            <div class="d-flex justify-content-between align-items-center mb-0">
                                <p class="text-danger text-xl">
                                    <i class="ion ion-ios-people-outline"></i>
                                </p>
                                <p class="d-flex flex-column text-right">
                    <span class="font-weight-bold">
                      <i class="ion ion-android-arrow-down text-danger"></i> 1%
                    </span>
                                    <span class="text-muted">REGISTRATION RATE</span>
                                </p>
                            </div>
                            <!-- /.d-flex -->
                        </div>
                    </div>
                </div>
                <!-- /.col-md-6 -->
            </div>
            <!-- /.row -->
        </div>
        <!-- /.container-fluid -->
    </div>
    <!-- /.content -->

</div>

<%@ include file="./includes/footer.jsp" %>


<script src="${contextPath}/js/index.js"></script>
<script src="${contextPath}/js/dashboard.js"></script>
<script src="${contextPath}/plugins/chart.js/Chart.js"></script>

