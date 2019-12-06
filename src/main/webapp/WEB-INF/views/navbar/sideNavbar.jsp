<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" isELIgnored="false" %>

<!-- Main Sidebar Container -->
<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="/index" class="brand-link">
        <img src="${contextPath}/img/AdminLTELogo.png"
             alt="Woolution Logo"
             class="brand-image img-circle elevation-3"
             style="opacity: .8">
        <span class="brand-text font-weight-light">Woolution</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
        <!-- Sidebar user (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
            <div class="image">
                <img src="${contextPath}/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
            </div>
            <div class="info">
                <a href="#" class="d-block">CEO.Woo</a>
            </div>
        </div>

        <!-- Sidebar Menu -->
        <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
                data-accordion="false">
                <li class="nav-item has-treeview">
                    <a href="#" class="nav-link">
                        <i class="nav-icon fas fa-table"></i>
                        <p>
                            <spring:message code="sample"/>
                            <i class="right fas fa-angle-left"></i>
                        </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a id="sampleTable" class="nav-link">
                                <i class="far fa-circle nav-icon"></i>
                                <p><spring:message code="sampleTable"/></p>
                            </a>
                        </li>
                    </ul>
                </li>

                <%--service-mgt--%>
                <li class="nav-item has-treeview">
                    <a href="#" class="nav-link">
                        <i class="nav-icon fas fa-book"></i>
                        <p>
                            <spring:message code="service.mgt"/>
                            <i class="right fas fa-angle-left"></i>
                        </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a id="serviceMgtInfo" class="nav-link">
                                <i class="far fa-circle nav-icon"></i>
                                <p><spring:message code="service.mgt.info"/></p>
                            </a>
                        </li>
                    </ul>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a id="serviceMgtMessage" class="nav-link">
                                <i class="far fa-circle nav-icon"></i>
                                <p><spring:message code="service.mgt.message"/></p>
                            </a>
                        </li>
                    </ul>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a id="serviceMgtCoupon" class="nav-link">
                                <i class="far fa-circle nav-icon"></i>
                                <p><spring:message code="service.mgt.coupon"/></p>
                            </a>
                        </li>
                    </ul>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a id="serviceMgtBook" class="nav-link">
                                <i class="far fa-circle nav-icon"></i>
                                <p><spring:message code="service.mgt.book"/></p>
                            </a>
                        </li>
                    </ul>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a id="serviceMgtAnal" class="nav-link">
                                <i class="far fa-circle nav-icon"></i>
                                <p><spring:message code="service.mgt.anal"/></p>
                            </a>
                        </li>
                    </ul>
                </li>

                <%--언어--%>
                <li class="nav-header"><spring:message code="lang"/></li>
                <li class="nav-item" id="ko">
                    <a href="#" class="nav-link set-language">
                        <i class="nav-icon far fa-circle text-info"></i>
                        <p><spring:message code="lang.ko"/></p>
                    </a>
                </li>
                <li class="nav-item" id="en">
                    <a href="#" class="nav-link set-language">
                        <div style="display: inline-block">
                            <img src="${contextPath}/img/flag/usa.png" width="10" height="10" alt="영어"/>
                        </div>
                        <p><spring:message code="lang.en"/></p>
                    </a>
                </li>
                <li class="nav-item" id="ja">
                    <a href="#" class="nav-link set-language">
                        <i class="nav-icon far fa-circle text-info"></i>
                        <p><spring:message code="lang.ja"/></p>
                    </a>
                </li>
            </ul>
        </nav>
        <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
</aside>
