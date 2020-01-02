<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>

<!-- Navbar -->
<nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
        <li class="nav-item d-none d-sm-inline-block">
            <a href="/index" class="nav-link">Home</a>
        </li>
    </ul>

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">

        <!-- Language Dropdown Menu -->
        <li class="nav-item dropdown">
            <a id="langIcon" class="nav-link" data-toggle="dropdown" href="#">
                <i class="flag-icon flag-icon-kr mr-2"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-right p-0">
                <a id="ko" class="dropdown-item set-language">
                    <i class="flag-icon flag-icon-kr mr-2"></i> <spring:message code="ko"/>
                </a>
                <a id="en" class="dropdown-item set-language">
                    <i class="flag-icon flag-icon-us mr-2"></i> <spring:message code="en"/>
                </a>
                <a id="ja" class="dropdown-item set-language">
                    <i class="flag-icon flag-icon-jp mr-2"></i> <spring:message code="ja"/>
                </a>
            </div>
        </li>
    </ul>
</nav>
<!-- /.navbar -->