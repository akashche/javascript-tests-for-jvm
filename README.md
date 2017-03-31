JavaScript test-suite for JVM
=============================

This repo contains a subset of tests from [Dojo Toolkit](https://github.com/dojo) `v1.12.2`. To run tests on a JVM, execute the following command using `jjs` tool from OpenJDK 8:

    jjs -J-XX:MaxRAM=128M nashornLoader.js -- baseUrl=dojo load=doh test=nashornTests

Expected output:

    ------------------------------------------------------------
    The Dojo Unit Test Harness, $Rev: edd21d6 $

    ...

    | TEST SUMMARY:
    ------------------------------------------------------------
             522 tests in 33 groups
             0 errors
             0 failures

