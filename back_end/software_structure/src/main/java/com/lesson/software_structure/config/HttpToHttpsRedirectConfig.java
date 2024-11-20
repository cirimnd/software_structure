package com.lesson.software_structure.config;

import org.apache.catalina.connector.Connector;
import org.springframework.context.annotation.Configuration;
import org.springframework.boot.web.server.WebServerFactoryCustomizer;
import org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory;
import org.springframework.boot.web.server.Ssl;
//import org.springframework.boot.web.server.SslStoreProvider;

@Configuration
public class HttpToHttpsRedirectConfig implements WebServerFactoryCustomizer<TomcatServletWebServerFactory> {

    @Override
    public void customize(TomcatServletWebServerFactory factory) {
        factory.addAdditionalTomcatConnectors(createHttpConnector());
    }

    private Connector createHttpConnector() {
        Connector connector = new Connector(TomcatServletWebServerFactory.DEFAULT_PROTOCOL);
        connector.setPort(8080); // 原 HTTP 端口
        connector.setRedirectPort(444); // 重定向到 HTTPS 的端口
        return connector;
    }
}
