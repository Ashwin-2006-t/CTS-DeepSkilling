package net.javaguides;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggingExample {

    private static final Logger logger =
            LoggerFactory.getLogger(LoggingExample.class);

    public static void main(String[] args) {

        logger.trace("TRACE : Entering main method");

        logger.debug("DEBUG : Variables are being initialized");

        logger.info("INFO : Application Started");

        int stock = 5;

        logger.debug("DEBUG : Current stock = {}", stock);

        if (stock < 10) {
            logger.warn("WARN : Stock is running low");
        }

        try {
            int result = 10 / 0;

            logger.info("INFO : Result = {}", result);

        } catch (Exception e) {

            logger.error("ERROR : Exception occurred");

            logger.error("ERROR : {}", e.getMessage());

            logger.error("ERROR : Complete Exception Details", e);
        }

        logger.info("INFO : Application Ended");
    }
}