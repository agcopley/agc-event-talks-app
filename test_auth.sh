#!/bin/bash
TOKEN=$(gcloud auth print-identity-token --audiences="369001918367-t5qrahnqdaasaifvk6akpqkpjk9vli58.apps.googleusercontent.com")
curl -s -X POST -H "Authorization: Bearer $TOKEN" -H "Content-Type: text/xml" -d "<?xml version='1.0'?><methodCall><methodName>authenticate</methodName><params><param><value><string>apiuxProduccion1</string></value></param><param><value><string>admin</string></value></param><param><value><string>apiux@uGdY<;bb_r@bmVLK</string></value></param><param><value><struct/></value></param></params></methodCall>" https://yellowoffice.api-ux.com/xmlrpc/2/common
