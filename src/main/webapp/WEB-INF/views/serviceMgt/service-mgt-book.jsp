<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

<!-- Content Header (Page header) -->
<section class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
            </div>
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item active"><spring:message code="calendar"/></li>
                </ol>
            </div>
        </div>
    </div><!-- /.container-fluid -->
</section>

<!-- Main content -->
<section class="content">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-3">
                <div class="sticky-top mb-3">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title"><spring:message code="service"/></h4>
                        </div>
                        <div class="card-body">
                            <!-- the events -->
                            <div id="external-events">
                            </div>
                        </div>
                        <!-- /.card-body -->
                    </div>
                </div>
            </div>
            <!-- /.col -->
            <div class="col-md-9">
                <div class="card card-primary">
                    <div class="card-body p-0">
                        <!-- THE CALENDAR -->
                        <div id="calendar"></div>
                    </div>
                    <!-- /.card-body -->
                </div>
                <!-- /.card -->
            </div>
            <!-- /.col -->
        </div>
        <!-- /.row -->
    </div><!-- /.container-fluid -->
</section>
<!-- /.content -->

<!-- fullCalendar 2.2.5 -->
<script src="${contextPath}/plugins/fullcalendar/main.min.js"></script>
<script src="${contextPath}/plugins/fullcalendar-daygrid/main.min.js"></script>
<script src="${contextPath}/plugins/fullcalendar-timegrid/main.min.js"></script>
<script src="${contextPath}/plugins/fullcalendar-interaction/main.min.js"></script>

<script src="${contextPath}/js/serviceMgt/serviceMgtBook.js"></script>
