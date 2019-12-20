<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

<!-- Main content -->
<section class="content">
    <div class="container-fluid">
        <div class="col-12">

            <!-- AREA CHART -->
            <div class="card card-primary">
                <div class="card-header">
                    <h3 class="card-title"><spring:message code="monthly"/> <spring:message code="service"/> <spring:message code="use"/> <spring:message code="anal"/></h3>

                    <div class="card-tools">
                        <button type="button" class="btn btn-tool" data-card-widget="collapse"><i
                                class="fas fa-minus"></i>
                        </button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="chart">
                        <canvas id="areaChart"
                                style="min-height: 250px; height: 250px; max-height: 250px; max-width: 100%;"></canvas>
                    </div>
                </div>
                <!-- /.card-body -->
            </div>
            <!-- /.card -->

            <!-- DONUT CHART -->
            <div class="card card-danger">
                <div class="card-header">
                    <h3 class="card-title"><spring:message code="service"/> <spring:message code="category"/> <spring:message code="anal"/></h3>

                    <div class="card-tools">
                        <button type="button" class="btn btn-tool" data-card-widget="collapse"><i
                                class="fas fa-minus"></i>
                        </button>
                    </div>
                </div>
                <div class="card-body">
                    <canvas id="donutChart"
                            style="min-height: 250px; height: 250px; max-height: 250px; max-width: 100%;"></canvas>
                </div>
                <!-- /.card-body -->
            </div>
            <!-- /.card -->


            <div class="card card-success">
                <div class="card-header">
                    <h3 class="card-title"><spring:message code="use"/> <spring:message code="service"/> <spring:message code="anal"/></h3>

                    <div class="card-tools">
                        <button type="button" class="btn btn-tool" data-card-widget="collapse"><i
                                class="fas fa-minus"></i>
                        </button>
                    </div>
                </div>
                <!-- /.card-header -->
                <div class="card-body">
                    <table id="progressAnal" class="table table-bordered">
                        <thead>
                        <tr>
                            <th><spring:message code="category"/></th>
                            <th><spring:message code="nm"/></th>
                            <th><spring:message code="graph"/></th>
                            <th style="width: 40px"><spring:message code="percent"/></th>
                            <th style="width: 10px"><spring:message code="count"/></th>
                        </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
                <!-- /.card-body -->
                <div class="card-footer clearfix">
                </div>
            </div>
            <!-- /.card -->
        </div>
        <!-- /.col -->

    </div>
</section>

<script src="${contextPath}/js/serviceMgt/serviceMgtAnal.js"></script>
<script src="${contextPath}/plugins/chart.js/Chart.js"></script>