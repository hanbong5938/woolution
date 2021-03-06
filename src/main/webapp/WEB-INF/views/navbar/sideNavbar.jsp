<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" isELIgnored="false" %>

<!-- Main Sidebar Container -->
<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="/index" class="brand-link">
        <img src="${contextPath}/img/BIG_W_logo.png"
             alt="Woolution Logo"
             class="brand-image img-circle elevation-3"
             style="opacity: .8">
        <span class="brand-text font-weight-light">Woolution</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
        <!-- Sidebar Menu -->
        <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
                data-accordion="false">

                <%--cust-mgt--%>
                <li class="nav-item has-treeview">
                    <a href="#" class="nav-link">
                        <i class="fas fa-user-edit nav-icon"></i>
                        <p>
                            <spring:message code="cust"/> <spring:message code="mgt"/>
                            <i class="right fas fa-angle-left"></i>
                        </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a id="custMgtInfo" class="nav-link">
                                <i class="far fa-list-alt nav-icon"></i>
                                <p><spring:message code="cust"/> <spring:message code="info"/></p>
                            </a>
                        </li>
                    </ul>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a id="custMgtAnal" class="nav-link">
                                <i class="fas fa-chart-area nav-icon"></i>
                                <p><spring:message code="cust"/> <spring:message code="anal"/></p>
                            </a>
                        </li>
                    </ul>
                </li>

                <%--service-mgt--%>
                <li class="nav-item has-treeview">
                    <a href="#" class="nav-link">
                        <i class="fas fa-dog nav-icon"></i>
                        <p>
                            <spring:message code="service"/> <spring:message code="mgt"/>
                            <i class="right fas fa-angle-left"></i>
                        </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a id="serviceMgtInfo" class="nav-link">
                                <i class="far fa-list-alt nav-icon"></i>
                                <p><spring:message code="service"/> <spring:message code="info"/></p>
                            </a>
                        </li>
                    </ul>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a id="serviceMgtBook" class="nav-link">
                                <i class="far fa-calendar nav-icon"></i>
                                <p><spring:message code="service"/> <spring:message code="book"/></p>
                            </a>
                        </li>
                    </ul>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a id="serviceMgtAnal" class="nav-link">
                                <i class="fas fa-chart-line nav-icon"></i>
                                <p><spring:message code="service"/> <spring:message code="anal"/></p>
                            </a>
                        </li>
                    </ul>
                </li>

                <%--sales-mgt--%>
                <li class="nav-item has-treeview">
                    <a href="#" class="nav-link">
                        <i class="fas fa-calculator nav-icon"></i>
                        <p>
                            <spring:message code="sales"/> <spring:message code="mgt"/>
                            <i class="right fas fa-angle-left"></i>
                        </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a id="salesMgtInfo" class="nav-link">
                                <i class="far fa-list-alt nav-icon"></i>
                                <p><spring:message code="sales"/> <spring:message code="info"/></p>
                            </a>
                        </li>
                    </ul>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a id="salesMgtAnal" class="nav-link">
                                <i class="fas fa-chart-pie nav-icon"></i>
                                <p><spring:message code="sales"/> <spring:message code="anal"/></p>
                            </a>
                        </li>
                    </ul>
                </li>


                <!-- /.sidebar-menu -->
            </ul>
        </nav>
    </div>
    <!-- /.sidebar -->
</aside>
