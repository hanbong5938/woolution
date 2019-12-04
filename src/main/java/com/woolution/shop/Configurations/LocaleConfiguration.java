package com.woolution.shop.Configurations;

import org.springframework.context.MessageSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.ReloadableResourceBundleMessageSource;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.i18n.CookieLocaleResolver;
import org.springframework.web.servlet.i18n.LocaleChangeInterceptor;

import java.util.Locale;

@Configuration
public class LocaleConfiguration implements WebMvcConfigurer {

    //bean 이름을 설정해주지 않으면 method 이름과 같아 이름 변경
    @Bean(name = "localeResolver")
    public LocaleResolver getLocaleResolver() {
        //세션 사용하려는 경우
        // SessionLocaleResolver slr = new SessionLocaleResolver();
        // slr.setDefaultLocale(Locale.KOREAN);

        //쿠키 기준(세션이 끊겨도 브라우져에 설정된 쿠키 기준으로)
        CookieLocaleResolver localeResolver = new CookieLocaleResolver();
        //최초 기본 로케일을 강제로 설정이 가능 하다.
        //쿠키 기준(세션이 끊겨도 브라우져에 설정된 쿠키 기준으로)
        // CookieLocaleResolver localeResolver = new CookieLocaleResolver();
        CookieLocaleResolver cookieLocaleResolver = new CookieLocaleResolver();
        cookieLocaleResolver.setDefaultLocale(Locale.KOREAN);
        cookieLocaleResolver.setCookieName("APPLICATION_LOCALE");
        cookieLocaleResolver.setCookieMaxAge(60 * 60);

        return cookieLocaleResolver;
    }

    //Bean 이름 설정
    @Bean(name = "messageSource")
    // 메세지 소스 세팅
    public MessageSource getMessageResource() {
        ReloadableResourceBundleMessageSource messageResource = new ReloadableResourceBundleMessageSource();
        //resources/message 폴더 아래에 있는 messages 를 읽는다.(default) lang 값에 따라 _ko_KR, en_US 등이 추가 됨.
        messageResource.setBasename("classpath:message/message");
        messageResource.setDefaultEncoding("UTF-8");
        messageResource.setCacheSeconds(10); // reload messages every 10 seconds

        return messageResource;
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        LocaleChangeInterceptor localeInterceptor = new LocaleChangeInterceptor();
        //lang 이라는 파라미터로 받는다
        localeInterceptor.setParamName("lang");

        registry.addInterceptor(localeInterceptor).addPathPatterns("/*");
    }

}
