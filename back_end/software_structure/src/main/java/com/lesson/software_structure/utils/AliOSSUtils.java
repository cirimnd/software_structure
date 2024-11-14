package com.lesson.software_structure.utils;

import com.aliyun.oss.OSS;
import com.aliyun.oss.OSSClientBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.util.UUID;

@Component
public class AliOSSUtils {
//    @Value("${aliyun.oss.endpoint}")
//    private String endpoint;
//    @Value("${aliyun.oss.accessKeyId}")
//    private String accessKeyId;
//    @Value("${aliyun.oss.accessKeySecret}")
//    private String accessKeySecret;
//    @Value("${aliyun.oss.bucketName}")
//    private String bucketName;

    @Autowired
    private AliOSSProperties aliOSSProperties;
/**
 * 实现上传图片到OSS
 */
public String upload(MultipartFile multipartFile) throws
        IOException {
    //获取阿里云OSS参数
    String endpoint = aliOSSProperties.getEndpoint();
    String accessKeyId = aliOSSProperties.getAccessKeyId();
    String accessKeySecret = aliOSSProperties.getAccessKeySecret();
    String bucketName = aliOSSProperties.getBucketName();

    // 获取上传的文件的输入流
    InputStream inputStream = multipartFile.getInputStream();
    // 避免文件覆盖
    String originalFilename =
            multipartFile.getOriginalFilename();
    String fileName = UUID.randomUUID().toString() +
            originalFilename.substring(originalFilename.lastIndexOf("."));
    //上传文件到 OSS
    OSS ossClient = new OSSClientBuilder().build(endpoint,
            accessKeyId, accessKeySecret);
    ossClient.putObject(bucketName, fileName, inputStream);
    //文件访问路径
    String url = endpoint.split("//")[0] + "//" + bucketName +
            "." + endpoint.split("//")[1] + "/" + fileName;


//    //第二种方式生成url
//        // 指定生成的签名URL过期时间，单位为毫秒。本示例以设置过期时间为1小时为例。
//        Date expiration = new Date(new Date().getTime() + 3600 * 1000L);
//        // 生成签名URL。
//        GeneratePresignedUrlRequest request = new GeneratePresignedUrlRequest(bucketName, fileName, HttpMethod.GET);
//        // 设置过期时间。
//        request.setExpiration(expiration);
//
//        // 通过HTTP GET请求生成签名URL。
//        URL signedUrl = ossClient.generatePresignedUrl(request);
//        String url = signedUrl.toString();

    // 关闭ossClient
    ossClient.shutdown();
    return url;// 把上传到oss的路径返回
}
}
